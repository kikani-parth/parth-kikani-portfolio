/**
 * @copyright 2025 Parth Kikani
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
    number: 240,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 text-[1.175rem]">
            Hi, I&apos;m Parth - a recent Information Technology graduate based
            in Helsinki, Finland. I&apos;m passionate about building smart,
            user-friendly solutions across Web, Mobile, and IoT platforms. Over
            the past few years, I&apos;ve worked on 15+ projects and completed a
            trainee role where I gained real-world experience developing apps
            and solving practical problems. Additionally, working with
            multicultural teams during my studies and internships has helped me
            become a better communicator, a more adaptable teammate, and a
            stronger developer overall. I bring a mix of creativity, solid
            technical expertise, and a strong work ethic.
          </p>
          <p className="text-zinc-300 mb-8 md:text-lg">
            <span className="block font-semibold text-sky-400 mb-1">
              What I&apos;m currently up to
            </span>
            Learning AWS and exploring how cloud services can make applications
            more scalable, efficient, and resilient.
          </p>
          <p className="text-zinc-300 mb-8 md:text-lg">
            <span className="block font-semibold text-sky-400 mb-1">
              Outside of tech
            </span>
            You&apos;ll often find me playing cricket, working out in the gym,
            or diving into video games. These keep me balanced and curious
            beyond the code.
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
