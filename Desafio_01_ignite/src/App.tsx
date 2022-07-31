import { useState } from 'react'
import styles from './App.module.css'
import { InsertTask } from './components/InsertTask'
import { Header } from './components/Header'
import { Notepad } from 'phosphor-react';

import uuid from 'react-uuid';

import './global.css';
import { TaskModel } from './model/taskModel';
import { Task } from './components/Task';


export function App() {
const [tasks, setTasks] = useState<TaskModel[]>([
  {
    id: uuid(),
    descricao: 'Criar o componente Task. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
  {
    id: uuid(),
    descricao: 'Importar o Componente Task em App'
  },
  {
    id: uuid(),
    descricao: 'Finalizar o desafio do módulo 1'
  }
])
  function deleteTask(id: string){
      const tasksWithOutDeleteOne = tasks.filter(item =>{
        return item.id != id;
      })

      setTasks(tasksWithOutDeleteOne);
  }

  function retornaListaRemovendoRegistro(id: string){
    return  (tasks.filter(item =>{
      return item.id != id;
    }
    ))}

    function retornaQuantidadePorSituacao(concluido: boolean){
      return  (        
          tasks.filter(item =>{
          return item.isConcluido === concluido;
          }).length)
    }
      

  function insertTask(descricao:string){
    let newTask:TaskModel ={
      id: uuid(),
      descricao: descricao            
    }
    setTasks([...tasks, newTask]);
  }

  function updateTask(id: string){
    console.log(tasks)
    const task = tasks.find(item=> {
      return item.id === id;
    })
    console.log(task)

    let newTask:TaskModel ={
      id: task?.id || '',
      descricao: task?.descricao || '',
      isConcluido: !task?.isConcluido            
    }
    console.log(newTask)
    let taskAtualziada = retornaListaRemovendoRegistro(id);
    taskAtualziada.push(newTask);
    
    console.log(taskAtualziada)
    setTasks(taskAtualziada);
    
  }

  const qtdTasksFechadas:number = retornaQuantidadePorSituacao(true);
  return (
    <div >
        <Header/>
        <div>
          <InsertTask onInsertTask={insertTask}/>
        </div>
        <div>
          <header>
            <div className={styles.taskInfo}>
              <div className={styles.tasksCreate}>Tarefas criadas<span>{tasks.length}</span></div>
              <div className={styles.tasksOut}>concluídas<span>{qtdTasksFechadas}  de   {tasks.length}</span></div>
            </div>
          </header>
          <main>
            {
              (tasks.length === 0) &&
              <div className={styles.tasksNull}>
                <div className={styles.tasksNullSpanImg}>
                  <span><Notepad size={48} /></span>
                </div>
                <div className={styles.tasksNullSpanPrincipal}>
                  <p >Você ainda não tem tarefas cadastradas</p>
                </div>
                <div className={styles.tasksNullSpanSecundario}>
                  <p >Crie tarefas e organize seus itens a fazer</p>
                </div>

                
                
              </div>
            }
            {
              tasks.map(item => {
                return(
                  <Task
                  key={item.id}
                  task = {item}
                  onDeleteTask = {deleteTask}
                  onUpdateTask = {updateTask}
                  />)
              })
            }
          </main>
        </div>
    </div>
  )
}