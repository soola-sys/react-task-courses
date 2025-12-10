import logo from '../assets/Logo_img.svg';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Courses Logo" />
          </a>
        </div>
        <div className="header-inner">
          <p className="header-text">Harry Potter</p>
          <button className="header-btn btn-primary">Logout</button>
        </div>
      </header>
    </>
  );
};

export default Header;
