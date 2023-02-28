import React, { useState } from "react";

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
    <div>
        <input value={newNoteText} onChange={ (e) => {
           setnewNoteText(e.currentTarget.value) 
        } } />

        <button onClick={ () => {
            props.addNote(newNoteText)
            setnewNoteText("");
            }}>+</button>
    </div>
    <ul>
       { 
        props.tasks.map((t) =>
            {
                return <li><input type="checkbox" checked={t.isDone} onClick={(e) => props.closeTask(t.id) }/>
                <span>{t.text}</span>
                <button onClick={ (e) => { props.removeTask(t.id) } }>X</button></li>
            })
        }
    </ul>
</div>);
} 