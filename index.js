// Using Object to keep track of state

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    printState: function () {
      console.log(`${this.title} has ${this.complete ? "" : "not"} been completed`);
    },
    markComplete: function () {
      this.complete = true;
    }
  };
  return task;
}


//DRIVER CODE

const task1 = newTask('Gotta do all the OOP reading', 'This is gonna take hella time');
const task2 = newTask('Grocery shopping', 'so you can make food at home');
const tasks = [task1,task2]

task1.printState();
task1.markComplete();
task1.printState();

task2.printState();
task2.markComplete();
task2.printState();

console.log(tasks);