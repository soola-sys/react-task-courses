import logo from "../assets/Logo_img.svg";

const Header = () => {
    return <>
        <header className="header">
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="Courses Logo" />
                </a>
            </div>
            <div className="header-inner">
                <div>
                    <h2>Harry Potter</h2>
                </div>
                <button className="header-btn">Logout</button>
            </div>
        </header>
    </>;
};

export default Header