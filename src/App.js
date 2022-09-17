import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../src/assets/myPhoto.jpg";
import SecTime from "./Components/SecTime";
import React from "react";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      person: {
        fullName: "",
        bio: "",
        imgSrc: "",
        profession: "",
      },

      show: false,
    };
  }

  handleClick = () => {
    this.setState({
      person: {
        fullName: "GARBAA Alaeddine",
        bio: "Ingenieur Chimie industrielle",
        imgSrc: img,
        profession: "Gestionnaire administratif",
      },

      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <br></br>
        <Button
          type="button"
          onClick={() => this.handleClick()}
          variant="danger"
        >
          {this.state.show ? " Hide Profile" : "Show Profile"}
        </Button>
        <br></br>
        <img src={this.state.show && this.state.person.imgSrc} alt="" />
        <div className="desc">
          <h2>{this.state.show && this.state.person.fullName}</h2>
          <h6>{this.state.show && this.state.person.bio}</h6>
          <h6>{this.state.show && this.state.person.profession}</h6>
        </div>
        {this.state.show && <SecTime />}
      </>
    );
  }
}

export default App;
