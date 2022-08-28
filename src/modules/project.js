import { Dom } from './dom.js';


export const projects = (() => { 
    Dom.projects();
    const newProject = document.querySelector('button');
    newProject.addEventListener('click', Dom.projectAdd);
    })
();
