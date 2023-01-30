import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Typography,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { ErrorNotification } from "./AddForm.styled";

export const AddForm: React.FC = () => {
  type Inputs = {
    login: string;
    password: string;
    phone: string;
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    reset();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="subtitle2" align="center" fontSize="18px">
            This is a form with different kinds of inputs
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            {/* input for login */}
            <TextField
              id="input-with-icon-textfield"
              type="text"
              size="small"
              label="Login (type=text)"
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              margin="dense"
              {...register("login", {
                required: "required",
                maxLength: { value: 25, message: "maximum 25 symbols" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "example@mail.com",
                },
              })}
            />
            {errors.login && (
              <ErrorNotification variant="caption" role="alert">
                {errors?.login && errors?.login?.message}
              </ErrorNotification>
            )}

            {/* input for password */}
            <TextField
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              size="small"
              label="Password (type=password)"
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityOff fontSize="small" />
                      ) : (
                        <Visibility fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="standard"
              margin="normal"
              {...register("password", {
                required: "required",
                minLength: { value: 4, message: "minimum 4 symbols" },
              })}
            />
            {errors.password && (
              <ErrorNotification variant="caption" role="alert">
                {errors?.password && errors?.password?.message}
              </ErrorNotification>
            )}

            {/* input for phone */}
            <TextField
              id="input-with-icon-textfield"
              type="tel"
              size="small"
              label="Phone (type=tel)"
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIphoneIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              margin="dense"
              placeholder="+380671234567"
              {...register("phone", {
                required: "required",
                maxLength: { value: 13, message: "maximum 13 symbols" },
                pattern: {
                  value: /^\+?[0-9]/g,
                  message: "+380671234567",
                },
              })}
            />
            {errors.phone && (
              <ErrorNotification variant="caption" role="alert">
                {errors?.phone && errors?.phone?.message}
              </ErrorNotification>
            )}

            {/* input for date */}
            {/* input for time */}
            {/* input for select */}
            {/* textarea */}
            {/* input for search */}
            {/* input for email */}

            <Button
              type="submit"
              variant="outlined"
              sx={{
                width: "100%",
              }}
            >
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
