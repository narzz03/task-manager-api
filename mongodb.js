const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) =>{
    if(error){
        return console.log('Unable to connect to database')
    }

   const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Narz',
    //     age:26
    //     },(error, result)=> {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Refract code',
    //         completed: false
    //     }, {
    //         description: 'Udemy Node.js course',
    //         completed: false
    //     }, {
    //         description: 'Udemy Javascript course',
    //         completed: true
    //     }
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ name: 'Narz'}, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to fetch data')
    //     }
    //     console.log(result)
    // })

    // db.collection('users').find({  name:'Narzz', age: 27 }).toArray((error, result)=>{
    //     console.log(result)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e16782ea88c2d2be843aa9f")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age:27
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    
    db.collection('tasks').deleteOne({
        description: 'Refract code'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})