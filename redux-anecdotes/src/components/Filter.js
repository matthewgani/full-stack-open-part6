import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const Filter = (props) => {

  const dispatch = useDispatch()

  const changeFilter = (event) => {
    // event.preventDefault()
    // event.target.filter.value doesnt work, i think thats for forms like
    // anecdote form
    const content = event.target.value
    dispatch(setFilter(content))
  }
  const style = {
    marginBottom: 10
  }


  return (
    <div style={style}>
      Filter: <input name = 'filter' onChange={changeFilter} />
    </div>
  )
}


export default Filter 