import { Dom } from './dom.js';


export const projects = (() => { 
    Dom.projects();
    const newProject = document.querySelector('.addProject');
    const panel = document.querySelector('.sidepanel');
    const removeProjec = document.querySelector('.removeProject');
    newProject.addEventListener('click', Dom.projectAdd);
    })
();
