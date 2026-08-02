/**
 * @copyright 2026 Parth Kikani
 * @license Apache-2.0
 */

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 text-[1.175rem]">
            Hi, I&apos;m Parth, a Software Engineer based in Helsinki, Finland.
            I work as a Test Automation Engineer consultant at Qaraton
            Technologies. Though my formal scope is test automation, I usually
            wear many hats - building and testing GenAI web and mobile
            applications on agentic AI architecture for our client KONE,
            building React and Python features, wiring up AI agents and LLM
            tasks, and building AI evaluation along with Cypress and CI/CD
            pipelines that keep it all reliable.
          </p>
          <p className="text-zinc-300 mb-8 md:text-lg">
            <span className="block font-semibold text-sky-400 mb-1">
              What I&apos;m currently up to
            </span>
            Growing AI evaluation and agentic development/testing practices so that AI can steal my job :)
          </p>
          <p className="text-zinc-300 md:text-lg">
            <span className="block font-semibold text-sky-400 mb-1">
              Outside of tech
            </span>
            You&apos;ll often find me playing cricket, working out in the gym,
            or diving into video games.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
