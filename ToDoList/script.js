const todoInput = document.getElementById('todo-input');
const categorySelect = document.getElementById('category-select');
const todoDateInput = document.getElementById('todo-date');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const progressStats = document.getElementById('progress-stats');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const tabButtons = document.querySelectorAll('.tab-btn');
const clearCompletedBtn = document.getElementById('clear-completed-btn');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';
let editId = null;

document.addEventListener('DOMContentLoaded', () => {
    setDefaultDate();
    renderTodos();
});

function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    todoDateInput.value = today;
}

addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();
    const category = categorySelect.value;
    let dueDate = todoDateInput.value;

    if (!text) return;
    if (!dueDate) dueDate = new Date().toISOString().split('T')[0];

    if (editId !== null) {
        todos = todos.map(todo => todo.id === editId ? { ...todo, text, category, date: dueDate } : todo);
        editId = null;
        addBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
    } else {
        const newTodo = {
            id: Date.now(),
            text: text,
            category: category,
            date: dueDate,
            completed: false
        };
        todos.push(newTodo);
    }

    saveAndRender();
    todoInput.value = '';
    setDefaultDate();
});

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBtn.click();
});

function saveAndRender() {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

function renderTodos() {
    todoList.innerHTML = '';

    let filteredTodos = todos;
    if (currentFilter === 'active') {
        filteredTodos = todos.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter(t => t.completed);
    }

    if (filteredTodos.length === 0) {
        todoList.innerHTML = `<li class="empty-msg">No tasks found here! ✨</li>`;
        updateProgress();
        return;
    }

    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

        const dateObj = new Date(todo.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

        li.innerHTML = `
            <div class="todo-left">
                <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleComplete(${todo.id})">
                <div class="todo-text-container">
                    <span class="todo-text">${todo.text}</span>
                    <div class="todo-meta">
                        <span class="todo-tag">${todo.category}</span>
                        <span class="todo-due-date"><i class="fa-regular fa-calendar-days"></i> ${formattedDate}</span>
                    </div>
                </div>
            </div>
            <div class="todo-actions">
                <button class="action-btn edit-btn" onclick="editTodo(${todo.id})"><i class="fa-solid fa-pen"></i></button>
                <button class="action-btn delete-btn" onclick="deleteTodo(${todo.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        todoList.appendChild(li);
    });

    updateProgress();
}

window.toggleComplete = function (id) {
    todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    todos.sort((a, b) => a.completed - b.completed);
    saveAndRender();
}

window.deleteTodo = function (id) {
    todos = todos.filter(todo => todo.id !== id);
    saveAndRender();
}

window.editTodo = function (id) {
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
        todoInput.value = todoToEdit.text;
        categorySelect.value = todoToEdit.category;
        todoDateInput.value = todoToEdit.date;
        editId = id;
        addBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        todoInput.focus();
    }
}

function updateProgress() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;

    progressStats.innerText = `${completed} / ${total}`;

    const percentage = total === 0 ? 0 : (completed / total) * 100;
    progressBar.style.width = `${percentage}%`;

    if (total === 0) progressText.innerText = "Let's add some tasks! 🎯";
    else if (percentage === 100) progressText.innerText = "All done! Excellent! 🎉";
    else if (percentage >= 50) progressText.innerText = "You're doing great! 💪";
    else progressText.innerText = "Keep it up! 🚀";
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.getAttribute('data-filter');
        renderTodos();
    });
});

clearCompletedBtn.addEventListener('click', () => {
    todos = todos.filter(t => !t.completed);
    saveAndRender();
});