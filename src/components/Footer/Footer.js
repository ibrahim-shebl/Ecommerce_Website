import React from "react";
import { Container,Row,Col,ListGroup,ListGroupItem} from "reactstrap"
import './footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4' className="mb-4" md='6'>
                        <div className="logo">
                            <div>
                                <h1 className="text-white">Smart Center</h1>
                            </div>
                        </div>     
                        <p className="footer-text mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia hic sapiente quod. Tempore, natus! Libero distinctio minima quidem voluptas iure.</p>
                    </Col>
                    <Col lg='3' md ='3' className="mb-4">
                        <div className="footer-quick-links">
                            <h4 className="quick-links-title">Top Categories</h4>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to = '#'>Mobile Phones</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to = '#'>Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to = '#'>Arm Chair</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to = '#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2' md='3' className="mb-4">
                        <div className="footer-quick-links">
                            <h4 className="quick-links-title">Useful Links</h4>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to = '/shop'>Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to = '/cart'>Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to = '/login'>Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to = '#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='4'>
                        <div className="footer-quick-links">
                            <h4 className="quick-links-title">Contact</h4>
                            <ListGroup className="footer-contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i class = "ri-map-pin-line"></i>
                                    </span>
                                    <p>Stadium Street, Shebin El-Kom, Menoufia</p>
                                </ListGroupItem>


                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i class = "ri-phone-line"></i>
                                    </span>
                                    <p>01025946540</p>
                                </ListGroupItem>


                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i class = "ri-mail-line"></i>
                                    </span>
                                    <p>ibra7im.shebl@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <p className="footer-copyright">Copyright {year} developed by Ibrahim Shebl.All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer