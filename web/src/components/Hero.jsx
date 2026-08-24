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
                }}
              >
                From Packing to Delivery — <em style={{ color: '#BD5579', fontStyle: 'normal' }}>We Handle It All</em>
              </h2>
              <p
                style={{
                  textAlign: 'justify',
                  lineHeight: '1.8',
                  fontSize: '1rem',
                  color: '#555',
                }}
              >
                From packing to delivery, we deal with the lot to make your move easy and stress-free. Our group in Abu Dhabi looks after your{' '}
                <a href='https://www.wemovers.ae/blog/move-your-household-goods-safely-in-abu-dhabi' style={{ color: '#BD5579' }}>
                  household goods
                </a>{' '}
                with utmost care and safety.
                <br />
                <br />
                We package your objects properly, deliver them safely, and supply them on time for your new home. You don't want to worry about an aspect – we do all the difficult be just right for you. With us, your transferring journey will become simple, clean, and secure from start to completion.
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