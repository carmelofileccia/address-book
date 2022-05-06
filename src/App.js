
import DisplayContact from "./components/DisplayContact";
import styles from "./styles.module.scss";


function App() {
  return (
    <main className={styles.App}>
      <header className={styles.App__header}>
        <h1 className={styles.App__h1}> Addressbook</h1>
      </header>
      <DisplayContact/>
    </main>
  );
}

export default App;

