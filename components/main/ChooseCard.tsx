"use client";
import React, { useState } from "react";
import { majorArcanaCards } from "../data/CardsInfo";
import "../sub/ChooseCard.css";

const CardStack = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<boolean[]>(
    new Array(majorArcanaCards.length - 1).fill(true)
  );

  const handleCardClick = (index: number) => {
    if (selectedCards.includes(index)) {
      // Deselect the card if it's already selected
      setSelectedCards(selectedCards.filter(i => i !== index));
    } else if (selectedCards.length < 3) {
      // Select the card if we have less than 3 selected
      setSelectedCards([...selectedCards, index]);
    }
  };

  const handleReveal = () => {
    const newFlippedCards = [...flippedCards];
    selectedCards.forEach(index => {
      newFlippedCards[index] = false;
    });
    setFlippedCards(newFlippedCards);
  };

  const getCardStyle = (index: number) => {
    const isHovered = hoveredCard === index;
    const isSelected = selectedCards.includes(index);
    const cardCount = majorArcanaCards.length - 1;
  
    if (isSelected) {
      const selectedIndex = selectedCards.indexOf(index);
      let translateX = 0;
      
      // First selected card goes to middle (0px)
      // Second selected card goes to left (-150px)
      // Third selected card goes to right (150px)
      if (selectedIndex === 0) {
        translateX = 0;
      } else if (selectedIndex === 1) {
        translateX = -160;
      } else if (selectedIndex === 2) {
        translateX = 160;
      }
  
      return {
        transform: `translateY(250px) translateX(${translateX}px)`,
        zIndex: 1000 + selectedIndex,
        transition: 'transform 0.3s ease',
      };
    }
  
    return {
      transform: isHovered 
        ? `translateY(-50px) translateX(${(index / cardCount) * 1000 - 450}px) rotate(0deg) scale(1.05)`
        : `translateY(${index * 0.5}px) translateX(${(index / cardCount) * 1000 - 450}px) rotate(${Math.random() * 5 - 4}deg)`,
      zIndex: isHovered ? 100 : index,
      transition: 'transform 0.3s ease',
    };
  };

  const backCardImage = majorArcanaCards.find(card => card === 'BackCard.svg');
  const frontCards = majorArcanaCards.filter(card => card !== 'BackCard.svg');

  return (
    <div className="card-table-container">
      <div className="card-stack">
        {frontCards.map((card, index) => (
          <div
            key={index}
            className={`card ${flippedCards[index] ? 'flipped' : ''} ${selectedCards.includes(index) ? 'selected' : ''}`}
            style={getCardStyle(index)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={`/Major Arcana/${card}`}
                  alt={card.replace('.svg', '')}
                  className="card-image"
                  loading="lazy"
                />
              </div>
              <div className="card-back">
                {backCardImage && (
                  <img
                    src={`/Major Arcana/${backCardImage}`}
                    alt="Card Back"
                    className="card-image"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button 
        className="reveal-button" 
        onClick={handleReveal}
        disabled={selectedCards.length !== 3}
      >
        Reveal My Fortune
      </button>
    </div>
  );
};

export default CardStack;
