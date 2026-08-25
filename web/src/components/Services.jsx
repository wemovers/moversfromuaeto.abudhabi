import { FaHome, FaBoxOpen, FaBuilding, FaShip } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHome className="service-icon" style={{ color: '#601D49' }} />,
      title: "Domestic Moving Services",
      description: "We provide safe and safe home moving services in Abu Dhabi, Dubai and UAE. As cheap movers, we make home changes easy, inexpensive and stress-free, protecting our valuable objects.",
      link: "https://www.wemovers.ae/services/home-relocation"
    },
    {
      icon: <FaBoxOpen className="service-icon" style={{ color: '#601D49' }} />,
      title: "Commercial Packing Services",
      description: "Our expert team provides careful, high-quality packing for your goods. We use strong materials to protect your objects during this step. In Abu Dhabi, Dubai and UAE, cheap moves trust us for reliable, safe packing services.",
      link: "https://www.wemovers.ae/services/commercial-freight-and-logistics"
    },
    {
      icon: <FaBuilding className="service-icon" style={{ color: '#601D49' }} />,
      title: "Office and Commercial Moving",
      description: "We handle the offices and commercial moves quickly and efficiently. Our cheap services ensure minimum trade downtime. Abu Dhabi, as cheap as moving in Dubai and the UAE, we make your business smooth and free from trouble.",
      link: "https://www.wemovers.ae/services/office-relocation"
    },
    {
      icon: <FaShip className="service-icon" style={{ color: '#601D49' }} />,
      title: "International Shipping Services",
      description: "We provide cheap and safe international shipping from Abu Dhabi. Whether going to Dubai, UAE, or abroad, our cheap moves in Abu Dhabi, Dubai and UAE ensure safe delivery of your household items worldwide.",
      link: "https://www.wemovers.ae/services/international-freight-forwarders"
    }
  ];

  return (
    <section className="services-section" id='service' style={{ backgroundColor: '#FDF3F5', }}>
      <style>{`
        .services-section {
          padding: 80px 0;
        }

        .services-section .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .services-section .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
        }

        .services-section .section-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .services-section .section-subtitle {
          font-size: 1rem;
          line-height: 1.7;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }

        .service-card {
          padding: 35px 25px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(96, 29, 73, 0.15);
          border-color: #BD5579;
        }

        .service-icon-container {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .service-card:hover .service-icon-container {
          transform: scale(1.08);
        }

        .service-icon {
          font-size: 28px;
        }

        .service-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .service-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #555;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .service-link {
          font-size: 0.95rem;
          text-decoration: none;
          transition: color 0.3s ease, gap 0.3s ease;
        }

        .service-link:hover {
          color: #601D49;
        }
      `}</style>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title" style={{ color: '#601D49' }}>
            Expert services in Abu Dhabi and the UAE
          </h2>
          <p className="section-subtitle" style={{ color: '#7a4a63' }}>
            Among Abu Dhabi shipping household items, we offer moving services in Abu Dhabi, Dubai and UAE. Abu Dhabi rely on as the best movers in Dubai and UAE, we ensure safe, smooth moves every time.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              style={{
                border: '1px solid #EA9D9D',
                backgroundColor: '#fff',
                borderRadius: '10px',
              }}
            >
              <div
                className="service-icon-container"
                style={{
                  backgroundColor: '#EA9D9D',
                  borderRadius: '50%',
                }}
              >
                {service.icon}
              </div>
              <h3 className="service-title" style={{ color: '#601D49' }}>{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="service-link"
                style={{ color: '#BD5579', fontWeight: '600' }}
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;