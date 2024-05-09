import Ecommerce_header from './Ecommerce_header';
import Ecommerce_galery from './Ecommerce_galery';
import Ecommerce_content from './Ecommerce_content';
import { useState } from 'react';
import img1 from '../images/Ecommerce/image-product-1.jpg';

// import { Outlet } from 'react-router-dom';

// export const productContext = createContext();
function Ecommerce() {
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const detail = [
    {
      id: 1,
      title: 'Fall Limited Edition Sneakers',
      image: { img1 },
      pricePromotion: 125,
      price: 250,
      company: 'Nike',
      info: 'Fall Limited Edition Sneakers',
    },
  ];

  const addToCart = (product) => {
    // // to read for find method
    const exsist = cartItem.find((x) => {
      return x.id === product.id;
    });
    if (exsist) {
      alert('This product allready added');
    } else {
      // къдравитв скоби ако може да ми обясни !!!!!!!!!!!!!!!!!!!!!!
      setCartItem([...cartItem, { ...product, ...product, quantity }]);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const removeItem = (product) => {
    const exsist = cartItem.find((x) => {
      return x.id === product.id;
    });

    if (exsist.quantity >= 0) {
      setCartItem(
        cartItem.filter((x) => {
          // ако може да се обясни !!!!
          return x.id != product.id;
        })
      );
    }
  };

  return (
    <>
      <Ecommerce_header
        addToCart={addToCart}
        cartItem={cartItem}
        setCartItem={setCartItem}
        dtail={detail}
        removeItem={removeItem}
        quantity={quantity}
      />
      <div className="p-5 kumbh-sans pb-5">
        <div className="lg:flex w-11/12 mx-auto">
          <Ecommerce_galery />
          <Ecommerce_content
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            quantity={quantity}
            // increment={increment}
            // decrement={decrement}
            addToCart={addToCart}
            cartItem={cartItem}
            setCartItem={setCartItem}
            detail={detail}
          />
        </div>
      </div>
      {/* </productContext.Provider> */}
    </>
  );
}

export default Ecommerce;
