import React from 'react'

export const ProjectCard = ({project}) => {
  const {name,image,tags,description,codeLink,demoLink} = project;

  return (
    <div className="project_2 card">
          <img src={image} alt="" />
          <div className="container">   
            <div className="tags">
            
            {tags.map( tag => <span key={tag}>{tag}</span>)}
            
             </div>
            <div className="project_title">{name}</div>
            <div className="project_description">
            {description}
            </div>
            <div className="buttons">
              <a href={demoLink}>
                <div className="btn">Demo</div>
              </a>
              <a href={codeLink}>
                <div className="btn">Code</div>
              </a>
            </div>
          </div>
        </div>
  )
}
