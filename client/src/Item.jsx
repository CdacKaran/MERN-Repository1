import React, {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

function Item() {
    const[item,setItem]= useState([{
         id:32, name: "Jalebi",image:"xyz",category:"mains",label:"Sweet",price:10.99,
         description: "A indian sweet dish"}]) 
         
    useEffect(() => {
        axios.get('http://localhost:5000')
        .then(result => setItem(result.data))
        .catch(err=> console.log(err))

    },[])
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className= 'w-50 bg-white rounded p-3'>
                 <h1>MENU</h1>
                <Link to="/create" className= 'btn btn-sucess'>Add</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Label</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.map((prices) =>  {
                               return <tr>
                                    <td>{prices.id}</td>
                                    <td>{prices.name}</td>
                                    <td>{prices.image}</td>
                                    <td>{prices.label}</td>
                                    <td>{prices.price}</td>
                                    <td>{prices.description}</td>
                                    <td>
                                        <Link to={'/update/${prices._id} '}className ='btn btn-success'>Update</Link>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>   
                    </table>    
        </div>
        </div>
    )
}

export default Item;