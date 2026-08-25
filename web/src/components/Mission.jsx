import React from "react";

const Mission = () => {
  const bgColor = "#ffffff"; // White background
  const headingColor = "#BD5579"; // Blue headings
  const textColor = "#000000"; // Black text

  const sectionStyle = {
    backgroundColor: bgColor,
    padding: "60px 20px",
  };

  const headingStyle = {
    color: headingColor,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "40px",
  };

  const contentWrapper = {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "center",
    marginBottom: "60px",
  };

  const textStyle = {
    flex: "1 1 400px",
    color: textColor,
    fontSize: "1.1rem",
    lineHeight: "1.8",
    textAlign: "justify",
  };

  const imageStyle = {
    flex: "1 1 400px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    maxHeight: "350px",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <section style={sectionStyle}>
      <div className="container" id="mission">
        <h2 style={headingStyle}>Our Mission</h2>

        {/* First Row */}
        <div style={contentWrapper}>
          <div style={textStyle}>
            <p>
              At WeMovers, our mission is to make moving, relocation easier… kind of more sorted, less stressful too for our customers. We want to provide dependable support for home moves, business<a href="https://www.wemovers.ae/services/office-relocation" class="clickable-link" target="_blank">
                office relocations
              </a>, overseas deliveries, and even for the simple moving of personal belongings.
            <br/><br/>
            Every shipment is kinda unique; because of that, we spend time trying to understand what the customer actually needs before we even start planning the move. From packing and careful handling to transportation and final delivery, our crew kind of works so each step stays in sync, properly coordinated, not drifting off. I mean it.  
            </p>

          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
              alt="Cargo Truck"
              style={imageStyle}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;
