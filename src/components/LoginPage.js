import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Form, Control,Errors } from 'react-redux-form';
import { Button, Alert } from 'reactstrap';
import { loginPageData, dashboard } from '../data';
import { getEmployeeDetails } from '../redux/actions/employeeActions';
import { handleSuucessMessage, handleErrorMessage } from '../redux/actions/loginPageAction';
import '../components/css/style.css';
class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  render() {
    const {isOpen, alertAction,alertColor,alertMessage}=this.props;
    if(isOpen){
      return <Redirect to={{pathname:"/employees/list"}}/>
    }
    return <Fragment>
      {isOpen && <Alert isOpen={alertAction} color={alertColor}>{alertMessage}</Alert>}
      <center>
      <Form className="loginPage" model="user" onSubmit={v => this.handelSubmit(v)}>
        <div >
          <label className="pageLabel">Email: </label> &nbsp;
          <Control className="inputFields" type="email" model=".userName" placeholder="email" required/>
          <Errors model=".userName" show="touched" messages={{
              valueMissing: 'Email is required',
              typeMismatch: 'Invalid email address',
            }}/>
        </div>
        <div>
          <label className="pageLabel">Password: </label> &nbsp;
          <Control.text  className="inputFields" model=".password" placeholder="Password" required validators={{ maxLength: (val) => val.length >= 8 }} />
          <Errors model=".password" show="touched"
             messages={{
              valueMissing: 'Password is required',
              maxLength: 'Must be 8 characters'
            }}/>
        </div>
        <Button className="pageSubmit" color="primary"> login</Button> &bnsp; &bnsp;
        <Control.reset model="user" >Reset</Control.reset>
      </Form>
      </center>
      </Fragment>
  }
  handelSubmit=(v)=>{
const {userName, password}=loginPageData;
if(userName===v.userName && password===v.password){
 this.props.dispatch(handleSuucessMessage());
 this.props.dispatch(getEmployeeDetails(dashboard))
}else{
  this.props.dispatch(handleErrorMessage())
}
  }
}

const mapStateToProps = (state) => {
  const { login } = state;
  return login;
}

//store connecting
export default connect(mapStateToProps)(LoginPage);
