import { Dom } from './dom.js';
// import { modals } from '.modal.js';


export const projects = (() => { 
    Dom.projects();
    const newProject = document.querySelector('#submit1');
    // const panel = document.querySelector('.sidepanel');
    // const removeProjec = document.querySelector('.removeProject');
    newProject.addEventListener('click', Dom.projectAdd);
    })
();
