/**
 * @copyright 2024 Parth Kikani
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from './SkillCard';

const skillItems = [
  {
    imgSrc: '/images/c.svg',
    label: 'C',
    level: 'Intermediate',
  },
  {
    imgSrc: '/images/c++.svg',
    label: 'C++',
    level: 'Intermediate',
  },
  {
    imgSrc: '/images/html.svg',
    label: 'HTML',
    level: 'Intermediate',
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    level: 'Intermediate',
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    level: 'Intermediate - Advanced',
  },
  {
    imgSrc: '/images/typescript.svg',
    label: 'TypeScript',
    level: 'Beginner - Intermediate',
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    level: 'Intermediate',
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    level: 'Intermediate',
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    level: 'Intermediate - Advanced',
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    level: 'Intermediate - Advanced',
  },
  {
    imgSrc: '/images/react-native.svg',
    label: 'React Native',
    level: 'Intermediate - Advanced',
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]  reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites and applications, while
          showcasing my proficiency levels in each.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItems.map(({ imgSrc, label, level }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              level={level}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
