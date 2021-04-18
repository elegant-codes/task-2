//importing modules
const axios = require('axios')
const fs = require( 'fs' )

// Write to file function
const writePosts = (res) => {
  fs.writeFile('./result/posts.json', JSON.stringify(res.data, null, 2) , (err) => {
    if (err) throw err
    console.log('Successful')
})
}

axios.get('http://jsonplaceholder.typicode.com/posts')
.then( res => {
  //check if  exist or not
  fs.access('./result', err => {
    if(!err) {
      
      //writing result to file
      writePosts(res) 
    } else {

      //making directory before writing file
      fs.mkdir('./result', err => {
        if (err) throw err
        writePosts(res)
      })
      
    }
  })
  
})

