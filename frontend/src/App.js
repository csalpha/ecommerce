// import
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
import Footer from './components/Footer';
import SearchScreen from './screens/SearchScreen';
import MapScreen from './screens/MapScreen';
import AboutScreen from './screens/AboutScreen';
import ServiceScreen from './screens/ServiceScreen';
import ContactScreen from './screens/ContactScreen';
import CareerScreen from './screens/CareerScreen';
import DashboardScreen from './screens/DashboardScreen';
import SupportScreen from './screens/SupportScreen';
import CondictionsUseScreen from './screens/CondictionsUseScreen';
import PrivacyNoticeScreen from './screens/PrivacyNoticeScreen';
import ResourceScreen from './screens/ResourceScreen';
import InterestBasedAdsScreen from './screens/InterestBasedAdsScreen';
import QuoteScreen from './screens/QuoteScreen';
import ChatBox from './components/ChatBox';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from './Store';
import { getError } from './utils';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faEllipsisVertical,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

// main function
function App() {
  /* get state and dispatch from useContext */
  const {
    state, // get state
    dispatch: ctxDispatch, // rename dispatch to ctxDispatch
  } = useContext(
    Store // parameter
  );

  /* get cart and userInfo from the state */
  const {
    cart, //get cart from the state
    userInfo, //get userInfo from the state
  } = state;

  // get array from the useState hook
  const [
    sidebarIsOpen, // [0]
    setSidebarIsOpen, // [1]
  ] = useState(
    false // parameter
  );

  const {
    cartItems, // get cartItems from the cart
  } = cart;

  // define signoutHandler function
  const signoutHandler = () => {
    // dispatch
    ctxDispatch({
      type: 'USER_SIGNOUT', // action.type = 'USER_SIGNOUT'
    });

    // remove items from localStorage
    localStorage.removeItem(
      'userInfo' // pass parameter: 'userInfo'
    );
    localStorage.removeItem(
      'cartItems' // pass parameter: 'cartItems'
    );
    localStorage.removeItem(
      'shippingAddress' // pass parameter: 'shippingAddress'
    );
    localStorage.removeItem(
      'paymentMethod' // pass parameter: 'paymentMethod'
    );

    // redirect to signin page
    window.location.href = '/signin';
  };

  const [
    categories, // [0] - get categories from useState
    setCategories, // [1] - get setCategories from useState
  ] = useState(
    [] // pass a empty array
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await Axios.get(
          `/api/products/categories` // parameter
        );
        // call function
        setCategories(
          data // parameter
        );
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, [ctxDispatch]);

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
          <title>React App</title>
        </Helmet>
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          {/* <Navbar bg="dark" variant="dark" expand="lg"> */}
          <Navbar bg="" variant="" expand="lg">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
            <Container>
              {/* SideBar Button */}
              <span
                className="fabars"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <FontAwesomeIcon icon={faBars} />
              </span>
              <LinkContainer to="/">
                <Navbar.Brand>React App</Navbar.Brand>
              </LinkContainer>
              {/* Navbar.Toggle */}
              {/* <Navbar.Toggle
              className="toggle"
              bg="light"
              variant="light"
              aria-controls="basic-navbar-nav"
            /> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <FontAwesomeIcon
                  className="faEllipsisVertical"
                  icon={faEllipsisVertical}
                />
              </Navbar.Toggle>

              {/* <FontAwesomeIcon icon={faEllipsisVertical} /> */}
              {/* Navbar.Collapse */}

              <Navbar.Collapse id="basic-navbar-nav">
                <SearchBox />
                <Nav className="me-auto">
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cartItems.length > 0 && (
                      <span className="badge rounded-pill bg-danger">
                        {
                          //use reduce function to calculate accumulator (a) and current item (c)
                          // default value to accumulator is zero
                          cartItems.reduce((a, c) => a + c.quantity, 0)
                        }
                      </span>
                    )}
                  </Link>

                  {userInfo ? (
                    <NavDropdown
                      title={'Hello, ' + userInfo.name}
                      id="basic-nav-dropdown"
                    >
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
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
                      <NavDropdown.Divider />
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
                      <NavDropdown.Divider />
                      <LinkContainer to="/productlist">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <LinkContainer to="/orderlist">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <LinkContainer to="/userlist">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <LinkContainer to="/support">
                        <NavDropdown.Item>Support</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}

                  <NavDropdown title="Sellers" id="basic-nav-dropdown">
                    <LinkContainer to="/seller/630f79417a42a911d72fc7f5">
                      <NavDropdown.Item>Sony</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="/seller/630f79417a42a911d72fc7f6">
                      <NavDropdown.Item>Microsoft</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="/seller/630f79417a42a911d72fc7f7">
                      <NavDropdown.Item>Nintendo</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>

                  <NavDropdown title="About" id="basic-nav-dropdown">
                    <LinkContainer to="/about">
                      <NavDropdown.Item>About us</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="/contact">
                      <NavDropdown.Item>Contacts</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="/career">
                      <NavDropdown.Item>Careers</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <Link to="/quote" className="nav-link">
                    Quotes
                  </Link>
                  <Link to="" className="nav-link">
                    <FontAwesomeIcon icon={faMoon} />
                  </Link>
                  {/* <Link to="/resource" className="nav-link">
                    Resources
                  </Link> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
            {/* </nav> */}
          </Navbar>

          {/* <hr class="bg-danger border-2 border-top border-danger"></hr> */}

          {/* side bar */}
          <hr className="" />
        </header>

        <div
          className={
            sidebarIsOpen
              ? ' active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          {/* <div
          className={
            sidebarIsOpen
              ? ' fixed top-0 left-0 z-40 h-full w-[20rem] bg-gray-300 p-10 duration-300  ease-in-out dark:bg-gray-800 translate-x-0'
              : 'hidden'
          }
        > */}
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
          {/* Routes */}
          <Routes>
            <Route
              path="/interest"
              element={<InterestBasedAdsScreen />}
            ></Route>
            <Route path="/privacy" element={<PrivacyNoticeScreen />}></Route>
            <Route
              path="/condictions"
              element={<CondictionsUseScreen />}
            ></Route>

            <Route path="/resource" element={<ResourceScreen />}></Route>
            <Route path="/contact" element={<ContactScreen />}></Route>
            <Route path="/career" element={<CareerScreen />}></Route>
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
        <div className="text-center">
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// export
export default App;
