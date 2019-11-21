import React from 'react';
import {Redirect} from 'react-router-dom';
import { Form, Control,Errors } from 'react-redux-form';
import { Button } from 'reactstrap';
import { loginPageData } from '../data';

class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isValid:false
    }
  }
  render() {
    const {isValid}=this.state;
    if(isValid){
      return <Redirect to={{pathname:"/employees/list"}}/>
    }
    return (
      <Form model="user" onSubmit={v => this.handelSubmit(v)}>
        <div >
          <label>Email: </label> &nbsp;
          <Control type="email" model=".userName" placeholder="email" required/>
          <Errors model=".userName" show="touched" messages={{
              valueMissing: 'Email is required',
              typeMismatch: 'Invalid email address',
            }}/>
        </div>
        <div>
          <label>Password: </label> &nbsp;
          <Control.text model=".password" placeholder="Password" required validators={{ maxLength: (val) => val.length >= 8 }} />
          <Errors model=".password" show="touched"
             messages={{
              valueMissing: 'Password is required',
              maxLength: 'Must be 8 characters'
            }}/>
        </div>
        <Button color="primary"> login</Button>
        <Button color="warning"><Control.reset model="user" >Reset</Control.reset></Button>
        <Button color="danger" > Cancel</Button>
      </Form>
    );
  }
  handelSubmit=(v)=>{
const {userName, password}=loginPageData;
if(userName===v.userName && password===v.password){
  this.setState({isValid:true});
}else{
  console.log("false");
}
  }
}

// No need to connect()!
export default LoginPage;