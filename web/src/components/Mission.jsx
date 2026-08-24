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
  At <a href="https://www.wemovers.ae/" class="clickable-link" target="_blank">
    Moving Personal Effects Internationally
  </a>, our project is to make global transferring easy, stable, and stress-free for each customer. 
  We know that individual property creates memories, comfort and purpose in addition to preserving monetary value. 
  We are dedicated to treating every shipment with the highest care and professionalism. 
  Furthermore, we aim to provide a piece of total mind during the entire moving process 
  from careful packing to easy customs withdrawal.
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
