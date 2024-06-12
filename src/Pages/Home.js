import React,{useEffect,useState} from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container,Row,Col } from "reactstrap";
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import Services from "../services/Services";
import Clock from "../components/UI/Clock";
import ProductList from "../components/UI/ProductsList";
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'


const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProduct] = useState([]);
    const [mobileProducts, setMobileProduct] = useState([]);
    const [wirelessProduct, setWirelessProduct] = useState([]);
    const [popularProduct, setPopularProduct] = useState([]);
    const year = new Date().getFullYear();


    useEffect(()=>{
        const filteredProducts = products.filter((item) => item.category == "chair");
        const filterBestSalesProducts = products.filter((item) => item.category == "sofa");
        const filteredMobileProducts = products.filter((item) => item.category == "mobile");
        const filteredWirelessProducts = products.filter((item) => item.category == "wireless");
        const filteredPopularProducts = products.filter((item) => item.category == "watch");

        setTrendingProducts(filteredProducts);
        setBestSalesProduct(filterBestSalesProducts);
        setMobileProduct(filteredMobileProducts);
        setWirelessProduct(filteredWirelessProducts);
        setPopularProduct(filteredPopularProducts);
    },[]);
    return <Helmet title={"Home"}>
        <section className="hero-section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero-content">
                            <p className="hero-subtitle">Trending Product In {year} </p>
                            <h2>Make Your Interior More Minimalistic & Modern</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia hic sapiente quod. Tempore, natus! Libero distinctio minima quidem voluptas iure.</p>
                            <motion.button whileTap={{scale : 1.2}} className="buy-btn">
                                <Link to="/shop">SHOP NOW</Link>
                                </motion.button>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="hero-img">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Services />

        <section className="trending-products">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section-title">Trending Products</h2>
                    </Col>
                    <ProductList data={trendingProducts} />
                </Row>
            </Container>
        </section>


        <section className="best-sales">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section-title">Best Sales</h2>
                    </Col>
                    <ProductList data={bestSalesProducts} />
                </Row>
            </Container>
        </section>


        <section className="timer-count">
            <Container>
                <Row>
                    <Col lg='6' md='12' className="count-down-col">
                        <div className="clock-top-content">
                            <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                            <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
                        </div>
                        <Clock />

                        <motion.button whileTap={{scale:1.2}} className="buy-btn store-btn">
                            <Link to="/shop">Visit Store</Link>
                            </motion.button>
                    </Col>
                    <Col lg='6' md='12' className="text-end counter_img">
                        <img src={counterImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>


        <section className="new-arrivals">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">

                        <h2 className="section-title">New Arrivals</h2>
                    </Col>
                    <ProductList data={mobileProducts} />
                    <ProductList data={wirelessProduct} />
                </Row>
            </Container>
        </section>

        <section className="popular-category">
            <Container>
                <Row>
                    <Col lg='12' className="text-center mb-5">

                        <h2 className="section-title">Popular in Category</h2>
                    </Col>
                    <ProductList data={popularProduct} />
                     
                </Row>
            </Container>
        </section>
    </Helmet>
};
export default Home