import starRating from '../assets/star.png';

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }
  const imageURL = '/src/projects/airbnb-clone/src/assets/images/';

  return (
    <div className="card">
      <div className="card-wrap">
        {badgeText && <div className="card-badge">{badgeText}</div>}

        <div className="card-img">
          <img
            className="card-img__inner"
            src={`${imageURL}/${props.coverImg}`}
          />
        </div>

        <div className="card-content">
          <div className="card-rating">
            <div className="card-rating__img">
              <img className="card-rating__img-inner" src={starRating} />
            </div>

            <div className="card-rating__content">
              <span>{props.stats.rating}</span> ({props.stats.reviewCount})
              &#x2022; {props.location}
            </div>
          </div>

          <div className="card-title">
            <h2>{props.title}</h2>
          </div>

          <div className="card-price">
            <span>From ${props.price}</span> / person
          </div>
        </div>
      </div>
    </div>
  );
}
