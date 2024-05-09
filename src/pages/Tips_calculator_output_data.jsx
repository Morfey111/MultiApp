import { ButtonCalc } from './syles/Calc-button-styled';
import PropTypes from 'prop-types';

function Tips_calculator_output_data({ total, calculateTip, people, reset }) {
  // ако може да  се обясни
  const currentAmount = (amt) => new Intl.NumberFormat().format(amt);

  return (
    <div className="bg-darkGreen p-10 rounded-2xl">
      <div className="mb-7 md:mb-10">
        <div className="flex flex-column justify-between mt-5">
          <p className="text-white text-bold">Tip Amount</p>
          <p className="text-greenBtn text-3xl text-bold ">
            ${currentAmount(`${calculateTip ? calculateTip : '0.00'}`)}
          </p>
        </div>
        <p className="bg-darkGreen text-outputText text-sm text-bold -mt-3">
          / person
        </p>
      </div>
      <div className="mb-10">
        <div className="flex flex-column justify-between">
          <p className="text-white text-bold 	">Total</p>
          <p className="text-greenBtn text-3xl text-bold">
            ${currentAmount(`${total ? total / people : '0'}`)}
          </p>
        </div>
        <p className="bg-darkGreen text-outputText text-sm text-bold -mt-3">
          / person
        </p>
      </div>
      <ButtonCalc
        onClick={reset}
        className="text-darkGreen bg-greenBtn w-full text-bold md:mb-4 md:mt-32  hover:bg-lightGreenCalc"
      >
        RESET
      </ButtonCalc>
    </div>
  );
}

Tips_calculator_output_data.propTypes = {
  total: PropTypes.number,
  calculateTip: PropTypes.number,
  people: PropTypes.string,
  reset: PropTypes.func,
};

export default Tips_calculator_output_data;
