import dbConnect from "./mongodb.js";

const saveProduct = async () => {
  let collection = await dbConnect();
  let result = await collection.insertOne({
    name: "oppo 18",
    brand: "Oppo",
    price: 50,
    category: "mobile",
  });

  if(result.acknowledged) console.log('Data Inserted Successfuly!')

};

const saveProducts = async () => {
    let collection = await dbConnect();
    let result = await collection.insertMany([
        {
            name: "Nord",
            brand: "1+",
            price: 50,
            category: "mobile",
          },
          {
            name: "Galaxy",
            brand: "Samsung",
            price: 50,
            category: "mobile",
          },
          {
            name: "Vivo 19",
            brand: "VIVO",
            price: 50,
            category: "mobile",
          }
    ]);
  
    if(result.acknowledged) console.log('Data Inserted Successfuly!')
  
  };

const updateProduct = async () => {
    let collection = await dbConnect();
    let result = await collection.updateOne({name:'oppo 18'}, 
        {
            $set:{
                name:'Oppo F19 Pro'
            }
        }
    );

    if(result.acknowledged) console.log('Data Updated Successfuly!')

}

const deleteProduct = async () =>{
    let collection = await dbConnect();
    let result = await collection.deleteOne({name: 'oppo 18'});
    
    if(result.acknowledged) console.log('Data Deleted Successfully!')
}

const findProductByName = async () => {
    let collection = await dbConnect();
    let result = await collection.findOne({name: 'Nord'});

    console.log(result);
}

// saveProduct();

// saveProducts();

// updateProduct();

// deleteProduct();

// findProductByName();