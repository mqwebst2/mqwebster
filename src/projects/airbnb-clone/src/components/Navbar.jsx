import logo from '../assets/airbnb-logo.png';

export default function Navbar() {
  return (
    <div className="airbnb-navbar">
      <div className="airbnb-navbar-wrap">
        <img alt="Airbnb Logo" src={logo} className="airbnb-navbar-logo" />
      </div>
    </div>
  );
}
