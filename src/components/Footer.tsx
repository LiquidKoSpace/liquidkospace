import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Logo + Tagline */}
          <div>
            <div className="footer-logo">Liquid Ko Space</div>
            <p className="footer-tagline">
              One call. One consolidated delivery. Every week for independent food businesses across Gauteng.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <div className="footer-heading">Quick Links</div>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div>
            <div className="footer-heading">Contact</div>
            <div className="footer-links">
              <a href="mailto:info@liquidkospace.co.za">info@liquidkospace.co.za</a>
              <a href="tel:+27835238896">083 523 8896</a>
            </div>
          </div>

          {/* Col 4: Availability */}
          <div>
            <div className="footer-heading">Availability</div>
            <div className="footer-links">
              <span>Mon–Fri, 09:00–17:00 SAST</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 Liquid Ko Space</span>
          <div className="footer-bottom-links">
            <Link to="/policies#privacy">Privacy</Link>
            <Link to="/policies#terms">Terms</Link>
            <Link to="/policies#refund">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
