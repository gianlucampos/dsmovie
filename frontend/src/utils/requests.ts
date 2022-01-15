let local = "http://localhost:8080";
let prod = "https://dsmovie-gianlucampos.herokuapp.com";

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? prod;
