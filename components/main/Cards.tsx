"use client";
import * as React from "react";
import "../sub/Cards.css"; // Import the CSS file
import { useKeenSlider } from "keen-slider/react"; // Import Keen Slider
import "keen-slider/keen-slider.min.css"; // Import Keen Slider styles

// Array of major arcana card filenames
const majorArcanaCards = [
  "The Fool.svg",
  "The Magician.svg",
  "The High Priestess.svg",
  "The Empress.svg",
  "The Emperor.svg",
  "The Hierophant.svg",
  "The Lovers.svg",
  "The Chariot.svg",
  "The Strength.svg",
  "The Hermit.svg",
  "Wheel of Fortune.svg",
  "The Justice.svg",
  "The Hanged Man.svg",
  "The Death.svg",
  "The Temperance.svg",
  "The Devil.svg",
  "The Tower.svg",
  "The Star.svg",
  "The Moon.svg",
  "The Sun.svg",
  "The Judgement.svg",
  "The World.svg",
];

// Slower animation with 15 seconds duration
const animation = { duration: 15000, easing: (t: number) => t };

const Cards = () => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
      loop: true,
      renderMode: 'performance',
      drag: false,
      slides: {
        origin: 'center',
        perView: 7, // Show 5 cards at once
        spacing: 0, // No spacing between slides
      },
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    });

  return (
    <div ref={sliderRef} className="keen-slider">
      {majorArcanaCards.map((card, index) => (
        <div key={index} className="keen-slider__slide">
          <img
            src={`/Major Arcana/${card}`}
            alt={card.split(".")[0]} // Use card name without extension as alt text
            className="card-image"
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
