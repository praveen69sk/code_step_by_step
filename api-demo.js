import {createServer} from 'http'
import data from './data.js'


const apiDemo = createServer((req, resp)=>{
    resp.writeHead(200, {'content-type':'text/application-json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4500);

export default apiDemo;


// import { createServer } from 'http';

// createServer((req, resp)=>{
//     resp.write('Hello This is Praven S Kalawad....');
//     resp.end();
// }).listen(4500);

// console.log('Hello Praven S Kalawad')