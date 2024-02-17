import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ display: "flex", gap: 20 }}>
        <Link href="about">Hakkımızda</Link>
        <Link href="blog">Blog</Link>
        <Link href="docs">Dökümanlar</Link>
      </div>
    </main>
  );
}
