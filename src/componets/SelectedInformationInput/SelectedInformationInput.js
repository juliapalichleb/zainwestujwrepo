import { useField } from "formik";
import { TextField } from "@mui/material";

const SelectedInformationInput = ({ label, ...props }) => {
    const [field] = useField(props);

    return (
        <>
            <label>{label}</label>
            <TextField{ ...field} {...props} variant="outlined" sx={{ backgroundColor: '#fff', width: '45ch'}}/>
        </>
    );
};

export default SelectedInformationInput;