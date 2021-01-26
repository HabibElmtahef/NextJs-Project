import db from '../../helpers/db'

export default async (req, res) => {
      const id = req.body.id;
      const name = req.body.name;
      const image = req.body.image
      const price = req.body.price

     db.query(
    "INSERT INTO cart (id ,name, image, price) VALUES (?,?,?,?)",
    [id ,name, image, price],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
}