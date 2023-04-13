const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
  // write code here
	// dont change function name
	fs.reader(fileName,(error)=>{
		if(error) =>{
		console.log(error);
		}else{
		console.log(`${fileName}`);
		}
	})
  
};


module.exports =  reader ;
