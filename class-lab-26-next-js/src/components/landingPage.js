import React from "react";
import FeatureBlogs from "./FeatureBlogs";
import PopularBlogs from "./PopularBlogs";
import Banner from "./Banner";
import PageBox from "./PageBox";
import Logos from "./Logos";
import GetNotification from "./GetNotification";
import Footer from "./Footer";

function landingPage() {
  return (
    <>
      <div>
        <PopularBlogs />
        <Banner />
        <FeatureBlogs />
        <PageBox />
        <Logos />
        <GetNotification />
        <Footer />
      </div>
    </>
  );
}

export default landingPage;

// https://cdn.dribbble.com/userupload/4458125/file/original-f9462e8d63547521519f96c86567c7a7.png?resize=752x&vertical=center
