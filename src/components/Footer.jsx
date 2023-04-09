import React from 'react';

function Footer() {
  return (
    <section className="footer">
      <div className=" border-b border-gray-200 py-12 mt-16 px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <span className="text-sm">Made with in 🖤 Palu, Indonesia.</span>
            <div className="text-sm text-gray-900 dark:text-white font-normal ">
              © <span>2023</span>
              <a href="https://github.com/Almiramahsa" className="text-gray-900 font-normal dark:text-white hover:text-violet-500" target="_blank">
                {' '}
                Almira Mahsa
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
