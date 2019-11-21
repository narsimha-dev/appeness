import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'reactstrap';
import { EmployeeCardView } from './EmployeeCardView';

 const Dashboard = (props) => {
  const { employeeList } = props.user;
  const details = employeeList && employeeList.map((user, id) => {
    return <Col sm="3">
      <EmployeeCardView user={user} key={id} />
    </Col>
  });
  return <Container>
    <Row>
      {details}
    </Row>
  </Container>
}

const mapStateToProps = (state) => {
  const { employees } = state.employeeList.user;
  return employees;
}
//store connecting
export default connect(mapStateToProps)(Dashboard);