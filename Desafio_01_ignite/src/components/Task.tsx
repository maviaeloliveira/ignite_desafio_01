import React from "react"
import { TaskModel } from "../model/taskModel"
import { Trash, CheckCircle, Circle } from 'phosphor-react';
import styles from './Task.module.css'

interface TaskProps{
    task: TaskModel;
    onDeleteTask: (id: string)=> void;
    onUpdateTask: (id: string)=> void;
}



export function Task({task, onDeleteTask, onUpdateTask}: TaskProps){

    function handleDeleteTask(){
        onDeleteTask(task.id);
    }

    function handleStatus (){
        onUpdateTask(task.id);
    }

    return(
        <div className={styles.task}>
            <div className={styles.taskBox}>
                <div className={styles.taskContent}>
                    
                    <button 
                    className={styles.concluido}
                        onClick={handleStatus} 
                        title="Alterar tarefa"
                        disabled={task.isConcluido}
                    >
                    {task.isConcluido ? <CheckCircle size={24} weight="fill"/> : <Circle size={24} />}
                    </button>
                    <p>{task.descricao}</p>
                    <button 
                        className={styles.deletar}
                        onClick={handleDeleteTask} 
                        title="Deletar tarefa"
                    >
                        <Trash size={24}/>
                    </button>
                </div>
            </div>
        </div>
    )
}