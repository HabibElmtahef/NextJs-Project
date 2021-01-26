import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
const Home = ({products}) => {
  console.log(products)
  return (
    <div className="row py-4">
      {products.map(item =>(
        <div className="col-md-4 pb-3" key={item.id}>
          <motion.div className="card" initial={{

                  x: 100,

              }}
              animate={{
                  x: 0
                  
              }}
              transition={{
                  duration: 0.5
              }}>
            <img src={item.image} className="card-img-top" style={{height: '200px', objectFit: 'contain'}} />
            <div className="card-body">
              <h3>{item.name}</h3>
              <p> {item.description} </p>
              <h5> {item.price} MAD</h5>
              <Link href='/product/[id]' as={`product/${item.id}`}>
                <motion.button className="btn btn-success btn-block" whileHover={{
                  scale: 1.02
                }}>Check Product</motion.button>  
              </Link>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json();
  return {
    props: {products: data}, // will be passed to the page component as props
  }
}

export default Home

