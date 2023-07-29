import React, { PureComponent } from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({ defaultValues: props.currentUser });

  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    data.id = props.currentUser.id;
    props.updteUser(props.currentUser.id, data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        {...register("name", { required: true })}
      />
      {errors.name && <span>Campo Requerido</span>}
      <label>Username</label>
      <input
        type="text"
        name="username"
        {...register("username", { required: true })}
      ></input>
      {errors.username && <span>Campo Requerido</span>}
      <button>Edit new user</button>
    </form>
  );
};

export default EditUserForm;
