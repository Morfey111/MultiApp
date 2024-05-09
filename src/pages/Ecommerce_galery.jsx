import product1 from '../images/Ecommerce/image-product-1.jpg';
import product2 from '../images/Ecommerce/image-product-2.jpg';
import product3 from '../images/Ecommerce/image-product-3.jpg';
import product4 from '../images/Ecommerce/image-product-4.jpg';
import { PopUpGalery } from './syles/EcommercePopUpGalery';
import { ImgGalery } from './syles/EcommerceGalery';
import { ButtonNextPrev } from './syles/EcommerceButtonImg';

import { useState } from 'react';

function Ecommerce_galery() {
  const images = [
    {
      original: product1,
      id: 0,
    },
    {
      original: product2,
      id: 1,
    },
    {
      original: product3,
      id: 2,
    },
    {
      original: product4,
      id: 3,
    },
  ];
  const [currentIndex, SetCurrentIndex] = useState(0);
  const [data, setData] = useState(images[0]);
  const [openGallery, setOpenGalelly] = useState(false);

  const nextImage = () => {
    const lastIndex = images.length - 1 === currentIndex;
    const newIndex = lastIndex ? 0 : currentIndex + 1;
    SetCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const firstIndex = currentIndex === 0;
    const newIndex = firstIndex ? images.length - 1 : currentIndex - 1;
    SetCurrentIndex(newIndex);
  };

  const showMainImg = (index) => {
    const mainImg = images[index];
    setData(mainImg);
  };

  const popUpGallery = (e) => {
    setOpenGalelly(!openGallery);
    e.preventDefault();
  };

  return (
    <div className="relative lg:w-full lg:ml-20 lg:mr-20 lg:max-w-[400px] ">
      <div className=" -mx-5  ">
        <div className="">
          <img
            className="w-full lg:hidden"
            src={images[currentIndex].original}
            alt="product"
          />
          <PopUpGalery
            className={`${
              openGallery
                ? 'bg-black bg-opacity-70 hidden py-48: py-32 lg:block duration-700 absolute -left-56 right-0  -top-44 w-screen h-auto  '
                : 'bg-opacity-100 -mt-[1900px] duration-700 absolute w-full'
            }`}
          >
            <div className="relative hidden lg:block mx-auto w-4/12">
              <img
                // src={data.original}
                src={images[currentIndex].original}
                alt="image"
                className="hidden lg:block mx-auto w-full rounded-xl max-w-screen-xl"
                onClick={(e) => {
                  popUpGallery();
                  e.preventDefault();
                }}
              />
              <p className="flex justify-between ">
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 p-4 rounded-full left-5 bg-white width900"
                >
                  <svg
                    width="12"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 1 3 9l8 8" stroke="#1D2026" fill="none" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-5 p-4 rounded-full bg-white "
                >
                  <svg
                    width="13"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m2 1 8 8-8 8" stroke="#1D2026" fill="none" />
                  </svg>
                </button>
              </p>
            </div>

            <div className="flex justify-around mx-auto w-4/12 px-5 mt-16 ">
              {images.map((imgMap, i) => {
                return (
                  <div key={imgMap.id} className="bg-white -mt-8 rounded-xl">
                    <img
                      src={imgMap.original}
                      className=" w-24  rounded-xl hover:border-4 hover:border-orangeEcomm hover:cursor-pointer hover:opacity-40"
                      onClick={() => {
                        SetCurrentIndex(i);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </PopUpGalery>

          <ImgGalery className="">
            <img
              src={data.original}
              alt="image"
              className="hidden lg:inline rounded-xl w-full hover:cursor-pointer lg:min-w-[350px] "
              onClick={() => {
                popUpGallery();
              }}
            />
            <div className="hidden lg:flex justify-between w-full -mt-10  ">
              {images.map((imgMap, i) => {
                return (
                  <img
                    key={imgMap.id}
                    src={imgMap.original}
                    className=" w-20 rounded-xl mt-16 hover:opacity-40 hover:border-2 hover:border-orangeEcomm hover:cursor-pointer"
                    onClick={() => {
                      showMainImg(i);
                    }}
                  />
                );
              })}
            </div>
          </ImgGalery>

          <ButtonNextPrev className=" ">
            <button
              onClick={prevImage}
              className="absolute top-1/2 p-4 rounded-full left-0	 bg-white width900"
            >
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="#1D2026" fill="none" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 p-4 rounded-full bg-white "
            >
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m2 1 8 8-8 8" stroke="#1D2026" fill="none" />
              </svg>
            </button>
          </ButtonNextPrev>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce_galery;
