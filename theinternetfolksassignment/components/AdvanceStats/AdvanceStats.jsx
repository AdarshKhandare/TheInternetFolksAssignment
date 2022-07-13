import React from "react";
import {
  AdvanceStatsContainer,
  AdvanceStatsDescription,
  AdvanceStatsHeading,
  BRConDiv,
  BRCyanDiv,
} from "../../styles/AdvanceStats/AdvanceStats.element";
import BrandRec from "./BrandRec";

const AdvanceStats = () => {
  return (
    <AdvanceStatsContainer>
      <AdvanceStatsHeading>Advance Statistics</AdvanceStatsHeading>
      <AdvanceStatsDescription>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </AdvanceStatsDescription>
      <BRConDiv>
        <BrandRec />
        <BRCyanDiv></BRCyanDiv>
        <BrandRec />
        <BRCyanDiv></BRCyanDiv>
        <BrandRec />
      </BRConDiv>
    </AdvanceStatsContainer>
  );
};

export default AdvanceStats;
