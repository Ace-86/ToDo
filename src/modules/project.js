import { Dom } from './dom.js';


export const projects = (() => { 
    Dom.projects();
    const newProject = document.querySelector('#submit1');
    newProject.addEventListener('click', function () { 
    Dom.projectAdd();
    Dom.task();
    const newTask = document.querySelector('.addTask');
    newTask.addEventListener('click', Dom.taskAdd);
    }

    )})
();
