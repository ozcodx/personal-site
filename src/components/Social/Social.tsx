import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import './Social.scss'

export const Social = () => {
  return (
    <section id="social" className="social">
      <div className="social-container">
        <div className="social-title">
          <h2>CONECTA CONMIGO</h2>
        </div>
        <div className="social-content">
          <div className="social-links">
            <a href="mailto:ozcodx@gmail.com" aria-label="Correo">
              <FaEnvelope size={32} />
              <span>Correo</span>
            </a>
            <a href="https://github.com/ozcodx" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={32} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/ozcodx" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={32} />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/ozkar.co/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={32} />
              <span>Instagram</span>
            </a>
            <a href="https://wa.me/573006274400" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={32} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 