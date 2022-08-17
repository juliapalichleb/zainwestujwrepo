import { useField } from "formik";
import { TextField } from "@mui/material";

const SelectedInformationInput = ({ label, ...props }) => {
    const [field] = useField(props);

    return (
        <>
            <label>{label}</label>
            <TextField {...field} {...props} variant="standard" InputProps={{readOnly: true}} sx={{backgroundColor: '#fff', width: '50ch', marginTop:'10px', marginBottom:'10px'}}/>
        </>
    );
};

export default SelectedInformationInput;