import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const dirPath = path.join(__dirname, 'files');


// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath +"/"+`file${i}.txt`, 'Hello World!')    
// }

fs.readdir(dirPath, (err, files)=>{
    files.forEach((file)=>{
        console.log(file)
    })
})