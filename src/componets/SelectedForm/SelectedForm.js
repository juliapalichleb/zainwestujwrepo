import { Formik, Form } from "formik";
import Button from "@mui/material/Button";

import './SelectedForm.css';
import SelectedInformationInput from "../SelectedInformationInput/SelectedInformationInput";

const SelectedForm = ({ handleClick, selectedInformation }) =>
    <Formik initialValues={{ email:"", invested:"" }}
            onSubmit={ () => {
                handleClick();
            }}
    >
        { () => (
            <Form className="formContainer">
                <SelectedInformationInput
                    disabled
                    name="url"
                    label="url"
                    type="text"
                    value={selectedInformation.url}
                />  <SelectedInformationInput
                    disabled
                    name="name"
                    label="name"
                    type="text"
                    value={selectedInformation.name}
                />
                <SelectedInformationInput
                    disabled
                    name="email"
                    label="Email"
                    type="email"
                    value={selectedInformation.email}
                />
                <SelectedInformationInput
                    disabled
                    name="invested"
                    label="Invested"
                    type="number"
                    value={selectedInformation.invested}
                />
                <Button type="submit" variant="contained" size="small" sx={{ backgroundColor: '#808080' }}> SUBMIT</Button>
            </Form>
        )}
    </Formik>

export default SelectedForm;