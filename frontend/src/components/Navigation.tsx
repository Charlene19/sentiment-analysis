import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../img/twitter.jpg";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import './Navigation.css';


export function Navigation() {
    const phantomStyle = {
        position: "fixed",
        display: "block",
        height: "260px",
        width: "100%",
        textAlign: "center",
        marginTop: "auto",
        cursor: "pointer",
        zIndex: 3
    };


    const logoStyle = {

        color: "black",
        fontFamily: 'HelveticaNeueUltraLight',
        fontSize: "6em",
        textAlign: "center",
        zIndex: 3

    };

    const header = {
        zIndex: 1
    };
  return (
<div style={{backgroundColor: 'black', marginBottom: '50px', justifyContent: "center"}}>
          <MDBNavbar >
              <MDBNavbarBrand >
                  <div className="dropdown">
                  <div className="dropbtn" style={{color: 'white', fontSize: "120px", fontFamily: 'HelveticaNeueUltraLight', marginLeft: '320px'}} >

            Analyseur de tweets

                  </div>

                  <div className="dropdown-content">

                      <a className="dropContent " href="/" >
                          Home
                      </a>

                      <a className="dropContent " href="/" >
                          Top Tweets
                      </a>
                  </div>
                  </div>
              </MDBNavbarBrand>
          </MDBNavbar>
</div>
  );
}

export default Navigation;
