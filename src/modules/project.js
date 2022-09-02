import { Dom } from './dom.js';
// import { Storage } from './storage.js';


export const projects = (() => { 
    Dom.projects();
    const newProject = document.querySelector('#submit1');
    newProject.addEventListener('click', function () { 
    Dom.projectAdd();
    // Storage.getUserInput();
    Dom.task();
    const newTask = document.querySelector('.addTask');
    newTask.addEventListener('click', Dom.taskAdd);
    }

    )})
();
