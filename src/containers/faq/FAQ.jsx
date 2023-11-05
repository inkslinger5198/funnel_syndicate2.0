import React, { useEffect } from "react";
import "./faq.css";

const FAQ = () => {
  useEffect(() => {
    const faqItems = document.querySelectorAll(".faq");

    faqItems.forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className="FS__FAQ section__padding">
      <h1 className="FAQ-header gradient__text">FREQUENTLY ASKED QUESTIONS</h1>

      <div className="faqs-container">
        <div className="faq active">
          <h3 className="faq-title">
            How quickly do I see results with your approach?
          </h3>
          <p className="faq-text">
            The speed of results with our high-ticket funnel approach varies,
            influenced by your starting point, engagement level, and audience.
            While some see progress in weeks, for others, it takes months. We
            prioritize lasting success over quick fixes, tailoring strategies to
            your unique needs.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">
            Why should I choose you over other agencies?
          </h3>
          <p className="faq-text">
            We serve you as an All In One funnel agency who help you with email
            marketing and building sales funnel to monetize your audience. The
            process is streamlined so you don't need to hire multiple agencies
            to grow.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">What platforms do you help with?</h3>
          <p className="faq-text">
            We help craft high-ticket funnels on platforms like TikTok,
            Instagram, YouTube, and soon Twitter, strategically cultivating
            personal brands and seamlessly converting audiences into premium
            clients.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">Is this DFY or DWY?</h3>
          <p className="faq-text">
            Our program is designed as DWY – "Done With You," meaning we work
            closely with you throughout the process to ensure your active
            involvement and collaboration in building your high-ticket funnel
            for optimal results.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">
            Why must I qualify before I can work with you?
          </h3>
          <p className="faq-text">
            Qualification guarantees a strategic fit. We excel with clients who
            possess industry understanding and audience insights. This ensures
            tailored high-ticket funnels for optimal results.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">What is the pricing for this?</h3>
          <p className="faq-text">
            The pricing for our service is tailored to your specific needs.
            Since we offer a range of services customized to each client, the
            cost depends on your unique requirements. This approach ensures you
            receive precisely what your business needs to build a successful
            high-ticket funnel.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
