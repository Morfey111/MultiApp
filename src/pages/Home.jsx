// import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="flex flex-col py-2 justify-around items-center w-3/4 m-auto md:flex-row md:py-60">
        <div>
          <Link to="/project/git">
            <button className="main-btn bg-[url('./images/git_1.jpg')] bg-cover hover:opacity-70  hover:border-gray-400"></button>
          </Link>{' '}
          <p>Git hub</p>
        </div>

        <div>
          <Link to="/project/abv">
            <button className="main-btn bg-[url('./images/abv_1.jpg')] bg-cover hover:opacity-70  hover:border-gray-400"></button>
          </Link>{' '}
          <p> Page adv</p>
        </div>

        <div>
          <Link to="/project/ez">
            <button className="main-btn bg-[url('./images/ez_1.jpg')] bg-cover hover:opacity-70  hover:border-gray-400"></button>
          </Link>
          <p> Page ez</p>
        </div>

        <div>
          <Link to="/project/calc">
            <button className="main-btn bg-[url('./images/calc_9.jpg')] bg-cover hover:opacity-70  hover:border-gray-400">
              {' '}
            </button>
          </Link>{' '}
          <p> Tips calculator</p>
        </div>

        <div>
          <Link to="/project/ecomm">
            <button className="main-btn bg-[url('./images/e_coler_1.jpg')] bg-cover hover:opacity-70 hover:border-gray-400">
              {' '}
            </button>
          </Link>{' '}
          <p>Ecommerce</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
