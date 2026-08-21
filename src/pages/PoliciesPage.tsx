import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function PoliciesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Policies | Liquid Ko Space</title>
        <meta name="description" content="Refund policy, privacy policy, and terms of service for Liquid Ko Space foodservice supply." />
      </Helmet>
      <main>
        <section className="section bg-paper">
          <div className="container" style={{ maxWidth: '720px' }}>
            <h1 className="h1" style={{ marginBottom: '56px' }}>Policies</h1>

            {/* Refund Policy */}
            <div className="policy-section" id="refund">
              <h2 className="h2">Refund Policy</h2>
              <p>
                <strong>Our guarantee:</strong> Everything you approved, at your door on the day you choose, every week without fail.
              </p>
              <p>
                If any approved item is missing, substituted without your consent, or your order does not arrive on your scheduled delivery day, your delivery fee for that delivery is refunded in full.
              </p>
              <p>
                Refunds are processed via your original payment method within [X business days] of the issue being confirmed.
              </p>
              <p>
                Item cost is refunded separately where an item was faulty, spoiled on arrival, or not delivered.
              </p>
              <p style={{ color: '#6B7280', fontSize: '14px', fontStyle: 'italic' }}>
                Note: Replace [X business days] before launch.
              </p>
            </div>

            <hr className="divider" style={{ marginBottom: '56px' }} />

            {/* Privacy Policy */}
            <div className="policy-section" id="privacy">
              <h2 className="h2">Privacy Policy</h2>

              <h3 className="h3" style={{ marginTop: '24px', marginBottom: '12px' }}>What We Collect</h3>
              <ul>
                <li>Name, business name, contact number, email address</li>
                <li>Order details and delivery preferences</li>
              </ul>

              <h3 className="h3" style={{ marginTop: '24px', marginBottom: '12px' }}>How We Use It</h3>
              <ul>
                <li>To process and deliver your orders</li>
                <li>To contact you about your order status</li>
                <li>Your information is never sold to third parties</li>
              </ul>

              <h3 className="h3" style={{ marginTop: '24px', marginBottom: '12px' }}>Data Sharing</h3>
              <p>
                We only share your information with logistics partners as needed to fulfil your order delivery.
              </p>

              <h3 className="h3" style={{ marginTop: '24px', marginBottom: '12px' }}>Your Rights</h3>
              <p>
                You have the right to access, correct, or request deletion of your personal data at any time. Contact us at{' '}
                <a href="mailto:info@liquidkospace.co.za" style={{ color: '#0B9FB5', fontWeight: 600 }}>
                  info@liquidkospace.co.za
                </a>{' '}
                to exercise these rights.
              </p>

              <h3 className="h3" style={{ marginTop: '24px', marginBottom: '12px' }}>Contact</h3>
              <p>
                For any privacy-related queries, reach us at{' '}
                <a href="mailto:info@liquidkospace.co.za" style={{ color: '#0B9FB5', fontWeight: 600 }}>
                  info@liquidkospace.co.za
                </a>
              </p>
            </div>

            <hr className="divider" style={{ marginBottom: '56px' }} />

            {/* Terms of Service */}
            <div className="policy-section" id="terms">
              <h2 className="h2">Terms of Service</h2>

              <h3 className="h3" style={{ marginTop: '24px', marginBottom: '12px' }}>Orders and Payment</h3>
              <p>
                An order is confirmed once the cost breakdown has been sent to you and you have approved it. Payment is due as agreed per your account terms.
              </p>

              <h3 className="h3" style={{ marginTop: '24px', marginBottom: '12px' }}>Delivery</h3>
              <p>
                We provide weekly consolidated delivery on a scheduled day agreed between you and your account manager. Our on-time delivery guarantee applies to every confirmed order.
              </p>

              <h3 className="h3" style={{ marginTop: '24px', marginBottom: '12px' }}>Guarantee</h3>
              <p>
                Please refer to our <a href="#refund" style={{ color: '#0B9FB5', fontWeight: 600 }}>Refund Policy</a> above for full details of our delivery and quality guarantee.
              </p>

              <h3 className="h3" style={{ marginTop: '24px', marginBottom: '12px' }}>Cancellations</h3>
              <p>
                Orders may be cancelled before the 48-hour sourcing window begins. Once sourcing has started, cancellations may be subject to costs already incurred.
              </p>

              <h3 className="h3" style={{ marginTop: '24px', marginBottom: '12px' }}>Liability</h3>
              <p>
                Liquid Ko Space's liability is limited to the value of the goods ordered and the delivery fee paid. We are not liable for indirect or consequential losses arising from delayed or incomplete deliveries beyond the refund terms stated above.
              </p>

              <h3 className="h3" style={{ marginTop: '24px', marginBottom: '12px' }}>Governing Law</h3>
              <p>
                These terms are governed by the laws of the Republic of South Africa.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
