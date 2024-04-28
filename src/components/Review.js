import React, { useState } from 'react';

const Review = ({ reviewsData }) => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviewsData[index];

  const nextReview = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const prevReview = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const randomReview = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * reviewsData.length);
    } while (newIndex === index);

    setIndex(newIndex);
  };

  return (
    <div className="review">
      <div className="person-img">
        <img src={image} alt={name} />
      </div>
      <h4 className="author" id={`author-${reviewsData[index].id}`}>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prevReview}>Prev</button>
        <button className="next-btn" onClick={nextReview}>Next</button>
      </div>
      <button className="random-btn" onClick={randomReview}>Surprise Me</button>
    </div>
  );
};

export default Review;
