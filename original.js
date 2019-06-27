
// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions =[];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  taskTitles.push(title);
  taskComplete.push(false);
  taskDescriptions.push(description);
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed

logTaskState(1); // Do Laundry has not been completed
completeTask(1);
logTaskState(1); // Do Laundry has been completed

console.log('taskTitles',taskTitles);
console.log('taskComplete', taskComplete);