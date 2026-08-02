/**
 * @copyright 2026 Parth Kikani
 * @license Apache-2.0
 */

import SkillCard from './SkillCard';

const skillGroups = [
  {
    category: 'Languages',
    items: [
      {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        level: 'Intermediate - Advanced',
      },
      {
        imgSrc: '/images/typescript.svg',
        label: 'TypeScript',
        level: 'Intermediate - Advanced',
      },
      {
        imgSrc: '/images/python.svg',
        label: 'Python',
        level: 'Intermediate - Advanced',
      },
    ],
  },
  {
    category: 'AI & Agentic Systems',
    items: [
      {
        imgSrc: '/images/genai-dev.svg',
        label: 'GenAI Application Development',
        level: 'Intermediate - Advanced',
      },
      {
        imgSrc: '/images/ai-eval.svg',
        label: 'AI/LLM Evaluation',
        level: 'Intermediate - Advanced',
      },
      {
        imgSrc: '/images/agentic-dev.svg',
        label: 'Agentic Development (Copilot, Kiro)',
        level: 'Intermediate - Advanced',
      },
    ],
  },
  {
    category: 'Testing & QA',
    items: [
      {
        imgSrc: '/images/cypress.svg',
        label: 'Cypress',
        level: 'Advanced',
      },
      {
        imgSrc: '/images/gitlab.svg',
        label: 'GitLab CI/CD',
        level: 'Advanced',
      },
      {
        imgSrc: '/images/githubactions.svg',
        label: 'GitHub Actions',
        level: 'Advanced',
      },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
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
      {
        imgSrc: '/images/nodejs.svg',
        label: 'NodeJS',
        level: 'Intermediate - Advanced',
      },
    ],
  },
  {
    category: 'Cloud & Databases',
    items: [
      {
        imgSrc: '/images/aws.svg',
        label: 'AWS',
        level: 'Intermediate',
      },
      {
        imgSrc: '/images/postgresql.svg',
        label: 'PostgreSQL',
        level: 'Intermediate',
      },
      {
        imgSrc: '/images/amazondynamodb.svg',
        label: 'DynamoDB',
        level: 'Intermediate',
      },
    ],
  },
];

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]  reveal-up">
          Discover the powerful tools and technologies I use in my daily
          workflow while showcasing my proficiency levels in each.
        </p>
        <div className="flex flex-col gap-8">
          {skillGroups.map(({ category, items }, groupKey) => (
            <div key={groupKey}>
              <h3 className="text-sky-400 font-semibold mb-3 reveal-up">
                {category}
              </h3>
              <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {items.map(({ imgSrc, label, level }, key) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
