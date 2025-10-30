import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Counter from '../src/Counter/App.jsx'
import Todo from './Todo/Todo.jsx'
import Calculator from './Calculator/Calculator.jsx'

createRoot(document.getElementById('root')).render(

    // <App />,
    // <Counter />,
    // <Todo />,
    <Calculator />

)
