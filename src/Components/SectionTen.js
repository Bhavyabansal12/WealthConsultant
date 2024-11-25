import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        testimonialName: 'Hema',
        testimonialPlace: 'Paid Service in Stock Cash, Stock Future(Mysore)',
        testimonialDesc: 'Very good service and I am benefited. The team provides reliable information and timely support whenever needed. Definitely value for money and excellent for beginners in trading, anyway. Thank you.'
    },
    {
        testimonialName: 'SIBASIS',
        testimonialPlace: 'Paid Service in Nifty Option, Stock Cash, Stock Option(BHUBANESWAR)',
        testimonialDesc: 'Hi, I have a paid service client and mostly working on Nifty Options & Stock Options. The service /call provided in-time and works very well. Most of the calls are hit the target. I am happy and may take the annual plan.'
    },
    {
        testimonialName: 'Ram',
        testimonialPlace: 'Paid Service in (Visakhapatnam)',
        testimonialDesc: 'Nice service. Always tries to minimization loss even if the trade goes wrong which is very much important. Proper analysis is also provided.'
    },
    {
        testimonialName: 'Akshay Jain',
        testimonialPlace: 'Paid Service in Nifty Option, Stock Cash, Stock Option(Udaipur)',
        testimonialDesc: 'Very nice service excellent calls! Exactly Accurate proper sl and Target! Recommended!!!!'
    },
    {
        testimonialName: 'Mitul Shah',
        testimonialPlace: 'Paid Service in Stock Future, Stock Option(Gujarat)',
        testimonialDesc: 'I recently joined only.your tips are really very good resurch. Perfect call and entry. Indtrady call is exellent. Your calls is simple awaysome. Exellent work....great sir....GOOD WORK????'
    }
]

function SectionTen() {
    const testimonialSlide = {
        loop: true,
        animateOut: 'fadeOut',
        margin: 10,
        navSpeed: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        autoplayHoverPause: true,
        navText: [
            "<i className='bx bx-chevron-left'></i>",
            "<i className='bx bx-chevron-right'></i>",
        ],
        responsive: {
            0: {
                items: 3,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1200: {
                items: 3,
            },
            margin: 5
        }
    };

    return (
        <div>
            <section className="wop-section">
                <div className="main-container">
                    <div className="wop-wrapper-div">
                        <div className="section-heading center">
                            <h2 className="section-heading-text">
                                Testimonials
                            </h2>
                            <img src="https://cdn.prod.website-files.com/64ede0a591d8114fdaa0ae7f/64f7703d9b2b60a6b46a96d3_Vector.svg" loading="lazy" alt="" className="heading-shape" />
                        </div>
                        <div className="testimonials-container">
                            <OwlCarousel className="owl-theme owl-carousel" {...testimonialSlide}>
                                {testimonials.map((testimonial) => (
                                    <div className="testimonial-card" key={testimonial.testimonialName}>
                                        <h3>{testimonial.testimonialName}</h3>
                                        <p className="quote">{testimonial.testimonialDesc}</p>
                                        <p className="role">{testimonial.testimonialPlace}</p>
                                        <div className='testimonialQuote'>
                                            <svg className="w-8 transition-[inherit] p-0" fill="rgb(243, 224, 247)" viewBox="0 0 259.43 367.5">
                                                <path d="M.53,0H255.84c15,14-23.29,233.58.07,367.5C255.91,367.5-13.49,272.51.53,0Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SectionTen;