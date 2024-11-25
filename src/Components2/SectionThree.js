import React from 'react'

function SectionThree() {
    return (
        <div>
            <section className="section_subscribe_now" style={{backgroundColor: "rgb(244, 244, 244)"}}>
                <div className="offer_container container">
                    <h1 className="offer_heading">Limited Time Offer!</h1>
                    <del className="int-price">Total Value: ₹19,999/-</del>
                    <div className="rounded-pill">
                        <div className="discount_section">
                            <h5 className="discount_text">90%</h5>
                            <h5 className="discount_text">Discount</h5>
                        </div>
                        <div className="benefit_section">
                            <h5 className="benefit_text">For 1 Month</h5>
                            <h5 className="benefit_text">Subscription</h5>
                        </div>
                    </div>
                    <h2 className="int-price discount_price">
                        Today Price:
                        <span className="int-price discount_price">₹ 1999/-</span>
                    </h2>
                    {/* <!-- <h6 className="gst_info">(18% GST also included)</h6> --> */}
                    <h6 className="int-heading-text-2">
                        *Already More Than a Thousand People Subscribed*
                    </h6>
                    <button id="rzp-button1" className="btn cta-button cta-btn-clk" type="button">
                        Yes!!! I Want To Make Consistent Profits
                    </button>
                </div>
            </section>
        </div>
    )
}

export default SectionThree