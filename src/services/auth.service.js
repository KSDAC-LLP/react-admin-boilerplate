export const Login = async (email, pass) => {
  // Mockup version of actual api call
  const res = await fetch('https://5f502f7e2b5a260016e8b570.mockapi.io/nais/login', {
    method: 'POST',
    body: JSON.stringify({ email, password: pass }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (res.statusCode >= 200 && res.statusCode <= 300) {
    const err = await res.text()
    throw new Error(err);
  }
  const { token } = await res.json();
  return { token, user: { name: 'MockUser', hub: 'MockHub', email: 'mock@email.com' } };
  // TODO: Place actual call to api
};