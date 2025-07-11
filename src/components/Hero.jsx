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
import { ButtonPrimary } from './Button';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3 ">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar.png"
                width={40}
                height={40}
                alt="Parth Kikani portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Intuitive Web and Mobile Experiences
          </h2>

          <div className="flex items-center gap-3 ">
            <ButtonPrimary
              href="https://drive.google.com/file/d/1xbSvrUm2hPiQsVZ4x80iRBS9JWXfOIbn/view?usp=sharing"
              target="_blank"
              label="Checkout my CV"
              icon="north_east"
            />
            {/* <ButtonPrimary
              href="/Parth_Kikani_CV.pdf"
              target="_blank"
              label="Download CV"
              icon="download"
            /> */}
            {/* <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            /> */}
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[380px] ml-auto  rounded-[50px] overflow-hidden">
            <img
              src="/images/profile-pic.jpeg"
              width={380}
              height={548}
              alt="Parth Kikani"
              //   className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
