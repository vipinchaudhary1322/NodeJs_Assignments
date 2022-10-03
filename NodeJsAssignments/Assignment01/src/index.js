const fs = require('fs/promises');
const path=require("path");

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const dirname=path.join(__dirname,'curd')
	const filpath=`${dirname}/${fileName}`;
	fs.writeFile(filpath,fileContent);
}
myFileWriter("File.txt","Hello");

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const dirname=path.join(__dirname,'curd')
	const filpath=`${dirname}/${fileName}`;
	fs.readFile(filpath,'utf-8',(err,item)=>{
		if(err){
			console.log(err);
		}else{
			console.log(item);
		}
		
	})
}
myFileReader('File.txt');


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const dirname=path.join(__dirname,'curd')
	const filpath=`${dirname}/${fileName}`;
	fs.appendFile(filpath,fileContent)
}
myFileUpdater("File.txt"," World");

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	const dirname=path.join(__dirname,'curd')
	const filpath=`${dirname}/${fileName}`;
	fs.unlink(filpath);
}
myFileDeleter("File.txt");



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }