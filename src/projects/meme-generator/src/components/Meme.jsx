import { useState, useEffect } from 'react';
import memeStyles from './css/Meme.module.css';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    image: '',
  });

  const [allMemesData, setAllMemesData] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => {
        const { memes } = data.data;
        setAllMemesData(memes);
      });
  }, []);

  const getMemeImage = () => {
    const randNum = Math.floor(Math.random() * allMemesData.length);
    const url = allMemesData[randNum].url;

    setMeme((prevState) => ({
      ...prevState,
      image: url,
    }));
  };

  const handleClick = (event) => {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div className={memeStyles['meme-form']}>
      <div className={memeStyles['meme-form__inputs']}>
        <input
          type="text"
          placeholder="Meme Upper Text"
          className={memeStyles['meme-form__input']}
          name="topText"
          value={meme.topText}
          onChange={handleClick}
        />
        <input
          type="text"
          placeholder="Meme Lower Text"
          className={memeStyles['meme-form__input']}
          name="bottomText"
          value={meme.bottomText}
          onChange={handleClick}
        />
      </div>

      <div className={memeStyles['meme-form__submit']}>
        <input
          type="button"
          name="button"
          value="Get a new meme image 🖼"
          className={memeStyles['meme-form__btn']}
          onClick={getMemeImage}
        />
      </div>

      {meme.image && (
        <div className={memeStyles['meme-img']}>
          <img
            src={meme.image}
            alt="Meme"
            className={memeStyles['meme-img__inner']}
          />
          <h1
            className={`${memeStyles['meme-img__text']} ${memeStyles['top']}`}
          >
            {meme.topText}
          </h1>
          <h1
            className={`${memeStyles['meme-img__text']} ${memeStyles['bottom']}`}
          >
            {meme.bottomText}
          </h1>
        </div>
      )}
    </div>
  );
}
