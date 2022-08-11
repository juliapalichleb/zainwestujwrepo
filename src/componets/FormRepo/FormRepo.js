import { Formik, Form } from "formik";
import FormInput from "../FormInput/FormInput";
import Button from "@mui/material/Button";

import './FormRepo.css';

const FormRepo = ({ handleClick }) =>
<Formik initialValues={{ email:"", invested:"" }}
        onSubmit={ (values) => {
            handleClick(values)
        }}
  >
    { () => (
        <Form className="formContainer">
            <FormInput
                name="email"
                label="Email"
                type="email"
            />
            <FormInput
                name="invested"
                label="Invested"
                type="number"
            />
            <Button type="submit" variant="contained" size="small" sx={{ backgroundColor: '#808080' }}> SUBMIT</Button>
        </Form>
    )}
</Formik>

export default FormRepo;