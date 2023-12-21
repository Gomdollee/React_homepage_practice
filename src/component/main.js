import '../css/Main.css'; 


function Main() {
    const cardsData = [
        {
          img: '../img/tech2.jpg',
          title: '인사말',
          description: 'Ceo Message',
          link: '/greetings', // 이동할 페이지의 경로
        },
        {
          img: '../img/tech2.jpg',
          title: '사업소개',
          description: 'Business Introduction',
          link: '/business-intro', // 이동할 페이지의 경로
        },
        // ... 다른 카드들도 추가
      ];
    
      return (
        <div className="main-bg">
          <div className="main-card">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                image={card.img}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      );
    };
    

export default Main;

function Card({ img, title, description }) {
    return (
        <div className="card">
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      );
    };