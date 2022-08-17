import { Formik, Form } from "formik";
import Button from "@mui/material/Button";
import SelectedInformationInput from "../SelectedInformationInput/SelectedInformationInput";
import { Card, CardContent, Typography } from "@mui/material";
import CheckboxElement from "../CheckboxElement/CheckboxElement";

import './SelectedForm.css';
import { CheckboxSchema } from "../../schemas/CheckboxSchema";

const SelectedForm = ({ handleClick, selectedInformation }) =>
    <Formik initialValues={{ userEmail:"", invested:"", checkboxElement: false }}
            validationSchema={ CheckboxSchema }
            onSubmit={ () => {
                handleClick();
            }}
    >
        { () => (
            <div className='formContainer'>
                <Card sx={{maxWidth: '480px'}}>
                    <CardContent >
                        <Typography variant='h4'>Confirm selected information</Typography>
                        <Form>
                            <SelectedInformationInput
                                name="url"
                                label="url"
                                type="text"
                                value={selectedInformation.url}
                            />
                            <SelectedInformationInput
                                name="name"
                                label="name"
                                type="text"
                                value={selectedInformation.name}
                            />
                            <SelectedInformationInput
                                name="userEmail"
                                label="Email"
                                type="text"
                                value={selectedInformation.email}
                            />
                            <SelectedInformationInput
                                name="invested"
                                label="Invested"
                                type="number"
                                value={selectedInformation.invested}
                            />
                            <CheckboxElement type="checkbox" name="checkboxElement"/>
                            <Button type="submit" variant="contained" size="small" sx={{ backgroundColor: '#808080', marginTop:'10px' }}>CONFIRM</Button>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        )}
    </Formik>

export default SelectedForm;