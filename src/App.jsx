import { useReducer } from 'react'
import StartScreen from './StartScreen'
import './index.css'
import GuideScreen from './GuideScreen'
import SelectCategory from './SelectCategory'

const initialState = {status: 'ready'}

const reducer = (state, action) => {
  switch(action.type) {
    case "startGame":
      return {...state, status: "selectCategory"}
    case "guide":
      return {...state, status: "guide"}
    case "backToMainMenu":
      return {...state, status: "ready"}
  }
}

export default function App() {
  const [{status}, dispatch] = useReducer(reducer, initialState)

  const guide = status === "guide"
  const ready = status === "ready"
  const selectCategory = status === "selectCategory"

  return (
    <div className='App'>
      {ready && <StartScreen dispatch={dispatch} />}
      {guide && <GuideScreen dispatch={dispatch}/>}
      {selectCategory && <SelectCategory dispatch={dispatch} />}
    </div>
  )
}
