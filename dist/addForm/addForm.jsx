"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddForm = void 0;
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const material_1 = require("@mui/material");
const Person_1 = __importDefault(require("@mui/icons-material/Person"));
const Lock_1 = __importDefault(require("@mui/icons-material/Lock"));
const Visibility_1 = __importDefault(require("@mui/icons-material/Visibility"));
const VisibilityOff_1 = __importDefault(require("@mui/icons-material/VisibilityOff"));
const PhoneIphone_1 = __importDefault(require("@mui/icons-material/PhoneIphone"));
const CalendarMonth_1 = __importDefault(require("@mui/icons-material/CalendarMonth"));
const AccessTime_1 = __importDefault(require("@mui/icons-material/AccessTime"));
const AddForm_styled_1 = require("./AddForm.styled");
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
const AddForm = () => {
    var _a, _b, _c;
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const { register, handleSubmit, reset, formState: { errors }, } = (0, react_hook_form_1.useForm)({ mode: "onBlur" });
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    return (<material_1.Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "300px",
        }}>
      <material_1.Card>
        <material_1.CardContent>
          <material_1.Typography variant="subtitle2" align="center" fontSize="18px">
            This is a form with different kinds of inputs
          </material_1.Typography>
          <material_1.Box component="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            
            <material_1.TextField id="email" type="email" size="small" label="Login (type=email)" sx={{ width: "100%" }} InputProps={{
            startAdornment: (<material_1.InputAdornment position="start">
                    <Person_1.default />
                  </material_1.InputAdornment>),
        }} variant="standard" margin="dense" {...register("login", {
        required: "required",
        maxLength: { value: 25, message: "maximum 25 symbols" },
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "example@mail.com",
        },
    })}/>
            {errors.login && (<AddForm_styled_1.ErrorNotification variant="caption" role="alert">
                {(errors === null || errors === void 0 ? void 0 : errors.login) && ((_a = errors === null || errors === void 0 ? void 0 : errors.login) === null || _a === void 0 ? void 0 : _a.message)}
              </AddForm_styled_1.ErrorNotification>)}

            
            <material_1.TextField id="password" autoComplete="false" type={showPassword ? "text" : "password"} size="small" label="Password (type=password)" sx={{ width: "100%" }} InputProps={{
            startAdornment: (<material_1.InputAdornment position="start">
                    <Lock_1.default />
                  </material_1.InputAdornment>),
            endAdornment: (<material_1.InputAdornment position="end">
                    <material_1.IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                      {showPassword ? (<VisibilityOff_1.default fontSize="small"/>) : (<Visibility_1.default fontSize="small"/>)}
                    </material_1.IconButton>
                  </material_1.InputAdornment>),
        }} variant="standard" margin="normal" {...register("password", {
        required: "required",
        minLength: { value: 4, message: "minimum 4 symbols" },
    })}/>
            {errors.password && (<AddForm_styled_1.ErrorNotification variant="caption" role="alert">
                {(errors === null || errors === void 0 ? void 0 : errors.password) && ((_b = errors === null || errors === void 0 ? void 0 : errors.password) === null || _b === void 0 ? void 0 : _b.message)}
              </AddForm_styled_1.ErrorNotification>)}

            
            <material_1.TextField id="phone" type="tel" size="small" label="Phone (type=tel)" sx={{ width: "100%" }} InputProps={{
            startAdornment: (<material_1.InputAdornment position="start">
                    <PhoneIphone_1.default />
                  </material_1.InputAdornment>),
        }} variant="standard" margin="dense" placeholder="380671234567" {...register("phone", {
        required: "required",
        maxLength: { value: 13, message: "maximum 13 symbols" },
        pattern: {
            value: /^\+?[0-9]/g,
            message: "+380671234567",
        },
    })}/>
            {errors.phone && (<AddForm_styled_1.ErrorNotification variant="caption" role="alert">
                {(errors === null || errors === void 0 ? void 0 : errors.phone) && ((_c = errors === null || errors === void 0 ? void 0 : errors.phone) === null || _c === void 0 ? void 0 : _c.message)}
              </AddForm_styled_1.ErrorNotification>)}

            
            <material_1.TextField id="date" type="date" size="small" label="Date (type=date)" sx={{ width: "100%" }} InputProps={{
            startAdornment: (<material_1.InputAdornment position="start">
                    <CalendarMonth_1.default />
                  </material_1.InputAdornment>),
        }} variant="standard" margin="dense" {...register("date")}/>

            
            <material_1.TextField id="time" type="time" size="small" label="Time (type=time)" sx={{ width: "100%" }} InputProps={{
            startAdornment: (<material_1.InputAdornment position="start">
                    <AccessTime_1.default />
                  </material_1.InputAdornment>),
        }} variant="standard" margin="dense" {...register("time")}/>
            

            <material_1.FormControl>
              <material_1.FormLabel id="form-label" sx={{ mt: 1 }}>
                Gender (type=radio)
              </material_1.FormLabel>
              <material_1.RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <material_1.FormControlLabel value="male" control={<material_1.Radio />} label="Male" {...register("gender")}/>
                <material_1.FormControlLabel value="female" control={<material_1.Radio />} label="Female" {...register("gender")}/>
              </material_1.RadioGroup>
            </material_1.FormControl>

            
            <material_1.TextField id="select-currency" select label="Select (type=select)" defaultValue="EUR" helperText="Please select your currency" variant="standard" sx={{ width: "100%" }} {...register("select")}>
              {currencies.map((option) => (<material_1.MenuItem key={option.value} value={option.value}>
                  {option.label}
                </material_1.MenuItem>))}
            </material_1.TextField>

            
            <material_1.TextField type="text" id="textarea" label="Комментарий (type=textarea)" placeholder="Напишите свой комментарий" multiline variant="standard" margin="dense" sx={{ width: "100%" }} {...register("comment")}/>

            
            <material_1.TextField type="search" id="search" label="Поиск (type=search)" variant="standard" margin="dense" sx={{ width: "100%" }} {...register("search")}/>

            <material_1.Button type="submit" variant="outlined" sx={{
            width: "100%",
        }}>
              Submit
            </material_1.Button>
          </material_1.Box>
        </material_1.CardContent>
      </material_1.Card>
    </material_1.Box>);
};
exports.AddForm = AddForm;
//# sourceMappingURL=AddForm.jsx.map