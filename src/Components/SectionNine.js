import React from 'react'

function SectionNine() {
  return (
    <div>
        <section class="section_subscribe_now" style={{backgroundColor: 'rgb(244, 244, 244)'}}>
        <div class="offer_container container">
          <h1 class="offer_heading">Start Your Profitable Journey Today!</h1>
          <del class="int-price">Total Value: ₹19,999/-</del>
          {/* <!-- <div class="rounded-pill">
              <div class="discount_section">
                <h5 class="discount_text">90%</h5>
                <h5 class="discount_text">Discount</h5>
              </div>
              <div class="benefit_section">
                <h5 class="benefit_text">For 1 Month</h5>
                <h5 class="benefit_text">Subscription</h5>
              </div>
            </div> --> */}
          <h2 class="int-price discount_price">
            Today Price:
            <span class="int-price discount_price">₹ 1999/-</span>
          </h2>
          {/* <!-- <h6 class="gst_info">(18% GST also included)</h6> --> */}
          <h6 class="int-heading-text-2">
            *Already More Than a Thousand People Subscribed*
          </h6>
          <button class="btn cta-button cta-btn-clk" type="button">Start Now</button>
        </div>
      </section>
    </div>
  )
}

export default SectionNine