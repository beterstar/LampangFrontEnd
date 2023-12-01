interface State {
    active: boolean;
}

const initialState: State = {
    active: false,
};

const reducer = (state: State = initialState, action: any) => {
    switch (action.type) {
        case 'ACTIVE':
            return {
                ...state,
                active: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;