import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container,Col,Row } from "reactstrap";
import "../styles/cart.css"
import {motion} from 'framer-motion'
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length == 0 ? ( <h2 className="fs-4 text-center">Now Item Added To The Cart</h2> ) : (
                                    <table className="table bordered">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <motion.th whileTap={{scale: 1.2}}>Deleted</motion.th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                cartItems.map((item,index) => (
                                                    <Tr item={item} key={index} />
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                )
                            }
                        </Col>
                        <Col lg='3'>
                            <div>
                                <h6 className="d-flex align-items-center justify-content-between">Subtotal</h6>
                                <span className="fs-4 fw-bold">${totalAmount}</span>
                            </div>
                            <p className="fs-6 mt-2">taxes and shipping will calculate in checkout</p>
                            <div>
                            <button className="buy-btn w-100 "><Link to='/checkout'>Checkout</Link></button>
                                <button className="buy-btn w-100 mt-3"><Link to='/shop'>Continue Shopping</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = ({item}) => {
    const dispatch = useDispatch()

    const deleteProduct = ()=>{
        dispatch(cartActions.deleteItem(item.id))
    }
    return <tr>
    <td>
        <img src={item.imgUrl} alt="" />
    </td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}px</td>
    <td><motion.i whileTap={{scale: 1.2}} onClick={deleteProduct} class="ri-delete-bin-line"></motion.i></td>
</tr>
}
export default Cart