import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Testform = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:1337/api/ezforms/submit', data);
      console.log('Data sent:', response.data);
      reset();
    } catch (error) {
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          {...register('name', { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label>Message:</label>
        <textarea
          {...register('message', { required: true })}
        ></textarea>
        {errors.message && <span>This field is required</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Testform;
