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
        "WeMovers provides a wide range of relocation and logistics solutions, including home relocation, international relocation, office moving, commercial moving, global freight, packing and unpacking, and short-term and long-term storage solutions.",
    },
    {
      question: "How can I get a moving quote from WeMovers?",
      answer:
        "You can contact WeMovers through our website, phone, or email to request a moving quote. Our team can discuss your requirements, the type of items being moved, the destination, packing requirements, and other details before preparing a suitable quotation.",
    },
    {
      question: "Does WeMovers handle international relocations?",
      answer:
        "Yes. WeMovers offers international relocation services for individuals, families, and businesses. Our team can assist with packing, transportation, documentation, customs coordination, and delivery to the destination.",
    },
    {
      question: "Do you provide packing and unpacking services?",
      answer:
        "Yes. Professional packing and unpacking services are available. Items can be packed according to their type and handling requirements to help reduce the risk of damage during transportation.",
    },
    {
      question: "Can WeMovers move office and commercial items?",
      answer:
        "Yes. WeMovers provides office and commercial relocation services. The team can assist with moving office furniture, equipment, documents, and other business-related items while helping coordinate the move efficiently.",
    },
    {
      question: "Does WeMovers provide storage facilities?",
      answer:
        "Yes. WeMovers provides short-term and long-term storage solutions for customers who need a secure place to keep their belongings before, during, or after a relocation.",
    },
    {
      question: "Can you move furniture and large household items?",
      answer:
        "Yes. Our moving services can include furniture, appliances, household goods, personal belongings, and other large items. Proper handling and packing methods can be used depending on the nature of the item.",
    },
    {
      question: "Do you provide moving services outside the UAE?",
      answer:
        "Yes. WeMovers supports international relocation and freight requirements between the UAE and various international destinations. Services can be planned according to the destination, shipment type, and customer requirements.",
    },
    {
      question: "How early should I book my move?",
      answer:
        "It is generally recommended to arrange your move as early as possible, particularly for international relocations or larger household and commercial moves. Early planning provides more time for packing, documentation, transportation arrangements, and scheduling.",
    },
    {
      question: "Why should I choose professional movers?",
      answer:
        "Professional movers can make relocation easier by handling packing, loading, transportation, unloading, and other moving tasks in an organized manner. This can help reduce the physical workload, save time, and make the overall moving process more manageable.",
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
    >
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
          }}
        >
          Our relocation team is ready to help you understand your moving
          requirements and find the right solution for your move.
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            backgroundColor: colors.softPink,
            color: colors.primary,
            padding: "12px 28px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "800",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = colors.white;
            e.currentTarget.style.transform =
              "translateY(-3px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor =
              colors.softPink;
            e.currentTarget.style.transform =
              "translateY(0)";
          }}
        >
          Contact WeMovers →
        </a>
      </div>
    </section>
  );
};

export default Faqs;