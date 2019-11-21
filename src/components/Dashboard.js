import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'reactstrap';
import { EmployeeCardView } from './EmployeeCardView';
import '../components/css/style.css';

 const Dashboard = (props) => {
  const { user: employeeList } = props;
  const details = employeeList && employeeList.map((user, id) => {
    return <Col sm="3">
      <EmployeeCardView user={user} key={id} />
    </Col>
  });
  return <Container>
    {details?
    <Row>
      {details}
    </Row>
    :<div className="message">
      <center>
      <h2>You don't have any recoder....</h2>
      </center>
      </div>}
  </Container>
}

const mapStateToProps = (state) => {
  const { employees } = state.employees;
  return employees;
}
//store connecting
export default connect(mapStateToProps)(Dashboard);