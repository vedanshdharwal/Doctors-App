import React, { Component } from 'react'
import {Table, Form, Container} from 'react-bootstrap';
import NavBarMenu from './NavBarMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';
import {
    Link
  } from 'react-router-dom';
export class RestaurantSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData:null,
            noData:false,
            lastSearch:""
        }
        
    }
    search(key){
        this.setState({lastSearch:key});
        fetch('http://localhost:3000/restaurant?q='+key).then((data)=>{
            data.json().then((res)=>{
                console.log(res)
                if(res.length>0){
                    this.setState({
                        searchData:res,
                        noData:false
                    });   
                }else{
                    res=null;
                    this.setState({
                        noData:true,
                        searchData:null
                    }); 
                }
            })
        })
    }
    delete(id){
        fetch("http://localhost:3000/restaurant/"+id,{
            method:"DELETE",
            // headers:{
            //     'Content-Type':'application/json'
            // },
        }).then((result)=>{
            result.json().then((res)=>{
                alert("Restaurant has been Deleted!")
                this.search(this.state.lastSearch);
            })
        })
      }
    render() {
        return (
            <Container>
            <NavBarMenu/>
                <h1>Restaurant Search</h1>
                <Form.Control type="text" onChange={(e)=>this.search(e.target.value)} placeholder="Search Restaurant" />
                <div>
                    {
                        this.state.searchData ?
                        <div>
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Location</th>
                                <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.searchData.map((item)=>
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.rating}</td>
                                <td>{item.address}</td>
                                <td><Link to={"/update/"+item.id} ><FontAwesomeIcon icon={faEdit} color="green"/></Link><span>   </span>
                                <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrashAlt} color="red"/></span></td>
                            </tr>
                                )
                            }
                            </tbody>
                        </Table>
                        </div> 
                        : ""
                    }
                    {this.state.noData?<h3>No Data Found!</h3>:null}
                </div>
            </Container>
        )
    }
}

export default RestaurantSearch
