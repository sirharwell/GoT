export const getCharacters = () => {
  return (dispatch) => {
    axios.get('/api/characters/:name')
      .then( ({ data, headers }) => dispatch({ type: CHARACTERS, characters: data, headers }) )
