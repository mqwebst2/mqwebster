import React from 'react';
import diceStyles from './TenziGame.module.css';

export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59e391' : '#ffffff',
  };
  return (
    <div className={diceStyles['dice']} style={styles} onClick={props.diceHold}>
      <span>{props.num}</span>
    </div>
  );
}
