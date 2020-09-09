import { DeepMap, FieldError } from 'react-hook-form'
import projects from '../store/projects'
import translationPL from '../translations/pl'
import translationEN from '../translations/en'

export type InputProps = {
    errors: DeepMap<Record<string, any>, FieldError>
    register: Function
}

export type Project = typeof projects[0]

export type ContextType = {
    language: string
    isMobile: boolean
    isDesktop: boolean
    changeLanguage: (
        e: React.MouseEvent<HTMLImageElement, MouseEvent>
    ) => void
    content: typeof translationPL | typeof translationEN
}
