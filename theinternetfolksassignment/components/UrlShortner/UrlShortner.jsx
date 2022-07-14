import React, { useEffect, useState } from "react";
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
  const [longUrl, setLongUrl] = useState("");
  const [shortenLink, setShortenLink] = useState("");
  const [links, setLinks] = useState(false);
  const onCreate = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `https://api.shrtco.de/v2/shorten?url=${longUrl}`
    );
    console.log(response.data.result.full_short_link);
    setShortenLink(response.data.result.full_short_link);
  };
  useEffect(() => {
    setShortenLink(shortenLink);
  }, [longUrl]);
  // const onShortUrlClick = (shortUrl) => {
  //   const url = document.getElementsById("copyShort");
  //   navigator.clipboard.writeText(url).then(() => {
  //     console.log("Copied!");
  //   }),
  //     (err) => {
  //       console.log("Something went wrong", err);
  //     };
  // };
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
      {longUrl && (
        <UrlShortnerOutputContainer>
          <UrlShortnerInputUrl>
            <UrlShortnerIUrl>{longUrl}</UrlShortnerIUrl>
          </UrlShortnerInputUrl>
          <UrlShortnerOutputUrl>
            <UrlShortnerOUrl id="copyShort">{shortenLink}</UrlShortnerOUrl>
            <UrlShortnerOutputUrlCopy links={links}
              onClick={() =>
                navigator.clipboard.writeText(shortenLink) && setLinks(!links) 
              }
            >
              {links ? "Copied!" : "Copy"}
            </UrlShortnerOutputUrlCopy>
          </UrlShortnerOutputUrl>
        </UrlShortnerOutputContainer>
      )}
    </>
  );
};

export default UrlShortner;
