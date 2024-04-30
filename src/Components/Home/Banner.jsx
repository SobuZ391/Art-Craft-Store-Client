import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import SwiperSlides from './SwiperSlides';


const Banner = () => {
  return (
      <div className='mt-14' >
          <section className=" hidden lg:block">


              <div className="carousel w-full border shadow-xl rounded-2xl mt-4">
                  <div id="slide1" className="carousel-item relative w-full">
                      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                              <h1 className="text-5xl font-bold leading-none sm:text-6xl">Unleash Your
                                  <span className="dark:text-violet-600"> Creative </span> <br />Side
                              </h1>
                              <p className="mt-6 mb-8 text-lg sm:mb-12">Embark on a journey of artistic exploration and bring your imagination to life 
                                  <br className="hidden md:inline lg:hidden" />with our exclusive collection of arts.
                              </p>
                              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                  <a rel="noopener noreferrer" href="#slide3" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Previous</a>
                                  <a rel="noopener noreferrer" href="#slide2" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Next</a>
                              </div>
                          </div>
                          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                          <SwiperSlides ></SwiperSlides>
                          </div>
                      </div>

                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                              <h1 className="text-5xl font-bold leading-none sm:text-6xl">Craft Your
                                  <span className="dark:text-violet-600"> Dreams </span>into Reality
                              </h1>
                              <p className="mt-6 mb-8 text-lg sm:mb-12">Explore a world of textile arts and craft your
                                  <br className="hidden md:inline lg:hidden" />imagination into reality.
                              </p>
                              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                  <a rel="noopener noreferrer" href="#slide1" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Previous</a>
                                  <a rel="noopener noreferrer" href="#slide3" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Next</a>
                              </div>
                          </div>
                          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                          <SwiperSlides></SwiperSlides>
                          </div>
                      </div>

                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                              <h1 className="text-5xl font-bold leading-none sm:text-6xl">Experience the
                                  <span className="dark:text-violet-600"> Artistry </span>of Textiles
                              </h1>
                              <p className="mt-6 mb-8 text-lg sm:mb-12">Explore the intricate beauty of textile arts and delve into a realm where every 
                                  <br className="hidden md:inline lg:hidden" />stitch tells a story.....
                              </p>
                              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                  <a rel="noopener noreferrer" href="#slide2" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Previous</a>
                                  <a rel="noopener noreferrer" href="#slide1" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Next</a>
                              </div>
                          </div>
                          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <SwiperSlides></SwiperSlides>
                          </div>
                      </div>

                  </div>


              </div>


          </section>
          <div className='block lg:hidden mx-auto' ><SwiperSlides ></SwiperSlides></div>
      </div>
  );
};

export default Banner;


