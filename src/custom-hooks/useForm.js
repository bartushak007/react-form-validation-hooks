import { useState, useEffect } from 'react';

const useForm = (
  initialValues,
  onSubmit,
  validate

) => {
  const [formState, setFormState] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
     onSubmit() 
    }
  }, [errors]);

  

  const handleSubmit = event => {
    event.preventDefault();   
    
    setIsSubmitting(true);    
    setErrors(validate(formState)); 
  }

  const handleChange = event => {
    event.persist();
    event.preventDefault();
    
    setFormState(formState => ({ ...formState, [event.target.name]: event.target.value }));  
    
    setErrors(validate(formState));
  }

  return {
    formState,
    handleChange,
    handleSubmit,
    errors
  }
}

export default useForm;