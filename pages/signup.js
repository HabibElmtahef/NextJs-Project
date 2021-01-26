import {React, useState} from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'


const signup = () => {
    const router = useRouter()

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignUp = async (e) => {
        e.preventDefault();
        const res  = await fetch('http://localhost:3000/api/signup', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username,
                email,
                password
            })
        })
        const result = res.json
        console.log(res)
        router.push('/login')
    } 

    return (
        <motion.div className="col-md-6 py-5 mx-auto" initial={{

                  y: 100,

              }}
              animate={{
                  y: 0
                  
              }}
              transition={{
                  duration: 0.6
              }}>
        <div className="card">
            <div className="card-body d-flex flex-column">
                <h1 className="m-auto">Sign Up</h1>
                <form onSubmit={ (e) => SignUp(e) }>
                    
                     <label className='pr-2'>Username :</label>
                    <div className="form-group">
                        <input type="text" value={username} name="username" placeholder="Username" className="form-control" onChange={ (e) => setUserName(e.target.value) } />
                    </div>

                    <label className='pr-2'>Email :</label>
                    <div className="form-group">
                        <input type="email" value={email} name="email" placeholder="Email" className="form-control" onChange={ (e) => setEmail(e.target.value) } />
                    </div>
                
                    <label className='pr-2'>Password :</label>
                    <div className="form-group">
                        <input type="password" value={password} name="password" placeholder="Password" className="form-control" onChange={ (e) => setPassword(e.target.value) } />
                    </div>

                    <button className="btn btn-block bg-dark text-white h4 font-weight-bold">Sign Up</button>

                    <h5 className="py-4">Already Have an Account ? <Link href='/login'><a style= {{color : 'gold', fontWeight: 'bold'}} >Sign In</a></Link></h5>
                    
                </form>
            </div>
        </div>

        </motion.div>
    )
}

export default signup
