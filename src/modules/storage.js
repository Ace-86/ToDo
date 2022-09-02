import { Dom } from "./dom";

export const Storage = (() => {
    let projectArr = [];
    let taskArr = [];
    let count = 0;
    class Project {
        constructor(project_name, dateDue, task) {
            this.project_name = project_name;
            this.dateDue = dateDue;
            this.task = taskArr;
            // this.dateCurr = dateCurr;
        }
    }
    
    class Task {
        constructor(task_name, due, count) {
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
            console.log(projectArr);
        };

        const getTaskInput = () => {
            count ++
            const pickDate = document.querySelector('.dates');
            const taskName = document.querySelector('.taskName');
            let task_name = taskName.value;
            let Due = pickDate.value;
            // let dateCurr = $author.value;
            let taskuser = new Task(task_name, Due);
            taskArr.push(taskuser);
            console.log(projectArr);
            console.log(Project.project_name);
            console.log(taskArr);
            
        };

        

        return { getUserInput, projectArr, Project, Task, taskArr, getTaskInput }
})
();
