import React from "react";
import { Form, Formik, Field } from "formik";
import { Box, Button, Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, MenuItem, TextField, Typography } from "@material-ui/core";
import { InvestmentDetails } from "./InvestmentDetails";

/**
 * 1. Pass initialValues
 */


 /**
 * initialValues
 */
const initialValues: InvestmentDetails = {
    fullName: '',
    initialInvestment: undefined,
    investmentRisk: [],
    commentAboutInvestmentRisk: '',
    dependents: -1,
    acceptedTermsAndConditions: false
  };

export function FormDemo() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">New Account</Typography>

                <Formik initialValues={initialValues} onSubmit={() => {}}>
                    {({values}) => (
                        <Form>
                            <Field name="fullName"  as={TextField} label="Full Name"/>
                            <Field name="initialinvestment" type="number"  as={TextField}
                    label="Initial Investment"/>

                            <Field name="investmentRisk" value="High" type="checkbox" />
                            <Field name="investmentRisk" value="Medium" type="checkbox" />
                            <Field name="investmentRisk" value="Low" type="checkbox" />

                            <Field
                                name="commentAboutInvestmentRisk"
                                as={TextField}
                                multiline
                                rows={3}
                                rowsMax={10}
                                label="Comment About Investment Risk"
                            />
                            <Field name="commentAboutInvesmentRisk" as={TextField}
                                select>
                                <MenuItem value={-1}>Select ...</MenuItem>
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Field>

                            <Field name="acceptedTermsAndConditions" type="checkbox"></Field>
                            {/* Too see current values of the form */}
                            <pre>{JSON.stringify(values, null, 4)}</pre>
                            {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}

                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
    );
}

