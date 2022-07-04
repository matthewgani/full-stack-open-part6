import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'
// the url (anecdotes route) is decided by db.json and the script command 

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = {content, votes: 0}
  const response = await axios.post(baseUrl, object)
  return response.data
}

// create put for updating votes


export default { getAll, createNew }