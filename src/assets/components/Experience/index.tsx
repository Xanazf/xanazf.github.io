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
    desc: `
Working on remote freelance projects.
    `,
    skills: [
      'Typescript',
      'Node.js',
      'Git',
      'Vercel',
      'Nginx',
      'Bash',
      'Linux',
      'Redis',
      'MongoDB',
      'React.js',
      'Postman',
      'CI/CD',
      'CSS',
      'Tailwind',
      'Solid.js',
      'Material UI',
      'Next UI',
      'REST API',
    ],
  },
  pos1: {
    companyName: 'NDA',
    positionName: 'Full Stack Developer \n DevOps Engineer',
    from: '08/2022',
    to: '01/2024',
    location: 'Kyiv, Ukraine',
    workType: 'On-Site',
    desc: `
Provided Full Stack development services and DevOps services with tools like Node.js, Next.js, Express.js, Nginx, Typescript, React.js, Prometheus, Kubernetes. I was the only web developer in the company, the entire infrastructure has been built by me alone.

Development achievements:
- 2 CRM and 1 home website;

- 2 Telegram bots that integrate with the API of the CRM to deliver information to the company Telegram accounts in real time;
  
- Various API and Database solutions to facilitate the high throughput of traffic required in the business domain;`,
    skills: [
      'Typescript',
      'Node.js',
      'Git',
      'Vercel',
      'Next.js',
      'Nginx',
      'Bash',
      'Linux',
      'Redis',
      'MongoDB',
      'React.js',
      'Docker',
      'Kubernetes',
      'Postman',
      'CI/CD',
      'CSS',
      'Material UI',
      'REST API',
    ],
  },
  pos2: {
    companyName: 'PragmaticPlay',
    positionName: 'Integration Engineer',
    from: '01/2022',
    to: '07/2022',
    location: 'Kyiv, Ukraine',
    workType: 'Hybrid',
    desc: `
The position was not much different from DevOps.

Facilitated integration of Pragmatic Play's online gambling games with their customers, such as Stake. Created required accounts with necessary permissions for customers to tweak the games when we finish integrating them.

The position did not offer much in ways of innovation, it was a straightforward job.
    `,
    skills: ['Bash', 'Linux', 'CI/CD', 'Jira', 'SQL', 'REST API'],
  },
  pos3: {
    companyName: 'NewAge.io',
    positionName: 'Technical Support \n DevOps Engineer',
    from: '06/2021',
    to: '12/2021',
    location: 'Kyiv, Ukraine',
    workType: 'Remote',
    desc: `
The position was a merger between L2-3 Technical Support and DevOps.
There was no separate DevOps department.

The company provides cloud infrastructure services.

Provided technical support, facilitated the development process, set configurations as per client's requirements, and changed them upon request.
Used Postman, JavaScript, kubectl, and Bash scripts.

This position was my first introduction into the DevOps side of things, it has taught me a lot, I much appreciate this experience.
    `,
    skills: [
      'Javascript',
      'Git',
      'Nginx',
      'Bash',
      'Linux',
      'Kubernetes',
      'Jenkins',
      'Postman',
      'Airflow',
      'AWS',
      'Python',
      'BitBucket',
      'CI/CD',
      'ElasticSearch',
      'Grafana',
      'Kibana',
      'Jira',
      'SQL',
      'Swagger',
      'REST API',
    ],
  },
  pos4: {
    companyName: 'LimTC',
    positionName: 'Customer Support Representative',
    from: '01/2021',
    to: '06/2021',
    location: 'Kyiv, Ukraine',
    workType: 'On-Site',
    desc: `
Provided B2C (Business-to-Client) customer support for an Internet Filtering solution.
    `,
  },
  pos5: {
    companyName: 'Shopping Cart Elite',
    positionName: 'Technical Support Specialist',
    from: '02/2020',
    to: '12/2020',
    location: 'Kyiv, Ukraine',
    workType: 'Remote',
    desc: `
Provided B2B (Business-to-Business) technical support for an E-Commerce solution.
    `,
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
