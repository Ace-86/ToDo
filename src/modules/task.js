import { Dom } from './dom.js';

export const task = (() => { 
    Dom.task();
    const newTask = document.querySelector('.addTask');
    newTask.addEventListener('click', Dom.taskAdd);
    })
();