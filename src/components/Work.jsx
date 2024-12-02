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
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/foodemy.png',
    title: 'Foodemy',
    tags: ['API', 'Mobile', 'UI/UX'],
    projectLink: 'https://github.com/kikani-parth/restaurant-search-app',
  },
  {
    imgSrc: '/images/car-map-mobile.png',
    title: 'Car Map',
    tags: ['Location Services', 'Mobile', 'Maps Integration'],
    projectLink: 'https://github.com/kikani-parth/rn-car-map',
  },
  {
    imgSrc: '/images/netflix-clone.png',
    title: 'Netflix Clone',
    tags: ['Video Streaming', 'API', 'Mobile'],
    projectLink: 'https://github.com/kikani-parth/netflix-clone',
  },
  {
    imgSrc: '/images/weather-station.png',
    title: 'Weather Station',
    tags: ['IoT', 'FreeRTOS', 'Data Visualization'],
    projectLink: 'https://github.com/kikani-parth/Weather_Station',
  },
  {
    imgSrc: '/images/co2-controller.png',
    title: 'CO2 Controller',
    tags: ['Automation', 'Embedded', 'FreeRTOS'],
    projectLink: 'https://github.com/kikani-parth/greenhouse-co2-controller',
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8"> My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
