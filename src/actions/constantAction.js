export const constantAction = () => dispatch => {
    dispatch({
        type: 'CONSTANT_ACTION',
        payload: { value: 123 }
    })
}