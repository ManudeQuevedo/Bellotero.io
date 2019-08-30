export function getData(url, page) {
  return function(dispatch) {
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: page, payload: json });
      });
  };
}