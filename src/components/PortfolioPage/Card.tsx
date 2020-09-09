import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import styled from 'styled-components'
import CardShow from './CardShow'
import { Project } from '../../types'
import useDialogHandler from '../../helpers/useDialogHandler'

const Card = ({ project }: { project: Project }) => {
    const { language, content, isDesktop } = useContext(GlobalContext)
    const projectInfo = language === 'en' ? project.en : project.pl
    const { toggle, isDialogOpen: isVisible } = useDialogHandler(
        false
    )

    return (
        <ItemWrapper>
            {isDesktop ? (
                <>
                    <ItemHeader onClick={toggle}>
                        <ProjectName>{projectInfo.name}</ProjectName>
                    </ItemHeader>
                    <ItemBody display={isVisible}>
                        <Column>
                            {!!project.imgSrc && (
                                <Img
                                    src={project.imgSrc}
                                    alt={projectInfo.name}
                                />
                            )}
                        </Column>
                        <Column>
                            {!!projectInfo.description && (
                                <CardDescription>
                                    {projectInfo.description}
                                </CardDescription>
                            )}
                            <div>
                                <ToolsIntro>
                                    {content.portfolio.toolsIntro}
                                </ToolsIntro>
                                <CardDescription>
                                    {project.tools}
                                </CardDescription>
                            </div>
                            <CardShow project={project} />
                        </Column>
                    </ItemBody>
                </>
            ) : (
                <>
                    <ItemHeader onClick={toggle}>
                        <ProjectName>{projectInfo.name}</ProjectName>
                    </ItemHeader>
                    <ItemBody display={isVisible}>
                        <Column>
                            {!!project.imgSrc && (
                                <Img
                                    src={project.imgSrc}
                                    alt={projectInfo.name}
                                />
                            )}
                            {!!projectInfo.description && (
                                <CardDescription>
                                    Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Nobis expedita optio possimus
                                    excepturi vitae asperiores cum
                                    mollitia in voluptatem hic.
                                    {projectInfo.description}
                                </CardDescription>
                            )}
                            <div>
                                <ToolsIntro>
                                    {content.portfolio.toolsIntro}
                                </ToolsIntro>
                                <CardDescription>
                                    {project.tools}
                                </CardDescription>
                            </div>
                            <CardShow project={project} />
                        </Column>
                    </ItemBody>
                </>
            )}
        </ItemWrapper>
    )
}
const ItemWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    border-bottom: 2px solid transparent;
`
const ItemHeader = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 1em 0;
    cursor: pointer;
    text-align: center;
    background: ${({ theme }) => theme.colors.secondary};
`
const ItemBody = styled.article<{ display: boolean }>`
    display: ${({ display }) => (display ? 'flex' : 'none')};
    padding: 2em 0;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    @media only screen and (min-width: 900px) {
        width: 50%;
    }
`

const ProjectName = styled.h3``

const CardDescription = styled.p`
    padding: 0 2em;
    text-align: center;
`
const ToolsIntro = styled.h4`
    margin-top: ${({ theme }) => theme.padding.large};
    margin-bottom: ${({ theme }) => theme.padding.small};
    text-align: center;
`
const Img = styled.img`
    width: 100%;
`
export default Card
