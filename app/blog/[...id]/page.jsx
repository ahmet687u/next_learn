import styles from '../../page.module.css'

export default function BlogDetail({ params }) {
  return (
    <section className={styles.description} style={{margin: 200, textAlign: "center"}}>
      <h1>{params.id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sequi
        perspiciatis quam sit minima rem odit aperiam, facilis harum? Ducimus
        harum nisi delectus iure sequi consequuntur atque blanditiis ullam
        perspiciatis.
      </p>
    </section>
  );
}
