import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  // 🎨 Same Theme
  const colors = {
    primary: "#601D49",
    accent: "#BD5579",
    softPink: "#EA9D9D",
    white: "#ffffff",
    text: "#333333",
    lightBg: "#fff7f9",
    border: "#ead5dd",
    muted: "#666666",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const contactInfo = [
    {
      icon: <Phone size={25} />,
      title: "Call Us",
      text: "+971 50 303 1084",
      link: "tel:+971503031084",
    },
    {
      icon: <Mail size={25} />,
      title: "Email Us",
      text: "info@wemovers.ae",
      link: "mailto:info@wemovers.ae",
    },
    {
      icon: <MapPin size={25} />,
      title: "Our Location",
      text: "Mussaffah M-33, Abu Dhabi, UAE",
      link: "https://www.google.com/maps/search/?api=1&query=Mussaffah+M-33+Abu+Dhabi",
    },
    {
      icon: <Clock size={25} />,
      title: "Working Hours",
      text: "Monday - Saturday",
      link: "#",
    },
  ];

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    border: `1px solid ${colors.border}`,
    borderRadius: "10px",
    outline: "none",
    fontSize: "0.95rem",
    color: colors.text,
    backgroundColor: colors.white,
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  };

  return (
    <section
      style={{
        backgroundColor: colors.white,
        padding: "90px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* ================= HEADER ================= */}
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto 55px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "8px 20px",
            borderRadius: "50px",
            backgroundColor: colors.lightBg,
            color: colors.accent,
            border: `1px solid ${colors.border}`,
            fontSize: "0.85rem",
            fontWeight: "700",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "18px",
          }}
        >
          Get In Touch
        </span>

        <h1
          style={{
            margin: "0 0 18px",
            color: colors.primary,
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: "800",
            lineHeight: "1.2",
          }}
        >
          Contact WeMovers
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: colors.muted,
            fontSize: "1.05rem",
            lineHeight: "1.8",
          }}
        >
          Planning a move? Our team is ready to help with home relocation,
          international moving, office relocation, freight, packing, and
          storage solutions.
        </p>
      </div>

      {/* ================= CONTACT CARDS ================= */}
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto 60px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "20px",
        }}
      >
        {contactInfo.map((item, index) => (
          <a
            key={index}
            href={item.link}
            style={{
              textDecoration: "none",
              backgroundColor: colors.white,
              border: `1px solid ${colors.border}`,
              borderRadius: "16px",
              padding: "25px 20px",
              display: "flex",
              alignItems: "center",
              gap: "17px",
              boxShadow:
                "0 5px 18px rgba(96, 29, 73, 0.06)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform =
                "translateY(-6px)";
              e.currentTarget.style.borderColor =
                colors.softPink;
              e.currentTarget.style.boxShadow =
                "0 12px 25px rgba(96, 29, 73, 0.12)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.borderColor =
                colors.border;
              e.currentTarget.style.boxShadow =
                "0 5px 18px rgba(96, 29, 73, 0.06)";
            }}
          >
            <div
              style={{
                minWidth: "52px",
                height: "52px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.softPink,
                color: colors.primary,
              }}
            >
              {item.icon}
            </div>

            <div>
              <h3
                style={{
                  margin: "0 0 5px",
                  color: colors.primary,
                  fontSize: "1rem",
                  fontWeight: "800",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: colors.muted,
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                }}
              >
                {item.text}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "35px",
          alignItems: "stretch",
        }}
      >
        {/* ================= CONTACT FORM ================= */}
        <div
          style={{
            backgroundColor: colors.lightBg,
            borderRadius: "22px",
            padding: "35px",
            border: `1px solid ${colors.border}`,
          }}
        >
          <div style={{ marginBottom: "25px" }}>
            <span
              style={{
                color: colors.accent,
                fontWeight: "700",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Send Us A Message
            </span>

            <h2
              style={{
                margin: "8px 0 10px",
                color: colors.primary,
                fontSize: "2rem",
                fontWeight: "800",
              }}
            >
              Request a Quote
            </h2>

            <p
              style={{
                margin: 0,
                color: colors.muted,
                lineHeight: "1.6",
              }}
            >
              Tell us about your move and our team will get back to you
              with more information.
            </p>
          </div>

          {submitted && (
            <div
              style={{
                padding: "13px 15px",
                borderRadius: "10px",
                backgroundColor: "#e8f7ee",
                color: "#247044",
                marginBottom: "20px",
                fontWeight: "600",
              }}
            >
              Thank you! Your message has been submitted successfully.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name + Email */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "15px",
                marginBottom: "15px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "7px",
                    color: colors.primary,
                    fontWeight: "700",
                    fontSize: "0.9rem",
                  }}
                >
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      colors.accent;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      colors.border;
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "7px",
                    color: colors.primary,
                    fontWeight: "700",
                    fontSize: "0.9rem",
                  }}
                >
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      colors.accent;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      colors.border;
                  }}
                />
              </div>
            </div>

            {/* Phone + Service */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "15px",
                marginBottom: "15px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "7px",
                    color: colors.primary,
                    fontWeight: "700",
                    fontSize: "0.9rem",
                  }}
                >
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      colors.accent;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      colors.border;
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "7px",
                    color: colors.primary,
                    fontWeight: "700",
                    fontSize: "0.9rem",
                  }}
                >
                  Service Required
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                  }}
                >
                  <option value="">
                    Select a service
                  </option>
                  <option value="Home Relocation">
                    Home Relocation
                  </option>
                  <option value="International Relocation">
                    International Relocation
                  </option>
                  <option value="Office Relocation">
                    Office Relocation
                  </option>
                  <option value="Global Freight">
                    Global Freight
                  </option>
                  <option value="Storage">
                    Storage
                  </option>
                  <option value="Packing">
                    Packing & Unpacking
                  </option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "7px",
                  color: colors.primary,
                  fontWeight: "700",
                  fontSize: "0.9rem",
                }}
              >
                Your Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your moving requirements..."
                rows="6"
                required
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor =
                    colors.accent;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor =
                    colors.border;
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: "100%",
                border: "none",
                cursor: "pointer",
                padding: "14px 25px",
                borderRadius: "50px",
                backgroundColor: colors.primary,
                color: colors.white,
                fontSize: "1rem",
                fontWeight: "800",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor =
                  colors.accent;
                e.currentTarget.style.transform =
                  "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor =
                  colors.primary;
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>

        {/* ================= MAP / INFO ================= */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Map */}
          <div
            style={{
              flex: 1,
              minHeight: "380px",
              borderRadius: "22px",
              overflow: "hidden",
              border: `1px solid ${colors.border}`,
              boxShadow:
                "0 8px 25px rgba(96, 29, 73, 0.08)",
            }}
          >
            <iframe
              title="WeMovers Location"
              src="https://www.google.com/maps?q=Mussaffah%20M-33%20Abu%20Dhabi%20UAE&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "380px",
              }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* WhatsApp Card */}
          <div
            style={{
              background:
                `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
              borderRadius: "20px",
              padding: "25px",
              color: colors.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: colors.softPink,
                  color: colors.primary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MessageCircle size={25} />
              </div>

              <div>
                <h3
                  style={{
                    margin: "0 0 5px",
                    fontSize: "1.1rem",
                  }}
                >
                  Need a Quick Response?
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontSize: "0.9rem",
                    opacity: 0.9,
                  }}
                >
                  Chat with our team on WhatsApp.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/971503034832"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                backgroundColor: colors.softPink,
                color: colors.primary,
                padding: "11px 22px",
                borderRadius: "50px",
                fontWeight: "800",
                whiteSpace: "nowrap",
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM MESSAGE ================= */}
      <div
        style={{
          maxWidth: "900px",
          margin: "65px auto 0",
          textAlign: "center",
          padding: "35px 25px",
          borderRadius: "20px",
          backgroundColor: colors.lightBg,
          border: `1px solid ${colors.border}`,
        }}
      >
        <h2
          style={{
            margin: "0 0 10px",
            color: colors.primary,
            fontSize: "1.8rem",
            fontWeight: "800",
          }}
        >
          Let's Make Your Move Simple
        </h2>

        <p
          style={{
            margin: 0,
            color: colors.muted,
            lineHeight: "1.7",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          Whether you're moving across Abu Dhabi, relocating within the UAE,
          or planning an international move, WeMovers is here to help you
          plan your relocation with confidence.
        </p>
      </div>
    </section>
  );
};

export default Contact;