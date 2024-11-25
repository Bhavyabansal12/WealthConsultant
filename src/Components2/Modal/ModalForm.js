import React from 'react';
import './Modal.css';

function ModalForm({ closeModal }) {
    return (
        <div>
            <div id="id01" className="w3-modal" style={{ display: 'block' }}>
                <div className="w3-modal-content">
                    <div className="top">
                        <div className="header">Subscription Form</div>
                        <div className="close-btn">
                            <span onClick={closeModal} className="w3-button w3-display-topright closing-btn">
                                ×
                            </span>
                        </div>
                    </div>
                    <div className="w3-container modal-body">
                        <form action="./payment.php" method="POST">
                            <label for="fname">Name:</label><br />
                            <input required type="text" id="name" name="name" />
                            <input type="hidden" id="plan" name="plan" value="1" /><br />
                            <label for="lname">Email:</label><br />
                            <input required type="email" id="email" name="email" /><br />
                            <label for="fname">Mobile No:</label><br />
                            <input required type="number" id="mob" name="mob" minlength="10" maxlength="10" /><br /><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalForm;
