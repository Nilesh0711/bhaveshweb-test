import Layout, { PageHeading } from "../components/Layout";
import ContactMap from "../components/ContactMap";
export default function Contact() {
  return (
    <Layout title="Contact">
      <PageHeading title="Contact">
        <p>I can be contacted by email or phone.</p>
      </PageHeading>
      <div className="contact-layout">
        <dl className="contact-details">
          <div>
            <dt>Office email</dt>
            <dd>
              <a href="mailto:bhavesh@physics.iitm.ac.in">
                bhavesh@physics.iitm.ac.in ↗
              </a>
            </dd>
          </div>
          <div>
            <dt>Personal email</dt>
            <dd>
              <a href="mailto:gupta.bhavesh1605@gmail.com">
                gupta.bhavesh1605@gmail.com ↗
              </a>
            </dd>
          </div>
          <div>
            <dt>Academic email</dt>
            <dd>
              <a href="mailto:ph22d033@smail.iitm.ac.in">
                ph22d033@smail.iitm.ac.in ↗
              </a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href="tel:+919082140965">(+91) 9082140965</a>
            </dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>
              <address>
                617, Sindhu Tower Hostel,
                <br />
                IIT Madras, India - 600036
              </address>
            </dd>
          </div>
        </dl>
        <section className="map-section">
          <p className="eyebrow">Department of Physics · IIT Madras</p>
          <ContactMap />
        </section>
      </div>
    </Layout>
  );
}
