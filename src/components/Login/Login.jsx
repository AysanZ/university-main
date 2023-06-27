import React from "react";
import css from "./Login.module.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Login = () => {
  const theme = {
    width: "300px",
    "& .MuiInputBase-root": {
      color: "white",
    },

    "& .MuiInputLabel-root": { color: "#6C47A9" },
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { borderColor: "#858585" },
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        borderColor: "#6C47A9",
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "#6C47A9",
      },
    },
  };

  const [formData, setFormData] = useState({
    username: "",
    pass: "",
    prerequisite: "",
    credit: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitToApi(formData);
  }

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.img}>
          <img src="../../../public/logo.png" alt="" />
        </div>
        <div>
          <TextField
            size="medium"
            sx={theme}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            label="Username"
            variant="outlined"
          />
          <TextField
            size="medium"
            sx={theme}
            type="text"
            name="pass"
            value={formData.id}
            onChange={handleChange}
            required
            label="Password"
            variant="outlined"
          />
        </div>

        <button className={css.btn} onClick={handleSubmit}>
          Login
        </button>

        <dir>
          <span>Forget Password? </span>
        </dir>
      </div>
    </div>
  );
};

export default Login;
