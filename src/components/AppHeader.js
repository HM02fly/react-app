import logo from "../assets/images/one-piece.png";
import Navigator from "./Navigator";

const styles = {
  title: {
    fontSize: "1.5em",
  },
};

const AppHeader = () => {
  return (
    <header>
      <div className="left">
        <img src={logo} alt="logo" />
      </div>
      <div className="left">
        <h2 style={styles.title}>My React App</h2>
      </div>
      <div className="right">
        <Navigator />
      </div>
    </header>
  );
};

export default AppHeader;
