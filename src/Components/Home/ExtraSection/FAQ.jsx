import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter'


const FAQ = () => {

  // Initialize AOS in the useEffect hook when the component mounts
  useEffect(() => {
    AOS.init({
        offset: 200, // Animation start offset (in pixels)
        duration: 800, // Duration of the animation (in milliseconds)
        easing: 'ease-in-sine', // Easing function for the animation
        delay: 100, // Delay before starting the animation (in milliseconds)
    });
   }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <div>
        <section className="rounded-xl dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
           
			<h1  className=" p-12 text-4xl font-bold leading-none text-center sm:text-5xl" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Here Cou Can Know {' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Art', ' Craft', 'FAQs', ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
      </h1> <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
              <div>
                <h3 className="font-semibold">Browse and Choose</h3>
                <p className="mt-1 dark:text-gray-600">Explore our wide range of art supplies and craft kits on our website. Use the search and filter options to find exactly what you're looking for.</p>
              </div>
              <div>
                <h3 className="font-semibold">Place Your Order:</h3>
                <p className="mt-1 dark:text-gray-600">Once you've made your selection, add the items to your cart and proceed to checkout. Review your order details and choose your preferred shipping method.</p>
              </div>
              <div>
                <h3 className="font-semibold">Secure Payment: </h3>
                <p className="mt-1 dark:text-gray-600">Complete your purchase using our secure payment options, including [list of payment methods, e.g., credit card, PayPal, etc.].</p>
              </div>
              <div>
                <h3 className="font-semibold">Order Confirmation: </h3>
                <p className="mt-1 dark:text-gray-600">You will receive an order confirmation email with the details of your purchase and estimated delivery time.</p>
              </div>
              <div>
                <h3 className="font-semibold">Order Tracking: </h3>
                <p className="mt-1 dark:text-gray-600">Stay updated on your order's status with our tracking information provided in your confirmation email.</p>
              </div>
              <div>
                <h3 className="font-semibold">Q: Can I return or exchange my purchase?</h3>
                <p className="mt-1 dark:text-gray-600">A: Yes, we offer a [number]-day return and exchange policy. Please refer to our Return Policy page for more details.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-6 border-y-2 my-6 rounded-lg ">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span> Tokio address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1">Full name</span>
              <input type="text" placeholder="Your Name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
            </label>
            <label className="block">
			<span className="mb-1">Email address</span>
              <input type="email" placeholder="yourname@example.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea rows="3" placeholder="Your message here..." className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
            </label>
            <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
