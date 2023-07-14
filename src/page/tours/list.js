import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function ListStudent() {
    const [list, setList] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    let navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3001/tuors").then((res) => {
            setList(res.data);
        });
    }, []);

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };

    const deleteStudent = (id) => {
        axios.delete("http://localhost:3001/tuors/" + id).then((res) => {
            if (res.status === 200) {
                setList(list.filter((student) => student.id !== id));
            } else {
                alert("Delete failed");
            }
        });
    };

    const filteredList = list.filter((tour) =>
        tour.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <>
            <h1>List Tours</h1>
            <div style={{ width: "fit-content", margin: "auto" }}>
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleSearch}
                    placeholder="Search by name"
                />
            </div>
            <br />
            <table border={1}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {filteredList.map((tour, index) => {
                    return (
                        <tr key={tour.id}>
                            <td style={{ textAlign: "center" }}>{index + 1}</td>
                            <td>
                                <Link to={"detail/" + tour.id}>{tour.title}</Link>
                            </td>
                            <td>{tour.price}</td>
                            <td style={{width: "132px", textAlign: "center" }}>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => navigate("edit/" + tour.id)}
                                >
                                    Edit
                                </button>
                                &nbsp;
                                <button
                                    className="btn btn-danger"
                                    onClick={() => navigate("delete/" + tour.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}
