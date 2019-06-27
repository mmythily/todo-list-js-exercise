// Using Object to keep track of state

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}

//DRIVER CODE

const task1 = newTask('Gotta do all the OOP reading', 'This is gonna take hella time');
const task2 = newTask('Grocery shopping', 'so you can make food at home');
const tasks = [task1,task2]

console.log(tasks);