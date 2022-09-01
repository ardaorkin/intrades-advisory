import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const AboutUs = () => {
  return (
    <div id="about" className="page">
      <Container style={{ textAlign: "center" }}>
        <Row>
          <Col>
            <h1 className="tracking-in-expand">About Us</h1>
          </Col>
        </Row>
        <Row>
          <p className="text-focus-in">
            Duis tincidunt leo sit amet lorem tempor, ac mollis nulla malesuada.
            Vestibulum varius molestie auctor. Morbi efficitur sapien et
            fringilla mattis. Donec eget nunc sed erat mattis tempus. Fusce a
            tincidunt diam. Nulla eros nibh, pulvinar molestie placerat quis,
            cursus quis nibh. Cras aliquet dui urna, ac faucibus augue tincidunt
            id. Quisque dolor risus, vehicula et tellus non, ornare viverra
            eros. Mauris ac sollicitudin mauris. Maecenas dictum vehicula
            consequat. Aliquam nunc ipsum, aliquam et tellus faucibus, hendrerit
            dignissim nisl. Pellentesque ultrices mi lorem, quis molestie orci
            accumsan eget. Donec nibh sem, euismod ut justo fringilla, luctus
            tempus nunc.
          </p>
        </Row>
      </Container>{" "}
    </div>
  );
};

export default AboutUs;
