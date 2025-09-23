import logo from './NoOutline.svg';
import './App.css';

function Header() {
  return (
    <div className="Header">
      <img className="Logo" src={logo} />
      <div className="HeaderText">
        <h1>Michael Parrish</h1>
        <h5>Software Engineer, Boston MA</h5>
      </div>
    </div>
  );
}

export default Header;
