// Import the functions from the todo module
import { addTodo, deleteTodo, listTodos } from "./todo.mjs";
// Import the readline module to handle user input from the terminal
import readline from "readline";

// Create a readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to display the menu options to the user
const showMenu = () => {
    console.log("\nChoose an option:");
    console.log("1. Add Todo");
    console.log("2. List Todos");
    console.log("3. Delete Todo");
    console.log("4. Exit");

    // Ask the user to enter their choice and handle it
    rl.question("Enter your choice: ", handleChoice);
}

// Function to handle the user's menu choice
function handleChoice(choice) {
    switch (choice.trim()) { // Remove any extra spaces before checking
        case "1":
            // If the user chooses to add a task
            rl.question('Enter a task: ', (task) => {
                addTodo(task); // Add the task using the addTodo function
                showMenu(); // Show the menu again after adding
            });
            break;
        case "2":
            // If the user chooses to list all tasks
            listTodos(); // Display all todos
            showMenu(); // Show the menu again
            break;
        case "3":
            // If the user chooses to delete a task
            rl.question("Enter a task number you want to delete: ", (index) => {
                deleteTodo(parseInt(index)); // Convert input to number and delete
                showMenu(); // Show the menu again
            });
            break;
        case "4":
            // If the user chooses to exit
            console.log("You have exited successfully");
            rl.close(); // Close the readline interface
            break;
        default:
            // If the user enters an invalid choice
            console.log("Invalid choice");
            showMenu(); // Show the menu again
    }
}

// Start the application by showing the menu
showMenu();
