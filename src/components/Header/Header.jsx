import "./Header.css";

const Header = () => {
  return (
    <div className="Main_Header">
      <span onClick={() => window.scroll(0, 0)} className="Netflux_Header">
        NETFLUX
      </span>
    </div>
  );
};

export default Header;
