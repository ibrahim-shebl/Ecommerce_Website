import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import '../styles/login.css'
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    

    
    return (
        <Helmet title='signup'>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" className="m-auto text-center">
                           <h3 className="fw-bold mb-4">Signup</h3>
                            <Form className="auth_form" >
                                <FormGroup className="form-group">                                     
                                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}  />
                                </FormGroup>
                                <FormGroup className="form-group">                                    
                                    <input type="email" placeholder="Enter Your Email" value={email}  onChange={(e) => setEmail(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form-group">               
                                    <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
                                </FormGroup>
                                <button type = "submit" className="buy-btn auth_btn">Create an account</button>
                                <p>Already have an account? <Link to='/login'>Login</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
export default Signup