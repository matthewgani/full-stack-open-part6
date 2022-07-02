import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"


const AnecdoteList = (props) => {
  
  // const anecdotes = useSelector(state => {
  //   console.log(state.anecdotes)
  // } )
  // const anecdotes = useSelector(state => state.anecdotes)
  const anecdotes = useSelector((state) => {
    return state.anecdotes
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVote(id))
  }

  // need to use .slice to return shallow copy
  // they didnt allow to directly sort....
  return (
    <div>
      {anecdotes
        .slice()
        .sort((a,b) => b.votes - a.votes)
        .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )


}

export default AnecdoteList