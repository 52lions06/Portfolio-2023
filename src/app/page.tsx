import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <h1 className={styles.block}> Welcome to Will's World</h1>
        </section>
        <section className={styles.mainContent}>
          <h2>
            Text that I will be adding about who I am, why I had to create a new
            portfolio, and what I set out todo{" "}
          </h2>
        </section>
        <section></section>
      </main>
    </>
  );
}
