import React from "react";
import { Form, Formik, Field } from "formik";
import { Card, CardContent, Typography, TextField } from "@material-ui/core";
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
                            <Field name="initialinvestment" type="number"/>

                            <Field name="investmentRisk" value="High" type="checkbox" />
                            <Field name="investmentRisk" value="Medium" type="checkbox" />
                            <Field name="investmentRisk" value="Low" type="checkbox" />

                            <Field name="commentAboutInvesmentRisk" as="textarea"/>
                            <Field name="commentAboutInvesmentRisk" as="select">
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </Field>

                            <Field name="acceptedTermsAndConditions" type="checkbox"></Field>
                            {/* Too see current values of the form */}
                            <pre>{JSON.stringify(values, null, 4)}</pre>
                        </Form>
                    )}
                </Formik>


            </CardContent>
        </Card>
    );
}

