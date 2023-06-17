export const SELECT_BUN = 'SELECT_BUN';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';

export function selectBun(bun) {
    return function(dispatch) {
        if(bun) {
            dispatch({
                type: SELECT_BUN,
                selectedBun: bun
            });
        }
    }
}