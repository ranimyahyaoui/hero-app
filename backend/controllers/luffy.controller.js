//bch n3ml les fcts li hajti bahoum kol
const Luffy = require('../models/luffy');
const create = (req,res)=>{
    let data=req.body;//na9ra data
    let luffy = new Luffy(data);//nsn3 instance min modele
    luffy.save()//nsavi instance
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(//ay error fi code
            (err)=>{
                res.send(err)
            }
        )
}
const list = (req,res)=>{
    Luffy.find()
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(//ay error fi code
            (err)=>{
                res.send(err)
            }
        )
}
const byId =(req,res)=>{
    Luffy.findById( {_id: req.params.id})
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(//ay error fi code
            (err)=>{
                res.send(err)
            }
        )
}
const deleteLuffy =(req,res)=>{
    Luffy.findByIdAndDelete({_id: req.params.id})
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(//ay error fi code
            (err)=>{
                res.send(err)
            }
        )
}


// ...existing code...
const updateLuffy = (req,res)=>{
    Luffy.findByIdAndUpdate(
        req.params.id,
        req.body,
        { returnDocument: 'after' }
    )
    .then(
        (result)=>{
            res.send(result);
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
}

module.exports={create, list , byId , deleteLuffy , updateLuffy};