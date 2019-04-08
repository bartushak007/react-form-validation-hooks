const validation = ({ email, name }) => {
  let errors = {};
  
  if (!email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email address is invalid';
  }
  
  if (!name) {
    errors.name = 'Name fied is required';
  } else if (/\[a-z]/.test(email)) {
    errors.name = 'Name fied is invalid';
  }

  return errors
}

export default validation;