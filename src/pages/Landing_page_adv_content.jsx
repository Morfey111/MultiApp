// import React from 'react'
import imgInteractive from '../images/page_abv/mobile/image-interactive.jpg';
import eart from '../images/page_abv/mobile/image-deep-earth.jpg';
import curiosity from '../images/page_abv/mobile/image-curiosity.jpg';
import fisheye from '../images/page_abv/mobile/image-fisheye.jpg';
import above from '../images/page_abv/mobile/image-from-above.jpg';
import imgGrid from '../images/page_abv/mobile/image-grid.jpg';
import nightArcade from '../images/page_abv/mobile/image-night-arcade.jpg';
import soccer from '../images/page_abv/mobile/image-soccer-team.jpg';
import pocket from '../images/page_abv/mobile/image-pocket-borealis.jpg';
import deskEart from '../images/page_abv/desktop/image-deep-earth.jpg';
import deskCuriosity from '../images/page_abv/desktop/image-curiosity.jpg';
import deskFish from '../images/page_abv/desktop/image-fisheye.jpg';
import deskAbove from '../images/page_abv/desktop/image-from-above.jpg';
import deskGrid from '../images/page_abv/desktop/image-grid.jpg';
import deskInteractive from '../images/page_abv/desktop/image-interactive.jpg';
import deskNight from '../images/page_abv/desktop/image-night-arcade.jpg';
import deskPocket from '../images/page_abv/desktop/image-pocket-borealis.jpg';
import deskSoccer from '../images/page_abv/desktop/image-soccer-team.jpg';
import { ContentText } from './syles/Styled_page_abv_container_content';
import { Image } from './syles/Styled_page_abv_img';

function Landing_page_adv_content() {
  return (
    <div className="bg-white mb-24">
      <ContentText>
        <div className="mt-20 xl:col-start-1 xl:col-end-5 xl:row-start-1 xl:row-end-3">
          <img
            src={imgInteractive}
            alt="interactive-man"
            className="w-full xl:hidden"
          />
          <img
            src={deskInteractive}
            alt="interactive-man"
            className="w-full hidden  xl:inline"
          />
        </div>
        <div className="flex flex-row justify-center  bg-white xl:pl-16 xl:col-start-4 xl:col-end-7 xl:row-start-2 xl:row-end-3 xl:h-64 xl:self-end">
          <div>
            <p className="w-72 uppercase text-3xl font-light text-center mx-auto mt-12 xl:text-left xl:text-5xl xl:w-full ">
              The leader in interactive VR
            </p>
            <p className="text-center max-w-2xl pt-5 pr-5 text-base xl:text-left ">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </ContentText>

      <div>
        <div className="lg:flex lg:justify-between mx-auto px-5 xl:w-10/12 ">
          <p className="text-3xl py-5 lg:text-4xl text-center lg:text-left my-7">
            OUR CREATIONS
          </p>
          <p className="hidden lg:inline border text-sm text-center w-36 	border-black py-2 my-auto cursor-pointer ">
            <b> SEE ALL</b>
          </p>
        </div>

        <div className="grid gap-y-5 px-5 text-white lg:hidden">
          <Image>
            {' '}
            <img src={eart} alt="eari-img" className="w-full" />
            <p className=" absolute bottom-7 left-5 text-3xl font-thin w-36">
              DEEP EARTH
            </p>
          </Image>
          <Image>
            {' '}
            <img src={nightArcade} alt="arcade-img" className="w-full" />
            <p className=" absolute bottom-7 left-5 text-3xl font-thin w-44">
              {' '}
              NIGHT ARCADE
            </p>
          </Image>
          <Image>
            {' '}
            <img src={soccer} alt="soccer" className="w-full" />
            <p className=" absolute bottom-7 left-5 w-44  text-3xl font-thin">
              SOCCER TEAM VR
            </p>
          </Image>
          <Image>
            {' '}
            <img src={imgGrid} alt="grid-img" className="w-full" />
            <p className="  w-28 absolute bottom-7 left-5 text-3xl font-thin">
              THE GRID
            </p>
          </Image>
          <Image>
            {' '}
            <img src={above} alt="above-img" className="w-full" />
            <p className=" absolute bottom-7 left-5 w-44  text-3xl font-thin">
              FROM UP ABOVE VR
            </p>
          </Image>
          <Image>
            {' '}
            <img src={pocket} alt="pocket" className="w-full" />
            <p className="absolute bottom-7 left-5  w-44  text-3xl font-thin">
              POCKET BOREALIS
            </p>
          </Image>
          <Image>
            {' '}
            <img src={curiosity} alt="curiosity-img" className="w-full" />
            <p className="absolute bottom-7 left-5  w-44 text-3xl font-thin">
              THE CURIOSITY
            </p>
          </Image>
          <Image>
            {' '}
            <img src={fisheye} alt="fisheye" className="w-full" />
            <p className="  w-44 absolute bottom-7 left-5 text-3xl font-thin	">
              MAKE IT FISHEYE
            </p>
          </Image>
        </div>

        <div className="lg:grid gap-5 px-5  text-white hidden grid-cols-4 grid-rows-2 xl:w-10/12 xl:mx-auto">
          <Image>
            {' '}
            <img src={deskEart} alt="eari-img" className="w-full" />
            <p className=" absolute bottom-7 left-5 text-3xl font-thin w-36">
              DEEP EARTH
            </p>
          </Image>
          <Image>
            {' '}
            <img src={deskNight} alt="arcade-img" className="w-full" />
            <p className=" absolute bottom-7 left-5 text-3xl font-thin w-44">
              {' '}
              NIGHT ARCADE
            </p>
          </Image>
          <Image>
            {' '}
            <img src={deskSoccer} alt="soccer" className="w-full" />
            <p className=" absolute bottom-7 left-5 w-44  text-3xl font-thin">
              SOCCER TEAM VR
            </p>
          </Image>
          <Image>
            {' '}
            <img src={deskGrid} alt="grid-img" className="w-full" />
            <p className="  w-28 absolute bottom-7 left-5 text-3xl font-thin">
              THE GRID
            </p>
          </Image>
          <Image>
            {' '}
            <img src={deskAbove} alt="above-img" className="w-full" />
            <p className=" absolute bottom-7 left-5 w-44  text-3xl font-thin">
              FROM UP ABOVE VR
            </p>
          </Image>
          <Image>
            {' '}
            <img src={deskPocket} alt="pocket" className="w-full" />
            <p className="absolute bottom-7 left-5  w-44  text-3xl font-thin">
              POCKET BOREALIS
            </p>
          </Image>
          <Image>
            {' '}
            <img src={deskCuriosity} alt="curiosity-img" className="w-full" />
            <p className="absolute bottom-7 left-5  w-44 text-3xl font-thin">
              THE CURIOSITY
            </p>
          </Image>
          <Image>
            {' '}
            <img src={deskFish} alt="fisheye" className="w-full" />
            <p className="  w-44 absolute bottom-7 left-5 text-3xl font-thin	">
              MAKE IT FISHEYE
            </p>
          </Image>
        </div>

        <div className="lg:hidden">
          <p className="border text-sm text-center w-36 mx-auto	border-black py-2 my-10">
            <b> SEE ALL</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing_page_adv_content;
