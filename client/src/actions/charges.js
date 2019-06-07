export function chargesFetchDataSuccess(charges) {
  return {
    type: "CHARGES_FETCH_DATA_SUCCESS",
    payload: charges
  };
}

export function chargesFetchData(url) {
  return dispatch => {
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(charges => dispatch(chargesFetchDataSuccess(charges)));
  }
}
     

