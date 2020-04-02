import React from "react";
import { Form, Formik, Field, useField } from "formik";
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

                            <MyCheckbox name="investmentRisk" value="High" label="High - Super Riskly" />
                            <MyCheckbox name="investmentRisk" value="Medium" label="Medium - Riskly" />
                            <MyCheckbox name="investmentRisk" value="Low" label="Low - Safe" />

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
                            <MyCheckbox name="acceptedTermsAndConditions" label="Accept terms and conditions" />

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

 /**
 * Formik Field cannot take label in "as" so we must create a component using useField
 * MyCheckbox component
 */
export interface MyCheckboxProps extends CheckboxProps {
    name: string;
    value?: string | number;
    label?: string;
}

export function MyCheckbox(props: MyCheckboxProps) {
    const [field] = useField({
        name: props.name,
        type: 'checkbox',
        value:props.value
    })
    return <FormControlLabel control={<Checkbox {...props}  {...field} />} label={props.label} />;
}