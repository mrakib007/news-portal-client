import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftSidenav from "../Pages/Shared/LeftSidenav/LeftSidenav";
import RightSidenav from "../Pages/Shared/RightSidenav/RightSidenav";

const Main = () => {
  return (
    <div>
        <Header></Header>
      <Container>
        <Row>
          <Col lg='2' className="d-none d-lg-block">
            <LeftSidenav></LeftSidenav>
          </Col>
          <Col lg='7'>
            <Outlet></Outlet>
          </Col>
          <Col lg='3'>
            <RightSidenav></RightSidenav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
