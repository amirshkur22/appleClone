import React from "react";
import AppleYoutubeVideos from "../Youtube/AppleYoutubeVideos.jsx";
import SectionFive from "../SectionFive/SectionFive.jsx";
import TheFirstThreeSectionCaller from "../TheFirstThreeSectionCaller/TheFirstThreeSectionCaller.jsx";
import SectionFourCaller from "../SectionFourCaller/SectionFourCaller.jsx";
import SectionSixCaller from "../SectionSixCaller/SectionSixCaller.jsx";
const Main = () => {
  return (
    <>
      <TheFirstThreeSectionCaller />
      <SectionFourCaller />
      <SectionFive />
      <SectionSixCaller />
      {/* <AppleYoutubeVideos /> */}
    </>
  );
};

export default Main;
