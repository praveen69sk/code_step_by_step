import { MongoClient} from "mongodb";

const url = 'mongodb://localhost:27017'
const db = 'e-comm'

const client = new MongoClient(url);

const dbConnect = async () => {
    let result = await client.connect();
    let dataBase = result.db(db);
    return dataBase.collection('products');
    // let response = await collection.find({}).toArray();
    // console.log(response)
    // result.close();
}

export default dbConnect;