import ThemeChange from '../ThemeChange';
import styles from './Nav.module.css';
import { useSVG as DynamicSVG } from '../../svg/SVGLoader';
import { createSignal } from 'solid-js';

export default function Nav() {
  const [collapsed, setCollapsed] = createSignal(false);

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
            <a href="/wiki">Wiki</a>
          </li>
          <li>
            <a href="/showcase">Showcase</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <ThemeChange />
          </li>
        </ul>
      </nav>
    </>
  );
}
