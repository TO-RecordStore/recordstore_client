import React from 'react'
import StyledForm from './style'

const Form = ({children, submitHandler}) => {
    return (
        <StyledForm onSubmit={submitHandler}>
			{children}
        </StyledForm>
    )
}

export default Form
