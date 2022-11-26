// selectors
const form = document.getElementById("create-task-form");
const tasks = document.getElementById("tasks");
const newTask = document.getElementById("new-task-description");
const priority = document.getElementById("priority");

// Changes font color of li based on priority selected 
const checkPriority = (priority, li) => {
  if (priority.value === "high") {
    li.style.color = "red";
  } else if (priority.value === "medium") {
    li.style.color = "yellow";
  } else if (priority.value === "low") {
    li.style.color = "green";
  }
};



form.addEventListener("submit", (event) => {
  event.preventDefault();

  const li = document.createElement("li");
  li.innerText = newTask.value;

  checkPriority(priority, li);
  
  const btn = document.createElement("button");
  btn.classList.add("delete");
  btn.innerText = "X";
  btn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btn);
  tasks.appendChild(li);
});
