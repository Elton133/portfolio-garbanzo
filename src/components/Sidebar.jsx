import { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';

function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle Theme">
        <ion-icon name={theme === 'dark' ? 'sunny-outline' : 'moon-outline'}></ion-icon>
      </button>

      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/images/elton.png" alt="Elton John Morden" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Elton John Morden">Elton John Morden</h1>
          <p className="title">Software Engineer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:eltonmorden029@gmail.com" className="contact-link">
                eltonmorden029@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+233202540412" className="contact-link">
                +233 202 540 412
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">Gen Z</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Accra, Ghana</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="http://linkedin.com/in/elton-john-morden-9a7bb5261" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.instagram.com/_.el_ton?igsh=MjVhdXUzNDNudjZl&utm_source=qr" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>

        <MagneticButton style={{ display: 'block', width: '100%' }}>
          <a
            href="/assets/resume.pdf"
            download
            className="form-btn sidebar-cv-btn"
          >
            <ion-icon name="download-outline"></ion-icon>
            <span>Download my CV</span>
          </a>
        </MagneticButton>
      </div>
    </aside>
  );
}

export default Sidebar;
