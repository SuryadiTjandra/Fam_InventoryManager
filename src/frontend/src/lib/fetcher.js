/*
* A collection of wrapper functions for the fetch API
*/
const fetcher = {
  async fetchJSON(url, options){
    let response = await fetch(url, options);
    response = await response.json();
    return response;
  },
  async getJSON(url, params={}, options={}){
    options['method'] = 'GET';
    let paramString = Object.entries(params)
                      .filter(keyValue => keyValue[1] != null || keyValue[1] != undefined)
                      .map(keyValue => keyValue[0] + '=' + keyValue[1].toString())
                      .join("&");
    if (!url.includes("?")){
      url = url + "?"
    }
    return fetchJSON(url + paramString, options);
  }
}

export {fetcher};
