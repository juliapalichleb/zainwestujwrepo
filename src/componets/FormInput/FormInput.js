import { useField } from "formik";
import { TextField, Alert } from "@mui/material";

const FormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label>{label}</label>
            <TextField{ ...field} {...props} variant="outlined" sx={{ backgroundColor: '#fff', width: '45ch'}}/>
            {/*{meta.touched && meta.error &&*/}
            {/*    <Alert severity="error">{meta.error}</Alert>}*/}
        </>
    );
};

export default FormInput;