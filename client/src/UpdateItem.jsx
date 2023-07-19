import React from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

function UpdateItem() {
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className= 'w-50 bg-white rounded p-3'>
                <form>
                    <h2> Add Items</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Id</label>
                        <input type="text" placeholder='Enter Id' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Items Name' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Image</label>
                        <input type="text" placeholder='Enter Image' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Category</label>
                        <input type="text" placeholder='Enter Category' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Label</label>
                        <input type="text" placeholder='Enter Label' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Price</label>
                        <input type="text" placeholder='Enter Price' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder='Enter Items Description' className='form-control'/>
                    </div>
                    <button className = 'btn btn-sucess'>Submit</button>
                </form>
                </div>
            </div>
    )
}

export default UpdateItem;