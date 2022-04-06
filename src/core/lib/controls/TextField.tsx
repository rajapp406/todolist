import { TextField } from '@mui/material'
import React from 'react'
import { globalConfig as config } from '../../config'

function ToDoTextField(props) {
    return (
        <div>
            <TextField {...props} variant={config.variant}/>
        </div>
    )
}

export default ToDoTextField
