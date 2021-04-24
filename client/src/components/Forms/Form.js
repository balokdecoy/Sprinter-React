import React, { useState, useEffect} from "react";
import { Form, Button, Col, InputGroup, Row } from "react-bootstrap";
import "../../App.css";
import axios from "axios";
import Employee from "../Employees/Employee";
import { RiContactsBookUploadLine } from "react-icons/ri";

const initialValues = {
	first: "",
	last: "",
	id: "607300288c28a3208cc4cbe4",
  };
export default function Forms(props) {

	const [values, setValues] = useState(initialValues);

	const [validated, setValidated] = useState(false);

	const handle=(e) => {
		
		const { name, value } = e.target;
		setValues({
		  ...values,
		  [name]: value,
		});

		console.log(e.target.value)
	
	}
	const submit=(e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
		  e.preventDefault();
		  e.stopPropagation();
		}
	
		setValidated(true);

		axios.post("https://sprinter-v2.herokuapp.com/employee",{
			first_name:values.first,
			last_name:values.last,
			roleId:values.id
		})
		.then(res=>{
			console.log(res.data.updatedEmpList)
			props.setEmployees(res.data.updatedEmpList)
		})
		.catch(err=>console.log(err))
		console.log(values)

	}
	
	const [roles, setRoles] = useState([]);
	
	  useEffect(() => {
		axios.get("https://sprinter-v2.herokuapp.com/roles")
		.then((res => {
			console.log(res.data)
			setRoles(res.data)
		})) 
	  }, [])

	return (
		<Col className="mx-auto addemp-form" md={4} md="4" className="mx-auto mb-2">
		<Form className = "empForm" noValidate validated={validated} onSubmit={submit}>
		<h4 className="empFormTitle">Add Employees</h4>
			<Form.Group>
				<Form.Label>First Name</Form.Label>
				<Form.Control required type="text" id = "first" name="first" placeholder="First Name"  onChange={handle}/>
				<Form.Text className="text-muted">
				</Form.Text>
			</Form.Group>

			<Form.Group >
				<Form.Label>Last Name</Form.Label>
				<Form.Control required type="text" id = "last" name="last" placeholder="Last Name" onChange={handle}  />
				<Form.Text className="text-muted">
				</Form.Text>
			</Form.Group>
			<Form.Group>
				<Form.Label>Select Title</Form.Label>
				<Form.Control required as="select" id = "title" onChange={handle} name="id">
					{roles.map((role) => {
						
						return (
							<option value={role.id}  key={role.id}>{role.title}</option>
						)
					})}
				</Form.Control>
			</Form.Group>
			<Button className="empFormBtn" type="submit">
				Submit</Button>
		</Form>
		</Col>

	);
}
