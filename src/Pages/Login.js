import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import '../styles/login.css'
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
     
    return (
        <Helmet title='login'>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" className="m-auto text-center">
                            <h3 className="fw-bold mb-4">Login</h3>
                            <Form className="auth_form" >
                                <FormGroup className="form-group">
                                    <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
                                </FormGroup>
                                <button type = "submit" className="buy-btn auth_btn">Login</button>
                                <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
                            </Form>
                        </Col>
                         
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
export default Login