import React, { use, useState } from 'react'
import {GiMagicBroom} from 'react-icons/gi'
const shortIntro = {
  "content": [
    {
      "id": 1,
      "category": "Cloth",
      "text": "At our store, we celebrate the artistry of timeless fashion. Discover our exquisite collection, meticulously crafted with attention to detail, to enhance your elegance and leave a lasting impression."
    },
    {
      "id": 2,
      "category": "Cloth",
      "text": "Discover stylish and wide range of clothes to enhance your living."
    },
    {
      "id": 3,
      "category": "Cloth",
      "text": "Upgrade your wardrobe with the latest fashion trends and clothing essentials."
    },
    {
      "id": 4,
      "category": "Cloth",
      "text": "Embrace the latest trends and unleash your inner style icon with our exclusive collection that captures the essence of sartorial excellence."
    },
    {
      "id": 5,
      "category": "Cloth",
      "text": "Step into the world of Trends, a haven for fashion-forward individuals seeking statement pieces."
    },
    {
      "id": 6,
      "category": "Cloth",
      "text": "Explore our urban-inspired collection that redefines casual fashion, offering a perfect fusion of comfort, style, and attitude."
    },
    {
      "id": 7,
      "category": "Cloth",
      "text": "Experience the magic of flowing silhouettes, vibrant prints, and eclectic designs that capture the bohemian soul within you."
    },
  ]
}
const PrvShortIntro = () => {
  const [quotes, setQuotes] = useState(shortIntro.content[0].text);
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const generateShortNote = () => {
    setIsLoading(true);
    setTimeout(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * shortIntro.content.length);
      } while (shortIntro.content[randomIndex].text === quotes);
      const randomQuote = shortIntro.content[randomIndex].text;
      setQuotes(randomQuote);
      setIsLoading(false);
    }, 1000); // Simulating a delay of 2 seconds for generating the text
  };
  const handleMouseEnter = () => {
    setShowButton(true);
  };
  const handleMouseLeave = () => {
    setShowButton(false);
  };
  return (
    <>
      <section
        className={`bg-white dark:bg-gray-900 relative overflow-hidden mb-5 mt-5 ${
          showButton ? 'h-full' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white shortIntro">
                {quotes}
              </p>
            </blockquote>
          </figure>
          {showButton && (
            <div className="absolute inset-0 flex items-center justify-center m-5 bg-gray-600 rounded-sm bg-opacity-80"
            >
              {isLoading ? (
                <button className="rounded-sm btn"
                >
                  <span className="loading loading-spinner"></span>
                  Loading
                </button>
              ) : (
                <button className="tracking-wider rounded-sm btn" onClick={generateShortNote}
                >
                  <span>
                    <GiMagicBroom className="w-8 h-8" />
                  </span>
                  Regenerate
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default PrvShortIntro;

