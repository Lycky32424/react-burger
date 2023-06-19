import { OPEN_MODAL, CLOSE_MODAL } from "../actions/toggleModal";

const initialState = {
    isModalOpened: false
}

export const toggleModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return {
                ...state,
                isModalOpened: true
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                isModalOpened: false
            }
        }
        default: {
          return state;
        }
      }
};