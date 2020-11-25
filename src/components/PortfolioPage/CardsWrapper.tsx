import React, { useState } from 'react'
import projects from '../../store/projects'
import ShowMore from './ShowMore'
import Card from './Card'

const CardsWrapper = () => {
    const [showNumber, setShowNumber] = useState(3)
    const showMoreProjects = () =>
        setShowNumber(showNumber => showNumber + 3)

    return (
        <div>
            {projects.slice(0, showNumber).map(project => (
                <Card key={project.pl.name} project={project} />
            ))}
            {showNumber <= projects.length && (
                <ShowMore handleClick={showMoreProjects} />
            )}
        </div>
    )
}

export default CardsWrapper
