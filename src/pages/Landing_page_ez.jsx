// import React from 'react'
import Landing_page_ez_header from './Landing_page_ez_header';
import Landing_page_ez_content from './Landing_page_ez_content';
import Landing_page_ez_footer from './Landing_page_ez_footer';
import '@fontsource/ibm-plex-sans/700.css'; // Specify weight

function Landing_page_ez() {
  return (
    <div className=" plex-sans xl:bg-[url('./images/bg-main-desktop.png')]  md:bg-[url('./images/bg-main-tablet.png')]  bg-[url('./images/bg-main-mobile.png')] bg-cover p-9">
      <h3 className="text-center	">Landing_page_ez</h3>
      <Landing_page_ez_header />
      <Landing_page_ez_content />
      <Landing_page_ez_footer />
    </div>
  );
}

export default Landing_page_ez;
