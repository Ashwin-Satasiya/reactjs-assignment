import React from "react";

import { Container } from "react-bootstrap";

export default function FooterApp() {
  return (
    <div>
      <Container fluid className="p-0">
        <footer className="p-4 m-0 bg-dark text-white text-center">
          Copyright@2023 All right reserved.
        </footer>
      </Container>
    </div>
  );
}
