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
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { ErrorNotification } from "./AddForm.styled";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const AddForm: React.FC = () => {
  type Inputs = {
    login: string;
    password: string;
    phone: string;
    date: string;
    time: string;
    gender: string;
    comment: string;
    search: string;
    select: string;
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
  } = useForm<Inputs>({ mode: "onBlur" });

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
              id="email"
              type="email"
              size="small"
              label="Login (type=email)"
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
              id="password"
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
              id="phone"
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
              placeholder="380671234567"
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
            <TextField
              id="date"
              type="date"
              size="small"
              label="Date (type=date)"
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              margin="dense"
              {...register("date")}
            />

            {/* input for time */}
            <TextField
              id="time"
              type="time"
              size="small"
              label="Time (type=time)"
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccessTimeIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              margin="dense"
              {...register("time")}
            />
            {/* input for radio */}

            <FormControl>
              <FormLabel id="form-label" sx={{ mt: 1 }}>
                Gender (type=radio)
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  {...register("gender")}
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  {...register("gender")}
                />
              </RadioGroup>
            </FormControl>

            {/* input for select */}
            <TextField
              id="select-currency"
              select
              label="Select (type=select)"
              defaultValue="EUR"
              helperText="Please select your currency"
              variant="standard"
              sx={{ width: "100%" }}
              {...register("select")}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            {/* textarea */}
            <TextField
              type="text"
              id="textarea"
              label="Комментарий (type=textarea)"
              placeholder="Напишите свой комментарий"
              multiline
              variant="standard"
              margin="dense"
              sx={{ width: "100%" }}
              {...register("comment")}
            />

            {/* input for search */}
            <TextField
              type="search"
              id="search"
              label="Поиск (type=search)"
              variant="standard"
              margin="dense"
              sx={{ width: "100%" }}
              {...register("search")}
            />

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
