import React, { Component } from 'react'
import { Container, Form, Button, FormCheck } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu'
export class Login extends Component {
    constructor() {
        super();
        this.state={
            name:'',
            password:''
        }
        
    }
    login(){
        console.log(this.state)
        fetch('http://localhost:3000/login?q='+this.state.name).then((data)=>{
            data.json().then((res)=>{
                console.log(res)
                if(res.length>0){
                    localStorage.setItem('login',JSON.stringify(res))
                    console.log(this.props.history.push('list'))
                }else{
                    alert('Please check username or password!s')
                }
            })
        })
    }
    render() {
        return (
            <Container>
                <NavBarMenu/>
                <Form>
                    <h2>Login Form</h2><br/>
                    <Form.Control type="text" name="user" placeholder="Enter Name" onChange={(event)=>this.setState({name:event.target.value})} /><br/><br/>
                    <Form.Control type="password" name="password" placeholder="Enter Password" onChange={(event)=>this.setState({password:event.target.value})} /><br/><br/>
                    <Button variant="primary" onClick={()=>{this.login()}} >Login</Button>
                </Form>
                
            </Container>
        )
    }
}

export default Login
