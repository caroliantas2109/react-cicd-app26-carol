import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Carol Iantas</h1>
        <p style={styles.text}>My React CI/CD App</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f1e6"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  title: {
    color: "#2b2b2b",
    marginBottom: "10px"
  },
  text: {
    color: "#7a7264"
  }
};

export default App;
