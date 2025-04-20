"use client";
import React, { useState } from "react";
import { majorArcanaCards } from "../data/CardsInfo";
import "../sub/ChooseCard.css";

const CardStack = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<boolean[]>(
    new Array(majorArcanaCards.length - 1).fill(false) // -1 to exclude BackCard.svg
  );

  const handleCardClick = (index: number) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  const getCardStyle = (index: number) => {
    const isHovered = hoveredCard === index;
    const cardCount = majorArcanaCards.length - 1; // Exclude BackCard.svg
    const spreadWidth = cardCount * 15; // Total spread width in pixels
    const position = (index / cardCount) * spreadWidth - (spreadWidth / 2);
    
    return {
      transform: isHovered 
        ? `translateY(-100px) translateX(${position}px) rotate(0deg) scale(1.1)`
        : `translateY(${index * 0.5}px) translateX(${position}px) rotate(${Math.random() * 6 - 3}deg)`,
      zIndex: isHovered ? 100 : index,
      transition: 'transform 0.3s ease'
    };
  };

  // We'll use the BackCard.svg for all card backs
  const backCardImage = majorArcanaCards.find(card => card === 'BackCard.svg');
  const frontCards = majorArcanaCards.filter(card => card !== 'BackCard.svg');

  return (
    <div className="card-table-container">
      <div className="card-stack">
        {frontCards.map((card, index) => (
          <div
            key={index}
            className={`card ${flippedCards[index] ? 'flipped' : ''}`}
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
    </div>
  );
};

export default CardStack;