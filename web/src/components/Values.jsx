import React from "react";
import { FaHandshake, FaShieldAlt, FaStar, FaUsers } from "react-icons/fa";

const Values = () => {
  const bgColor = "#ffffff"; // White background
  const headingColor = "#BD5579"; // Blue headings
  const textColor = "#000000"; // Black text
  const accentColor = "#BD5579"; // Warm accent for icons/lines

  const sectionStyle = {
    backgroundColor: bgColor,
    padding: "60px 20px",
  };

  const headingStyle = {
    color: headingColor,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "50px",
  };

  const timelineWrapper = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "relative",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const valueItem = {
    flex: "1 1 250px",
    minWidth: "250px",
    margin: "20px",
    padding: "25px",
    borderLeft: `3px solid ${accentColor}`,
    background: "#FBF3F2",
    borderRadius: "10px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const valueItemHover = {
    transform: "translateY(-8px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: accentColor,
    marginBottom: "15px",
  };

  const titleStyle = {
    color: headingColor,
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const textStyle = {
    color: textColor,
    fontSize: "1rem",
    lineHeight: "1.6",
    textAlign:"justify",
  };

  // Values Data
  const values = [
    {
      icon: <FaHandshake style={iconStyle} />,
      title: "1. Customer Commitment",
      text: "We positioned our clients first, offering customized transferring solutions that ensure comfort, accept as true with, and peace of mind during each step of the relocation journey.",
    },
    {
      icon: <FaShieldAlt style={iconStyle} />,
      title: "2. Reliable Service",
      text: "Our team offers consistent, reliable assistance, coping with every item with care. We ensure assets arrive adequately and on time, making worldwide movements simple and stress-free",
    },
    {
      icon: <FaUsers style={iconStyle} />,
      title: "3. Professional Integrity",
      text: "Honesty and transparency guide our work. We talk clearly, take care of duties with admiration, and construct long-lasting accept as true with customers through truthful and ethical practices.",
    } 
  ];

  return (
    <section style={sectionStyle}>
      <div className="container" id="values">
        <h2 style={headingStyle}>Our Values</h2>
        <div style={timelineWrapper}>
          {values.map((value, index) => (
            <div
              key={index}
              style={valueItem}
              
            >
              {value.icon}
              <h3 style={titleStyle}>{value.title}</h3>
              <p style={textStyle}>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
