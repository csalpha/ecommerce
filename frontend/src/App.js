import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignupScreen from './screens/SignupScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import MapScreen from './screens/MapScreen';
import AboutScreen from './screens/AboutScreen';
import ServiceScreen from './screens/ServiceScreen'
import DashboardScreen from './screens/DashboardScreen';
import SupportScreen from './screens/SupportScreen';
import QuoteScreen from './screens/QuoteScreen';
import ChatBox from './components/ChatBox';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from './Store';
import { getError } from './utils';
import Axios from 'axios';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBListGroup, 
  MDBListGroupItem,
  MDBInput,
} from 'mdb-react-ui-kit';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;

  
  
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  const [categories, setCategories] = useState([]);
  


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await Axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, [ctxDispatch]);

  console.log(categories);

  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? 'site-container active-cont d-flex flex-column'
            : 'site-container d-flex flex-column'
        }
      >
        <Helmet>
          <title>ECommerce website </title>
        </Helmet>
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Button
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>
              <LinkContainer to="/">
                <Navbar.Brand>Store</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <SearchBox />
                <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                    Cart
                    {cartItems.length > 0 && (
                      <span className='badge rounded-pill bg-danger'> 
                        {//use reduce function to calculate accumulator (a) and current item (c)
                        // default value to accumulator is zero
                        cartItems.reduce( (a, c) => a + c.quantity, 0)}
                      </span>
                    )}
                  </Link>
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>

                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}
                  {userInfo && userInfo.isSeller && (
                    <NavDropdown title="Seller" id="basic-nav-dropdown">
                      <LinkContainer to="/productlist/seller">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderlist/seller">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="basic-nav-dropdown">
                      <LinkContainer to="/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/productlist">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderlist">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/userlist">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/support">
                        <NavDropdown.Item>Support</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                
                <Link to="/about" className="nav-link">
                    About
                </Link>

                <Link to="/service" className="nav-link">
                    Services
                </Link>

                <Link to="/quote" className='nav-link'>
                  Quotes
                </Link>


                
                
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <div
          className={
            sidebarIsOpen
              ? ' active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        <main
          className="container mt-3"
          onClick={() => setSidebarIsOpen(false)}
        >
          <Routes>
            <Route path="/quote" element={<QuoteScreen />}></Route>
            <Route path="/service" element={<ServiceScreen />}></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/seller/:id" element={<SellerScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/cart/:id" element={<CartScreen />}></Route>

            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route
              path="/product/:id/edit"
              element={<ProductEditScreen />}
            ></Route>
            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/signup" element={<SignupScreen />}></Route>
            <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
            <Route path="/payment" element={<PaymentMethodScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
            <Route path="/order/:id" element={<OrderScreen />}></Route>
            <Route
              path="/orderhistory"
              element={<OrderHistoryScreen />}
            ></Route>
            <Route path="/search" element={<SearchScreen />}></Route>

            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfileScreen />
                </PrivateRoute>
              }
            />
            <Route
              path="/map"
              element={
                <PrivateRoute>
                  <MapScreen />
                </PrivateRoute>
              }
            />

            <Route
              path="/productlist"
              element={
                <AdminRoute>
                  <ProductListScreen />
                </AdminRoute>
              }
            />

            <Route
              path="/orderlist"
              element={
                <AdminRoute>
                  <OrderListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/userlist"
              element={
                <AdminRoute>
                  <UserListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/user/:id/edit"
              element={
                <AdminRoute>
                  <UserEditScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <AdminRoute>
                  <DashboardScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/support"
              element={
                <AdminRoute>
                  <SupportScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/productlist/seller"
              element={
                <SellerRoute>
                  <ProductListScreen />
                </SellerRoute>
              }
            />
            <Route
              path="/orderlist/seller"
              element={
                <SellerRoute>
                  <OrderListScreen />
                </SellerRoute>
              }
            />

            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </main>





            {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
            <div class="text-center"><i class="fas fa-ellipsis-h"></i></div>
            

<footer className='bg-dark'>
  <div className="container">
    <div className="row text-center mb-3">



     <div className="col-md-4 mb-3">

        <ul className="nav flex-column">
          <li class="nav-item">
            <span class="footer-title">Product</span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Product 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Product 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Plans & Prices</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Frequently asked questions</a>
          </li>
        </ul>
      </div>

      <div className="col-md-4 mb-3">
        <ul class="nav flex-column">
          <li className="nav-item">
            <span class="footer-title">Company</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About us</a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="#">Job postings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">News and articles</a>
          </li>
        </ul>
      </div>

      <div className="col-md-4 mb-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Contact & Support</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://wa.me/00351967389659" target="_blank"><i className="fas fa-phone"></i>+351 967 389 659</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://wa.me/00351967389659"><i className="fas fa-comments"></i>Live chat</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-envelope"></i>Contact us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-star"></i>Give feedback</a>
          </li>
          
        </ul>
      </div> 
    </div>

    {/* <div className="text-center"><i className="fas fa-ellipsis-h"></i></div> */}

    <div className="row text-center mb-3">
    <div class="col-md-12 box">
        <ul class="list-inline social-buttons">
        {/* <li class="list-inline-item">
            <a href="https://www.instagram.com/">
            <i class="fab fa-instagram"></i>
          </a>
          </li>          
          <li class="list-inline-item">
            <a href="https://www.facebook.com/">
            <i class="fab fa-facebook"></i>
          </a>
          </li>  */}
          <li class="list-inline-item">
            <a href="https://twitter.com/serodio_carlos" target="_blank" >
            <i class="fab fa-twitter"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="https://github.com/csalpha" target="_blank" >
            <i class="fab fa-github"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="linkedin.com/in/carlos-serôdio-0b3a05230" target="_blank" >
            <i class="fab fa-linkedin-in"></i>
          </a>
          </li>
          {/* <li class="list-inline-item">
            <a href="https://www.google.pt/search?ved=1t:65428&_ga=2.15921462.1215513500.1660145777-1981032716.1655712712&q=Carlos+Ser%C3%B4dio&ludocid=7134482983659233008&lsig=AB86z5WqXbAvS8l2oDK9PIKWnEhd#trex=m_t:lcl_akp,rc_ludocids:7134482983659233008,rc_q:Carlos%2520Ser%25C3%25B4dio,ru_gwp:0%252C7,ru_q:Carlos%2520Ser%25C3%25B4dio,trex_id:OdFIlc">
            <i class="fab fa-google"></i>
          </a>
          </li> */}
          <li class="list-inline-item">
            <a href="https://www.youtube.com/channel/UCJtSl1227biHNWp2fnSBQdQ" target="_blank" >
            <i class="fab fa-youtube"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="https://wa.me/00351967389659" target="_blank" >
            <i class="fab fa-whatsapp"></i>
          </a>
          </li>
        </ul>
      </div>
    </div>

    
    

    
    
    <div className="row text-center">

      <div class="col-md-12 box">
        <ul className=" list-inline quick-links">
          <li className="list-inline-item">
            <a className="footer-link" href="#">Conditions of Use</a>
          </li>
          <li className="list-inline-item">
            <a className="footer-link" href="#">Privacy Notice</a>
          </li>
          <li className="list-inline-item">
            <a className="footer-link" href="#">Interest-Based Ads</a>
          </li>
          <li className="list-inline-item">
          <span class="copyright quick-links"> &copy; {new Date().getFullYear()} Copyright:{' Carlos Serôdio'}
        </span>
        </li>
        </ul>

      </div>
      
    </div>
  </div>
</footer>


    </div>

    </BrowserRouter>
  );
}

export default App;


