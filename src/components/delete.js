import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import React, {useEffect, useState} from "react";

export function DeleteStudent() {
    const {id} = useParams();
    console.log(id);
    const [tour, setTour] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/tuors/" + id).then((res) => {
            setTour(res.data);
            console.log(res.data);
        });
    }, [id]);

    const deleteStudent = (id) => {
        axios.delete("http://localhost:3001/tuors/" + id).then((res) => {
            if (res.status === 200) {
                navigate("/");
            } else {
                alert("Delete failed");
            }
        });
    };

    return (
        <>
            {tour && (
                <div style={{width: "80%", margin: "auto"}}>
                    <h1 style={{color: "orangered"}}>Delete Tour ?</h1>
                    <p><b>Tour</b>: {tour.title}</p>
                    <p><b>Price</b>: {tour.price}</p>
                    <p><b>Description</b>: {tour.description}</p>
                    <div style={{width: "fit-content", margin: "auto"}}>
                        <button
                            className="btn btn-danger"
                            onClick={() =>
                                window.confirm("Are you sure you want to delete this tour?") &&
                                deleteStudent(tour.id)
                            }
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
