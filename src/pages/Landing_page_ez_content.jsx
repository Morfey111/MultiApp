import imgPhone from '../images/illustration-app.png';
import patern2 from '../images/bg-pattern-2.svg';
import { OrangeBox } from './syles/Styled_content_orange_box';
function Landing_page_ez_content() {
  return (
    <div>
      <div className="max-w-screen-xl rounded-lg bg-black mx-auto xl:w-4/5 xl:mt-60 xl:mx-auto  -ml-5 -mr-5 md:ml-0 md:mr-0 md:pt-24 md:pb-4  md:mt-24 ">
        <div className="flex flex-col relative items-center md:flex-row	 xl:w-3/4 m-auto xl:h-4/6 ">
          <div className="md:absolute w-52 -mt-24 md:w-72  md:ml-28 -top-32 md:mb-4 xl:w-80 xl:h-160 z-20 xl:-mt-44 xl:-ml-7 ">
            <img src={imgPhone} alt="phone" />
          </div>
          <div className="absolute top-0  w-72  md:-top-28 md:left-72 md:-mt-1  xl:w-80  z-0 xl:-ml-20 ">
            <img src={patern2} alt="patern2" />
          </div>

          <OrangeBox>
            <div className="text-2xl pb-8  xl:pb10 xl:text-4xl font-bold ">
              Premium EQ
            </div>
            <div className="text-lg xl:text-xl pb-10">
              Get expert-level control with a robust equalizer, volume mixer,
              and spatial audio. Take your listening experience to a whole new
              level and access all our incredible features!
            </div>
            <div className="pb-12">
              <span className="text-7xl font-bold ">$4 </span>
              <span> /month</span>
            </div>
            <div className="flex flex-col">
              <button className="bg-black color-white rounded-lg  pb-5 pt-5  mb-4 text-lg text-bold hover:bg-teal-300	">
                <svg
                  className="inline mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                >
                  <path
                    d="M12.683 4.681c1.359 0 2.798.745 3.821 2.029-3.356 1.851-2.812 6.674.58 7.965-.467 1.04-.69 1.504-1.292 2.425-.839 1.285-2.02 2.886-3.486 2.897-1.302.014-1.637-.852-3.403-.842-1.766.009-2.134.857-3.437.845C4 19.987 2.88 18.542 2.042 17.257-.302 13.667-.549 9.45.897 7.207c1.029-1.592 2.651-2.523 4.175-2.523 1.551 0 2.527.856 3.812.856 1.247 0 2.005-.859 3.8-.859ZM12.291 0c.178 1.215-.315 2.405-.968 3.246-.697.904-1.901 1.603-3.066 1.566-.213-1.163.332-2.36.995-3.167C9.978.756 11.224.074 12.291 0Z"
                    fill="#FCFAF9"
                  />
                </svg>
                iOS Download
              </button>
              <button className="bg-white text-black rounded-lg pb-5 pt-5 text-lg text-bold mb-3 hover:bg-orange-300		">
                <svg
                  className="inline mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="20"
                >
                  <path
                    d="M13.362 6.638v8.35c0 .502-.334.836-.836.836h-.836v2.924c0 .669-.583 1.252-1.251 1.252-.67 0-1.252-.583-1.252-1.252v-2.924H7.515v2.924c0 .669-.583 1.252-1.252 1.252s-1.252-.583-1.252-1.252v-2.924h-.836c-.501 0-.836-.334-.836-.835v-8.35h10.023Zm2.088 0c.669 0 1.252.586 1.252 1.251v5.848c0 .668-.583 1.252-1.252 1.252s-1.252-.584-1.252-1.252V7.889c0-.665.583-1.25 1.252-1.25Zm-14.198 0c.669 0 1.252.586 1.252 1.251v5.848c0 .668-.583 1.252-1.252 1.252S0 14.405 0 13.737V7.889c0-.665.583-1.25 1.252-1.25ZM11.776.126a.4.4 0 0 1 .583 0 .401.401 0 0 1 0 .583l-1.085 1.084c.35.234.667.52.942.846.66.782 1.081 1.8 1.139 2.902l.002.034c.003.075.005.15.005.227H3.34c0-.076.002-.152.006-.227l.002-.034a4.908 4.908 0 0 1 1.138-2.902 4.52 4.52 0 0 1 .942-.846L4.343.71a.4.4 0 0 1 0-.583.4.4 0 0 1 .583 0l1.12 1.118.053.051c.664-.333 1.41-.499 2.24-.5h.024c.83.001 1.575.167 2.24.5l.052-.051ZM6.262 3.09a.626.626 0 1 0 0 1.252.626.626 0 0 0 0-1.252Zm4.178 0a.626.626 0 1 0 0 1.252.626.626 0 0 0 0-1.252Z"
                    fill="#191826"
                  />
                </svg>
                Android Download
              </button>
            </div>
          </OrangeBox>
        </div>
      </div>
    </div>
  );
}

export default Landing_page_ez_content;
