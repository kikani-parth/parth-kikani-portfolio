/**
 * @copyright 2025 Parth Kikani
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const navItems = [
  { label: 'Home', link: '#home' },
  { label: 'About', link: '#about' },
  { label: 'Experience', link: '#experience' },
  { label: 'Skills', link: '#skills' },
  { label: 'Projects', link: '#work' },
  { label: 'Contact', link: '#contact', className: 'md:hidden' },
];

const Navbar = ({ navOpen }) => {
  const [activeLink, setActiveLink] = useState(navItems[0].link);
  const linkRefs = useRef({});
  const activeBox = useRef();

  const moveActiveBox = (link) => {
    const el = linkRefs.current[link];
    if (!el || !activeBox.current) return;

    activeBox.current.style.top = el.offsetTop + 'px';
    activeBox.current.style.left = el.offsetLeft + 'px';
    activeBox.current.style.width = el.offsetWidth + 'px';
    activeBox.current.style.height = el.offsetHeight + 'px';
  };

  useEffect(() => {
    moveActiveBox(activeLink);
  }, [activeLink]);

  useEffect(() => {
    const handleResize = () => moveActiveBox(activeLink);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeLink]);

  useEffect(() => {
    const sections = navItems
      .map(({ link }) => document.querySelector(link))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link, className = '' }, key) => (
        <a
          href={link}
          key={key}
          ref={(el) => (linkRefs.current[link] = el)}
          className={
            'nav-link ' + (activeLink === link ? 'active ' : '') + className
          }
          onClick={() => setActiveLink(link)}
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
