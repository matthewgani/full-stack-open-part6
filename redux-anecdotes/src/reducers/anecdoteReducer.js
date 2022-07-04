import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// export const addVote = (id) => {
//   return {
//     type: 'ADD_VOTE',
//     data: {id}
//   }
// }

// export const addAnecdote = (content) => {
//   return {
//     type: 'ADD_ANECDOTE',
//     data: {
//       content,
//       id: getId(),
//       votes: 0
//     }
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

// const reducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)
//   switch(action.type) {
//     case 'ADD_VOTE':
//       const id = action.data.id
//       const anecdoteToChange = state.find(n => n.id === id)
//       const changedAnecdote = {
//         ...anecdoteToChange, votes: anecdoteToChange.votes + 1
//       }
//       return state.map(anecdote => anecdote.id !== id ? anecdote: changedAnecdote)
//     case 'ADD_ANECDOTE':
//       return [...state, action.data]
//     default:
//       return state

//   }
// }


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState : [],
  reducers: {
    updateVote(state, action) {
      const id = action.payload.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange, votes: action.payload.votes
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote: changedAnecdote)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { updateVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const addAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVote = (updatedObject) => {
  return async dispatch => {
    const object = {
      content: updatedObject.content,
      id: updatedObject.id,
      votes: updatedObject.votes + 1
    }
    const updatedAnecdote = await anecdoteService.update(object)
    dispatch(updateVote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer