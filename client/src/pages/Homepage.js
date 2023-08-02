import { Button, TextField, useScrollTrigger } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Homepage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const res = useSelector((state) => state?.api?.data);
  console.log(res,"res")
  const error = useSelector((state) => state?.api?.error);
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    if (loginSuccess === true) {
      if (res?.message === "login succussfully") {
        setLoginSuccess(true);
        Swal.fire(
          "Login Successful",
          (res.message && res.message) || "Welcome!",
          "success"
        );
       }
       else if(res?.message === "some-thing went wrong"){
        Swal.fire(
          "some-thing went wrong",
          (res.message && res.message) || "failed!",
          "failed"
        );
      }
    }
  }, [res]);

  useEffect(() => {
    if (loginSuccess === true) {
      if (error) {
        setLoginSuccess(false);
        Swal.fire(
          "Login Error",
          error.message || "Unknown error occurred",
          "error"
        );
      }
    }
  }, [error]);

  const onSubmit = (data) => {
    setLoginSuccess(true);
    dispatch(loginUser(data));
  };

  return (
    <>
      <div className="login_section">
        <div className="login_inner">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_field">
              <TextField
                id="outlined-basic"
                label="user_id/email"
                variant="outlined"
                size="small"
                sx={{ m: 0, width: "268px" }}
                {...register("email", {
                  required: true,
                })}
              />
              {errors?.email?.type === "required" && (
                <p className="error">required*</p>
              )}
            </div>
            <div className="form_field">
              <TextField
                id="outlined-basic"
                label={
                  errors?.password?.type === "required"
                    ? "Required"
                    : "Password"
                }
                size="small"
                variant="outlined"
                sx={{ m: 0, width: "268px" }}
                {...register("password", {
                  required: true,
                })}
              />
              {errors?.password?.type === "required" && (
                <p className="error">required*</p>
              )}
            </div>
            <div className="form_field">
              <Button variant="contained" type="submit">
                login
              </Button>
            </div>
            <p>
              If you are Not Register. please{" "}
              <Link to="/register">Register</Link> first.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Homepage;
