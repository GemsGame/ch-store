export function charges (state = [], action) {
switch(action.type) {
    case "CHARGES_FETCH_DATA_SUCCESS":
        return action.payload;
        default: return state;
}

}