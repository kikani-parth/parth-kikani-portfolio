/**
 * @copyright 2024 Parth Kikani
 * @license Apache-2.0
 */

/**
 * Node modules
 */

/**
 * Components
 */

const aboutItems = [
  {
    label: 'Projects done',
    number: 15,
  },
  {
    label: 'Months of experience',
    number: 6,
  },
  {
    label: 'Credits earned',
    number: 200,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hi, I&apos;m Parth, a fourth-year Information Technology student
            proficient in IoT, Web and Mobile development. I combine theoretical
            knowledge with practical application to deliver diverse and
            impactful projects. Collaborating with multicultural teams on
            academic initiatives has enhanced my adaptability and broadened my
            technical understanding. I bring a passion for innovation, a strong
            work ethic, and a proven ability to collaborate effectively.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
