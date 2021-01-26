import {React, useState} from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

const login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                <h1 className="m-auto">Sign In</h1>
                
                    <label className='pr-2'>Email :</label>
                    <div className="form-group">
                        <input type="text" value={email} name="email" placeholder="Email" className="form-control" onChange={ (e) => setEmail(e.target.value) } />
                    </div>
                
                    <label className='pr-2'>Password :</label>
                    <div className="form-group">
                        <input type="password" value={password} name="password" placeholder="Password" className="form-control" onChange={ (e) => setPassword(e.target.value) } />
                    </div>

                    <button className="btn btn-block bg-dark text-white h4 font-weight-bold">Sign In</button>
                    <h5 className="py-4">If you don't have Acount,You can <Link href='/signup'><a style= {{color : 'gold', fontWeight: 'bold'}} >Sign Up</a></Link></h5>
                
            </div>
        </div>

        </motion.div>
    )
}

export default login
