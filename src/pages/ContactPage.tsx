import { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/27835238896?text=Hi%20Liquid%20Ko%20Space%2C%20I%27d%20like%20to%20start%20an%20order';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Build mailto body
    const body = [
      `Business Name: ${data.get('businessName')}`,
      `Contact Name: ${data.get('contactName')}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email') || 'Not provided'}`,
      ``,
      `What they need:`,
      `${data.get('needs')}`,
    ].join('\n');

    // Open mailto as fallback
    const mailtoUrl = `mailto:info@liquidkospace.co.za?subject=New Order Request from ${data.get('businessName')}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Start Your Order | Liquid Ko Space</title>
        <meta name="description" content="Get in touch with Liquid Ko Space to start your weekly foodservice order. WhatsApp, call, or email us." />
      </Helmet>
      <main>
        <section className="section bg-paper">
          <div className="container">
            <div className="two-col" style={{ alignItems: 'start' }}>
              {/* Left: Contact Details */}
              <div>
                <h1 className="h1" style={{ marginBottom: '20px' }}>Start Your Order</h1>
                <p className="body-large" style={{ marginBottom: '36px' }}>
                  The fastest way to get started is a WhatsApp message. We'll confirm your costs and delivery day within a few hours.
                </p>

                <div className="contact-info-item">
                  <MessageSquare className="icon" size={20} />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    083 523 8896
                  </a>
                </div>

                <div className="contact-info-item">
                  <Phone className="icon" size={20} />
                  <a href="tel:+27835238896">083 523 8896</a>
                </div>

                <div className="contact-info-item">
                  <Mail className="icon" size={20} />
                  <a href="mailto:info@liquidkospace.co.za">info@liquidkospace.co.za</a>
                </div>

                <div className="contact-info-item">
                  <Clock className="icon" size={20} />
                  <span>Mon–Fri, 09:00–17:00 SAST</span>
                </div>

                <p style={{ color: '#6B7280', fontStyle: 'italic', fontSize: '14px', marginTop: '32px', maxWidth: '400px', lineHeight: '1.6' }}>
                  Everything you approved, at your door on the day you choose, every week without fail. If not, your delivery fee is on us.
                </p>
              </div>

              {/* Right: Contact Form */}
              <div className="card">
                {submitted ? (
                  <div className="confirmation-message">
                    <CheckCircle className="icon" size={56} />
                    <h3>Request Sent</h3>
                    <p>Got it, we'll WhatsApp you back within a few hours to confirm your first order.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} id="contact-form">
                    <div className="form-group">
                      <label htmlFor="businessName" className="form-label">Business Name *</label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        className="form-input"
                        required
                        placeholder="e.g. Mama's Kitchen"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contactName" className="form-label">Contact Name *</label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        className="form-input"
                        required
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        required
                        placeholder="e.g. 083 123 4567"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email (optional)</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="needs" className="form-label">What does your kitchen need? *</label>
                      <textarea
                        id="needs"
                        name="needs"
                        className="form-textarea"
                        rows={4}
                        required
                        placeholder="Tell us what you need for your kitchen..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-submit" id="contact-submit">
                      Send your order request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
