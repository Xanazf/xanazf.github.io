import styles from './Experience.module.css';
import type { ExperienceType } from '../ComponentTypes';
import { For } from 'solid-js';
import ExperienceCard from '../Card/ExperienceCard';

const experienceObj: { [key: string]: ExperienceType } = {
  pos0: {
    companyName: 'Self Employed',
    positionName: 'Full Stack Developer',
    from: '01/2024',
    location: 'Kyiv, Ukraine',
    workType: 'Remote',
  },
  pos1: {
    companyName: 'NDA',
    positionName: 'Full Stack Developer \n DevOps Engineer',
    from: '08/2022',
    to: '01/2024',
    location: 'Kyiv, Ukraine',
    workType: 'On-Site',
  },
  pos2: {
    companyName: 'PragmaticPlay',
    positionName: 'Integration Engineer',
    from: '01/2022',
    to: '07/2022',
    location: 'Kyiv, Ukraine',
    workType: 'Hybrid',
  },
  pos3: {
    companyName: 'NewAge.io',
    positionName: 'Technical Support \n DevOps Engineer',
    from: '06/2021',
    to: '12/2021',
    location: 'Kyiv, Ukraine',
    workType: 'Remote',
  },
  pos4: {
    companyName: 'LimTC',
    positionName: 'Customer Support Representative',
    from: '01/2021',
    to: '06/2021',
    location: 'Kyiv, Ukraine',
    workType: 'On-Site',
  },
  pos5: {
    companyName: 'Shopping Cart Elite',
    positionName: 'Technical Support Specialist',
    from: '02/2020',
    to: '12/2020',
    location: 'Kyiv, Ukraine',
    workType: 'Remote',
  },
};

function Experience() {
  const keys = Object.keys(experienceObj);

  return (
    <div class={styles.experience_wrap}>
      <ul class={styles.experience_list}>
        <For each={keys}>
          {item => (
            <li class={styles.experience_item}>
              <ExperienceCard {...experienceObj[item]} />
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

export default Experience;
