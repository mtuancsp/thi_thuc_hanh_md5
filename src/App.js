import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {ListStudent} from "./page/tours/list";
import {CreateStudent} from "./page/tours/create";
import {EditStudent} from "./page/tours/edit";
import HomePage from "./page/homePage";
import {DetailStudent} from "./page/tours/detail";
import {DeleteStudent} from "./components/delete";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<HomePage/>}>
            <Route path="" element={<ListStudent/>}/>
            <Route path="create" element={<CreateStudent/>}/>
            <Route path="edit/:id" element={<EditStudent/>}/>
            <Route path="detail/:id" element={<DetailStudent/>}/>
            <Route path="delete/:id" element={<DeleteStudent/>}/>
          </Route>
        </Routes>
      </>
  );
}

export default App;
