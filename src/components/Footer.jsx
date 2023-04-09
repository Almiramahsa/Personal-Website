import React from 'react';

function Footer() {
  return (
    <section className="footer">
      <div className=" border-b border-gray-200 py-12 mt-16 px-4">
        <div className="flex justify-center mb-8">
          <img src="/public/amlogo.svg" alt="Almira's logo " />
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-800 font-semibold my-5">
              © <span>2023</span>
              <a href="caribencana.id" className="text-gray-900 hover:text-orange-500" target="_blank">
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
