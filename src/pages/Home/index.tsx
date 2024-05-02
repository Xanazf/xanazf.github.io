import Experience from '../../assets/components/Experience';
import Toolkit from '../../mdx/Blog/Toolkit.mdx';

import styles from './Home.module.css';

function Home() {
  return (
    <main class={styles.home_wrap}>
      <div class={styles.home_experience_wrap}>
        <Experience />
      </div>
      <div class={styles.home_snippets}>
        <section class={`${styles.home_snippet} ${styles.home_blog_snippet}`}>
          <Toolkit />
        </section>
        <section class={`${styles.home_snippet} ${styles.home_wiki_snippet}`}>
          WIP
        </section>
      </div>
    </main>
  );
}

export default Home;
