import { CHARACTERS } from '../actions/characters';

const characters = (state = [], action) => {
  switch (action.type) {
    case CHARACTERS:
      return action.characters;
    default:
      return state
  }
}

export default characters;
