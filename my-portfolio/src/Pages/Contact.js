import React from "react";

function Contact() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-cyan-500 to-blue-500 flex flex-col items-center py-10">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white">Get in Touch</h1>
        <p className="text-lg text-white mt-4">
          I’d love to hear from you! Reach out via email, social media, or send me a message.
        </p>
      </div>

      {/* Grid Layout for Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full px-6">
        {/* Contact Card */}
        <div className="bg-white text-black p-8 rounded-lg shadow-lg animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
          <p className="text-lg mb-4 text-center">
            Feel free to reach out to me via email or connect with me on LinkedIn!
          </p>
          {/* Email */}
          <div className="mb-4">
            <h2 className="font-semibold text-xl">Email</h2>
            <a
              href="mailto:frederik@dahlhansen.com"
              className="text-blue-600 hover:underline"
            >
              frederik@dahlhansen.com
            </a>
          </div>
          {/* Socials */}
          <div>
            <h2 className="font-semibold text-xl">Socials</h2>
            <a
              href="https://www.linkedin.com/in/frederik-dahl-hansen"
            >
              <button
                type="button"
                className="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mt-2 transform hover:scale-105 w-1/3"
              >
                <span class="[&>svg]:h-4 [&>svg]:w-4 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 1 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
                
              </button>
            </a>
            <a
              href="https://www.github.com/dahlhansen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="mb-2 inline-block rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ml-2 transform hover:scale-105 w-1/3"
              >
                <span class="[&>svg]:h-4 [&>svg]:w-4 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </span>
                
              </button>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white text-black p-8 rounded-lg shadow-lg space-y-4 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-4">Send a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg border"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-lg border"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-br from-pink-700 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-6 py-4 text-center me-2 mb-2 mt-6 w-full hover:from-pink-700 hover:to-orange-600 transition-transform duration-200 transform hover:scale-105 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
