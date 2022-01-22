import { useState } from 'react'
import { useStateValue } from '../contexts/StateContext'

import Botao from './Botao'
import Contagem from './Contagem'

export default () => {
  const [state, dispatch] = useStateValue()

  const handleButton = () => {
    if (state.user.name === 'José') {
      dispatch({ type: 'setName', name: 'Paulo' })
    } else {
      dispatch({ type: 'setName', name: 'José' })
    }
  }

  return (
    <article className={`box theme-${state.theme}`}>
      <Botao />
      <button onClick={handleButton}>
        Trocar para {state.user.name === 'José' ? 'Paulo' : 'José'}
      </button>

      <hr />

      <Contagem />
    </article>
  )
}
