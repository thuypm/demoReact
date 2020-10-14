import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from "axios";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
     handleClick()
      {
          this.setState((state)=>{
              axios.post("http://localhost:3000/api/signin", this.state).then((res)=>{
                  console.log(res.data);
              })
               
          })
      }
      handleChange(e)
      {
        
        this.setState(
            {[e.target.name]: e.target.value }
        )
      }
    render() {
        return (
            <MDBContainer>
                <MDBRow className="justify-content-center">
                    <MDBCol md="4" style={{marginTop: 10+'%'}}>
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <p className="h4 text-center mb-4">Sign in</p>
                                    <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                        Your email
        </label>
                                    <input type="text"  name="username" onChange={this.handleChange} className="form-control" />
                                    <br />
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Your password
        </label>
                                    <input type="password"  name="password"  onChange={this.handleChange} className="form-control" />
                                    <div className="text-center mt-4">
                                        <MDBBtn color="indigo" onClick={this.handleClick}>Login</MDBBtn>
                                    </div>
                                </form></MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
};

export default Signin;