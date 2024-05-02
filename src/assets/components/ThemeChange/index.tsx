import { createSignal } from 'solid-js';
import { useTheme } from '../../../context/ThemeContext';
import { useSVG as DynamicSVG } from '../../svg/SVGLoader';
import styles from './ThemeChange.module.css';

function ThemeChange() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = createSignal(theme);

  function handleClick() {
    setTheme();
    setCurrentTheme(currentTheme() === 'light' ? 'dark' : 'light');
  }

  return (
    <span
      class={styles.theme_button}
      onClick={handleClick}
      style={{
        transition: 'rotate 0.3s',
        rotate: currentTheme() === 'light' ? '360deg' : '180deg',
      }}
    >
      <DynamicSVG iconName="yin-yang" />
    </span>
  );
}

export default ThemeChange;
