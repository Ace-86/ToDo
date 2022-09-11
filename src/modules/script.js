import { $storage } from './storage.js';

export const script = (() => { 
    // --------------constants----------
const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector('[data-delete-list-button]')
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count')
const taskContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.querySelector('#task-template')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const clearCompleteTaskButton = document.querySelector('[data-clear-complete-tasks-button]')

// --------storage----------

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
let listsArr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedListId = localStorage.getItem
(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

// -------------event listeners-----------------

listsContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectedListId = e.target.dataset.listId
        saveAndRender()
    }
})

newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const listName = newListInput.value
    if(listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    listsArr.push(list)
    saveAndRender()
})

deleteListButton.addEventListener('click', e => {
    listsArr = listsArr.filter(list => list.id !== selectedListId)
    selectedListId = null
    saveAndRender()
})

taskContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'input') {
        const selectedList = listsArr.find(list => list.id === selectedListId)
        const selectedTask = selectedList.task.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
        save()
        renderTaskCount(selectedList)
    }
})

clearCompleteTaskButton.addEventListener('click', e => {
    const selectedList = listsArr.find(list => list.id === selectedListId)
    selectedList.task = selectedList.task.filter(task => !task.complete)
    saveAndRender()
})

newTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    const taskName = newTaskInput.value
    if(taskName == null || taskName === '') return
    const $task = createTask(taskName)
    newTaskInput.value = null
    const selectedList = listsArr.find(list => list.id === selectedListId)
    selectedList.task.push($task)
    saveAndRender()
})

// --------------------functions---------------

function createList(name) {
   return {id: Date.now().toString(), name: name, task: []}
}

function createTask(name) {
    return {id: Date.now().toString(), name: name, complete: false}
 }
 

function saveAndRender () {
    $storage.save()
    render()
}

// function save() {
//     localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(listsArr))
//     localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
// }

function render() {
    clearElement(listsContainer)
    renderList()
    const selectedList = listsArr.find(list => list.id === selectedListId)
    if (selectedListId == null) {
        listDisplayContainer.style.display = 'none'
    } else {
        listDisplayContainer.style.diplay = ''
        listTitleElement.innerText = selectedList.name
        renderTaskCount(selectedList)
        clearElement(taskContainer)
        renderTask(selectedList)
    }
}

// --------------task--------------
function renderTask(selectedList){
    selectedList.task.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox= taskElement.querySelector('input')
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label= taskElement.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)
        taskContainer.appendChild(taskElement)

    })
}

function renderTaskCount(selectedList) {
    const incompleteTaskCount = selectedList.task.filter(task => !task.complete).length
        const taskString = incompleteTaskCount === 1 ? "task" : "tasks"
        listCountElement.innerText = `${incompleteTaskCount}
        ${taskString} remaining` 
}


// --------------list--------------
function renderList() {
        listsArr.forEach(list => {
            const listElement = document.createElement('li')
            listElement.dataset.listId = list.id
            listElement.classList.add('list-name')
            listElement.innerText = list.name
            if (list.id === selectedListId) {
                listElement.classList.add('active-list')
            }
            listsContainer.appendChild(listElement) 
    })
}


function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()
})
();