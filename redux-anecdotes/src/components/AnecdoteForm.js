import { addAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import { connect } from 'react-redux'

const NewAnecdote = (props) => {
  const add = async (event) => {
    event.preventDefault()
    const content  = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.addAnecdote(content)
    props.setNotification(`you created ${content}`, 5)
    // dispatch(addAnecdote(content))
    // dispatch(setNotification(`you created ${content}`, 5))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

// automatically uses dispatch because of connect
const mapDispatchToProps = {
  addAnecdote,
  setNotification
}


const ConnectedNewAnecdote = connect(
  null,
  mapDispatchToProps
)(NewAnecdote)
export default ConnectedNewAnecdote