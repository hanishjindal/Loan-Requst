import React from "react";
import { Link } from "react-router-dom";
class ProcessRequest extends React.Component {
  render() {
    return (
      <form id="process-request-form">
        <div className="form">
          <div className="row">
            <div className="input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                disabled
                value={this.props.name}
                id="name"
                name="name"
              />
            </div>
            <div className="input">
              <label htmlFor="moblie_number">Mobiles</label>
              <input
                type="text"
                disabled
                value={this.props.mobile}
                id="moblie_number"
                name="moblie_number"
              />
            </div>
          </div>
          <div className="row">
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                disabled
                value={this.props.email}
                id="email"
                name="email"
              />
            </div>
            <div className="input">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                disabled
                value={this.props.address}
                id="address"
                name="address"
              />
            </div>
          </div>
          <div className="row">
            <div className="input">
              <label htmlFor="loantype">Loan Type</label>
              <input
                type="text"
                disabled
                value={this.props.loanType}
                id="loantype"
                name="loantype"
              />
            </div>
            <div className="input">
              <label htmlFor="requestStatus">LoanRequest</label>
              <select name="requestStatus" id="requestStatus">
                <option value="Rejected">Rejected</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Submitted">Submitted</option>
              </select>
            </div>
          </div>
          <div className="button">
            <Link to="/">
              <button
                id="update"
                type="submit"
                onClick={this.props.updateRequestStatus}
              >
                Update
              </button>
            </Link>

            <Link to="/">
              <button id="cancel">Cancel</button>
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default ProcessRequest;
