export function chargersFetchDataSuccess(chargers) {
  return {
    type: "CHARGERS_FETCH_DATA_SUCCESS",
    payload: chargers
  };
}

export function chargersFetchData(url) {
  return dispatch => {
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(chargers => dispatch(chargersFetchDataSuccess(chargers)));
  }
}
     

