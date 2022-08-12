import { useField } from "formik";
import { Alert } from "@mui/material";

const CheckboxElement = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
            <div>
                <span>Confirm selected information</span>
                <input{...field} {...props}/>
                {meta.touched && meta.error &&
                    <Alert severity="error" sx={{ marginTop:'10px'}}>{meta.error}</Alert>}
            </div>
    );
};

export default CheckboxElement;