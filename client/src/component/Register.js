import { Button, TextField, useScrollTrigger } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/authSlice";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const res = useSelector((state) => state?.api?.reg_data);
  const navigate = useNavigate();
  const [status ,setStatus] = useState(false)

  const onSubmit = (data) => {
    console.log(data);
    setStatus(true)
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if(status === true){
        if (res && res.message !== "") {
          Swal.fire(`${res.message}`, "Welcome!", "success").then(() => {
            navigate("/");
          });
        }
    }
  }, [res, navigate]);
  

  return (
    <>
      <div className="login_section">
        <div className="login_inner">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_field">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                sx={{ m: 0, width: "268px" }}
                {...register("Name", {
                  required: true,
                })}
              />
              {errors?.Name?.type === "required" && (
                <p className="error">required*</p>
              )}
            </div>
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
                Register
              </Button>
            </div>
            <p>
              If you have already Register. please <Link to="/">login</Link> .
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
