import React, { useState } from "react";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // 🎨 Theme Colors
  const colors = {
    primary: "#601D49",
    accent: "#BD5579",
    softPink: "#EA9D9D",
    white: "#ffffff",
    text: "#333333",
    lightBg: "#fff7f9",
    border: "#f0d6df",
  };

  const faqs = [
    {
      question: "What services does WeMovers provide?",
      answer:
        "WeMovers offers a bunch of moving and relocation stuff, kinda like domestic moving and home relocation, plus office and commercial moving. There is also packing, international relocation, shipping and freight, and some extra storage support as well.",
    },
    {
      question: "How can I get a moving quote from WeMovers?",
      answer:
        "You can get in touch with our team using a phone call, via email, or by filling out the quote form on our site. Just share a few specifics about your relocation work, like where you’re picking up from, the general area of arrival, what sort of things you’re relocating, and the day you’d rather have.",
    },
        {

      question: "Does WeMovers handle international relocations?",
      answer:
        "Yes, WeMovers helps with international relocation and the shipping of personal effects. You’ll have a team that can assist with packing, careful handling, transport coordination, and delivery planning, all based on where you are going and what your shipment actually needs",
    },
    {
      question: "Can WeMovers move office and commercial items?",
      answer:
        "Yes. We help companies with office and commercial moves, including furniture, equipment, files, and other business belongings, you know. The whole moving plan can be set up based on how big the business is and what it needs, such as specific requirements",
    },
  
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      style={{
        backgroundColor: colors.white,
        padding: "90px 20px",
        fontFamily: "Arial, sans-serif",
      }}
     id="faq">
      {/* Header */}
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto 55px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            backgroundColor: colors.lightBg,
            color: colors.accent,
            padding: "8px 20px",
            borderRadius: "50px",
            fontSize: "0.85rem",
            fontWeight: "700",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "18px",
            border: `1px solid ${colors.border}`,
          }}
        >
          WeMovers Support
        </div>

        <h2
          style={{
            color: colors.primary,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "800",
            margin: "0 0 18px",
            lineHeight: "1.2",
          }}
        >
          Frequently Asked Questions
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "1.05rem",
            lineHeight: "1.8",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Have questions about moving, relocation, packing, storage, or
          international shipping? Find helpful answers to some of the most
          common questions about WeMovers services.
        </p>
      </div>

      {/* FAQ Container */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              style={{
                marginBottom: "15px",
                borderRadius: "14px",
                border: `1px solid ${
                  isOpen ? colors.softPink : colors.border
                }`,
                backgroundColor: isOpen
                  ? colors.lightBg
                  : colors.white,
                overflow: "hidden",
                transition:
                  "all 0.3s ease",
                boxShadow: isOpen
                  ? "0 8px 25px rgba(96, 29, 73, 0.10)"
                  : "0 3px 12px rgba(96, 29, 73, 0.04)",
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "left",
                  padding: "22px 25px",
                  color: isOpen
                    ? colors.primary
                    : colors.text,
                  fontSize: "1.05rem",
                  fontWeight: "700",
                  lineHeight: "1.5",
                }}
              >
                <span
                  style={{
                    paddingRight: "20px",
                  }}
                >
                  {faq.question}
                </span>

                {/* Plus / Minus Icon */}
                <span
                  style={{
                    minWidth: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isOpen
                      ? colors.primary
                      : colors.softPink,
                    color: colors.white,
                    fontSize: "1.4rem",
                    fontWeight: "400",
                    transition: "all 0.3s ease",
                  }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: isOpen ? "500px" : "0",
                  overflow: "hidden",
                  transition:
                    "max-height 0.4s ease",
                    textAlign:"justify",
                }}
              >
                <div
                  style={{
                    padding: "0 25px 24px",
                    color: "#555",
                    fontSize: "0.98rem",
                    lineHeight: "1.8",
                    borderTop: `1px solid ${colors.border}`,
                    paddingTop: "18px",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Contact Box */}
      <div
        style={{
          maxWidth: "900px",
          margin: "55px auto 0",
          padding: "35px 30px",
          borderRadius: "20px",
          background: `linear-gradient(
            135deg,
            ${colors.primary},
            ${colors.accent}
          )`,
          textAlign: "center",
          boxShadow:
            "0 12px 30px rgba(96, 29, 73, 0.18)",
        }}
      >
        <h3
          style={{
            color: colors.white,
            fontSize: "1.6rem",
            margin: "0 0 10px",
            fontWeight: "800",
          }}
        >
          Still Have Questions?
        </h3>

        <p
          style={{
            color: "#ffffff",
            margin: "0 auto 22px",
            lineHeight: "1.6",
            maxWidth: "650px",
            textAlign:"justify",
          }}
        >
          Our relocation team is ready to help you understand your moving
          requirements and find the right solution for your move.
        </p>

        
      </div>
    </section>
  );
};

export default Faqs;