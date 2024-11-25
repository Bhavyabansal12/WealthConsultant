import React from 'react'

function SectionSix() {
    return (
        <div>
            <div className="countdown-section offer_container count-down-bg">
                <div className="container">
                    <h1 className="timer-heading">Time Is Running Out!!!</h1>
                    <div className="countdown-container mb-0" style={{ position: 'relative' }}>
                        <div className="countdown-item">
                            <div className="countdown-value day-number" id="day-number">00</div>
                            <div className="countdown-label">Days</div>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-value hour-number" id="hour-number">12</div>
                            <div className="countdown-label">Hrs</div>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-value minute-number" id="minute-number">48</div>
                            <div className="countdown-label">Mins</div>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-value second-number" id="second-number">08</div>
                            <div className="countdown-label">Secs</div>
                        </div>
                    </div>
                    <button className="btn cta-button cta-btn-clk" type="button">
                        Yes!! I Want Calls From SEBI Regd Expert
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SectionSix