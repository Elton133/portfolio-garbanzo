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
  }
  ];

  const experience = [
    {
      title: 'Touch Stack Technologies - Frontend Developer',
      period: '2025 — Present',
      text: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'
    },
    {
      title: 'Stanbic Bank Ghana - Internship',
      period: '2025',
      text: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    },
    {
      title: 'Partechnologies and Consult',
      period: '2024',
      text: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    }
  ];

  const skills = [
    { name: 'Web design and development', value: 80 },
    { name: 'Mobile app development', value: 70 },
    { name: 'Blockchain concepts', value: 40 },
    { name: 'Artificial Intelligence', value: 20 },
    { name: 'CMS', value: 50 }
  ];

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
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
