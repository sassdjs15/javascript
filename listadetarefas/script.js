// Função para adicionar tarefa
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        // Criar novo item de lista (li)
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this)">Remover</button>
            <button onclick="completeTask(this)">Concluir</button>
        `;

        // Adicionar o novo item à lista
        taskList.appendChild(newTask);

        // Limpar o campo de entrada
        taskInput.value = "";
    }
}

// Função para remover tarefa
function removeTask(button) {
    const taskList = document.getElementById("taskList");
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}

// Função para marcar tarefa como concluída
function completeTask(button) {
    const taskItem = button.parentNode;
    taskItem.classList.toggle("completed");
    taskList.removeChild(taskItem);

}

