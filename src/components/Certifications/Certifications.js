import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import certificationImage from '../../Assets/AWS_CP_Badge.png';

function Certifications() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="certification-section">
      <Particle />

      <div className="header-section">
        <h1>CERTICATIONS</h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <img src={certificationImage} alt="Certification" style={{ maxWidth: '50%', maxHeight: '50%' }} />
      </div>
    </Container>
  );
};

export default Certifications;
