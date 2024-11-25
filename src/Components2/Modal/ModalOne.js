import React from 'react'
import './Modal.css'

function ModalOne({ openModalForm, closeModal }) {
    const handleBuyNowClick = () => {
        openModalForm(); // Open ModalForm
        closeModal(); // Close ModalOne
    };
    return (
        <div>
            <div id="id02" class="w3-modal" style={{display: 'block'}}>
                <div class="w3-modal-content">
                    <div class="top">
                        <div class="header">
                            <div class="choose-plan">
                                <h2>Choose Your Plan</h2>
                            </div>
                        </div>
                        <div class="close-btn">
                            <span onclick="document.getElementById('id02')" onClick={closeModal}
                                 class="w3-button w3-display-topright closing-btn">×</span>
                        </div>

                    </div>
                    <div class="w3-container modal-body modal-body-2">

                        <div class="offers-modal">
                            <div id="ih960f" class="gjs-ft-column gjs-ft-col-md" onClick={handleBuyNowClick}>
                                <h1 id="ip8bub" class="ftheadline"></h1>
                                <h1 id="iuwry9" class="ftheadline">
                                    <font><span><b>
                                        <font class="ftfont_971">
                                            <font color="#ffffff" class="ftfont_586">Discounted Price</font>
                                        </font>
                                    </b></span></font>
                                </h1>
                                <h1 id="iwku5m" class="ftheadline">₹1,999  + GST</h1>
                                <h1 data-animate="animate__animated animate__flash" id="ibml03" class="ftheadline animate__animated animate__flash">
                                    <font><span><b>For 1 Month</b></span></font>
                                </h1>
                                <div id="ibuydy"><a href="#" id="ikj931" class="gjs-btn"><span id="i6ybg8" class="ffbtnmaintxt"><span id="ivn99l" class="ffbtntxt">BUY NOW</span></span><span id="i0urbi" class="ffbtnsubtxt"></span></a></div>
                            </div>
                            <div id="ih960f" class="gjs-ft-column gjs-ft-col-md" onClick={handleBuyNowClick}>
                                <h1 id="ip8bub" class="ftheadline"></h1>
                                <h1 id="iuwry9" class="ftheadline">
                                    <font><span><b>
                                        <font class="ftfont_971">
                                            <font color="#ffffff" class="ftfont_586">1 MONTH FREE</font>
                                        </font>
                                    </b></span></font>
                                </h1>
                                <h1 id="iwku5m" class="ftheadline">₹3,998 + GST</h1>
                                <h1 data-animate="animate__animated animate__flash" id="ibml03" class="ftheadline animate__animated animate__flash">
                                    <font><span><b>For 3 Month</b></span></font>
                                </h1>
                                <div id="ibuydy"><a href="#" id="ikj931" class="gjs-btn"><span id="i6ybg8" class="ffbtnmaintxt"><span id="ivn99l" class="ffbtntxt">BUY NOW</span></span><span id="i0urbi" class="ffbtnsubtxt"></span></a></div>
                            </div>
                            <div id="ih960f" class="gjs-ft-column gjs-ft-col-md" onClick={handleBuyNowClick}>
                                <h1 id="ip8bub" class="ftheadline"></h1>
                                <h1 id="iuwry9" class="ftheadline">
                                    <font><span><b>
                                        <font class="ftfont_971">
                                            <font color="#ffffff" class="ftfont_586">2 MONTH FREE</font>
                                        </font>
                                    </b></span></font>
                                </h1>
                                <h1 id="iwku5m" class="ftheadline">₹7,996  + GST</h1>
                                <h1 data-animate="animate__animated animate__flash" id="ibml03" class="ftheadline animate__animated animate__flash">
                                    <font><span><b>For 6 Month</b></span></font>
                                </h1>
                                <div id="ibuydy"><a href="#" id="ikj931" class="gjs-btn"><span id="i6ybg8" class="ffbtnmaintxt"><span id="ivn99l" class="ffbtntxt">BUY NOW</span></span><span id="i0urbi" class="ffbtnsubtxt"></span></a></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOne