import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

const EmployeeDetails =(props)=>{
      const { user } = props;
    const data = user && user.map((user, id) => {
      return <tr key={id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.email}</td>
        <td>{user.phoneNo}</td>
      </tr>
    })
    return <Fragment>
      <Link to="/dashboard">Go back</Link>
      {data ?<div> 
      <p>Employee Details List</p>
      <Table striped>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>PhoneNo</th>
          </tr>
        </thead>
        <tbody>
        {data}
        </tbody>
      </Table>
      </div>
      : <div className="message">
      <center>
      <h2>You don't have any recoder....</h2>
      </center>
      </div>}
    </Fragment>
  }

const mapStateToProps = (state) => {
  console.log("++++:",state.employees)

  const { employees } = state.employees;
  return employees;
}
//store connecting
export default connect(mapStateToProps)(EmployeeDetails);