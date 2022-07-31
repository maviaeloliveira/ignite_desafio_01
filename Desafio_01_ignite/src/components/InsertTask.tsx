import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from './InsertTask.module.css';
import btnAddtask from '../assets/add.svg';
import { PlusCircle } from 'phosphor-react';
import { TaskModel } from "../model/taskModel";
import uuid from 'react-uuid';

export interface InsertTaskProps{
    onInsertTask :(descricao:string)=>void;
}
export function InsertTask({onInsertTask}:InsertTaskProps){
    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewtask(event: FormEvent){    
        event.preventDefault()    
        onInsertTask(newTaskText);
        setNewTaskText('')
    }

    function handleNewtaskChange(event: ChangeEvent<HTMLInputElement>){
        setNewTaskText(event.target.value)
    }


    return(
        <div className={styles.task}>
            <div className={styles.taskBox}>
            <form onSubmit={handleCreateNewtask} className={styles.taskForm}>
                <input 
                    name="taskDescription"
                    placeholder='Adicione uma nova tarefa'
                    type="text" 
                    value={newTaskText}
                    onChange={handleNewtaskChange} 
                    required
                    
                />
                
                    <button type='submit'>
                        Criar <PlusCircle size={16}/>
                    </button>
            </form>

            </div>
        </div>
    )
}