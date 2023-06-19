import React, { useState } from 'react';
import { GiMagicBroom } from 'react-icons/gi';

const newsLetter = [
  {
    "title": "Sign up for our newsletter",
    "description": "Stay up to date with the latest news and updates. Subscribe now!",
    "placeholder": "Enter your email address",
    "buttonText": "email"
  },
  {
    "title": "Subscribe to our mailing list",
    "description": "Get exclusive offers, promotions, and product updates delivered to your inbox.",
    "placeholder": "Enter your email",
    "buttonText": "Subscribe"
  },
  {
    "title": "Stay connected with us",
    "description": "Receive regular updates about our events, new releases, and industry insights.",
    "placeholder": "Your email goes here",
    "buttonText": "SignUp"
  },
  {
    "title": "Get our latest updates",
    "description": "Don't miss out on important news and announcements. Sign up for our newsletter!",
    "placeholder": "Enter your email address",
    "buttonText": "email"
  },
  {
    "title": "Join our newsletter",
    "description": "Be the first to know about our new arrivals, sales, and special promotions.",
    "placeholder": "Your email",
    "buttonText": "Subscribe"
  },
  {
    "title": "Subscribe for exclusive offers",
    "description": "Subscribe now to receive exclusive offers, discounts, and product updates.",
    "placeholder": "Enter your email",
    "buttonText": "Subscribe"
  },
  {
    "title": "Stay informed with our newsletter",
    "description": "Stay informed about our latest projects, updates, and upcoming events.",
    "placeholder": "Enter your email address",
    "buttonText": "Informed"
  },
  {
    "title": "Get our newsletter",
    "description": "Get our newsletter to stay up to date with our latest news, articles, and promotions.",
    "placeholder": "Enter your email",
    "buttonText": "email"
  },
  {
    "title": "Subscribe to our updates",
    "description": "Subscribe to receive updates on our services, events, and industry trends.",
    "placeholder": "Enter your email address",
    "buttonText": "email"
  },
  {
    "title": "Join our mailing list",
    "description": "Join our mailing list to receive updates, offers, and news directly to your inbox.",
    "placeholder": "Enter your email",
    "buttonText": "Join"
  }
]





const PrevNewsLetter = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [randomContent, setRandomContent] = useState(newsLetter[0]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const generateContent = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * newsLetter.length);
      const randomContent = newsLetter[randomIndex];
      setRandomContent(randomContent);
      setIsGenerating(false);
    }, 1000); // Simulating a delay before generating the content
  };

  return (
    <section
      className="bg-white dark:bg-gray-900 relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80">
          {isGenerating ? (
            <button className="btn rounded-sm">
              <span className="loading loading-spinner"></span>
              Loading...
            </button>
          ) : (
            <button className="btn rounded-sm tracking-wider" onClick={generateContent}>
              <span>
                <GiMagicBroom className="w-8 h-8" />
              </span>
              Regenerate
            </button>
          )}
        </div>
      )}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            {randomContent.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            {randomContent.description}
          </p>
          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={randomContent.placeholder}
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button type="submit" className="py-3 px-5 w-full ml-2 text-sm font-medium text-center text-black rounded-lg border cursor-pointer btn">
                  {isGenerating ? 'Loading...' : randomContent.buttonText}
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
              We care about the protection of your data.{' '}
              <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PrevNewsLetter;




