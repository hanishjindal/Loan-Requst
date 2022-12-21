import React from "react";
import { Link } from "react-router-dom";

class DisplayCustomer extends React.Component {
  render() {
    const tble = this.props.customerDetail.map((item, index) => {
      return (
        <tr key={index} id={"customer" + (index + 1)}>
          <td>
            <Link
              id={item.id}
              onClick={this.props.handleClick}
              to={"/processRequest/" + item.id}
            >
              {item.id}
            </Link>
          </td>
          <td>
            <Link
              id={item.id}
              onClick={this.props.handleClick}
              to={"/processRequest/" + item.id}
            >
              {item.address}
            </Link>
          </td>
          <td>
            <Link
              id={item.id}
              onClick={this.props.handleClick}
              to={"/processRequest/" + item.id}
            >
              {item.email}
            </Link>
          </td>
          <td>
            <Link
              id={item.id}
              onClick={this.props.handleClick}
              to={"/processRequest/" + item.id}
            >
              {item.mobile_number}
            </Link>
          </td>
          <td>
            <Link
              id={item.id}
              onClick={this.props.handleClick}
              to={"/processRequest/" + item.id}
            >
              {item.name}
            </Link>
          </td>
          <td>
            <Link
              id={item.id}
              onClick={this.props.handleClick}
              to={"/processRequest/" + item.id}
            >
              {item.username}
            </Link>
          </td>
          <td>
            <Link
              id={item.id}
              onClick={this.props.handleClick}
              to={"/processRequest/" + item.id}
            >
              {item.loanType}
            </Link>
          </td>
          <td>
            <Link
              id={item.id}
              onClick={this.props.handleClick}
              to={"/processRequest/" + item.id}
            >
              {item.requestStatus}
            </Link>
          </td>
        </tr>
      );
    });
    return (
      <table id="customer-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Address</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Name</th>
            <th>Username</th>
            <th>Loan Type</th>
            <th>Request Status</th>
          </tr>
        </thead>
        <tbody>{tble}</tbody>
      </table>
    );
  }
}

export default DisplayCustomer;
