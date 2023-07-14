import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function DetailStudent() {
    const { id } = useParams();
    console.log(id);
    const [tour, setTour] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/tuors/" + id).then((res) => {
            setTour(res.data);
            console.log(res.data);
        });
    }, [id]);

    const handleButtonClick = () => {
        navigate("/");
    };

    return (
        <>
            {tour && (
                <div style={{ width: "80%", margin: "auto" }}>
                    <h1>Tour Detail</h1>
                    <p><b>Tour</b>: {tour.title}</p>
                    <p><b>Price</b>: {tour.price}</p>
                    <p><b>Description</b>: {tour.description}</p>
                    <button className="btn btn-primary" onClick={handleButtonClick}>List Tours</button>
                </div>
            )}
        </>
    );
}
