/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {  Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import logo from '../../../assets/img_producto/logo1.jpeg'


const footerQuickLinks = [
    {
      display: "---",
      url: "#",
    },
    {
      display: "politica privacidad datos",
      url: "#",
    },
  
    {
      display: "Politica de datos",
      url: "#",
    },
  
    {
      display: "politica de pagos de servicios y devoluciones",
      url: "#",
    },
  ];
  
  const footerInfoLinks = [
  
  ];

const Footer = () => {
    return (
      <footer className="footer">
       
            <Row>
                <Col lg='3' md='6' className="mb-4">
                   <h2 className="d-flex align-items-center gap-1">
                    <img  className="log" src={logo}  alt="" />
                   </h2>

                  
                </Col>
                <Col lg='3' md='6' className="mb-4">
                    <h6 className="footer-title">Nosotros</h6>
                    <ListGroup className='link-list'>
                      {footerQuickLinks.map((item, index) => (
                        <ListGroupItem key={index} className='border-0 ps-0 link-item'>
                            {" "}
                            <a href={item.url}>{item.display}</a>
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                </Col>

                <Col lg='3' md='6'>
                </Col>

                <Col lg='3' md='6'>
                <div className="follows">
                    <p className="mb-0 footer-follow">siguenos en:</p>
                     <br />
                     <span>
                        {" "}
                        <a href="#">
                            <i className="ri-facebook-line"></i>
                        </a>
                     </span>
                     <span>
                        {" "}
                        <a href="#">
                            <i className="ri-instagram-line"></i>
                        </a>
                     </span>
                     <span>
                        {" "}
                        <a href="#">
                            <i className="ri-linkedin-line"></i>
                        </a>
                     </span>
                     <span>
                        {" "}
                        <a href="#">
                            <i className="ri-twitter-line"></i>
                        </a>
                     </span>
                   </div>
                </Col>
            </Row>
       
      </footer>
    )
}

export default Footer;