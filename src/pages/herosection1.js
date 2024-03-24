import React, { useState, useEffect } from "react";
import logo from "./images/rectangle19.jpg";
import heroImage from "./images/hero.jpg";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, NavbarToggle, NavbarCollapse } from "react-bootstrap";
import Logo from "./images/logo.jpg";

const Herosection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.querySelector(".hero__navbar").classList.add("navbar-black");
    } else {
      document.querySelector(".hero__navbar").classList.remove("navbar-black");
    }
  }, [isOpen]);

  return (
    <>
      <div className="hero" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
      }}>
        <Navbar
          expand="md"
          fixed="top"
          className={`hero__navbar ${isOpen ? "navbar-black" : ""}`}
        >
          <Container>
            <NavbarBrand href="/">
              <img src={Logo} alt="logo" style={{height: '5rem', borderRadius: '50%'}} />
            </NavbarBrand>
            <NavbarToggle onClick={toggleNavbar} aria-controls="basic-navbar-nav" >
              <span className="navbar-toggler-icon" style={{ backgroundColor: "white", borderRadius: "10%", width: "2rem", height: "2rem", padding: "0.5rem" }}></span>
            </NavbarToggle>
            <NavbarCollapse id="basic-navbar-nav" className={isOpen ? "show" : ""} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Nav className="me-auto">
                <NavItem>
                  <NavLink href="/home" className="navbar-menu-text" style={{paddingLeft:'50px', paddingRight: '50px'}}>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/services" className="navbar-menu-text" style={{paddingLeft:'50px', paddingRight: '50px'}}>Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about" className="navbar-menu-text" style={{paddingLeft:'50px', paddingRight: '50px'}}>About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact" className="navbar-menu-text" style={{paddingLeft:'50px', paddingRight: '50px'}}>Contact</NavLink>
                </NavItem>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
        <div className="hero__content">
          <h1 className="hero-title">WATAHA BARBERSHOP</h1>
          <p className="hero-subtitle">Get Groomed. Get Confidence</p>
          <button className="hero-button" href="https://booksy.com/pl-pl/97099_wataha-barber-shop_barber-shop_17369_leszno">Book Now</button>
        </div>
      </div>
    </>
  );
};

export default Herosection;