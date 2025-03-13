import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import Eye Icon
import "../styles/payment.css";
import phonePeLogo from "../assets/images/phonepe.jpg"; 
import googlePayLogo from "../assets/images/googlepay.png"; 

const Payment = () => {
   const [paymentMethod, setPaymentMethod] = useState(null);
   const [cardDetails, setCardDetails] = useState({ number: "", pin: "" });
   const [showPin, setShowPin] = useState(false);
   const navigate = useNavigate();

   const handlePayment = () => {
      navigate("/success");
   };

   return (
      <section>
         <Container>
            <Row>
               <Col lg="8" className="m-auto">
                  <div className="payment__container">
                     <h2>Confirm Your Payment</h2>

                     {/* Payment Method Selection */}
                     <div className="payment-options">
                        <Button onClick={() => setPaymentMethod("upi")}>Pay with UPI</Button>
                        <Button onClick={() => setPaymentMethod("card")}>Pay with Credit/Debit Card</Button>
                     </div>

                     {/* UPI Payment Options */}
                     {paymentMethod === "upi" && (
                        <div className="upi-options">
                           <h4>Select UPI App</h4>
                           <div className="upi-apps">
                           <img src={phonePeLogo} alt="PhonePe" onClick={handlePayment} />
                           <img src={googlePayLogo} alt="Google Pay" onClick={handlePayment} />
                           <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" alt="Paytm" onClick={handlePayment} />
                           </div>
                        </div>
                     )}

                     {/* Credit/Debit Card Form */}
                     {paymentMethod === "card" && (
                        <div className="card-payment">
                           <h4>Enter Card Details</h4>
                           <input
                              type="text"
                              placeholder="Card Number (12 digits)"
                              value={cardDetails.number}
                              maxLength="12"
                              onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                           />
                           <div className="pin-container">
                              <input
                                 type={showPin ? "text" : "password"}
                                 placeholder="PIN"
                                 value={cardDetails.pin}
                                 onChange={(e) => setCardDetails({ ...cardDetails, pin: e.target.value })}
                              />
                              <span className="eye-icon" onClick={() => setShowPin(!showPin)}>
                                 {showPin ? <FaEyeSlash /> : <FaEye />}
                              </span>
                           </div>
                           <Button onClick={handlePayment}>Submit</Button>
                        </div>
                     )}
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default Payment;
