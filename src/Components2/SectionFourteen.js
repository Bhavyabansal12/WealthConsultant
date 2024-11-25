import React, { useState } from 'react';

const faq = [
    {
        faqHeading: 'What is Intelisys Ventures Private Limited?',
        faqDescription: 'Mr. Amit Jain is the founder of Intelisys Ventures Private Limited and a SEBI registered stock market research analyst.'
    },
    {
        faqHeading: 'Who is Mr. Amit Jain?',
        faqDescription: 'Mr. Amit Jain is the founder of Intelisys Ventures Private Limited and a SEBI registered stock market research analyst.'
    },
    {
        faqHeading: 'What is Intelisys Ventures Private Limited?',
        faqDescription: 'Mr. Amit Jain is the founder of Intelisys Ventures Private Limited and a SEBI registered stock market research analyst.'
    },
    {
        faqHeading: 'Who is Mr. Amit Jain?',
        faqDescription: 'Mr. Amit Jain is the founder of Intelisys Ventures Private Limited and a SEBI registered stock market research analyst.'
    },
    {
        faqHeading: 'What is Intelisys Ventures Private Limited?',
        faqDescription: 'Mr. Amit Jain is the founder of Intelisys Ventures Private Limited and a SEBI registered stock market research analyst.'
    },
    {
        faqHeading: 'Who is Mr. Amit Jain?',
        faqDescription: 'Mr. Amit Jain is the founder of Intelisys Ventures Private Limited and a SEBI registered stock market research analyst.'
    }
];

function SectionFourteen() {
    const [activeIndex, setActiveIndex] = useState(null);

    // Handle click to toggle accordion
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className="section_faq">
                <div className="padding-global-2">
                    <div className="container-large-2 w-container">
                        <h2 data-w-id="c2b20fba-a82f-44f9-1cd1-18eab57d57fb" className="gray-gradient-2 line-height-50 margin-bottom">
                            FAQs
                        </h2>
                        <div className="faq-wrapper">
                            <div className="theme-blue-white-faqs-collection-list-wrapper w-dyn-list">
                                <div role="list" className="theme-blue-white-faqs-collection-list w-dyn-items">
                                    <div role="list" className="theme-blue-white-faqs-collection-list">
                                        {
                                            faq.map((faqItems, index) => (
                                                <div
                                                    key={index} // Use index as the unique key
                                                    role="listitem"
                                                    className="theme-blue-white-faqs-collection-list-item"
                                                >
                                                    <div className="blue-white-faq-wrapper">
                                                        <div
                                                            data-w-id="93098733-3432-09e9-feab-aa0718297c01"
                                                            className="blue-white-faq-question-wrapper"
                                                            onClick={() => toggleAccordion(index)} // Toggle the accordion on click
                                                        >
                                                            <h3 className="question-text-6">{faqItems.faqHeading}</h3>
                                                            <img
                                                                src="https://cdn.prod.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec8_bx-plus.svg"
                                                                loading="lazy"
                                                                alt=""
                                                                className="blue-white-faq-icon"
                                                            />
                                                        </div>
                                                        {activeIndex === index && (
                                                            <div className="blue-white-faq-answer-wrapper" style={{ maxHeight: '200px', transition: 'max-height 0.4s ease' }}>
                                                                <div className="blue-white-answer-paragraph">
                                                                    {faqItems.faqDescription}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionFourteen;
