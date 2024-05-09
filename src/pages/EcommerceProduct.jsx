import PropTypes from 'prop-types';

import { ImgGalery } from './syles/EcommerceGalery';
function EcommerceProduct({ detail }) {
  return (
    <div>
      {detail.map((curElem) => {
        return (
          <div key={curElem.id}>
            <div>{curElem.title}</div>
            <div>{curElem.pricePromotion}</div>
            <div>{curElem.price}</div>
          </div>
        );
      })}
      {ImgGalery}
    </div>
  );
}
EcommerceProduct.propTypes = {
  detail: PropTypes.array,
};

export default EcommerceProduct;
