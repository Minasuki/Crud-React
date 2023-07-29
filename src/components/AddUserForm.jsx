import React, { PureComponent } from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    props.addUser(data);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" name='name' {...register("name", { required: true })} />
      {errors.name && <span>Campo Requerido</span>}
      <label>Username</label>
      <input type="text" name='username' {...register("username", { required: true })}></input>
      {errors.username && <span>Campo Requerido</span>}
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
