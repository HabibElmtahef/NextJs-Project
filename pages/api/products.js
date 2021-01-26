import db from '../../helpers/db'

export default async (req, res) => {
    switch(req.method) {
        case "GET":
            await getAllProducts(req, res)
            break;
        case "POST":
            await saveProduct(req, res)
            break;     
    }
}

const getAllProducts = async (req, res) => {
   await db.query("SELECT * FROM product", (result, err) => {
        if(err) res.send(err)
        if(result) res.json(result);
    })
}

const saveProduct = async (req, res) => {
    const {name,price,description,image} = req.body
    
        if(!name || !description || !price || !image){
            return res.status(422).json({error: "please add the fields"})
        }
        db.query("INSERT INTO product set ?",[req.body],
       (err, result) => {
        if (err) {
        res.send(err)
        } 
        else {
        res.send(result);
        }
       }
             );
     
}