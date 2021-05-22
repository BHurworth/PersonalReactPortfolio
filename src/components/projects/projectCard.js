import React from 'react'
import git from '../../assets/images/git64.png'

function projectCard({ img, desc, title}) {
    return (
        <div className='project-card'>
            <img className='project-image' src={img} />
            <div className='project-text'>
                <div className='project-info'>
                    <h1 className='project-title'>{title}</h1>
                    <h2 className='project-desc'>{desc}</h2>
                </div>
                <div className='buttons'>
                    <div className='project-btn'>View Project</div>
                    <img className='git-logo' src={git}></img>
                </div>
            </div>
        </div>
    )
}

export default projectCard
