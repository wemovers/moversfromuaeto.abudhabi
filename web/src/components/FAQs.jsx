import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer complete international personal outcomes shifting offerings which includes packing, shipping, customs clearance, and transport. Whether it’s a few boxes or a whole household, we make sure safe and timely relocation. Our dedicated team manages each degree with professionalism, making your global circulate seamless, green, and completely stress-loose, regardless of in which inside the global you’re relocating."
  },
  {
    question: "How do you make certain object protection?",
    answer:
      "Item safety is our top precedence. We use durable packing substances, expert wrapping techniques, and steady loading strategies. Each shipment is cautiously classified, tracked, and monitored till it reaches its vacation spot. With skilled professionals handling your assets, we make sure most protection against harm, loss, or delays, supplying you with self belief and peace of thoughts throughout the relocation manner."
  },
  {
    question: "Do you take care of customs clearance?",
    answer:
      "Yes, our experienced team completely manages customs clearance for your cargo. We deal with all documentation, responsibilities, and prison necessities to save you pointless delays. By staying up to date with worldwide policies, we make the procedure clean and hassle-unfastened. Our expertise in customs guarantees that your belongings are introduced without headaches, saving you both time and further charges for the duration of relocation."
  },
  {
    question: "Can you pass small shipments?",
    answer:
      "Absolutely. We manage shipments of all sizes with the same care and precision. Whether it’s a single suitcase, a few cartons, or whole family assets, we customize our services to your desires. No pass is too small or too massive, and every shipment is dealt with attention, efficiency, and a robust dedication to dependable transport international."
  },
  {
    question: "How long does delivery take?",
    answer:
      "Shipping times vary depending on the delivery method, customs clearance process, and the destination of your choice. Generally, air shipments are quicker whilst sea shipments may additionally take longer however are value-effective. We offer clear time estimates, consistent updates, and obvious verbal exchange, so you continually recognize when to expect transport. Our group ensures clean coordination to keep your pass on schedule."
  },
  {
    question: "Why choose your corporation?",
    answer:
      "Choosing us manner trusting an associate that values safety, reliability, and purchaser pride. We combine years of global moving to revel in with a customized provider tailor-made to your desires. Our team guarantees every detail, from packing to customs, is controlled efficiently. With worldwide information and proper care, we make your relocation simple, stress-loose, and completely dependable from start to complete."
  }
];


const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section    id="faqs">
    <div
      style={{
        backgroundColor: "#fef6f0", // peach background
        padding: "60px 20px",
        fontFamily: "'Poppins', sans-serif"
      }}
   
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "40px",
          color: "#2c2c2c"
        }}
      >
        Frequently Asked Questions
      </h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto"
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              marginBottom: "15px",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              cursor: "pointer",
              transition: "0.3s ease"
            }}
            onClick={() => toggleFAQ(index)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  margin: 0,
                  color: "#333"
                }}
              >
                {faq.question}
              </h3>
              <FaChevronDown
                style={{
                  transform:
                    activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  color: "#e0a100" // mustard
                }}
              />
            </div>

            {activeIndex === index && (
              <p
                style={{
                  marginTop: "15px",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "#555",
                  textAlign:"justify"
                }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default FAQs;
