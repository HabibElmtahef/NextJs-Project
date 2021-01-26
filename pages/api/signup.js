import db from '../../helpers/db'
//import bcrypt from 'bcryptjs'


export default async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    if(password.length < 6){
        res.send("Weak password")
    }
    else {
     db.query(
    "INSERT INTO user (username, email, password) VALUES (?,?,?)",
    [username, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
    }
          
}