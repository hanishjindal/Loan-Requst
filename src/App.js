import React, { Component } from "react";
import "./styles.css";
import img from "./assets/img/profile.png";
import customer from "./assets/img/customer.svg";
import dashboard from "./assets/img/dashboard.svg";
import loan from "./assets/img/loan.svg";
import DisplayCustomer from "./DisplayCustomer";
import ProcessRequest from "./ProcessRequest";
import { Switch, Route } from "react-router-dom";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerDetail: [
        {
          id: 1,
          address: "1st cross,Gandhipuram",
          email: "david@gmail.com",
          mobile_number: "9897656787",
          name: "David",
          password: "david",
          username: "David",
          role_id: 3,
          loanType: "Education Loan",
          requestStatus: "Pending"
        },
        {
          id: 2,
          address: "1st street,Peelamedu",
          email: "clay@gmail.com",
          mobile_number: "9897656734",
          name: "Clay",
          password: "clay",
          username: "Clay",
          role_id: 3,
          loanType: "Home Loan",
          requestStatus: "Pending"
        },
        {
          id: 3,
          address: "2nd cross,Gandhipuram",
          email: "peter@gmail.com",
          mobile_number: "9889656787",
          name: "Peter",
          password: "peter",
          username: "Peter",
          role_id: 3,
          loanType: "Property Loan",
          requestStatus: "Pending"
        },
        {
          id: 4,
          address: "Race Course",
          email: "jecy@gmail.com",
          mobile_number: "9897656711",
          name: "Jacy",
          password: "jacy",
          username: "Jacy",
          role_id: 3,
          loanType: "Gold Loan",
          requestStatus: "Pending"
        },
        {
          id: 5,
          address: "Ganapaty",
          email: "lena@gmail.com",
          mobile_number: "9891116787",
          name: "Lena",
          password: "lena",
          username: "Lena",
          role_id: 3,
          loanType: "Vehicle Loan",
          requestStatus: "Pending"
        },
        {
          id: 6,
          address: "Rs Puram",
          email: "sophie@gmail.com",
          mobile_number: "9897656722",
          name: "Sophie",
          password: "sophie",
          username: "Sophie",
          role_id: 3,
          loanType: "Home Loan",
          requestStatus: "Pending"
        },
        {
          id: 7,
          address: "3rd cross,Kovaipudur",
          email: "liam@gmail.com",
          mobile_number: "9822656799",
          name: "Liam",
          password: "liam",
          username: "Liam",
          role_id: 3,
          loanType: "Property Loan",
          requestStatus: "Pending"
        }
      ],
      name: "",
      address: "",
      mobile: "",
      email: "",
      loanType: "",
      id: 1
    };
  }

  handleClick = (e) => {
    const id = e.target.id;
    const item = this.state.customerDetail[id - 1];
    this.setState({
      name: item.name,
      address: item.address,
      mobile: item.mobile_number,
      email: item.email,
      loanType: item.loanType,
      id
    });
  };

  updateRequestStatus = () => {
    let customerDetail = this.state.customerDetail;
    const status = document.getElementById("requestStatus").value;
    customerDetail[this.state.id - 1].requestStatus = status;
    this.setState({ customerDetail });
  };

  render() {
    return (
      <div>
        <div className="box">
          <nav id="sidemenu">
            <h2>AXES BANK</h2>
            <div className="nav">
              <p>
                <img src={dashboard} alt="" /> Dashboard
              </p>
              <p>
                <img src={customer} alt="" /> Customer
              </p>
              <p>
                <img src={loan} alt="" /> Loan Request
              </p>
            </div>
          </nav>
          <section id="leftmenu">
            <div className="top">
              <h1>Loan Request</h1>
              <img id="profile-img" src={img} alt="" />
            </div>
            <div className="bottom">
              <Switch>
                <Route path={"/processRequest/" + this.state.id}>
                  <ProcessRequest
                    {...this.state}
                    updateRequestStatus={this.updateRequestStatus}
                  />
                </Route>
                <Route path="/">
                  <DisplayCustomer
                    handleClick={this.handleClick}
                    {...this.state}
                  />
                </Route>
              </Switch>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
