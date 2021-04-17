//importing modules
const axios = require('axios')
const fs = require( 'fs' )


axios.get('http://jsonplaceholder.typicode.com/posts')
.then( res => {

  //writing result to file
  fs.writeFile('result/posts.json', JSON.stringify(res.data) , (err) => {
    if (err) throw err
    console.log('Successful')
  })
  
})

