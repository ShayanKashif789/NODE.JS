import fs from "fs"
import path from "path"

//Define file type according to their corresponding categories
const fileType={
    Images:[".jpg"],
    Music:[".mp3"],
    Videos:[".mp4"],
    Documents:[".pdf",".txt"],
    Archive:[".zip"]
}
function organizeFolder(FolderPath) {
    fs.readdir(FolderPath,(err,files)=>{ //readdir is used to read all files and folder inside a directory
        if(err) {
            console.log("Error in reading directory",err);
            return;
        }
        files.forEach(file=>{  //iterating over the files inside a directory

            const filePath=path.join(FolderPath,file); //creating a full path for the file
            const ext=path.extname(file).toLowerCase(); //extracting out the extension name
            if(!ext) return; //if there is not extension it means its a folder not a file
            let folderName;
            for(let types in fileType) { //for in loop is used to iterate over the object
            if(fileType[types].includes(ext)) {  //here we are checking  which category file belongs too
                folderName= types;
                break;
            }
        }
        if(!folderName) return; //if current file do not belongs to any category return
        
        const newFolder=path.join(FolderPath,folderName); //creating a path for a new folder
        if(!fs.existsSync(newFolder)) { // checking if the folder already exist if not creating a new folder
            fs.mkdirSync(newFolder)
        }
        const newFolderPath=path.join(newFolder,file); //path for new file inside a folder
        fs.rename(filePath,newFolderPath,(err)=>{  //rename is used to move the file to the respective folder
            if(err) console.log("Error moving file",err);
        })
    })
        
    })
}
organizeFolder("./FileOrganizerSystem");