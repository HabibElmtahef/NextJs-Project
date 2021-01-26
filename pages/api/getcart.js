import db from '../../helpers/db'

export default async(req, res) => {
    await db.query("SELECT * FROM cart", (result, err) => {
        if(err) res.send(err)
        if(result) res.json(result);
    })
}