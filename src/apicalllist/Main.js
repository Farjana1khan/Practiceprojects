import React, { Component } from "react";

export default class Main extends Component {
  render() {
    const { userList, loading } = this.state;
    return (
      <div className="container-App">
        <h4 className="d-inline-block">Api Call List</h4>
        <button
          className="btn btn-info float-right"
          onClick={this.getUserList}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get User List"}
        </button>
        <div className="clearfix"></div>

        <table class="table mt-3">
          <thead class="thead-dark">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </thead>
          <tbody>
            {userList.map((x) => (
              <tr>
                <td>{x.first_name}</td>
                <td>{x.last_name}</td>
                <td>{x.email}</td>
                {/* <td>
                  <img src={x.avtar} width="50" height="50" />
                </td> */}
              </tr>
            ))}
            {userList.length === 0 && (
              <tr>
                <td className="text-center" colSpan="4">
                  <b>No data found to display.</b>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
