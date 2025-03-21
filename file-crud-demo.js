import { dir } from 'console';
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const filePath = path.join(__dirname, 'hello.txt');

console.log(filePath)

// fs.writeFileSync(filePath, 'Hello This is apple')

// fs.readFile(filePath, 'utf-8', (err, data)=>{
//     console.log(data)
// })

// fs.appendFileSync(filePath, ' and banana is also added')

// fs.rename(filePath, path.join(__dirname, 'fruits.txt'), (err)=>{
//     if(!err) console.log('file updated')
// })

// fs.unlinkSync(path.join(__dirname, 'fruits.txt'))