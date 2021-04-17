import React, { useState } from "react";
import { Form, Button, Col, InputGroup, Row } from "react-bootstrap";
import "../../App.css";
import axios from "axios";
import Employee from "../Employees/Employee";

export default function Forms(props) {

	const [validated, setValidated] = useState(false);

	const 
		{
			first,
			last,
			title,
			email,
			password
		} =props;

	const EmployeeData = [
		{
			first,
			last,
			title,
			email,
			password
		}
	]
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	const addEmp = (EmployeeData) => {
		return axios.post("http://localhost:5000/employee",{EmployeeData})
	  };

	const roles = ['Software Engineer', "Sales Person"]
	const projects = ['Tincat', 'Facebook']

	return (
		<Col className="mx-auto addemp-form" md={12}>
		<h3>Add Employees</h3>
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<Form.Group controlId="validationCustom01">
				<Form.Label>First Name</Form.Label>
				<Form.Control required type="text" placeholder="First Name" value = {first}/>
				<Form.Text className="text-muted">
				</Form.Text>
			</Form.Group>

			<Form.Group controlId="validationCustom01">
				<Form.Label>Last Name</Form.Label>
				<Form.Control required type="text" placeholder="First Name" value = {last} />
				<Form.Text className="text-muted">
				</Form.Text>
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlSelect1">
				<Form.Label>Select Title</Form.Label>
				<Form.Control required as="select" value = {title}>
					{roles.map((options) => {
						return (
							<option>{options}</option>
						)
					})}
				</Form.Control>
			</Form.Group>
			{/* <Form.Group controlId="formBasicPassword">
				<Form.Label>Email</Form.Label>
				<Form.Control required type="email" placeholder="Email" value = {email}/>
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Default Password</Form.Label>
				<Form.Control required type="password" placeholder="Default Password" value = {password} />
			</Form.Group> */}
			<Button variant="primary" type="submit" onClick = {() => {
				console.log(EmployeeData);
				addEmp(EmployeeData)
				}
				}>
				Submit
  </Button>
		</Form>
		</Col>

		// <Form noValidate validated={validated} onSubmit={handleSubmit}>
		// 	<Form.Row>
		// 		<Form.Group as={Col} md="4" controlId="validationCustom01">
		// 			<Form.Label>{props.first}</Form.Label>
		// 			<Form.Control
		// 				required
		// 				type="text"
		// 				placeholder="First name"
		// 				defaultValue="Mark"
		// 			/>
		// 			<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
		// 		</Form.Group>
		// 		<Form.Group as={Col} md="4" controlId="validationCustom02">
		// 			<Form.Label>{props.last}</Form.Label>
		// 			<Form.Control
		// 				required
		// 				type="text"
		// 				placeholder="Last name"
		// 				defaultValue="Otto"
		// 			/>
		// 			<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
		// 		</Form.Group>
		// 		<Form.Group as={Row} controlId="formHorizontalEmail">
		// 			<Form.Label column md={4}>
		// 				{props.role}
		// 			</Form.Label>
		// 			<Col md={10}>
		// 				<Form.Control as="select" custom>
		// 					{roles.map((options) => {
		// 						return (
		// 							<option>{options}</option>
		// 						)
		// 					})}
		// 				</Form.Control>
		// 			</Col>
		// 		</Form.Group>
		// 		<Form.Group as={Row} controlId="formHorizontalEmail">
		// 			<Form.Label column md={4}>
		// 				{props.project}
		// 			</Form.Label>
		// 			<Col sm={10}>
		// 				<Form.Control as="select" custom>
		// 					{projects.map((options) => {
		// 						return (
		// 							<option>{options}</option>
		// 						)
		// 					})}
		// 				</Form.Control>
		// 			</Col>
		// 		</Form.Group>
		// 	</Form.Row>
		// 	<Form.Group as={Row} controlId="formHorizontalEmail">
		// 		<Form.Label column md={4}>
		// 			{props.email}
		// 		</Form.Label>
		// 		<Col sm={10}>
		// 			<Form.Control type="email" placeholder="Email" />
		// 		</Col>
		// 	</Form.Group>

		// 	<Form.Group as={Row} controlId="formHorizontalPassword">
		// 		<Form.Label column md={4}>
		// 			{props.password}
		// 		</Form.Label>
		// 		<Col sm={10}>
		// 			<Form.Control type="password" placeholder="Password" />
		// 		</Col>
		// 	</Form.Group>
		// 	<Button type="submit">Submit form</Button>
		// </Form>
	);
}
