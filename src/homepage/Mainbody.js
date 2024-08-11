import React from "react";
import University from "../homepage/University";
import '../App.css';

export default function Mainbody() {
  const images = [
    "cbu.jpeg",
    "cbu2.jpg",
    "uni.jpeg",
    "uni2.jpeg",
    "unza.jpg",
    "unza2.jpg"
  ];

  const quotes = [
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "Education is not the learning of facts, but the training of the mind to think. - Albert Einstein",
    "One child, one teacher, one book, one pen can change the world. - Malala Yousafzai",
    "The more that you read, the more things you will know. The more that you learn, the more places you’ll go. - Dr. Seuss",
    "The roots of education are bitter, but the fruit is sweet. - Aristotle",
    "Education is the key to unlock the golden door of freedom. - George Washington Carver",
    "Education breeds confidence. Confidence breeds hope. Hope breeds peace. - Confucius",
    "An investment in knowledge pays the best interest. - Benjamin Franklin",
    "Education is not preparation for life; education is life itself. - John Dewey",
    "Children must be taught how to think, not what to think. - Margaret Mead"
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = React.useState(0);

  React.useEffect(() => {
    function switchImage() {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }

    const imageInterval = setInterval(switchImage, 5000);
    return () => clearInterval(imageInterval);
  }, [images.length]);

  React.useEffect(() => {
    function switchQuote() {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
    }

    const quoteInterval = setInterval(switchQuote, 5000);
    return () => clearInterval(quoteInterval);
  }, [quotes.length]);

  return (
    <div>
        <div className="animation">
          <img src={images[currentImageIndex]} alt="Switching images" className="switcher" />
          <div className="notes">
            <h1>Education is the best investment!</h1>
            <h3>Here is why you ought to enroll at the best university:</h3>
            <div className="arrow-div">
              <img src="arrow.png" className="arrow" alt="arrow" />
              <p className="myquote">"{quotes[currentQuoteIndex]}"</p>
            </div>
          </div>
          
        </div>
        <University />
    </div>
    
  );
}
