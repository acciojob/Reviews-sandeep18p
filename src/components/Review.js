import React, { useState } from 'react';

const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web Developer',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Web Designer',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'Intern',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'The Boss',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = reviews[index];

  const prevReview = () => {
    setIndex((index) => (index === 0 ? reviews.length - 1 : index - 1));
  };

  const nextReview = () => {
    setIndex((index) => (index === reviews.length - 1 ? 0 : index + 1));
  };

  const randomReview = () => {
    let newIndex = index;
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * reviews.length);
    }
    setIndex(newIndex);
  };

  return (
    <article className="review">
      <div className="person-img">
        <img src={image} alt={name} />
      </div>
      <h4 id={`author-${reviews[index].id}`} className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prevReview}>Previous</button>
        <button className="next-btn" onClick={nextReview}>Next</button>
        <button className="random-btn" onClick={randomReview}>Surprise Me</button>
      </div>
    </article>
  );
};

export default Review;
