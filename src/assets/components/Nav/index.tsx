import ThemeChange from '../ThemeChange';
import styles from './Nav.module.css';
import { useSVG as DynamicSVG } from '../../svg/SVGLoader';
import { createSignal, onMount } from 'solid-js';

export default function Nav() {
  const [collapsed, setCollapsed] = createSignal(true);
  const [onMenu, setOnMenu] = createSignal(false);

  onMount(() => {
    const body = document.body;
    if (body.clientWidth > 450) {
      setCollapsed(false);
    }
    body.addEventListener('click', () => {
      if (!collapsed() && !onMenu()) {
        const navElement = document.getElementById('nav');
        if (navElement) {
          navElement.style.setProperty('animation-name', 'NavCollapse');
        }
        setCollapsed(true);
      }
    });
  });

  function handleCollapsing() {
    setCollapsed(!collapsed());
    const navElement = document.getElementById('nav');
    if (navElement) {
      if (collapsed()) {
        navElement.style.setProperty('animation-name', 'NavCollapse');
      } else {
        navElement.style.setProperty('animation-name', 'NavExpand');
      }
    }
  }

  return (
    <>
      <nav
        class={styles.nav}
        id="nav"
        onMouseEnter={() => setOnMenu(true)}
        onMouseLeave={() => setOnMenu(false)}
      >
        <ul class={`${styles.navlist} ${collapsed() ? styles.collapsed : ''}`}>
          <li>
            <div
              class={styles.menu_collapser}
              onClick={handleCollapsing}
            >
              <DynamicSVG iconName={'menu-right'} />
            </div>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/wiki">[Wiki]WIP</a>
          </li>
          <li>
            <a href="/showcase">[Showcase]WIP</a>
          </li>
          <li>[search]WIP</li>
          <li>
            <ThemeChange />
          </li>
        </ul>
      </nav>
    </>
  );
}
