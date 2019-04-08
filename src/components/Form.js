import React from 'react';
import useForm from '../custom-hooks/useForm';
import validation from '../custom-hooks/validation';

const Form = props => {
  const {
    formState,
    handleChange,
    handleSubmit,
    errors 
  } = useForm( {email: '',name: ''}, () => console.log(formState), validation);
  
  
  
  return (
    <>
     <form className="my-form" onSubmit={handleSubmit}>
        <div>
          <label className="my-form__label"  htmlFor="name">Name</label>
          <input className="my-form__input" onChange={handleChange} value={formState.name} type="text" id="name" name="name"/>
          {errors.name && (<p>{errors.name}</p>)}
        </div>
        <div>
          <label className="my-form__label" htmlFor="email">Email</label>
          <input className="my-form__input" onChange={handleChange} value={formState.email} type="text" id="email" name="email"/>
          {errors.email && (<p>{errors.email}</p>)}
        </div>
        <div>
          <button className="my-form_button" type="submit">Submit</button>            
        </div>
      </form>
    </>
  )
}

export default Form;