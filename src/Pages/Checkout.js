import React from "react";
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { useSelector } from "react-redux";
const Checkout = () => {
    const totalQty = useSelector(state=>state.cart.totalQuantity )
    const totalAmount = useSelector(state=>state.cart.totalAmount)
    return (
        <Helmet title="checkout">
            <CommonSection title="checkout" />
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <h6 className="mb-4 fw-bold">Billing Information</h6>
                            <Form className="billing_form">
                                <FormGroup className="form-group">
                                    <input type="text" placeholder="Enter Your Name" />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <input type="email" placeholder="Enter Your Email" />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <input type="number" placeholder="Phone Number" />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <input type="text" placeholder="Street Address" />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <input type="text" placeholder="City" />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <input type="text" placeholder="Postal Code" />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <input type="text" placeholder="Country" />
                                </FormGroup>
                            </Form>
                             
                        </Col>
                        <Col lg="4">
                            <div className="checkout_cart">
                                <h6>Total Qty: <span>{totalQty}</span></h6>
                                <h6>Subtotal: <span>${totalAmount}</span></h6>
                                <h6>
                                    <span>
                                      Shipping: <br/>
                                      Free Shipping
                                    </span> 
                                    <span>$0</span>
                                </h6>
                                <h4>Total Cost: <span>${totalAmount}</span></h4>
                                <button className="buy-btn auth_btn w-100">Place an Order</button>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
export default Checkout