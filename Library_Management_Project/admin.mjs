import fs from "fs"

export function writeBooks(books) {
    fs.writeFileSync("books.json",JSON.stringify(books,null,2));
}
export function readBooks(){
    if(!fs.existsSync("books.json")) return []
    let books = fs.readFileSync("books.json")
    return JSON.parse(books);
}
export function addBook(book) {
    let books = readBooks();
    book.id=books.length ? books[books.length-1].id+1 :1
    books.push(book);
    writeBooks(books);
    console.log("Books added successfully") 
}
export function deleteBook(title) {
    let books=readBooks();
    let filteredbooks=  books.filter(book=>book.title!=title);
    writeBooks(filteredbooks);
    console.log("Book deleted successfully");
}
export function updateBooks(title,updatedData) {
    let books=readBooks();
    let index = books.findIndex(book=>book.title===title);
    books[index]={...books[index],...updatedData}
    writeBooks(books);
      console.log("Book updated successfully!");
}
export function listAllBooks() {
    let books = readBooks();
    console.log(books);
}