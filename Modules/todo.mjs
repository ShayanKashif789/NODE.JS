// Initialize an empty array to store all todos
let Todos = [];

// Function to add a new todo task
export function addTodo(task) {
    // Push the new task into the Todos array
    Todos.push(task);
    // Log confirmation that the task was added
    console.log(`Added task: ${task}`);
}

// Function to list all todo tasks
export function listTodos() {
    console.log("All Todos:");
    // Loop through the Todos array and print each task with its index
    Todos.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
}

// Function to delete a todo task by its index (1-based index)
export function deleteTodo(index) {
    // Check if the index is valid
    if (index > 0 && index <= Todos.length) {
        // Log the task that will be deleted
        console.log(`Deleted todo is ${Todos[index - 1]}`);
        // Remove the task from the Todos array
        Todos = Todos.filter((_, i) => i != index - 1);
        // Log the updated list of todos
        console.log("Updated Todos:");
        listTodos();
    } else {
        // If the index is invalid, show an error message
        console.log("Invalid Todo number");
    }
}
