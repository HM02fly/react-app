import logo from "../assets/images/gabiru.png";

const styles = {
  image: {
    width: "400px",
  },
  title: {
    fontSize: "2em",
  },
};

const Home = () => {
  return (
    <div className="container">
      <img src={logo} alt="logo" style={styles.image} />
      <div style={styles.title}>Welecome to my First ReactApp</div>
    </div>
  );
};

export default Home;
