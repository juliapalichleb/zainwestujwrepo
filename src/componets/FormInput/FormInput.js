import { useField } from "formik";
import { TextField, Alert } from "@mui/material";

const FormInput = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label>{props.label}</label>
            <TextField{...field} {...props} variant="outlined" sx={{ backgroundColor: '#fff', width: '45ch', marginTop:'10px', marginBottom:'10px'}}/>
            {meta.touched && meta.error &&
                <Alert severity="error" sx={{ marginBottom:'10px'}}>{meta.error}</Alert>}
        </>
    );
};

export default FormInput;