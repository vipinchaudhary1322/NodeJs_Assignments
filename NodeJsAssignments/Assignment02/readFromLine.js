const readline=require('readline');
const data=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
   data.question('Please enter your name:',(item)=>{
    console.log(`Hello ${item}`)
    data.close();
   })