import React, { useState} from 'react';

function AddProducts ({AddNewProducts}) {
    const [newpro,setNewpro] = useState({name: "", price : 0})

    const handleform = (e) =>{
        setNewpro({...newpro,[e.target.name] : e.target.value})
    }

    const submitform = (e) =>{
        e.preventDefault();
        if(newpro.name === "" || newpro.price === "") return;
        // let newProduct = {
        //     id : Math.random() * 1000, ...newpro
        // }
        AddNewProducts(newpro)
    }
        return (
            <div>
                <h3>create a product</h3>
                <form onSubmit={submitform}>
                   <div  className='form-group'>
                       <label></label>
                       <input onChange={handleform} name="name" value={newpro.name} type="text" className='form-control' placeholder='Name'/>
                   </div>

                   <div  className='form-group'>
                       <label></label>
                       <input onChange={handleform} name="price" value={newpro.price} type="text" className='form-control' placeholder='Price'/>
                   </div>
                    {/* {JSON.stringify(newpro)} */}
                   <button className='btn btn-block btn-primary'>Add new product</button>
                </form>
            </div>
        );
    
}

export default AddProducts;