import React, { useState } from 'react'
import { ProjectCard } from './ProjectCard'
import {projects} from '../projectList'
import {tagList} from '../tagList'
import { Pagination } from './Pagination'

export const Projects = () => {  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(3);
  const [currentTag, setCurrentTag] = useState('all');

  let projectComponents = [];

  // Get current projects

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Change Page

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  //console.log(currentProjects,indexOfFirstProject, indexOfLastProject);

  if (currentTag === 'all') {
    projectComponents = currentProjects.map( (project) => (
      <ProjectCard key={project.name} project={project} />
      )
    )
  } else {    
    const filtered = projects.filter( 
      project => project.tags.includes(currentTag)  
    ) 
    projectComponents = filtered.map( project => <ProjectCard project={project} key={project.name} />)
    console.log(filtered);
  }

  const filterByTag = (e) => {
    setCurrentTag((e.target.innerText));
  }
  return (
    <>
      <div className="projects_2 card">
        <div className="title">Projects ({projects.length})</div>
        <div className="tags">
          {
            tagList.map( tag => (
              <div key={tag} onClick={filterByTag} className="btn">{tag}</div>
            ))
          }
        </div>
      </div>
      <section id="projects">{projectComponents}</section>
      <Pagination 
        projectsPerPage={projectsPerPage} 
        totalProjects={projects.length} 
        paginate={paginate}
        /> 
    </>
  );
}
