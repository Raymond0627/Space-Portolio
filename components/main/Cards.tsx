"use client";
import * as React from "react";
import "../sub/Cards.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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

const animation = { duration: 25000, easing: (t: number) => t };

const Cards = () => {
  const middleIndex = Math.floor(majorArcanaCards.length / 2);
  const [loaded, setLoaded] = React.useState<boolean[]>(
    Array(majorArcanaCards.length).fill(false)
  );

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: true,
    slides: {
      origin: 'center',
      perView: 5,
      spacing: 0,
    },
    created(s) {
      // Load initial visible slides (middle card and adjacent ones)
      const toLoad = [middleIndex-3,middleIndex-2, middleIndex-1, middleIndex, middleIndex+1, middleIndex+2, middleIndex+3];
      const newLoaded = [...loaded];
      toLoad.forEach(idx => {
        const adjustedIdx = (idx + majorArcanaCards.length) % majorArcanaCards.length;
        newLoaded[adjustedIdx] = true;
      });
      setLoaded(newLoaded);
      
      // Start at the middle card
      s.moveToIdx(middleIndex, false);
      // Then begin auto-scroll animation
      setTimeout(() => {
        s.moveToIdx(middleIndex + 5, true, animation);
      }, 1000);
    },
    slideChanged(s) {
      // Lazy load images as they approach the viewport
      const current = s.track.details.rel;
      const toLoad = [current-3, current-2, current-1, current, current+1, current+2,current+3];
      const newLoaded = [...loaded];
      toLoad.forEach(idx => {
        const adjustedIdx = (idx + majorArcanaCards.length) % majorArcanaCards.length;
        if (!newLoaded[adjustedIdx]) {
          newLoaded[adjustedIdx] = true;
        }
      });
      setLoaded(newLoaded);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="slider-container">
      <button onClick={() => slider.current?.prev()} className="nav-btn prev">
        ‹
      </button>
      <div ref={sliderRef} className="keen-slider">
        {majorArcanaCards.map((card, index) => (
          <div key={index} className="keen-slider__slide">
            {loaded[index] ? (
              <img
                src={`/Major Arcana/${card}`}
                alt={card.replace('.svg', '')}
                className="card-image"
                loading="lazy"
              />
            ) : (
              <div className="card-placeholder" />
            )}
          </div>
        ))}
      </div>
      <button onClick={() => slider.current?.next()} className="nav-btn next">
        ›
      </button>
    </div>
  );
};

export default Cards;