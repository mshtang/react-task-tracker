import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Task 1',
      day: 'May 10th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Task 2',
      day: 'June 11th at 3:40pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Task 3',
      day: 'July 12th at 4: 50pm',
      reminder: false
    }
  ])

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} /> : 'No tasks to show.'}
    </div>
  );
}


export default App;
