
const fs = require("node:fs")
if (!fs.existsSync("product.json")) {
    fs.writeFileSync("product.json", "[]")
}
function read() {
    return JSON.parse(fs.readFileSync("./product.json", "utf-8"))
}

function writeData(books) {
    fs.writeFileSync("./product.json", JSON.stringify(books))
}

class Book {

    create(data) {
        let books = read();
        const existingBook = books.find(book => book.name === data.name);
        if (existingBook) {
            console.log(`Book with name "${data.name}" already exists. Not adding.`);
            return;
        }

        let leng = books.length
        books.push({
            id: leng == 0 ? 1 : books.at(-1).id + 1,
            ...data
        })
        writeData(books)
    }

    findAll(){
        let books = read();
        console.log("All books:", books);
    }

    findOne(id){
        let books = read()
        let book = books.find((val) => val.id == id)
        if (book) {
            console.log("Find book:", book);
        } else {
            console.log("Not found");
        }
    }

    update(id, data){
        let books = read()
        let bookIndex = books.findIndex((val) => val.id == id)

        if (bookIndex == -1){
            console.log("Not found");
            return 0
        }
        books[bookIndex] = {
            ...books[bookIndex],
            ...data
        }
        writeData(books)
    }
    remove(id){
        let books = read()
        books = books.filter((val) => val.id !== id)
        writeData(books)
    }

    search(query) {
        query = query.toLowerCase();
        let books = read();
        
        const results = books.filter(book => 
            (book.name && book.name.toLowerCase().includes(query)) ||
            (book.author && book.author.toLowerCase().includes(query)) ||
            (book.page.toString().includes(query))
        );
        
        if (results.length > 0) {
            console.log(`Found ${results.length} books matching "${query}":`, results);
            return
        } else {
            console.log(`No books found matching "${query}".`);
            return [];
        }
    }
}

let books = new Book

books.create({name: "Izlash", author: "Mehmet Yildiz", page: 250})
books.create({name: "Ikki eshik orasi", author: "O'. Hoshimov", page: 576})
// books.findAll()
// books.findOne(2)
books.update(2, {name: "Yulduzli tunlar", author: "P. Qodirov", page: 576})
// books.remove(1)
books.create({name: "Men", author: "Fotih Duman", page: 250})
books.findAll()
books.search("7")