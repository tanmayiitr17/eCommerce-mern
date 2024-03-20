import './Register.css';
import { useDispatch } from 'react-redux';
import { register } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorText from "../components/ErrorText";

const schema = yup.object({
  username: yup.string().required("Unique username is required"),
  fullName: yup.string().required("Full Name is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup
    .number()
    .typeError("Phone must be a number")
    .min(1000000000, "Phone must be at least 10 digits")
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
});


const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // console.log(errors)
  const onSubmit = async (data) => {
    console.log("data");
    console.log(data);
    try {
      const res = register(data, dispatch);
      if (res) {
        console.log("User Created!")
      } else {
        console.log("User not Created!")
      }
    } catch (err) {
      console.log(err);
    }
    navigate("/")
  };

  return (
    <div className="register__container">
      <div className="register__wrapper">
        <h1 className="register__title">CREATE AN ACCOUNT</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="register__form">
          <span>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="register__input"
                  placeholder="username"
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <ErrorText text={errors?.username?.message || ""} />
          </span>
          <span>
            <Controller
              control={control}
              name="fullName"
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="register__input"
                  placeholder="full name"
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <ErrorText text={errors?.fullName?.message || ""} />
          </span>
          <span>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="register__input"
                  placeholder="xyz@gmail.com"
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <ErrorText text={errors?.email?.message || ""} />
          </span>
          <span>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange } }) => (
                <input
                  type="password"
                  className="register__input"
                  placeholder="password"
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <ErrorText text={errors?.password?.message || ""} />
          </span>
          <span>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="register__input"
                  placeholder="+91 XXXXXXXX78"
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <ErrorText text={errors?.phone?.message || ""} />
          </span>
          <span>
            <Controller
              control={control}
              name="address"
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="register__input"
                  placeholder="XYZ | INDIA"
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <ErrorText text={errors?.address?.message || ""} />
          </span>
          <span className="register__aggrement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button type="submit" className="register__button">CREATE</button>
        </form>
      </div>
    </div >
  );
};

export default Register;
