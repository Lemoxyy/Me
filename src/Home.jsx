export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Hello Stranger,</h1>
      <p>I hope you have a great day</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
};
