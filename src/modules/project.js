import { Dom } from './dom.js';


export const projects = (() => { 
    Dom.projects();
    const newProject = document.querySelector('button');
    const panel = document.querySelector('.sidepanel');
    const removeProjec = document.querySelector('.removeProject');
    // const blockData  = document.querySelector('.pBlock');
   
    
    newProject.addEventListener('click', Dom.projectAdd);
    


    })
();
