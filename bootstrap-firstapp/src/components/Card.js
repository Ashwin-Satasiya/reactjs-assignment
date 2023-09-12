import React from "react";

import { Container, Row, Button, Card, Table } from "react-bootstrap";

export default function FCard() {
  return (
    <div>
      <Container className="mt-3 p-3">
        <Row>
          <div className="col-md-4 p-3">
            <Card>
              <div className="card-header bg-danger text-white fs-3 text-center">
                Monthly Attendance
              </div>
              <div className="card-body">Body</div>
              <div className="card-footer">Footer</div>
            </Card>
          </div>
          <div className="col-md-4 p-3">
            <Card>
              <div className="card-header bg-info text-white fs-3 text-center">
                Monthly Report
              </div>
              <div className="card-body">Body</div>
              <div className="card-footer">Footer</div>
            </Card>
          </div>
          <div className="col-md-4 p-3">
            <Card>
              <div className="card-header bg-warning text-white fs-3 text-center">
                Birthday wishesh
              </div>
              <div className="card-body">Body</div>
              <div className="card-footer">Footer</div>
            </Card>
          </div>
        </Row>

        {/* Another row */}
        <Row className="mt-5">
          <div className="col-md-8 ">
            <Card>
              <div className="card-header bg-primary text-center fs-5 text-white">
                Leave Information
              </div>

              <div className="card-body">
                <Table bordered striped hover>
                  <thead>
                    <tr>
                      <th>Leave code</th>
                      <th>Balance</th>
                      <th>Pending leave request</th>
                      <th>Available Bal.</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>PL</td>
                      <td>5</td>
                      <td>0</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>SL</td>
                      <td>8</td>
                      <td>0</td>
                      <td>12</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card>
          </div>
          <div className="col-md-4 border p-4">
            <Card className="border border-3 border-danger">
              <div className="card-header bg-success text-white text-center fs-4">
                Information
                <div className="card-body"></div>
                <p>
                  xcnadxnadmaldjladowedhkxnz,baed7qteuqda x
                  mxVhdgqetqeyo9qeuaSMLhsiqyeiqeyiqyeiqeyiqeyiqeiqeoqeoqeoqeuoqeuoqeuaJSLNxNxn
                </p>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
}
