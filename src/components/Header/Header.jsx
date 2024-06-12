import React, { useRef } from "react";
import './Header.css'
import logo from '../../assets/images/eco-logo.png'
import { Container,Row } from "reactstrap";
import {Link, NavLink,useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { useSelector } from "react-redux";
import user_icon from '../../assets/images/user-icon.png'


const nav_link = [
    {
        path: 'home',
        display: 'Home'
    } ,
    {
        path: 'shop',
        display: 'Shop'
    } ,
    {
        path: 'cart',
        display: 'Cart'
    }    
    ]


const  Header = () => {
    const headerRef = useRef(null);
    const totalQuantity = useSelector(state=> state.cart.totalQuantity)
     
    const menuRef = useRef(null);
    const navigate = useNavigate()
    const stickyHeaderFunc = () => {
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add("sticky_header")
            }else {
                headerRef.current.classList.remove("sticky_header")
            }
        });
    };


    useEffect(()=>{
        stickyHeaderFunc()

        return ()=> window.removeEventListener('scroll', stickyHeaderFunc);
    });

    const menuToggle = () => {
        menuRef.current.classList.toggle('active-menu')
    }

    const navigateToCart = () => {
        navigate("/cart")
    };

    return <header className="header" ref={headerRef}> 
        <Container>
            <Row>
                <div className="nav-wrapper">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <div>
                            <h1>Smart Center</h1>
                        </div>
                    </div>
                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
                        <ul className="menu">
                            {nav_link.map((item,index)=> (
                                <li className="nav-item" key={index}>
                                <NavLink to={item.path} className={(navClass)=>
                                navClass.isActive ? "nav_active" : ""}>{item.display}</NavLink>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav_icon">
                        <span className="fav_icon">
                            <i class="ri-heart-line"></i>
                            <span className = "badge">2</span>
                        </span>
                        <span className="cart_icon" onClick={navigateToCart}>
                            <i class="ri-shopping-bag-line"></i>
                            <span className = "badge">{totalQuantity}</span>
                        </span>
                        <span className="profile">
                            <Link to='/login'><img src={user_icon} alt="user_icon" /></Link>
                        </span>
                        <div className="mobile_menu">
                            <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
                        </div>
                    </div>
                </div>    
            </Row> 
        </Container>  
        
    </header>   
    };    

export default Header;









 