import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import styled from 'styled-components'
import CardShow from './CardShow'
import { Project } from '../../types'

const Card = ({ project }: { project: Project }) => {
    const { language, isDesktop } = useContext(GlobalContext)
    const projectInfo = language === 'en' ? project.en : project.pl

    const projectName = <ProjectName>{projectInfo.name}</ProjectName>
    const cardDescription = (
        <CardDescriptionWrapper>
            <CardDescription>{project.tools}</CardDescription>
        </CardDescriptionWrapper>
    )
    const projectImg = !!project.imgSrc && (
        <Img src={project.imgSrc} alt={projectInfo.name} />
    )

    return (
        <ItemWrapper>
            {isDesktop ? (
                <>
                    <Column>{projectImg}</Column>
                    <Column>
                        {projectName}
                        {cardDescription}
                        <CardShow project={project} />
                    </Column>
                </>
            ) : (
                <Column>
                    {projectImg}
                    {projectName}
                    {cardDescription}
                    <CardShow project={project} />
                </Column>
            )}
        </ItemWrapper>
    )
}
export const ItemWrapper = styled.article`
    width: 80%;
    margin: 0 auto;
    display: flex;
    padding: 4em 2em;
    border-radius: 15px;
    border: none;
    background: white;
    margin-top: 70px;
    max-height: 353px;
    &:first-of-type {
        margin-top: 0;
    }
    div:last-of-type {
        margin-left: 2em;
    }
    &:nth-of-type(even) {
        flex-direction: row-reverse;
        div:last-of-type {
            margin-left: 0;
            margin-right: 2em;
        }
    }
    @media only screen and (max-width: 1225px) {
        padding: 2em;
    }
    @media only screen and (max-width: 900px) {
        max-height: none;
        div {
            margin: 0 !important;
        }
    }
    @media only screen and (max-width: 400px) {
        width: 90%;
    }
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    @media only screen and (min-width: 900px) {
        width: 50%;
        justify-content: space-between;
        &:first-of-type {
            justify-content: center;
        }
    }
`
export const CardDescriptionWrapper = styled.div`
    margin: 0 !important;
    @media only screen and (min-width: 900px) {
        padding: 0 2em;
    }
`

export const CardDescription = styled.p`
    text-align: center;
    font-size: 0.875rem;
    color: #6f6d6b;
`
export const Img = styled.img`
    max-height: 100%;
    width: auto;
    max-width: 100%;
`
export const ProjectName = styled.h1`
    text-align: center;
    @media only screen and (max-width: 900px) {
        padding: 1em 0;
    }
    @media only screen and (max-width: 370px) {
        padding: 1em 0;
        font-size: 1.3rem;
    }
`

export default Card
