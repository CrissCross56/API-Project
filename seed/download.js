
import fetch from 'node-fetch';
import { promises as fsPromises } from 'fs';


fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5')
  .then(response=> response.json())
  .then(data => fsPromises.writeFile("./data.json", JSON.stringify(data)))
  .catch(error=> console.error(error))