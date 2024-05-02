import { useSVG as DynamicSVG } from '../../assets/svg/SVGLoader';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div class={styles.footer}>
      <h1>Oleksandr Marnov</h1>
      <DynamicSVG
        iconName={'typescript'}
        brand
      />
    </div>
  );
}

export default Footer;
