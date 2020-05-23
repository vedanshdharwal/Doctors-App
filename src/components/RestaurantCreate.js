import React, { Component } from 'react'
import { Form, Container, Button } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu'
export class RestaurantCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:null,
            email:null,
            address:null,
            rating:null
        };
    }
    create(){
        fetch('http://localhost:3000/restaurant',{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((res)=>{
                alert("Restaurant has been added!"+res)
            })
        })
    }
    render() {
        return (
            <Container>
            <NavBarMenu/>
                <h1>Restaurant Create</h1>
                <Form className="justify-content-md-center">
                    <Form.Control onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Restaurant Name" /> <br /><br />
                    <Form.Control onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Restaurant Email" /> <br /><br />
                    <Form.Control onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Restaurant Rating" /> <br /><br />
                    <Form.Control onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Restaurant Address" /> <br /><br /> 
                    <Button onClick={()=>{this.create()}} variant="primary" type="submit">Add Restaurant</Button>
                </Form>
            </Container>
        )
    }
}

export default RestaurantCreate
