import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
  import React from "react";
  
  export default function FeelingQoute() {
    return (
      <MDBCard style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-5">
                  <div className="text-center mb-4 pb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
                      alt="Bulb"
                      width="100"
                    />
                  </div>
                  <figure className="mb-0 text-center">
                    <MDBTypography blockquote>
                      <p className="pb-3">
                        <MDBIcon fas icon="quote-left text-primary" size="xs" />
                        <span className="lead font-italic">
                          Many of life's failures are people who did not realize
                          how close they were to success when they gave up.
                        </span>
                        <MDBIcon fas icon="quote-right text-primary" size="xs" />
                      </p>
                    </MDBTypography>
                    <figcaption className="blockquote-footer mb-0">
                      Thomas Edison
                    </figcaption>
                  </figure>
                </MDBCardBody>
              </MDBCard>
    );
  }
  