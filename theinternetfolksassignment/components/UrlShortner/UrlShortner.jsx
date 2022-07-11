import React from "react";
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
  return (
    <>
      <UrlShortnerContainer>
        <UrlShortnerInput type="text" placeholder="Shorten a link here ..." />
        <UrlShortnerButton>Shorten It!</UrlShortnerButton>
      </UrlShortnerContainer>
      <UrlShortnerOutputContainer>
        <UrlShortnerInputUrl>
          <UrlShortnerIUrl>
            https://styled-components.com/docs/basics#installation
          </UrlShortnerIUrl>
        </UrlShortnerInputUrl>
        <UrlShortnerOutputUrl>
          <UrlShortnerOUrl>https://nextjs.org/docs/basic</UrlShortnerOUrl>
          <UrlShortnerOutputUrlCopy>Copy</UrlShortnerOutputUrlCopy>
        </UrlShortnerOutputUrl>
      </UrlShortnerOutputContainer>
    </>
  );
};

export default UrlShortner;
