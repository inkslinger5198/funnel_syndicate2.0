import React, { useEffect } from "react";
import "./testimonial.css";
import test1 from "../../assets/Testimonials/2 main.jpg";
import test2 from "../../assets/Testimonials/1 main.jpg";
import test3 from "../../assets/Testimonials/3 main.jpg";
import test4 from "../../assets/Testimonials/5.jpg";

const Testimonial = () => {
  useEffect(() => {
    const dots = document.querySelectorAll('.dot');
    const content = document.querySelector('.scroll-content');
    const scrollItems = document.querySelectorAll('.scroll-item');
    const interval = 5000; // 3 seconds

    let currentIndex = 1;
    let timer;

    function startAutoSlide() {
      timer = setInterval(() => {
        currentIndex = (currentIndex + 1) % (scrollItems.length - 1);
        updateView();
      }, interval);
    }

    function stopAutoSlide() {
      clearInterval(timer);
    }

    function updateView() {
      content.style.transform = `translateX(-${currentIndex * 220}px)`; // Adjust 220px to match image width + margin
      updateDots();
    }

    function updateDots() {
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateView();
        stopAutoSlide();
        startAutoSlide();
      });

      startAutoSlide();

      return () => {
        stopAutoSlide();
      };
    });
  }, []);

  return (
    <div className="testimonials section__padding" id="testimonial">
      <h1 className="testimonials-header gradient__text">TESTIMONIALS</h1>
      <div className="scroll-container-testimonial">
        <div className="scroll-content">
          <div className="scroll-item">
            <img src={test1} alt="Image 1" />
          </div>
          <div className="scroll-item">
            <img src={test2} alt="Image 2" />
          </div>
          <div className="scroll-item">
            <img src={test3} alt="Image 3" />
          </div>
          <div className="scroll-item">
            <img src={test4} alt="Image 4" />
          </div>
          {/* Duplicate the first image to achieve a seamless loop */}
          <div className="scroll-item">
            <img src={test1} alt="Image 1" />
          </div>
          <div className="scroll-item">
            <img src={test2} alt="Image 2" />
          </div>
        </div>
      </div>

      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Testimonial;
