export function chargers (state = [], action) {
switch(action.type) {
    case "CHARGERS_FETCH_DATA_SUCCESS":
        return action.payload;
        default: return state;
}

}