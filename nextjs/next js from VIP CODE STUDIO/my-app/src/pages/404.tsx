import styles from "@/styles/404.module.scss";
export default function Custom404() {
  return (
    <section className={styles.error}>
      <div>
        <img src="./404.png" alt="404" className={styles.error__image} />
      </div>
      <div>404 | Halaman Tidak Ditemukan</div>
    </section>
  );
}
