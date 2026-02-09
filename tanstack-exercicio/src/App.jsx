import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
