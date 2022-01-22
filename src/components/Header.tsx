import { useStateValue } from '../contexts/StateContext'

import Botao from './Botao'

export default () => {
  const [state, dispatch] = useStateValue()

  return (
    <header className={`box theme-${state.theme}`}>
      {state.theme === 'light' && (
        <button
          onClick={() =>
            dispatch({
              type: 'setTheme',
              theme: 'dark'
            })
          }
        >
          Dark
        </button>
      )}
      {state.theme === 'dark' && (
        <button
          onClick={() =>
            dispatch({
              type: 'setTheme',
              theme: 'light'
            })
          }
        >
          Light
        </button>
      )}
    </header>
  )
}
