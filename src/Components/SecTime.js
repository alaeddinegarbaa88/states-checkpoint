import React from "react";

import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

class SecTime extends React.Component {
  constructor() {
    console.log("Construcor");
    super();
    this.state = { count: 0, timer: 0, intervall: null };
  }

  //-------------------- State LifeCycle ------------------------

  componentDidMount() {
    console.log("Component did Mount()");

    //---------- Auto Increment Functions---------

    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }

  componentDidUpdate() {
    console.log("Component did Update() ");
  }

  componentWillUnmount() {
    console.log("Component will unMount()");
    clearInterval(this.state.intervall);
  }
  //------------------- Button Functions ------------------------

  render() {
    return (
      <>
        <Card
          className="text-center mt-4 "
          style={{ justifyContent: "center" }}
        >
          <Card.Body>
            <Card.Title>Auto Increment Counter</Card.Title>
            <Card.Text>
              <Badge bg="primary" pill>
                {this.state.timer}
              </Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default SecTime;
