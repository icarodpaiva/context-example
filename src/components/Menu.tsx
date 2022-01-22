import { useStateValue } from '../contexts/StateContext'

import Botao from './Botao'

export default () => {
  const [state, dispatch] = useStateValue()

  return (
    <aside className={`box theme-${state.theme}`}>
      <Botao />
    </aside>
  )
}
