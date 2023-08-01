import React, {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function Create() {
    const[id,setId] = useState()
    const[name,setName] = useState()
    const[image,setImage] = useState()
    const[category,setCategory] = useState()
    const[label,setLabel] = useState()
    const[price,setPrice] = useState()
    const[description,setDescription] = useState()
    const navigate = useNavigate()
   
    const Submit = (e)=> {
        e.preventDefault();
        axios.post("http://localhost:5000/create",{id,name,image,category,label,price,description})
        .then(result=> {  console.log(result)
        navigate('/')
      })
        .catch(err=> console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className= 'w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2> Add Items</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Id</label>
                        <input type="text" placeholder='Enter Id' className='form-control'
                        onChange={(e)=> setId(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Items Name' className='form-control'
                         onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Image</label>
                        <input type="text" placeholder='Enter Image' className='form-control'
                         onChange={(e)=> setImage(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Category</label>
                        <input type="text" placeholder='Enter Category' className='form-control'
                         onChange={(e)=> setCategory(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Label</label>
                        <input type="text" placeholder='Enter Label' className='form-control'
                         onChange={(e)=> setLabel(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Price</label>
                        <input type="text" placeholder='Enter Price' className='form-control'
                         onChange={(e)=> setPrice(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder='Enter Items Description' className='form-control'
                         onChange={(e)=> setDescription(e.target.value)}/>
                    </div>
                    <button className = 'btn btn-sucess'>Submit</button>
                </form>
                </div>
            </div>
    )
}

export default Create;