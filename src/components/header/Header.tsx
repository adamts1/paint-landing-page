import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-area">
        <div className="logo">צ</div>
        <div>
          <div className="logo-title">צביעת בתים ומבנים</div>
          <div className="logo-sub">מקצועיות | אמינות | גימור מושלם</div>
        </div>
      </div>
      <a className="btn-primary btn-accent" href="#contact">
        קבל הצעת מחיר
      </a>
    </header>
  );
};

Header.displayName = "Header";
export default Header;
