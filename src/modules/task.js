
export const task = (() => {    
    let count = 1;
    const $content = document.querySelector('.content')
    const newTask = document.createElement('button');
    const taskName = document.createElement('input');
    const sectionTask = document.createElement('div');
    const taskList = document.createElement('div');
    taskList.className = 'taskList';
    taskList.textContent = 'Create Task';
    sectionTask.className = 'block';
    taskName.className= 'taskName';
    newTask.className= 'addProject';
    newTask.textContent='+';
    $content.appendChild(sectionTask);
    sectionTask.appendChild(newTask); 
    sectionTask.appendChild(taskList);
    sectionTask.appendChild(taskName);   

    const taskAdd = () => {
    const $content = document.querySelector('.content')
    const editTask = document.createElement('button');
    const deleteTask = document.createElement('button');
    const taskInput = document.createElement('p');
    const sectionTask = document.createElement('div');
    const taskList = document.createElement('div');
    const pickDate = document.createElement('input');
    pickDate.setAttribute('type', 'date');
    taskList.className = 'taskList';
    taskList.textContent = 'Task ' + `${count}`;
    deleteTask.className = 'deleteTask';
    deleteTask.textContent = 'X';
    sectionTask.className = 'block';
    taskInput.className= 'taskInput';
    taskInput.textContent= taskName.value;
    editTask.className= 'editTask';
    editTask.textContent='edit';
    $content.appendChild(sectionTask);
    sectionTask.appendChild(editTask);
    sectionTask.appendChild(deleteTask); 
    sectionTask.appendChild(taskList);
    sectionTask.appendChild(taskInput); 
    sectionTask.appendChild(pickDate);
    count ++
    taskName.value = '';
    }

    // const removeTask = () => {
    //     this.removeChild(this.firstChild);
    // }

    // deleteTask.addEventListener('click', removeTask)
    newTask.addEventListener('click', taskAdd);

    return { taskAdd};
    })
();
