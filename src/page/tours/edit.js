import {useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {useEffect, useState} from "react";

export function EditStudent() {
    const {id} = useParams();
    console.log(id);
    const [tour, setTour] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/tuors/" + id).then((res) => {
            setTour(res.data);
        });
    }, [id]);

    useEffect(() => {
        console.log(tour);
    }, [tour]);

    const navigate = useNavigate();
    return (
        <>
        { tour && (
            <div><h1>Edit Tour</h1>
                <Formik
                    initialValues={tour}
                    // enableReinitialize={true}
                    onSubmit={(values) => {
                        axios.put("http://localhost:3001/tuors/" + id, values).then((res) => {
                            alert("Updated successfully");
                            navigate("/");
                        });
                    }}
                >
                    <Form>
                        <label><b>Name</b></label><br/>
                        <Field type="text" name="title"/>
                        <ErrorMessage name="title">
                            {errorMsg => <span className="error-message">{errorMsg}</span>}
                        </ErrorMessage><br/> <br/>

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
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </Form>
                </Formik></div>
        )}
        </>
    );

}