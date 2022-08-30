export const Dom = (() => { 
    
    const projects = () => {
    const panel = document.querySelector('.sidepanel')
    const newProject = document.createElement('button');
    const projectName = document.createElement('p');
    const section = document.createElement('div');
    section.className = 'pblock';
    projectName.className= 'project_name';
    projectName.textContent= 'Create Project';
    newProject.className= 'addProject';
    newProject.textContent='+';
    panel.appendChild(section);
    section.appendChild(newProject); 
    section.appendChild(projectName);   
    }

    const projectAdd = () => {
        const panel = document.querySelector('.sidepanel')
        const editProject = document.createElement('button');
        const projectName = document.createElement('p');
        const deleteProject = document.createElement('button');
        const section = document.createElement('div');
        section.className = 'pblock';
        projectName.className = 'projectList';
        projectName.textContent = 'Project ';
        deleteProject.className = 'removeProject';
        deleteProject.textContent = 'X';
        editProject.className= 'editProject';
        editProject.textContent='edit';
        panel.appendChild(section);
        section.appendChild(deleteProject); 
        section.appendChild(editProject);
        section.appendChild(projectName);
        const deleteP = () => {
            panel.removeChild(panel.firstChild);
        }

        deleteProject.addEventListener('click', deleteP);
    
    }

    const task = () => {
    const $content = document.querySelector('.content')
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
    const taskInput = document.createElement('p');
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
    taskName.value = ''
    }

    return { projects, projectAdd, taskAdd, task};
    })
();