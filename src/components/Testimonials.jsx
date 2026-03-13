import React, { useState, useEffect, useRef } from 'react';
import { motion, } from "framer-motion"

// Images import korte hobe (apnar file path onujayi)
import reviewer1 from '../assets/reviewer1.png';
import reviewer2 from '../assets/reviewer2.png';
import reviewer3 from '../assets/reviewer3.png';
import testimonialBG1 from '../assets/testimonial1.png';
import testimonialBG2 from '../assets/testimonial2.png';
import testimonialBG3 from '../assets/testimonial3.png';

const Testimonials = () => {
  // State variables
  const [currentIndex, setCurrentIndex] = useState(0);
  const [theta, setTheta] = useState(0);
  const [radius, setRadius] = useState(400);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});
  
  // Refs
  const carouselRef = useRef(null);
  const cardsRef = useRef([]);
  
  // Constants
  const totalCards = 6;
  
  // Memory cards data - FIXED: added icon property and fixed structure
  const memoryCards = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Panto made my room feel more alive and minimalist. Highly recommend!',
      image: reviewer1,
      coverImg: testimonialBG1,
      rating: 4,
      icon: 'fa-user', // Added icon
      date: 'CUSTOMER: Verified', // Added date
      location: 'New York',
      time: '2024-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Great designs and superb service! I love my new living space.',
      image: reviewer2,
      coverImg: testimonialBG2,
      rating: 5,
      icon: 'fa-user',
      date: 'CUSTOMER: Verified',
      location: 'Los Angeles',
      time: '2024-01-20'
    },
    {
      id: 3,
      name: 'Michael Brown',
      review: 'Very easy to work with. Turned my home into a cozy, modern sanctuary!',
      image: reviewer3,
      coverImg: testimonialBG3,
      rating: 4,
      icon: 'fa-user',
      date: 'CUSTOMER: Verified',
      location: 'Chicago',
      time: '2024-01-25'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      review: 'Very easy to work with. Turned my home into a cozy, modern sanctuary!',
      image: reviewer1,
      coverImg: testimonialBG1,
      rating: 3,
      icon: 'fa-user',
      date: 'CUSTOMER: Verified',
      location: 'Houston',
      time: '2024-02-01'
    },
    {
      id: 5,
      name: 'David Lee',
      review: 'Very easy to work with. Turned my home into a cozy, modern sanctuary!',
      image: reviewer2,
      coverImg: testimonialBG2,
      rating: 5,
      icon: 'fa-user',
      date: 'CUSTOMER: Verified',
      location: 'Miami',
      time: '2024-02-05'
    },
    {
      id: 6,
      name: 'Emily Davis',
      review: 'Very easy to work with. Turned my home into a cozy, modern sanctuary!',
      image: reviewer3,
      coverImg: testimonialBG3,
      rating: 4,
      icon: 'fa-user',
      date: 'CUSTOMER: Verified',
      location: 'Seattle',
      time: '2024-02-10'
    },
  ];

  // Update radius on window resize
  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth <= 768 ? 250 : 400);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Arrange cards in a circle
  useEffect(() => {
    if (cardsRef.current.length > 0) {
      const angle = 360 / totalCards;
      
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const cardAngle = angle * index;
          card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
          card.dataset.index = index;
        }
      });
    }
  }, [radius]);

  // Rotate carousel
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${theta}deg)`;
      
      // Update current index
      const newIndex = Math.round(Math.abs(theta / (360 / totalCards)) % totalCards);
      setCurrentIndex(newIndex >= totalCards ? 0 : newIndex);
    }
  }, [theta]);

  // Navigation functions
  const nextCard = () => {
    setTheta(prev => prev - 360 / totalCards);
  };

  const prevCard = () => {
    setTheta(prev => prev + 360 / totalCards);
  };

  // Flip card function
  const flipCard = (index, e) => {
    e.stopPropagation();
    
    // Only allow flipping the current front-facing card
    if (index === currentIndex) {
      setFlippedCards(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    }
  };

  // Drag handlers
  const dragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
  };

  const drag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const currentX = e.pageX || (e.touches ? e.touches[0].pageX : startX);
    const diffX = currentX - startX;
    const sensitivity = 0.5;
    const newTheta = theta + diffX * sensitivity;
    
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${newTheta}deg)`;
    }
  };

  const dragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const currentX = e.pageX || (e.changedTouches ? e.changedTouches[0].pageX : startX);
    const diffX = currentX - startX;
    
    if (Math.abs(diffX) > 20) {
      if (diffX > 0) {
        prevCard();
      } else {
        nextCard();
      }
    } else {
      const anglePerCard = 360 / totalCards;
      const snapAngle = Math.round(theta / anglePerCard) * anglePerCard;
      setTheta(snapAngle);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        nextCard();
      } else if (e.key === "ArrowRight") {
        prevCard();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        flipCard(currentIndex, e);
      }
    };
    
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Star rating display function
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fa-star ${i <= rating ? 'fa-solid text-yellow-400' : 'fa-regular text-gray-400'}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <motion.div
    initial={{ opacity: 0 ,y:90}}
    whileInView={{ opacity: 1 , y:0}}
    transition={{ duration: 1.5 }}
    
    
    className="bg-white py-16  font-['Chakra_Petch'] overflow-hidden relative">
     
      {/* Main Content */}
      <div className=" flex flex-col">
        <main className="flex-1 flex items-center justify-center relative">
          {/* Carousel Container */}
          <div className="relative w-full h-[500px] md:h-[500px] sm:h-[400px] xs:h-[350px] perspective-[1000px] preserve-3d flex justify-center items-center touch-none">
            <div
              ref={carouselRef}
              id="memory-carousel"
              className="relative w-[400px]  sm:w-[300px] xs:w-[250px] h-[400px] sm:h-[300px] xs:h-[250px] preserve-3d transition-transform duration-500 ease-in-out"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseDown={dragStart}
              onTouchStart={dragStart}
              onMouseMove={drag}
              onTouchMove={drag}
              onMouseUp={dragEnd}
              onTouchEnd={dragEnd}
            >
              {/* Memory Cards */}
              {memoryCards.map((card, index) => (
                <div
                  key={card.id}
                  ref={el => cardsRef.current[index] = el}
                  className="memory-card absolute px-12 md:px-0 w-[300px] sm:w-[250px] xs:w-[220px]  h-[350px] sm:h-[350px] xs:h-[320px] left-1/2 top-1/2 -ml-[150px] sm:-ml-[125px] xs:-ml-[110px] -mt-[150px] sm:-mt-[175px] xs:-mt-[160px] preserve-3d transition-transform duration-800 cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                  onClick={(e) => flipCard(index, e)}
                >
                  <div 
                    className={`card-inner relative w-full h-full preserve-3d transition-transform duration-800 hover:translate-z-20 ${flippedCards[index] ? 'rotate-y-180' : ''}`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Card Front */}
                    <div className="card-front absolute w-full h-full backface-hidden rounded-[15px] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[rgba(30,30,60,0.8)] to-[rgba(20,20,40,0.9)] border border-[rgba(157,0,255,0.3)]">
                      <div className="card-content p-5 h-full flex flex-col relative">
                        <div className="memory-date font-['Orbitron'] text-xs text-[#ff00e5] mb-2.5" style={{textShadow: '0 0 5px rgba(255,0,229,0.7)'}}>
                          {card.date}
                        </div>
                        <h3 className="text-2xl sm:text-xl xs:text-lg mb-4 font-['Orbitron'] font-bold text-white" style={{textShadow: '0 0 10px rgba(255,255,255,0.5)'}}>
                          {card.name}
                        </h3>
                        <div className="memory-image w-full h-[150px] sm:h-[120px] xs:h-[100px] mb-4 flex justify-center items-center relative overflow-hidden rounded-lg bg-black/30">
                          {/* FIXED: Using image instead of icon */}
                          <img 
                            src={card.image} 
                            alt={card.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="glitch-effect absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[rgba(157,0,255,0.3)] to-transparent bg-[length:200%_200%] animate-glitch"></div>
                        </div>
                        <p className="memory-preview text-sm text-[#b8b8ff] mb-2 flex-1">
                          {card.review}
                        </p>
                        {/* FIXED: Added rating display */}
                        <div className="rating flex gap-1 text-sm mb-2">
                          {renderRating(card.rating)}
                        </div>
                        <div className="card-glow absolute top-0 left-0 w-full h-full rounded-[15px] pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(157,0,255,0.1),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </div>
                    </div>

                    {/* Card Back */}
                    <div className="card-back absolute w-full h-full backface-hidden rounded-[15px] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[rgba(20,20,40,0.9)] to-[rgba(30,30,60,0.8)] border border-[rgba(0,229,255,0.3)] rotate-y-180">
                      <div className="card-content p-5 h-full flex flex-col">
                        <h3 className="text-2xl sm:text-xl xs:text-lg mb-4 font-['Orbitron'] font-bold text-white">
                          {card.name}
                        </h3>
                        <p className="text-sm text-[#b8b8ff] mb-5 leading-relaxed flex-1">
                          {card.review}
                        </p>
                        {/* FIXED: Fixed coordinates display */}
                        <div className="memory-coordinates font-['Orbitron'] text-xs flex flex-col gap-1">
                          <span className="text-[#00e5ff]">
                            <i className="fa-solid fa-location-dot mr-1"></i> {card.location}
                          </span>
                          <span className="text-[#ff00e5]">
                            <i className="fa-regular fa-clock mr-1"></i> {card.time}
                          </span>
                          <span className="text-[#9d00ff]">
                            <i className="fa-solid fa-star mr-1"></i> Rating: {card.rating}/5
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 flex items-center gap-5 z-10">
            <button
              id="prev-btn"
              className="control-btn w-10 h-10 rounded-full bg-[rgba(20,20,40,0.7)] border border-[#9d00ff] text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[rgba(30,30,60,0.9)] hover:scale-110"
              style={{boxShadow: '0 0 10px rgba(157,0,255,0.7), 0 0 20px rgba(157,0,255,0.5)'}}
              onClick={prevCard}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <span className="instructions text-xs text-[#b8b8ff] opacity-70">Drag or use arrows</span>
            <button
              id="next-btn"
              className="control-btn w-10 h-10 rounded-full bg-[rgba(20,20,40,0.7)] border border-[#9d00ff] text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[rgba(30,30,60,0.9)] hover:scale-110"
              style={{boxShadow: '0 0 10px rgba(157,0,255,0.7), 0 0 20px rgba(157,0,255,0.5)'}}
              onClick={nextCard}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </main>
      </div>

      {/* Add Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      {/* Add Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Chakra+Petch&display=swap" rel="stylesheet" />

      <style jsx>{`
        @keyframes glitch {
          0% { background-position: 0 0; }
          25% { background-position: 100% 0; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0 100%; }
          100% { background-position: 0 0; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        .animate-glitch {
          animation: glitch 3s linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 3s infinite alternate;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .perspective-\[1000px\] {
          perspective: 1000px;
        }
        
        .transition-transform {
          transition-property: transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .duration-800 {
          transition-duration: 800ms;
        }
        
        .hover\:translate-z-20:hover {
          transform: translateZ(20px);
        }
        
        .group:hover .group-hover\:opacity-100 {
          opacity: 1;
        }
        
        .touch-none {
          touch-action: none;
        }
      `}</style>
    </motion.div>
  );
};

export default Testimonials;