export const projects = (() => { 
    let count = 1;
    const panel = document.querySelector('.sidepanel')
    const newProject = document.createElement('button');
    const projectName = document.createElement('p');
    const section = document.createElement('div');
    section.className = 'pblock';
    projectName.className= 'project_name';
    projectName.textContent= 'Create Project';
    newProject.className= 'addProject';
    newProject.textContent='+';
    panel.appendChild(section);
    section.appendChild(newProject); 
    section.appendChild(projectName);   

    const projectAdd = () => {
        const panel = document.querySelector('.sidepanel')
        const editProject = document.createElement('button');
        const projectName = document.createElement('p');
        const deleteProject = document.createElement('button');
        const section = document.createElement('div');
        section.className = 'pblock';
        projectName.className = 'projectList';
        projectName.textContent = 'Project ' + `${count}`;
        deleteProject.className = 'removeProject';
        deleteProject.textContent = 'X';
        editProject.className= 'editProject';
        editProject.textContent='edit';
        panel.appendChild(section);
        section.appendChild(deleteProject); 
        section.appendChild(editProject);
        section.appendChild(projectName);
        count ++
    }

    newProject.addEventListener('click', projectAdd);

    return { projectAdd };
    })
();
