import React, { useEffect } from "react";
import axios from "axios";
import {
  UrlShortnerButton,
  UrlShortnerContainer,
  UrlShortnerInput,
  UrlShortnerInputUrl,
  UrlShortnerIUrl,
  UrlShortnerOUrl,
  UrlShortnerOutputContainer,
  UrlShortnerOutputUrl,
  UrlShortnerOutputUrlCopy,
} from "../../styles/UrlShortner/UrlShortner.element";

const UrlShortner = () => {
  const [longUrl, setLongUrl] = React.useState("");
  const onCreate = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `https://api.shrtco.de/v2/shorten?url=${longUrl}`
    );
    console.log(response.data.result);
    // setLongUrl(response.data.shortUrl);
  };
  const getShortUrl = async (e) => {
    const response = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${longUrl}`
    );
    console.log(response);
  };
  useEffect(() => {
    (async () => {
      let temp = await getShortUrl();
      console.log(temp);
    })();
  }, []);
  const onShortUrlClick = (shortUrl) => {
    const url = document.getElementsById("copyShort");
    navigator.clipboard.writeText(url).then(() => {
      console.log("Copied!");
    }),
      (err) => {
        console.log("Something went wrong", err);
      };
  };
  return (
    <>
      <UrlShortnerContainer>
        <UrlShortnerInput
          type="text"
          placeholder="Shorten a link here ..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <UrlShortnerButton onClick={onCreate}>Shorten It!</UrlShortnerButton>
      </UrlShortnerContainer>
      <UrlShortnerOutputContainer>
        <UrlShortnerInputUrl>
          <UrlShortnerIUrl>
            https://styled-components.com/docs/basics#installation
          </UrlShortnerIUrl>
        </UrlShortnerInputUrl>
        <UrlShortnerOutputUrl>
          <UrlShortnerOUrl id="copyShort">
            https://nextjs.org/docs/basic
          </UrlShortnerOUrl>
          <UrlShortnerOutputUrlCopy onClick={() => onShortUrlClick()}>
            Copy
          </UrlShortnerOutputUrlCopy>
        </UrlShortnerOutputUrl>
      </UrlShortnerOutputContainer>
    </>
  );
};

export default UrlShortner;
