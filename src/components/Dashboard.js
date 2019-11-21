import React, {Fragment} from 'react';
import {Row, Col} from 'reactstrap';
import { dashboard } from '../data';
import {employee} from '../components/asserts/images/employee.png'
import './css/style.css';

export const Dashboard=()=>{ 
  const details=  dashboard.user.map((user
  return <div className="container">
  { dashboard.user.map((user,id)=>{ return <div className="overlay" key={id}>
  <div className="text">
<h5><b>Id: </b><h6>{user.id}</h6></h5>
<h5><b>Name: </b><h6>{user.Name}</h6></h5>
<h5><b>Age: </b><h6>{user.age}</h6></h5>
<h5><b>Gender: </b><h6>{user.gender}</h6></h5>
<h5><b>Email: </b><h6>{user.email}</h6></h5>
<h5><b>PhoneNo: </b><h6>{user.phoneNo}</h6></h5>
</div>
</div>
  });
}
  </div>

}
 
{/* <img src={employee} alt="Avatar" className="image"/> */}
export default Dashboard;