import React from 'react'
import projects from '../../store/projects'
import Card from './Card'
import styled from 'styled-components'

const CardsWrapper = () => {
    return (
        <Wrapper>
            {projects.map(project => (
                // <Card key={project.pl.name} project={project} />
                <Card key={project.pl.name} project={project} />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 2em;
`
export default CardsWrapper
