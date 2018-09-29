
export default (state = {}, action) => {
    switch (action.type) {
     case 'CONSTANT_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }