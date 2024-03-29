import React from 'react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import { GrLinkBottom } from 'react-icons/gr';
function AboutMe() {
  // const downloadCV = () => {
  //   const link = document.createElement('a');
  //   link.href = '/public/CV_ATS_Almira Mahsa.pdf';
  //   link.download = 'CV Almira March 2023';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <section id="about" className="min-h-screen flex items-center justify-center flex-col py-20">
      <div className="text-center flex-grow">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }} className="flex items-center justify-center flex-col ">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="text-center text-lg md:text-xl text-black dark:text-gray-200 ">
            <SectionTitle>About Me</SectionTitle>

            <p className="text-left w-full justify-self-stretch md:w-3/4 my-5">
              Almira is a&nbsp;
              <a href="/" className="text-violet-500 font-medium dark:text-violet-400" target="_blank" rel="noopener noreferrer">
                Frontend Engineer&nbsp;
              </a>
              with a master's degree in geomatics engineering, which gives her a unique combination of technical skills in Frontend development and expertise in spatial data and GIS technology. She is passionate about programming and enjoys
              using her knowledge to develop innovative solutions that solve complex problems.
            </p>
            <ul className="flex">
              <li className="mr-6">
                <a href="https://twitter.com/almiramhs" rel="me" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="-1 -1 28 28" className="text-blue-500 hover:text-violet-500">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M8.177 22.292c9.812 0 15.177-8.335 15.177-15.563 0-.237-.005-.472-.015-.707A11.004 11.004 0 0 0 26 3.19c-.956.435-1.984.729-3.063.86a5.467 5.467 0 0 0 2.345-3.025 10.539 10.539 0 0 1-3.387 1.328A5.268 5.268 0 0 0 18.001.625c-2.946 0-5.334 2.45-5.334 5.47 0 .428.046.846.138 1.246C8.37 7.112 4.44 4.936 1.809 1.626a5.562 5.562 0 0 0-.722 2.75c0 1.897.942 3.573 2.374 4.553a5.196 5.196 0 0 1-2.416-.685v.07c0 2.65 1.838 4.861 4.279 5.362a5.217 5.217 0 0 1-2.41.094c.68 2.173 2.649 3.755 4.984 3.8A10.534 10.534 0 0 1 0 19.834a14.83 14.83 0 0 0 8.177 2.457"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="mr-6">
                <a href="https://www.linkedin.com/in/almira-mahsa/" rel="me" target="_blank">
                  <svg width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-900 hover:text-blue-500">
                    <path
                      d="M8 0C3.58167 0 0 3.58167 0 8C0 12.4183 3.58167 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58167 12.4183 0 8 0ZM6.04167 11.3158H4.42167V6.1025H6.04167V11.3158ZM5.22167 5.4625C4.71 5.4625 4.37917 5.1 4.37917 4.65167C4.37917 4.19417 4.72 3.8425 5.2425 3.8425C5.765 3.8425 6.085 4.19417 6.095 4.65167C6.095 5.1 5.765 5.4625 5.22167 5.4625ZM11.9583 11.3158H10.3383V8.42667C10.3383 7.75417 10.1033 7.2975 9.5175 7.2975C9.07 7.2975 8.80417 7.60667 8.68667 7.90417C8.64333 8.01 8.6325 8.16 8.6325 8.30917V11.315H7.01167V7.765C7.01167 7.11417 6.99083 6.57 6.96917 6.10167H8.37667L8.45083 6.82583H8.48333C8.69667 6.48583 9.21917 5.98417 10.0933 5.98417C11.1592 5.98417 11.9583 6.69833 11.9583 8.23333V11.3158Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li className=" mr-6">
                <a href="mailto:almiramahsa9@gmail.com" rel="me" target="_blank">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 12C21 10.1195 20.411 8.28625 19.3156 6.7577C18.2203 5.22915 16.6736 4.08209 14.893 3.47763C13.1123 2.87316 11.187 2.84166 9.38744 3.38754C7.58792 3.93341 6.00459 5.02925 4.85982 6.52115C3.71505 8.01304 3.06635 9.82604 3.00482 11.7055C2.94329 13.585 3.47203 15.4366 4.51677 17.0001C5.56152 18.5637 7.06979 19.7608 8.82975 20.4232C10.5897 21.0856 12.513 21.18 14.3294 20.6933"
                      stroke="#0ACF83"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="12" r="4" stroke="#0ACF83" stroke-width="2" />
                    <path d="M16 9V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12" stroke="#0ACF83" stroke-width="2" strokeLinecap="round" />
                  </svg>
                </a>
              </li>
              <li className="mr-6">
                <a href="https://www.instagram.com/almiramahsaa/" rel="me" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                    <path
                      fill="#C668CF"
                      d="M13.001 0c-3.53 0-3.973.015-5.36.079C6.257.142 5.312.36 4.486.683a6.366 6.366 0 0 0-2.303 1.499 6.382 6.382 0 0 0-1.5 2.302C.36 5.311.14 6.256.077 7.64.016 9.026 0 9.47 0 13c0 3.53.016 3.972.079 5.359.063 1.384.282 2.329.604 3.155a6.37 6.37 0 0 0 1.499 2.303 6.366 6.366 0 0 0 2.302 1.5c.827.322 1.772.541 3.156.604C9.026 25.985 9.47 26 13 26c3.53 0 3.972-.015 5.359-.079 1.384-.063 2.33-.282 3.157-.604a6.36 6.36 0 0 0 2.301-1.5 6.382 6.382 0 0 0 1.5-2.303c.32-.826.54-1.771.604-3.155.063-1.386.079-1.828.079-5.359 0-3.53-.016-3.974-.079-5.36-.065-1.384-.284-2.329-.604-3.156a6.38 6.38 0 0 0-1.5-2.302 6.354 6.354 0 0 0-2.302-1.5c-.829-.321-1.774-.54-3.158-.603C16.97.015 16.529 0 12.997 0h.004Zm-1.186 2.17H13c3.529 0 3.947.013 5.34.076 1.289.059 1.988.274 2.454.455.616.24 1.056.526 1.518.989.463.462.75.903.99 1.52.18.465.396 1.164.454 2.453.064 1.393.077 1.812.077 5.339s-.013 3.945-.077 5.339c-.059 1.288-.274 1.988-.455 2.453a4.086 4.086 0 0 1-.989 1.518 4.087 4.087 0 0 1-1.518.989c-.466.181-1.165.396-2.454.455-1.393.063-1.811.077-5.34.077s-3.947-.014-5.34-.077c-1.288-.06-1.988-.275-2.454-.456a4.093 4.093 0 0 1-1.52-.988 4.096 4.096 0 0 1-.988-1.52c-.181-.465-.397-1.164-.455-2.453-.064-1.393-.076-1.811-.076-5.34 0-3.53.012-3.946.076-5.34.059-1.288.274-1.988.455-2.453.24-.617.526-1.058.989-1.52a4.101 4.101 0 0 1 1.52-.99c.465-.181 1.165-.396 2.453-.455 1.22-.055 1.692-.072 4.155-.074v.003Zm7.956 2.164a1.354 1.354 0 1 0 0 2.709 1.354 1.354 0 0 0 0-2.71ZM13 6.5a6.5 6.5 0 1 0 0 13.002 6.5 6.5 0 0 0 0-13.002ZM13 8.667a4.333 4.333 0 1 1 0 8.666 4.333 4.333 0 0 1 0-8.666Z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="mr-6 ">
                <a href="https://github.com/Almiramahsa" rel="me" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M13 0C5.817 0 0 5.817 0 13c0 5.753 3.721 10.611 8.889 12.334.65.114.894-.276.894-.618 0-.309-.017-1.332-.017-2.421-3.266.601-4.111-.796-4.371-1.528-.146-.373-.78-1.527-1.332-1.836-.455-.244-1.105-.845-.017-.861 1.024-.016 1.755.942 1.999 1.332 1.17 1.967 3.039 1.414 3.786 1.073.114-.845.455-1.414.829-1.739-2.893-.325-5.915-1.446-5.915-6.418 0-1.414.504-2.584 1.332-3.494-.13-.325-.585-1.658.13-3.445 0 0 1.09-.341 3.576 1.332a12.063 12.063 0 0 1 3.25-.439c1.104 0 2.21.147 3.25.44 2.486-1.69 3.575-1.333 3.575-1.333.715 1.787.26 3.12.13 3.445.828.91 1.332 2.063 1.332 3.494 0 4.988-3.039 6.093-5.931 6.418.471.406.877 1.186.877 2.405 0 1.739-.016 3.137-.016 3.575 0 .341.244.748.894.618C22.279 23.61 26 18.736 26 13c0-7.183-5.817-13-13-13Z"
                    ></path>
                  </svg>
                </a>
              </li>
              {/* <li className="mr-6 ">
                <button className=" text-black hover:bg-gray-50 border p-2 font-normal py-2 text-sm rounded" onClick={downloadCV}>
                  <span>CV</span>
                  <GrLinkBottom className="ml-2 inline-block" />
                </button>
              </li> */}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
