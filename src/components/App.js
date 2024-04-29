import React, { useState } from 'react';

const reviewsData = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

function App() {
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
    <section className="container">
      <h2 id="review-heading">Our Reviews</h2>
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
    </section>
  );
}

export default App;
