import React from 'react';
import heroThumb from '../assets/images/img2.jpg';

const Hero = () => {
  return (
    <section
      className="section video"
      id="top"
      data-section="section1"
      style={{ paddingTop: '60px', backgroundColor: '#FDF3F5' }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6">
            <div className="left-content">
              <span
                style={{
                  color: '#BD5579',
                  fontWeight: '600',
                  fontSize: '1rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                Welcome to WeMovers
              </span>
              <h2
                style={{
                  fontSize: '2.6rem',
                  fontWeight: '700',
                  margin: '20px 0 15px',
                  color: '#601D49',
                  lineHeight: '1.3',
                  textAlign: 'justify',
                }}
              >
                From Packing to Moving — <em style={{ color: '#BD5579', fontStyle: 'normal' }}>We Handle It All</em>
              </h2>
              <p
                style={{
                  textAlign: 'justify',
                  lineHeight: '1.8',
                  fontSize: '1rem',
                  color: '#555',
                  textAlign: 'justify',
                }}
              >
                 Moving is easier when every little part of the process is treated with the right kind of care. With WeMovers, we bring dependable moving and relocation services for people, households, and companies across Abu Dhabi, Dubai, and the UAE.   From careful packing and careful furniture handling, all the way through transport, on-time delivery, and international relocation support, our team handles the key details that show up with your move. We focus on protecting your belongings, keeping communication clear and steady… plus making the whole relocation journey feel organized, easy, and convenient.   So, whether you’re moving into a new house, updating your office area, or sending personal items overseas, WeMovers helps you move with a bit more confidence from the first step right up to final delivery. 
                     </p>
              <div className="main-button mt-4">
                
                 <a href="https://www.wemovers.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: '600',
                    color: '#fff',
                    backgroundColor: '#601D49',
                    padding: '12px 28px',
                    borderRadius: '6px',
                    display: 'inline-block',
                    textDecoration: 'none',
                    transition: '0.3s',
                  }}
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6">
            <div className="video-item">
              <figure>
                <img
                  src={heroThumb}
                  alt="Best Relocation Services in Abu Dhabi"
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 6px 20px rgba(96, 29, 73, 0.15)',
                    border: '4px solid #EA9D9D',
                  }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;