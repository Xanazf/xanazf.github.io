import Experience from '../../assets/components/Experience';
import { useSVG as DynamicSVG } from '../../assets/svg/SVGLoader';
import styles from './Home.module.css';

function Home() {
  return (
    <main class={styles.home_wrap}>
      <h1>Oleksandr Marnov</h1>
      <div class={styles.home_contacts}>
        <span class={styles.home_contact}>
          <a
            target="_blank"
            href="https://linkedin.com/in/nautylus"
          >
            <DynamicSVG
              iconName="linkedin"
              brand
            />
          </a>
        </span>
        <span class={styles.home_contact}>
          <a
            target="_blank"
            href="https://github.com/Xanazf"
          >
            <DynamicSVG
              iconName="github"
              brand
            />
          </a>
        </span>
        <span class={styles.home_contact}>
          <a
            target="_blank"
            href="mailto:hotdamnsucka@gmail.com"
          >
            <DynamicSVG
              iconName="gmail"
              brand
            />
          </a>
        </span>
        <span class={styles.home_contact}>
          <a
            target="_blank"
            href="https://xanazf.github.io/react-portfolio"
          >
            <DynamicSVG
              iconName="react"
              brand
            />
          </a>
        </span>
      </div>
      <div class={styles.home_experience_wrap}>
        <Experience />
      </div>
      <div class={styles.home_snippets}>
        <section class={`${styles.home_snippet} ${styles.home_blog_snippet}`}>
          [Blog.Latest]WIP
        </section>
        <section class={`${styles.home_snippet} ${styles.home_wiki_snippet}`}>
          [Wiki.Latest]WIP
        </section>
      </div>
    </main>
  );
}

export default Home;
