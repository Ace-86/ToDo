import { Dom } from "./dom";

export const Storage = (() => {
    
    let projectArr = [];


    let taskArr = [];
    
    class Project {
        constructor(project_name, dateDue, id) {
            this.project_name = project_name;
            this.dateDue = dateDue;
            this.id = ' ';
            // this.dateCurr = dateCurr;
        }
    }
    
    function clearElement (element) {
        while(element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }
// ---------------------------------------
    class Task {
        constructor (task_name, due, count) {
            this.task_name = task_name;
            this.due = due;
            this.count = count;
        }
    }
    

    const getUserInput = () => {
            const $title = document.querySelector('#title');
            const pdate = document.querySelector('#project_date');
            let project_name = $title.value;
            let dateDue = pdate.value;
            // let dateCurr = $author.value;
            let user = new Project(project_name, dateDue);
            projectArr.push(user);
            localStorage.setItem('projectStored', JSON.stringify(projectArr));
            console.log(projectArr);
        };

        const getTaskInput = () => {
            const pickDate = document.querySelector('.dates');
            const taskName = document.querySelector('.taskName');
            let task_name = taskName.value;
            let Due = pickDate.value;
            // let dateCurr = $author.value;
            let taskuser = new Task(task_name, Due);
            taskArr.push(taskuser);
            localStorage.setItem('taskStored', JSON.stringify(taskArr));
            console.log(projectArr);
            console.log(Project.project_name);
            console.log(taskArr);
        };
        
        
        
        return { getUserInput, projectArr, Project, Task, taskArr, getTaskInput }
    })
    ();
    
    // -----------new---------
        // newListForm.addEventListener('submit', e => {
        //     e.preventDefault()
        //     const listName= newListInput.value
        //     if(listName == null || listName === '') return
        //     const list = createList(listName);
    
        // })
    
        // function createList (name) {
        //     return {id: Date.now().toString(), name: name, task: []}
        // }
        
        // function render() {
        //     clearElement(listContainer)
        //     projectArr.forEach(ProjectArr => {
        //         const listElement = document.createElement('li')
        //         listElement.datasest.listId = list.id
        //         listElement.classList.add('list-name')
        //         listElement.innerText = projectArr.name
        //         listContainer.appendChild(listElement)
        //     })
        // }