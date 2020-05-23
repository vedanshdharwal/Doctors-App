import React, { Component } from "react";
import {Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';
import {
    Link
  } from 'react-router-dom';
  import NavBarMenu from './NavBarMenu'
class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData(){
    fetch("http://localhost:3000/restaurant").then((response) => {
        response.json().then((result) => {
          this.setState({ list: result });
        });
      });
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
            this.getData();
        })
    })
  }
  render() {
    return (
      <div>
      <NavBarMenu/>
        <h1>Restaurant List</h1>
        {this.state.list ? (
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
                  this.state.list.map((item, i) =>
               //{
                   /*  <div className="list-wrapper">
                  <span>{item.name}</span>
                  <span>{item.email}</span>
                  <span>{item.rating}</span>
                  <span>{item.address}</span>
                </div>
                */
                //}
                <tr>
                    <td>{i+1}</td>
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
        ) : (
          <p>Please Wait...</p>
        )}
      </div>
    );
  }
}

export default RestaurantList;
