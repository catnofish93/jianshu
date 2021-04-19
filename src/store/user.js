const defaultState = {
    id: '',
    name: '',
    phone: '',
    sex: '',
    age: '',
    img: ''
}
export default (state = defaultState, action) => {
  console.log(action)
  if (action.types === 'loginUser') {
    return Object.assign({}, state, action.data)
  }
  return state
}