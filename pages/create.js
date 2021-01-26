import {React, useState} from 'react'
import {motion} from 'framer-motion'
import { useRouter } from 'next/router'

const create = () => {
     const router = useRouter()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const addProduct = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/products', {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name,
                    price,
                    description,
                    image: await imageUpload()

                })
            })
            const result = res.json()
            console.log(result)
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    
    const imageUpload = async ()=>{
         const data =  new FormData()
         data.append('file',image)
         data.append('upload_preset',"mystore")
         data.append('cloud_name',"habib98")
         const res = await fetch("https://api.cloudinary.com/v1_1/habib98/image/upload",{
           method:"POST",
           body:data
         })
         const res2  = await res.json()
         return res2.url
    }

    return (
        <div className="row py-5">
            <motion.div className="col-md-4 offset-md-2" initial={{

                  x: -100,
                  y:100
              }}
              animate={{
                  x: 0,
                  y: 0
              }}
              transition={{
                  duration: 0.5
              }}>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit = {(e) => addProduct(e)}>
                            <div className="form-group">
                                <input type="text" name="name" value={name} placeholder='Title' className="form-control" onChange={ (e) => setName(e.target.value) } />
                            </div>
                            <div className="form-group">
                                <textarea name="description" value={description} placeholder='Description'  rows="2" className="form-control" onChange={ (e) => setDescription(e.target.value) } ></textarea>
                            </div>
                            <div className="form-group">
                                <input type="number" name="price" placeholder="Price" value={price} className="form-control" onChange={ (e) => setPrice(e.target.value) } />
                            </div>
                            <div className="form-group">
                                <input type="file" name="image" placeholder="Image" className="form-control"  onChange={ (e) => setImage(e.target.files[0]) } />
                            </div>
                            <button className="btn btn-success btn-block"><i className="fas fa-cloud-upload-alt"></i> SAVE</button>
                        </form>
                    </div>
                </div>
            </motion.div>
            <motion.div className="col-md-6" initial={{

                  x: 100,
                  y: 100
              }}
              animate={{
                  x: 0,
                  y: 0
              }}
              transition={{
                  duration: 0.5
              }}>
                <div className="card">
                    <img src={image == '' ? 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png' :URL.createObjectURL(image)} alt="" className="card-img-top" style={{height: '290px', objectFit: 'contain'}}  />
                    <div className="card-body">
                      <h2> {name == '' ? 'Write Product Title' : name} </h2>
                      <p> {description == '' ? 'Write Product Description' : description} </p>
                      <h4> {price == '' ? 'Product Price' : price} </h4>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default create
