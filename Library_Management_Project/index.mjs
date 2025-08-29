import server from "./server.mjs";
import readline from 'readline'
import { addBook, deleteBook, updateBooks, listAllBooks } from "./admin.mjs";
const mode = process.argv[2];
if (mode == 'admin') {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    function showMenu() {
        console.log("\nChoose an option:");
        console.log("1. Add Book");
        console.log("2. Delete Book");
        console.log("3. Update Book");
        console.log("4. List All Books");
        console.log("5. Exit");
        rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                rl.question("Enter Title: ", (title) => {
                    rl.question("Enter author name: ", (author) => {
                        rl.question("Ente the no of copies", (copies) => {
                            addBook({ title, author, copies: Number(copies) })
                            showMenu();
                        })
                    })
                })
                break;
            case "2":
                rl.question("Enter a book you want to delete", (book) => {
                    deleteBook(book)
                    showMenu();
                })
                break;
            case "3":
                rl.question("Enter a book you want to update", book => {
                    rl.question("Enter new title (leave blank to skip)", title => {
                        rl.question("Enter new author", author => {
                            rl.question("Update the no of copies", copies => {
                                updateBooks(book, {
                                    ...(title && { title }),
                                    ...(author && { author }),
                                    ...(copies && { copies })
                                });
                                showMenu();
                            })
                        })
                    })
                })
                break;
            case "4":
                listAllBooks();
                showMenu();
                break;
            case "5":
                rl.close();
                break;
            default:
                console.log("Invalid choice!");
                showMenu();

        }

    })
}
showMenu()
}
else if (mode == "server") {
    server.listen(5000, () => {
        console.log("Server running at port 5000");
    })
}
else {
    console.log("Invalid choice")
}
