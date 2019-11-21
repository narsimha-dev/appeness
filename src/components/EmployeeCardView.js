import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import employeeImage from '../components/assets/images/employee.png'

export const EmployeeCardView = (props) => {
    const { id, name, age, gender, email, phoneNo } = props.user;
    return <Card>
        <CardImg top width="100%" hi src={employeeImage} alt="Card image cap" />
        <CardBody>
            <CardTitle>Employee Details</CardTitle>
            <div>
                <CardText><b>Id: </b>{id}</CardText>
                <CardText><b>Name: </b>{name}</CardText>
                <CardText><b>Age: </b>{age}</CardText>
                <CardText><b>Gender: </b>{gender}</CardText>
                <CardText><b>Email: </b>{email}</CardText>
                <CardText><b>PhoneNo</b>{phoneNo}</CardText>
            </div>
        </CardBody>
    </Card>
}