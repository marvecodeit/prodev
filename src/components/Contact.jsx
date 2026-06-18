import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-inner">
        <span className="section-label">CONTACT</span>
        <h2 className="section-title">Let's build something meaningful.</h2>

        <div className="contact-grid">
          <div className="contact-left">
            <p className="contact-intro">
              Open to discussing new opportunities, engineering collaborations,
              and innovative product ideas. Reach out and let's talk.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="detail-label">Email</span>
                <a href="mailto:ochornmapromise@gmail.com">
                  ochornmapromise@gmail.com
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/promise-ochornma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/promise-ochornma
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Location</span>
                <span>Remote</span>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Availability</span>
                <span>Open to freelance & full-time roles</span>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cf-name">Full Name</label>
                  <input id="cf-name" type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-email">Email</label>
                  <input id="cf-email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cf-subject">Subject</label>
                <input id="cf-subject" type="text" placeholder="Project inquiry" />
              </div>
              <div className="form-group">
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  rows="6"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
