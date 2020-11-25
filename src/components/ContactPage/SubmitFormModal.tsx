import React from 'react'
import ReactDom from 'react-dom'

const SubmitFormModal = ({
    isDialogOpen,
    children,
}: {
    isDialogOpen: boolean
    children: React.ReactNode
}) => {
    if (!isDialogOpen) return null

    return ReactDom.createPortal(
        <>{children}</>,
        document.getElementById('submitForm')!
    )
}

export default SubmitFormModal
