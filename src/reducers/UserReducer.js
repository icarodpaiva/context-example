const initialState = {
  name: 'Visitante',
  email: 'visitante@hotmail.com'
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name }
    case 'setEmail':
      return { ...state, email: action.email }
  }
  return state
}
