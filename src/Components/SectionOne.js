import React, { useState, useEffect, useRef } from 'react';
import ModalOne from './Modal/ModalOne';
import ModalForm from './Modal/ModalForm';

function SectionOne() {
    const [isModalOneOpen, setIsModalOneOpen] = useState(false);
    const [isModalFormOpen, setIsModalFormOpen] = useState(false);
    const modalOneRef = useRef(null);
    const modalFormRef = useRef(null);

    // Open ModalOne
    const openModalOne = () => {
        setIsModalOneOpen(true);
    };

    // Close ModalOne
    const closeModalOne = () => {
        setIsModalOneOpen(false);
    };

    // Open ModalForm
    const openModalForm = () => {
        setIsModalFormOpen(true);
    };

    // Close ModalForm
    const closeModalForm = () => {
        setIsModalFormOpen(false);
    };

    // Close modal if clicked outside
    const handleClickOutside = (e) => {
        if (
            (modalOneRef.current && !modalOneRef.current.contains(e.target)) &&
            (modalFormRef.current && !modalFormRef.current.contains(e.target))
        ) {
            closeModalOne();
            closeModalForm();
        }
    };

    // Add event listener on mount and cleanup on unmount
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="banner hide-bg">
                <div className="container-xl">
                    <div className="hero_bg-image-wrapper">
                        <div className="hero-content_wrapper">
                            <div className="hero_content">
                                <div className="hero_heading-wrapper">
                                    <div className="div-block-37">
                                        <div className="div-block-36">
                                            <h1 className="hero_heading">
                                                <span className="_35px">Experience </span>
                                            </h1>
                                        </div>
                                        <div className="div-block-25">
                                            <h1 className="hero_heading">
                                                <span className="_35px text-blue">Options </span>
                                            </h1>
                                            <h1 className="hero_heading bg-text-shape">
                                                <span className="_35px text-blue">Trading</span>
                                            </h1>
                                        </div>
                                        <div className="div-block-25">
                                            <h1 className="hero_heading">
                                                <span className="_35px">Like Never Before in India</span>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="banner-pr-2">
                                        <div className="banner-im-wrapper mobile">
                                            <img
                                                src="https://service.intelisys.app/img/hero-img1.png"
                                                loading="eager"
                                                alt=""
                                                className="image-11"
                                            />
                                        </div>
                                        <p className="text-lg mt-20 mt-12">
                                            Get Nifty & BankNifty Options Calls by
                                            <span className="text-span-2">
                                                SEBI Registered Research Analyst Mr. Amit Jain!
                                            </span>
                                            Stop your losses and create a new income from options trading.
                                        </p>
                                    </div>
                                </div>
                                <div className="hero_button-wrapper">
                                    <button
                                        className="button-4 is-blue w-button cta-btn-clk"
                                        style={{ boxShadow: '0 0 10px 1px #cb9caf' }}
                                        type="button"
                                        onClick={openModalOne}
                                    >
                                        Yes! I want to Stop my Losses Permanently!!!
                                    </button>
                                    <div className="skill">
                                        <div className="progres-bar-2 card-bar">
                                            <div className="progress-bar__content _1"></div>
                                        </div>
                                        <div className="skill-header">
                                            <div className="card-text">
                                                <span className="sold-out-percentage">78.5</span>% sold out!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-block bg-gradiant">
                <div className="video-heading">
                    <p className="section-heading-pr-2 text-whte">
                        Watch This 100-Second Video from a SEBI-Registered Stock Market Expert!
                    </p>
                </div>
                <div className="video_wrapper">
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0px', width: '100%' }}>
                        <iframe
                            id="1"
                            src="https://fast.wistia.net/embed/iframe/b805j4k9gq"
                            title="nifty banknifty option tips"
                            frameborder="0"
                            allow="fullscreen"
                            style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%' }}
                        ></iframe>
                    </div>
                    <button id="rzp-button1" className="btn cta-button cta-btn-clk" type="button">
                        Unlock Your Options Trading Potential NOW!
                    </button>
                </div>
            </div>

            {/* Conditionally render ModalOne and ModalForm */}
            {isModalOneOpen && <ModalOne ref={modalOneRef} openModalForm={openModalForm} closeModal={closeModalOne} />}
            {isModalFormOpen && <ModalForm ref={modalFormRef} closeModal={closeModalForm} />}
        </>
    );
}

export default SectionOne;
