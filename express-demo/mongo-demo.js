import dbConnect from "./mongodb.js";


// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

const main = async () => {
  let data =await dbConnect();
  let response = await data.find({}).toArray();
  console.log(response);
}

main();

export default main;