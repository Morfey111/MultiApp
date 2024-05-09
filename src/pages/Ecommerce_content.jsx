import PropTypes from 'prop-types';

function Ecommerce_content({
  addToCart,
  handleDecrement,
  handleIncrement,
  quantity,
  detail,
}) {
  return (
    <div className="lg:ml-0 mt-8 lg:w-full px-2">
      <div className="">
        <p className="uppercase text-orangeEcomm font-bold tracking-widest text-sm mt-5		">
          Sneaker Company
        </p>
        <div className="font-bold text-3xl my-5 flex mb-7 lg:flex-col ">
          <p className="mr-2">Fall Limited Edition</p>
          <p className="">Sneakers</p>{' '}
        </div>

        <p className="text-base mb-5 lg:min-w-[420px] lg:max-w-[580px]	">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="flex justify-between my-5">
        <div className="w-full">
          {detail.map((curElem) => {
            return (
              <div key={curElem.id}>
                {
                  <div className="flex justify-between mb-5 mt-2 lg:flex-col">
                    <div>
                      <span className="text-3xl text-bold my-6 ">
                        {curElem.pricePromotion}.00{' '}
                      </span>
                      <span className="text-orangeEcomm px-2 my-auto bg-orangeLightEcom text-base ml-5">
                        50%
                      </span>
                    </div>
                    <div className="text-grayEcomm text-bold text-l mt-2 ">
                      {curElem.price}.00
                    </div>
                  </div>
                }
                <div className="lg:flex justify-between lg:min-w-[400px] lg:max-w-[700px]">
                  <div className="flex justify-between bg-grayDisplay py-3  my-auto px-10 rounded-xl w-full lg:w-9/12 mr-4">
                    <button
                      className="text-orangeEcomm text-4xl  text-bold my-auto  "
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <div>
                      <p className="my-auto text-bold text-2xl">{quantity}</p>
                    </div>

                    <button
                      className="text-orangeEcomm text-4xl  text-bold my-auto"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="flex justify-center bg-orangeEcomm py-5 px-10 rounded-xl text-white w-full text-center my-auto"
                    onClick={() => {
                      addToCart(curElem);
                    }}
                  >
                    <svg
                      className="mr-5"
                      width="22"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        fill="white"
                      />
                    </svg>{' '}
                    <b> Add to cart</b>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Ecommerce_content.propTypes = {
  addToCart: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleIncrement: PropTypes.func,
  quantity: PropTypes.number,
  detail: PropTypes.array,
};

export default Ecommerce_content;
