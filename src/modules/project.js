export const projects = (() => {    
    const panel = document.querySelector('.sidepanel')
    const newProject = document.createElement('button');
    const projectName = document.createElement('p');
    const section = document.createElement('div');
    section.className = 'block';
    projectName.className= 'project_name';
    projectName.textContent= 'Project';
    newProject.className= 'addProject';
    newProject.textContent='+';
    panel.appendChild(section);
    section.appendChild(newProject); 
    section.appendChild(projectName);   

    // return { };
    })
();
