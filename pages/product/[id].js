import {React, useRef, useState} from 'react'
import {Modal, Button, Header, Title, Body, Footer} from 'react-bootstrap'
import { useRouter} from 'next/router'
import { motion } from "framer-motion"
const Product = ({product}) => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true); console.log("ana khedam")};

    const router = useRouter();
    if(router.isFallback){
        return <h3>Loading..</h3>
    }

    const addToCart = async (e) => {
      e.preventDefault();
      const res = await fetch('http://localhost:3000/api/cart', {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price
        })
      })
      router.push('/cart')
    }

    const deleteProduct = async () => {
        const res = await fetch(`http://localhost:3000/api/product/${product.id}`, {
            method: "DELETE"
        })
        await res.json()
        router.push('/')
    }

    const getModal = () => {
        return(
            <div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, Are you Sure you want delete this product!</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary btn-success" onClick={handleClose}>Close</button>
          <button className="btn btn-primary btn-danger" onClick={() => deleteProduct()}>DELETE</button>
        </Modal.Footer>
      </Modal>
      
      </div>
        )
    }

    
    return (
        <div className="row py-4">
            <div className="col-md-6 card">
                <motion.img src={product.image}  style={{height: '450px', objectFit:'contain'}} 
                    initial={{

                  x: -200,

              }}
              animate={{
                  x: 0
                  
              }}
              transition={{
                  duration: 0.5
              }}
                />
            </div>
            <motion.div className="col-md-6 pl-5" initial={{

                  x: 200,

              }}
              animate={{
                  x: 0
                  
              }}
              transition={{
                  duration: 0.5
              }}>
                <h1> {product.name} </h1>
                <p className="py-4"> {product.description} </p>
                <h3 className="py-4"> {product.price} MAD </h3>
                <div className="d-flex py-1 pb-4 align-items-center">
                <label className="pr-3" >Qauntity: </label>
                <input type="number" className="form-control" style= {{width: '90px'}} />

                </div>
                <button className="btn btn-block" onClick={(e) => addToCart(e)} style={{color: 'white', backgroundColor: 'black', width: '250px'}}><i className="fas fa-shopping-cart"></i> ADD TO CART</button>
                <button className="btn btn-block" style={{backgroundColor: 'gold', width: '250px'}}><i className="fas fa-clipboard-list"></i> Add to WishList</button>
                <button className="btn btn-block btn-danger" onClick={ (e) => handleShow()}><i className="far fa-trash-alt"></i> DELETE</button>
                 {getModal()}
            </motion.div>
            
        </div>
    )
}
export async function getServerSideProps({params:{id}}) {
    const res = await fetch(`http://localhost:3000/api/product/${id}`)
    const data = await res.json();
    return {
      props: {product:data}
    }
  }
  
/*  export async function getStaticProps({params:{id}}) {
    const res = await fetch(`http://localhost:3000/api/product/${id}`)
    const data = await res.json()
    return {
      props: {product:data}
    }
  }

  export async function getStaticPaths() {
      return {
          paths: [
              { params: { id: "1"}}
          ],
          fallback: true
      }
  }
*/
export default Product;
