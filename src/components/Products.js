import React, { useState } from 'react';
import AddProducts from './AddProducts';
function Products () {
    const [product,setProduct] = useState([
        {id:1, name: "Iphone", price : 5500},
        {id:2, name: "Huawei", price : 4000},
        {id:3, name: "Samsung", price : 1200}
    ])

   const AddNewProducts = (newproduct) => {
        setProduct([newproduct, ...product])
   }
        return (
            <div>
                 <hr />
      <AddProducts AddNewProducts={AddNewProducts}/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {product.map((list) => (
                             <tr key={list.id}>
                             <td>{list.id}</td>
                             <td>{list.name}</td>
                             <td>{list.price}</td>
                         </tr>
                        ))}
                       
                    </tbody>
                    
                </table>
            </div>
        );
    
}

export default Products;