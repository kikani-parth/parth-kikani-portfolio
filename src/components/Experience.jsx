/**
 * @copyright 2025 Parth Kikani
 * @license Apache-2.0
 */

/**
 * Node modules
 */

const experienceItems = [
  {
    role: 'Test Automation Engineer (Consultant)',
    company: 'Qaraton Technologies',
    client: 'Client: KONE',
    duration: 'Aug 2025 - Present',
    points: [
      'Built frontend features in React and backend functionality and APIs in Python, fixing bugs across both layers as they came up.',
      'Helped implement an AI agent using the strands-agents framework, handling 10+ categories of troubleshooting queries.',
      'Developed new agent and LLM features by implementing agent tools, writing prompts from scratch, and wiring LLM tasks, etc.',
      'Designed and maintained Cypress E2E test suites for a GenAI-powered troubleshooting application, growing frontend test coverage from 20% to 80% across 10+ critical user flows and cutting manual regression time by an estimated 70%.',
      'Built and ran AI evaluation tests assessing GenAI model answer quality, retrieval quality, faithfulness, and reliability, raising the AI evals pass rate from 25% to 85%.',
      'Performed API and backend testing to validate service integrations and data integrity, and maintained CI/CD pipelines to automate test execution and speed up release cycles.',
    ],
  },
  {
    role: 'Software Trainee',
    company: 'Reactron Technologies',
    client: null,
    duration: 'May 2024 - Nov 2024',
    points: [
      'Completed a structured 1:1 mentorship learning React and React Native from the ground up, with regular code reviews and assigned exercises from a senior developer.',
      'Built ~10 self-directed projects, including a PERN-stack book-tracking app with JWT auth and Google Books API integration, a car-locator app in both React and React Native with live geolocation, and a partial Netflix clone in React Native with TMDB API integration and video playback.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Work Experience</h2>
        <div className="flex flex-col gap-5">
          {experienceItems.map(
            ({ role, company, client, duration, points }, key) => (
              <div
                key={key}
                className="bg-zinc-800/50 p-7 rounded-2xl md:p-10 reveal-up"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold md:text-xl">
                      {role}
                    </h3>
                    <p className="text-sky-400 font-medium">
                      {company}
                      {client && (
                        <span className="text-zinc-400 font-normal">
                          {' '}
                          &middot; {client}
                        </span>
                      )}
                    </p>
                  </div>
                  <span className="text-zinc-400 text-sm whitespace-nowrap">
                    {duration}
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                  {points.map((point, pointKey) => (
                    <li key={pointKey}>{point}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
