import React, {Fragment} from 'react';
import { Table } from 'reactstrap';
import { dashboard } from '../data';

export const  EmployeeDetails=(props)=> {
const data= dashboard.user.map((user,id)=>{
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
{data}
<tbody>
</tbody>
</Table>
</Fragment>
}
