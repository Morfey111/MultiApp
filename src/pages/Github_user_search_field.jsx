import PropTypes from 'prop-types';
function Github_user_search_field({
  handlerSubmit,
  user,
  onChangeUser,
  error,
}) {
  return (
    <div className="bg-white mx-auto  pl-4 pr-2 rounded-xl  dark:bg-gitDarkGray dark:text-white ">
      <div className="flex ">
        <svg
          className="inline mr-3 my-3 z-40 w-16  "
          height="24"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
            fill="#0079ff"
          />
        </svg>

        <input
          className="w-full z-10 text-sm md:text-base  dark:bg-gitDarkGray dark:text-white"
          onChange={onChangeUser}
          type="text"
          placeholder="Search GitHub username…"
          value={user}
        />
        <p className={`${'inline text-red-500 font-bold w-40 my-auto mr-6'} }`}>
          {error}
        </p>

        {/* <span>No result</span> */}
        <button
          type="submit"
          onClick={handlerSubmit}
          className="bg-gitSearchBTN text-white text-sm font-bold  rounded-xl px-4 md:text-base"
        >
          Search
        </button>
      </div>
    </div>
  );
}

Github_user_search_field.propTypes = {
  handlerSubmit: PropTypes.func,
  user: PropTypes.string,
  onChangeUser: PropTypes.func,
  error: PropTypes.string,
};

export default Github_user_search_field;
