import '../css/Main.css';
import tech2 from '../img/tech2.jpg';
import tech3 from '../img/tech3.jpg';
import tech4 from '../img/tech4.jpg';
import tech5 from '../img/tech5.jpg';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Main() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsData = [
    {
      image: tech2,
      title: '인사말',
      description: 'Ceo Message',
      link: '/message',
    },
    {
      image: tech3,
      title: '사업소개',
      description: 'Business Introduction',
      link: '/introduce',
    },
    {
      image: tech4,
      title: '견적문의',
      description: 'Estimate',
      link: '/',
    },
    {
      image: tech5,
      title: '오시는길',
      description: 'Directions',
      link: '/directions',
    },
  ];

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="main-bg">
      <TransitionGroup className="main-card">
        {cardsData.map((card, index) => (
          <CSSTransition key={index} timeout={500} classNames="card">
            <div
              className={`card ${selectedCard === index ? 'selected' : ''}`}
              onClick={() => handleCardSelect(index)}
            >
              <Link to={card.link} style={{ textDecoration: 'none' }}>
                <Card
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              </Link>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default Main;



const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

