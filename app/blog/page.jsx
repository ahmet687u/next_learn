import styles from '../page.module.css'
import Link from "next/link";

export default function Blog() {
  return (
    <section className={styles.main}>
      <h1>Blog</h1>
      <ul>
        <li>
          <Link href="/blog/1">Blog 1</Link>
        </li>
        <li>
          <Link href="/blog/2">Blog 2</Link>
        </li>
        <li>
          <Link href="/blog/3">Blog 3</Link>
        </li>
        <li>
          <Link href="/blog/4">Blog 4</Link>
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sequi
        perspiciatis quam sit minima rem odit aperiam, facilis harum? Ducimus
        harum nisi delectus iure sequi consequuntur atque blanditiis ullam
        perspiciatis.
      </p>
    </section>
  );
}
