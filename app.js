

const fs = require("node:fs")

function create() {
    try {
        if(!fs.existsSync("./files")){
            fs.mkdirSync("./files")
        }

        if (fs.existsSync("./files/fresh.txt")){
            throw new Error ("FS operation failed")
        }
        fs.writeFileSync("./files/fresh.txt", "I am fresh and young")
        console.log("Matn muvaffaqiyatli yozildi");
        
    } catch (error) {
        console.log(error.message);    
    }
}
// create()

function copy() {
    try {
        if (!fs.existsSync("./files") || fs.existsSync("./files_copy")){
            throw  new Error ("FS operation failed")
        }
        fs.mkdirSync("./files_copy")

        const files = fs.readdirSync("./files")

        for (const file of files) {
            fs.copyFileSync(`./files/${file}`, `./files_copy/${file}`)
        }

        console.log("Fayllar muvaffaqiyatli copy qilindi");
        
    } catch (error) {
        console.log(error.message);    
    }
}
// copy()

function rename() {
    try {
        if (!fs.existsSync("wrongFilename.txt") || fs.existsSync("properFilename.md")){
            throw new Error ("FS operation failed")
        }
        fs.renameSync("wrongFilename.txt", "properFilename.md")
        console.log("Muvaffaqiyatli qayta nomlandi");
        
    } catch (error) {
        console.log(error.message);
    }
}
// rename()

function deletee() {  // delete ni ishlatmaslik kerak
    try {
        if (!fs.existsSync("fileToRemove.txt")) {
            throw new Error ("FS operation failed")
        }    
        fs.unlinkSync("fileToRemove.txt")
        console.log("File muvaffaqiyatli o'chirildi");  
    } catch (error){
        console.log(error.message);
    }      
}
// deletee()

function list() {
    try {
        if(!fs.existsSync("./files")){
            throw new Error ("FS operation failed")
        }

        const files = fs.readdirSync("./files")
        console.log("\nFayllar:");

        for (const file of files) {
            console.log(file);
        }
        console.log("Fayllar muvaffaqiyatli chiqarildi");
        
    } catch (Error) {
        console.log(Error.message);    
    }
}
// list()

function read() {
    try {
        if (!fs.existsSync("fileToRead.txt")){
            throw new Error ("FS operation failed")
        }
        console.log(fs.readFileSync("fileToRead.txt", "utf-8"));
        
    } catch (error) {
        console.log(error.message);        
    }
}
// read()

function writeNumbers(){
    if (!fs.existsSync("sonlar.txt")) {
        fs.writeFileSync("sonlar.txt", "")
    }
    for (let i = 0; i < 100; i++) {
        fs.appendFileSync("./sonlar.txt", Math.floor(Math.random() * 100) + "\n")       
    }
}
// writeNumbers()

function readNumbers() {
    let massiv = []

    const numbers = fs.readFileSync("./sonlar.txt", "utf-8").split("\n")
    numbers.forEach((num) => {
        if (num !== "") {
            massiv.push(Number(num));
        }
    })

    console.log(massiv.length);    
    console.log(massiv);    
}
// readNumbers()
