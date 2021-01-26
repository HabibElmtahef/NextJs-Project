import db from '../../../helpers/db'
export default async (req,res)=>{
    switch(req.method){
        case "GET":
          await getProduct(req,res) 
          break; 
        case "DELETE":
          await deleteProduct(req,res)
          break;
    }
    
}

const getProduct = async (req,res)=>{
    const {pid } =  req.query
    db.query("SELECT * FROM product WHERE id = ?",[pid],(err, result) => {
            if(err) res.json({msg: "This Game does'nt Exist"})
            else res.json(result[0]);
    })
}

const deleteProduct = async (req,res)=>{
    const {pid } =  req.query
    db.query("DELETE FROM product WHERE id = ?",[pid],(err, result) => {
            if(err) res.json({msg: "This Game does'nt Exist"})
            else res.json(result);
    })
}
