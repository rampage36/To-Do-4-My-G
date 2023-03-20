import React, { useState } from "react";
import './tasklist.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Grid, IconButton, Checkbox, Box, Divider, Container, Stack, TextField, Button   } from '@mui/material';

type TaskType = {
    id: string
    text: string
    isDone: boolean
}

type PropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addNote: (text: string) => void
    closeTask: (id: string) => void
}

export function TaskList(props: PropsType) {
    
    const [newNoteText, setnewNoteText] = useState("");

    return (
<div>

        <Box>
            { 
                props.tasks.map((t) =>
                    {
                        return <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={1}>
                                <Checkbox checked={t.isDone} onClick={(e) => props.closeTask(t.id) }/>
                                </Grid>
                                
                                <Grid item xs={10}>
                                <Box
                        sx={{
                            margin: 2,
                            borderRadius: 5,
                                }}>{t.text}</Box>
                                </Grid>
                                
                                <Grid item xs={1}>
                                    <IconButton>
                                        <CloseOutlinedIcon 
                                        onClick={ (e) => { props.removeTask(t.id) } }>

                                        </CloseOutlinedIcon>
                                    </IconButton>
                                </Grid>

                            </Grid>
                            <Divider />  
                    </Box>
                     
                    })
                }
        </Box>
        
    <Container
    sx={{
        mt: '5rem',
        mb: '2rem'
    }} >
            <TextField
                placeholder='Введите текст заметки'  
                fullWidth
                value={newNoteText} 
                onChange={ (e) => {setnewNoteText(e.currentTarget.value)}}/>
    </Container>

        <Button 
            
            onClick={ () => { props.addNote(newNoteText)
            setnewNoteText("");}}>Добавить заметку
        </Button>
</div>);
} 