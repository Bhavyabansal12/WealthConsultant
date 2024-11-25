import React from 'react'

function SectionFive() {
    return (
        <div>
            <section className="wop-section">
                <div className="main-container">
                    <div className="wop-wrapper-div">
                        <div className="section-heading center">
                            <h2 className="section-heading-text">
                                Pricing
                            </h2>
                            <img src="https://cdn.prod.website-files.com/64ede0a591d8114fdaa0ae7f/64f7703d9b2b60a6b46a96d3_Vector.svg" loading="lazy" alt="" className="heading-shape" />
                        </div>
                        <div className="pricing-container">
                            <div className="pricing-card" onclick="selectCard(this)">
                                <h3>iOS Basics</h3>
                                <p className="price">$99.99</p>
                                <ul>
                                    <li>Introduction to Swift</li>
                                    <li>Basic App Development</li>
                                    <li>3-Month Access</li>
                                </ul>
                                <button className="btn">Choose iOS Basics</button>
                            </div>

                            <div className="pricing-card featured" onclick="selectCard(this)">
                                <h3>Advanced iOS</h3>
                                <p className="price">$199.99</p>
                                <ul>
                                    <li>Advanced Swift Concepts</li>
                                    <li>Complex UI Design</li>
                                    <li>6-Month Access</li>
                                    <li>Access to Weekly Webinars</li>
                                </ul>
                                <button className="btn">Choose Advanced iOS</button>
                            </div>

                            <div className="pricing-card" onclick="selectCard(this)">
                                <h3>Apple Ecosystem Mastery</h3>
                                <p className="price">$299.99</p>
                                <ul>
                                    <li>iOS, macOS, watchOS, tvOS</li>
                                    <li>Cross-Platform Integration</li>
                                    <li>1-Year Access</li>
                                    <li>Direct Expert Support</li>
                                </ul>
                                <button className="btn">Choose Ecosystem mater</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SectionFive