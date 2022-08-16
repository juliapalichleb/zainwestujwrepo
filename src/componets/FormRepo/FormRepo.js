import { Formik, Form } from "formik";
import FormInput from "../FormInput/FormInput";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography } from "@mui/material";
import { RepoFormSchemas } from "../../schemas/RepoFormSchemas";

import './FormRepo.css';

const FormRepo = ({ handleClick }) =>
<Formik initialValues={{ email:"", invested:"" }}
        validationSchema={ RepoFormSchemas }
        onSubmit={ (values) => {
            handleClick(values)
        }}
  >
    { () => (
        <div className='formContainer'>
            <Card sx={{ maxWidth: 420 }}>
                <CardContent>
                    <Typography variant='h4'>Invest in repository</Typography>
                    <Form >
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
                </CardContent>
            </Card>
        </div>
    )}
</Formik>

export default FormRepo;