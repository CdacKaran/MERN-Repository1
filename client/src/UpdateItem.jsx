import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";

function UpdateItem() {
    const{id} = useParams()

    const[Id,setId] = useState()
    const[Name,setName] = useState()
    const[Image,setImage] = useState()
    const[Category,setCategory] = useState()
    const[Label,setLabel] = useState()
    const[Price,setPrice] = useState()
    const[Description,setDescription] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getItem'+Id)
        .then(result => {console.log(result)
        setId(result.data.Id)
        setName(result.data.Name)
        setImage(result.data.Image)
        setCategory(result.data.Category)
        setLabel(result.data.Label)
        setPrice(result.data.Price)
        setDescription(result.data.Description)
        })
        .catch(err=> console.log(err))

    },[])

    const Update = (e)=> {
        e.preventDefault();
        axios.put("http://localhost:3001/UpdateItem"+Id,{Id,Name,Image,Category,Label,Price,Description})
        .then(result=> {console.log(result)
        navigate('/')
    })
        .catch(err=> console.log(err))
    }


    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className= 'w-50 bg-white rounded p-3'>
                <form onSubmit={Update}>
                    <h2> Update Items</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Id</label>
                        <input type="text" placeholder='Enter Id' className='form-control'
                        value={Id}  onChange={(e)=> setId(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Items Name' className='form-control'
                       value={Name}  onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Image</label>
                        <input type="text" placeholder='Enter Image' className='form-control'
                        value={Image}  onChange={(e)=> setImage(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Category</label>
                        <input type="text" placeholder='Enter Category' className='form-control'
                        value={Category}  onChange={(e)=> setCategory(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Label</label>
                        <input type="text" placeholder='Enter Label' className='form-control'
                        value={Label}  onChange={(e)=> setLabel(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Price</label>
                        <input type="text" placeholder='Enter Price' className='form-control'
                        value={Price}  onChange={(e)=> setPrice(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder='Enter Items Description' className='form-control'
                        value={Description}  onChange={(e)=> setDescription(e.target.value)}/>
                    </div>
                    <button className = 'btn btn-sucess'>Submit</button>
                </form>
                </div>
            </div>
    )
}

export default UpdateItem;