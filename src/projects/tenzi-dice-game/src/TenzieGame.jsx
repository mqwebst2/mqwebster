import { useEffect, useState } from 'react';
import Dice from './Dice';
import Confetti from 'react-confetti';

import diceStyles from './TenziGame.module.css';

export default function TenziGame() {
  const [dice, setDice] = useState(newDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const win = (arr) => {
      return arr.every((item) => item.isHeld && item.num === arr[0].num);
    };

    setTenzies(win(dice));
  }, [dice]);

  function newDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      const singleDice = {
        id: '',
        num: '',
        isHeld: false,
      };
      singleDice.id = i + 1;
      singleDice.num = Math.ceil(Math.random() * 6);
      diceArray.push(singleDice);
    }
    return diceArray;
  }

  function diceRoll() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        const newNum = Math.ceil(Math.random() * 6);
        return die.isHeld ? { ...die } : { ...die, num: newNum };
      }),
    );
  }

  function diceHold(diceId) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return diceId === die.id ? { ...die, isHeld: !die.isHeld } : { ...die };
      }),
    );
  }

  const diceElements = dice.map((item) => {
    return (
      <Dice
        key={item.id}
        id={item.id}
        num={item.num}
        isHeld={item.isHeld}
        diceHold={() => diceHold(item.id)}
      />
    );
  });

  return (
    <div className={diceStyles.body}>
      <div className={diceStyles.main}>
        {tenzies && <Confetti />}

        <div className={diceStyles.game}>
          <h1 className={diceStyles.h1}>Tenzies</h1>
          <p className={diceStyles.p}>
            Roll untill all dice are the same. Click each die to freeze it at
            its current value between rolls.
          </p>
        </div>

        <div className={diceStyles['dice-grid']}>{diceElements}</div>
        <button
          className={diceStyles['dice-roll']}
          onClick={() => (tenzies ? setDice(newDice()) : diceRoll())}
        >
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </div>
    </div>
  );
}
