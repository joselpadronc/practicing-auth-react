
function loginService() {
  window.localStorage.setItem('token', 'hola');
  const token = window.localStorage.getItem('token');
  return token;
}


export {
  loginService,
}