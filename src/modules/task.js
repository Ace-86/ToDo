export const task = (() => {    
    let count = 1;
    const $content = document.querySelector('.content')
    const newTask = document.createElement('button');
    const taskName = document.createElement('input');
    const sectionTask = document.createElement('div');
    const taskList = document.createElement('div');
    taskList.className = 'taskList';
    taskList.textContent = 'Task ' + `${count}`;
    sectionTask.className = 'block';
    taskName.className= 'project_name';
    taskName.textContent= 'Project';
    newTask.className= 'addProject';
    newTask.textContent='+';
    $content.appendChild(sectionTask);
    sectionTask.appendChild(newTask); 
    sectionTask.appendChild(taskList);
    sectionTask.appendChild(taskName);   

    // return { };
    })
();
