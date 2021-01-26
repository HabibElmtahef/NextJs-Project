import React from 'react'

const Cart = ({cart}) => {
     const reducer = (accumulator, currentValue) => accumulator + currentValue;
      
     const deleteCart = (id) => {
       console.log(id)
     }

    return (

          <table className="table">
  <thead>
    <tr>
    
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Handle</th>
         </tr>
        </thead>
        
          {cart.map(item => (
            <tbody>    
            <td > <img src={item.image} alt="" style={{height: '90px', width:'90',borderRadius:'25%'}} /> </td>
            <td> <h2>{item.name}</h2>  </td>
            <td> <h4>{item.price}</h4>  </td>
            <td>
              <button className="btn" onClick={deleteCart(item.id)} style={{height: '50px', width: '50px', borderRadius: '13px', backgroundColor: 'red', color: "white"}} ><i className="far fa-trash-alt"></i></button>
            </td>
            
            </tbody>        
          ))}    
      
      
      </table>
    )
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/getcart')
  const data = await res.json();
  return {
    props: {cart: data}, // will be passed to the page component as props
  }
}

export default Cart
