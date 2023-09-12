import React from "react";

import { Container, Button } from "react-bootstrap"; // Include COMPONENTS

import Grid from "./Grid";

import FCard from "./Card";

import FooterApp from "./Footer";

export default function BTN() {
  return (
    <>
      <Container fluid className="mt-4 p-5 bg-info">
        <Button className="btn btn-warning p-2">
          Login <i className="bi bi-person"></i>{" "}
        </Button>
      </Container>

      {/* reuse components */}
      <Grid />

      <FCard />

      <FooterApp />
    </>
  );
}
