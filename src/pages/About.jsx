import { useState } from 'react';

function About() {
  const [modalData, setModalData] = useState(null);

  const services = [
    {
      icon: '/assets/images/icon-design.svg',
      title: 'Web design',
      text: 'The most modern and high-quality design made at a professional level.'
    },
    {
      icon: '/assets/images/icon-dev.svg',
      title: 'Web development',
      text: 'High-quality development of sites at the professional level.'
    },
    {
      icon: '/assets/images/icon-quote.svg',
      title: 'Currently done with the AWS CCP program',
      text: 'Taking a deep dive into Amazon Web Services next'
    }
  ];

  const testimonials = [
    {
      avatar: '/assets/images/avatar-1.png',
      name: 'Prince Selorm',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque assumenda officia accusantium amet, error ex exercitationem est nobis expedita dolores. Provident totam quis libero magni enim iusto itaque soluta facere.'
    },
    {
      avatar: '/assets/images/avatar-2.png',
      name: 'Jessica miller',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque assumenda officia accusantium amet, error ex exercitationem est nobis expedita dolores. Provident totam quis libero magni enim iusto itaque soluta facere.'
    },
    {
      avatar: '/assets/images/avatar-3.png',
      name: 'Emily evans',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      avatar: '/assets/images/avatar-4.png',
      name: 'Henry william',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    }
  ];

  // const clients = [
  //   '/assets/images/logo-1-color.png',
  //   '/assets/images/logo-2-color.png',
  //   '/assets/images/logo-3-color.png',
  //   '/assets/images/logo-4-color.png',
  //   '/assets/images/logo-5-color.png',
  //   '/assets/images/logo-6-color.png'
  // ];

  const openModal = (testimonial) => {
    setModalData(testimonial);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
       <p>
        I'm a Front-End Developer and I.T student from Ghana, passionate about creating clean, responsive, and visually engaging digital experiences.
        I love transforming ideas into functional and interactive interfaces that not only look great but feel effortless to use.
      </p>

      <p>
        My focus is on building smooth, user-friendly websites and apps that reflect both creativity and precision.
        Every project I take on gets a personal touch — I care about the flow, the details, and how users actually feel using it.
        My goal is simple: to blend design and technology in a way that brings your brand’s story to life on screen.
      </p>

      </section>

      {/* Service */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {services.map((service, index) => (
            <li className="service-item" key={index}>
              <div className="service-icon-box">
                <img src={service.icon} alt={`${service.title} icon`} width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <li className="testimonials-item" key={index}>
              <div 
                className="content-card" 
                data-testimonials-item
                onClick={() => openModal(testimonial)}
              >
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.avatar} alt={testimonial.name} width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>
                  {testimonial.name}
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>


      {modalData && (
        <div className="modal-container active" data-modal-container>
          <div className="overlay" data-overlay onClick={closeModal}></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn onClick={closeModal}>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={modalData.avatar} alt={modalData.name} width="80" data-modal-img />
              </figure>

              <img src="/assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                {modalData.name}
              </h4>

              <time dateTime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p>{modalData.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Clients */}
      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {clients.map((logo, index) => (
            <li className="clients-item" key={index}>
              <a href="#">
                <img src={logo} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section> */}
    </article>
  );
}

export default About;
