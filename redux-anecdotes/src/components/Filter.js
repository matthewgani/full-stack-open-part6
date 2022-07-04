import { setFilter } from "../reducers/filterReducer"
import { connect } from "react-redux"

const Filter = (props) => {

  const changeFilter = (event) => {
    // event.preventDefault()
    // event.target.filter.value doesnt work, i think thats for forms like
    // anecdote form
    const content = event.target.value
    props.setFilter(content)
    // dispatch(setFilter(content))
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

const ConnectedFilter = connect(
  null,
  {setFilter}
)(Filter)
export default ConnectedFilter 