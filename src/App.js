import { useState, useEffect } from 'react';
import shuffle from './utilities/shuffle';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState(shuffle); // Cards array from assets
  const [firstCard, setFirstCard] = useState(null); // First selection
  const [secontCard, setSecondCard] = useState(null); // Second selection
  const [disabled, setDisabled] = useState(false); // Prevents rapid clicking
  const [score, setScore] = useState(0);

  const handleClick = card => {
    if (!disabled) {
      firstCard ? setSecondCard(card) : setFirstCard(card);
    }
  };

  const handleTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  }

  useEffect(() => {
    let pickTimer;
    if (firstCard && secontCard) {
      if (firstCard.image === secontCard.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === firstCard.image) {
              return { ...card, matched: true };
            } else {
              return card;
            };
          });
        });
        handleTurn();
      } else {
        setDisabled(true);
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }
    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, firstCard, secontCard])

  useEffect(() => {
    const checkScore = cards.filter((card) => !card.matched);
    if (cards.length && checkScore.length < 1) {
      console.lot("You win!");
      setScore(score + 1);
      handleTurn();
      setCards(shuffle);
    }
  }, [cards, score]);

  return (
    <div>
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;
          return (
            <Card
              key={id}
              image={image}
              selected={card === firstCard || card === secontCard || matched}
              onClick={() => handleClick(card)}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
