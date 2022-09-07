import { Storage } from './storage.js';

export const Dom = (() => { 
    
    const projects = () => {
    const panel = document.querySelector('.sidepanel');
    const modal = document.createElement('button');
    const newProject = document.createElement('button');
    const projectName = document.createElement('p');
    const section = document.createElement('div');
    section.className = 'staticBlock';
    projectName.className= 'project_name';
    projectName.textContent= 'Create Project';
    modal.className= 'projectModal';
    modal.textContent='+';
    newProject.className= 'addProject';
    newProject.textContent='+';
    panel.appendChild(section);
    section.appendChild(modal);
    section.appendChild(newProject); 
    section.appendChild(projectName);   
    }

    const projectAdd = () => {
        // const projSect = document.querySelector('.block');
        
        // clearElement(projSect);
        // Storage.projectArr.forEach(projectArr => {
        const panel = document.querySelector('.sidepanel');
        const pdate = document.querySelector('#project_date');
        const projectName = document.createElement('li');
        const projSect = document.createElement('div');
        const $title = document.querySelector('#title');
        const modal = document.querySelector('#modalForm');
        projSect.className = 'block';
        projectName.className = 'projectList';
        projectName.textContent = $title.value;
        panel.appendChild(projSect);
        projSect.appendChild(projectName);
        // return {pdate, deleteProject}
    // })

        Storage.getUserInput();
        // const deleteP = () => {
        //     panel.removeChild(panel.firstChild);
        // }
        // const $title = document.querySelector('#title');
        // const pdate = document.querySelector('#project_date');
        // const deleteProject = document.querySelector('button');
        // deleteProject.addEventListener('click', deleteP) 
        
        // ---------clears modal inputs----------
        pdate.value = '';
        $title.value= '';
    }

    function clearElement (element) {
        // const section = document.querySelector('.pblock');
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        } 
    }

    const task = () => {
    const $content = document.querySelector('.content')
        $content.innerHTML = '';
    const newTask = document.createElement('button');
    const taskName = document.createElement('input');
    const sectionTask = document.createElement('div');
    const taskList = document.createElement('div');
    const pickDate = document.createElement('input');
    pickDate.setAttribute('type', 'date');
    pickDate.className = 'dates';
    taskList.className = 'taskList';
    taskList.textContent = 'Create Task';
    sectionTask.className = 'block';
    taskName.className= 'taskName';
    newTask.className= 'addTask';
    newTask.textContent='+';
    $content.appendChild(sectionTask);
    sectionTask.appendChild(newTask); 
    sectionTask.appendChild(taskList);
    sectionTask.appendChild(taskName);
    sectionTask.appendChild(pickDate);
    
    }

    const taskAdd = () => {
    const pickDate = document.querySelector('.dates');
    const taskName = document.querySelector('.taskName');
    const $content = document.querySelector('.content');
    const editTask = document.createElement('button');
    const deleteTask = document.createElement('button');
    const taskInput = document.createElement('li');
    const sectionTask = document.createElement('div');
    const taskList = document.createElement('div');
    const showDate = document.createElement('p')
    taskList.className = 'taskList';
    taskList.textContent = 'Task ';
    deleteTask.className = 'deleteTask';
    deleteTask.textContent = 'X';
    sectionTask.className = 'block';
    taskInput.className= 'taskInput';
    taskInput.textContent= taskName.value;
    editTask.className= 'editTask';
    editTask.textContent='edit';
    showDate.innerHTML = pickDate.value;
    $content.appendChild(sectionTask);
    sectionTask.appendChild(editTask);
    sectionTask.appendChild(deleteTask); 
    sectionTask.appendChild(taskList);
    sectionTask.appendChild(taskInput); 
    sectionTask.appendChild(showDate);
    Storage.getTaskInput();
    taskName.value = ''
    }

    return { projects, projectAdd, taskAdd, task};
    })
();