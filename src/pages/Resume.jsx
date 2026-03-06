import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Resume() {
  const education = [
    {
      title: 'Regional Maritime University',
      period: '2022 — 2026',
      text: 'Pursuing a degree in Information Technology, focusing on web development, software engineering, and practical IT solutions.'
    },
    {
      title: 'Udemy Web Developer Bootcamp',
      period: '2024 — Colt Steele',
      text: 'Completed a full-stack web development course covering HTML, CSS, JavaScript, Node.js, and front-end frameworks.'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      period: '2025',
      text: 'Earned certification demonstrating understanding of AWS cloud services, architecture, and best practices for deployment.'
    },
    {
      title: 'Spring Boot Developer Course',
      period: '2026 - CodeWithMosh',
      text: 'Building clean and secure RESTful APIs, implement authentication and role-based access control, integrate with Stripe for payment processing, and deploy your application to the cloud.'
    }
  ];

  const experience = [
    {
      title: 'Touch Stack Technologies - Frontend Developer',
      period: '2025 — Present',
      text: 'At Touch Stack Technologies, I work on multiple frontend projects across web and mobile platforms. I also serve as a project maintainer, handling issue resolution, regular package updates, and ensuring the platform runs smoothly. Frequent team syncs have strengthened my collaborative skills, while client review sessions have sharpened my ability to understand client perspectives and translate their ideas into polished, functional products through technical expertise.'
    },
    {
      title: 'Stanbic Bank Ghana - Internship',
      period: '2025',
      text: 'During my internship at Stanbic Bank, I gained hands-on experience in banking operations, customer service, and financial products.I assisted customers with debit card replacements, PIN changes, and cash deposit services, while also handling ID verifications, form processing, and accurate recordkeeping through scanning and ledger updates.'
    },
    {
      title: 'Partechnologies and Consult',
      period: '2024',
      text: 'I spearheaded frontend development for a deal sourcing platform, implementing responsive design and API integrations to deliver a seamless user experience. This involved extensive use of React, Tailwind CSS, Vite, Axios, React Hook Form, Zustand, Socket.io Client, Framer Motion, and Git/GitHub to build a scalable and maintainable product.'
    }
  ];

  const skills = [
    { name: 'Web design and development', value: 80 },
    { name: 'Mobile app development', value: 70 },
    { name: 'Blockchain concepts', value: 40 },
    { name: 'Artificial Intelligence', value: 20 },
    { name: 'CMS', value: 50 }
  ];

  const container = useRef();

  useGSAP(() => {
    gsap.from('.article-title', { y: -20, opacity: 0, duration: 0.8, ease: 'power3.out' });
    gsap.from('.timeline-item', { x: -30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' });
    gsap.from('.skills-item', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' });
  }, { scope: container });

  return (
    <article className="resume active" data-page="resume" ref={container}>
      <header>

      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li className="skills-item" key={index}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${skill.value}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Resume;
