import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import * as GrIcons from "react-icons/gr";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/allproducts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.products);
      });
  }, []);

  const propertyDisplay = () => {
    return (
      <Container fluid>
        <Card.Title as="h4">Available Properties</Card.Title>
        <div className="row">
          <>
            {data.map((item) => {
              return (
                <div className="col-md-4 my-3">
                  <div className="card h-100">
                    <a href="#!">
                      <img
                        className="img-fluid w-100"
                        src={item.images.url}
                        alt="item"
                      />
                    </a>

                    <div className="card-body ">
                      <h5>
                        {" "}
                        <GrIcons.GrMapLocation />_{item.location}
                      </h5>
                      <hr />
                      <h6 className="mb-3">
                        <span className="text-secondary mr-2">
                          {item.category}
                        </span>
                      </h6>
                      <p>
                        {item.description}
                        {item.description.length > 30
                          ? item.description.substring(0, 30) + "..."
                          : item.description.substring(0, 30)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        </div>
      </Container>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card-deck">{propertyDisplay()}</div>
      </div>
    </div>
  );
}

export default Dashboard;

/*   <Container fluid>
  <Card>
          <Card.Header>
            <Card.Title as="h4">Users Behavior</Card.Title>
            <p className="card-category">24 Hours performance</p>
          </Card.Header>
          <Card.Body>
            <div className="ct-chart" id="chartHours"></div>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="stats">
              <i className="fas fa-history"></i>
              Updated 1 minute ago
            </div>
          </Card.Footer>
        </Card>   </Container>
        */
