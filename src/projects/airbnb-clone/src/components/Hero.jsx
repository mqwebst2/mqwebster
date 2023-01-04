import photoGrid from '../assets/photo-grid.png';

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero-wrap'>
        <div className='hero-img'>
          <img
            alt='Experiences Photo Grid'
            src={photoGrid}
            className='hero-img__grid'
          />
        </div>

        <div className='hero-content'>
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts - all
            without leaving home.
          </p>
        </div>
      </div>
    </div>
  );
}
