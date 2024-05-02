import type { ExperienceType } from '../ComponentTypes';
import styles from './ExperienceCard.module.css';

function ExperienceCard(props: ExperienceType) {
  const companyName = props.companyName;
  const positionName = props.positionName;
  const from = props.from;
  const to = props.to || 'present';
  const location = props.location;
  const workType = props.workType;
  const desc = props.desc || null;

  return (
    <div class={styles.experience_card_wrap}>
      <section class={styles.overline}>{companyName}</section>
      <section class={styles.heading}>{positionName}</section>
      <section class={styles.subheading}>{from + ' - ' + to}</section>
      <section class={styles.caption}>{location}</section>
      <section class={styles.caption}>{workType}</section>
      {desc ? <section class={styles.maintext}>{desc}</section> : null}
    </div>
  );
}

export default ExperienceCard;
