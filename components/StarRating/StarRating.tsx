import { Rate } from '@/utils/types';
import React from 'react';

interface StarRatingProps {
  rating: Rate;
  onRatingChange?: (newRating: Rate) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  const handleClick = (index: number) => {
    if (onRatingChange) {
      const newRating = index - 0.5 <= rating ? (index as Rate) : (index - 0.5 as Rate);
      onRatingChange(newRating);
    }
  };

  const renderStar = (index: number) => {
    const filled = index <= rating;
    const halfFilled = index - 0.5 <= rating;

    return (
      <span
        key={index}
        className={`${
          filled ? 'text-black-400' : 'text-black-300'
        } ${halfFilled ? 'text-black-400' : ''}`}
        onClick={() => handleClick(index)}
      >
        {filled ? '★' : '☆'}
      </span>
    );
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => renderStar(index))}
    </div>
  );
};

export default StarRating;
