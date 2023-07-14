import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";
import './form.css';
import {useNavigate} from "react-router-dom";

export function CreateStudent() {
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        axios
            .post("http://localhost:3001/tuors", data)
            .then((res) => {
                alert("Created successfully");
                navigate("/");
            });
    };

    return (
        <>
            <h1>Create New Tour</h1>
            <Formik
                initialValues={
                    {title: '', price: 0, description: ''}
                }
                onSubmit={handleSubmit}
            >
                <Form>
                    <label><b>Name</b></label><br/>
                    <Field type="text" name="title"/>
                    <ErrorMessage name="title">
                        {errorMsg => <span className="error-message">{errorMsg}</span>}
                    </ErrorMessage><br/><br/>

                    <label><b>Price</b></label><br/>
                    <Field type="number" name="price"/>
                    <ErrorMessage name="price">
                        {errorMsg => <span className="error-message">{errorMsg}</span>}
                    </ErrorMessage><br/><br/>

                    <label><b>Description</b></label><br/>
                    <Field as="textarea" name="description"/>
                    <ErrorMessage name="description">
                        {errorMsg => <span className="error-message">{errorMsg}</span>}
                    </ErrorMessage><br/><br/>

                    <div style={{width: "fit-content", margin: "auto"}}>
                        <button className="btn btn-outline-success" type="submit">Submit</button>
                    </div>
                </Form>

            </Formik>
        </>
    );
}