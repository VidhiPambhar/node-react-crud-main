import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./AddEdit.css";
const initialState = {
  name: "",
  email: "",
  phone: "",
};
const AddEdit = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { name, email, phone } = initialState;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    await axios.get(`http://localhost:8090/users/${id}`).then(res =>{
      if (res.status === 200) {
      console.log(res.data);
        setState(res.data);
      }
    }).catch(err => {
      console.log("err : ", err);
    });
  };
  
  const addUser = async (data) => {
    const res = await axios.post("http://localhost:8090/users", data);
    
    if (res.status === 200) {
      toast.success(res.data);
    }
  };

  const updateUser = async (data, id) => {
    const res = await axios.put(`http://localhost:8090/users/${id}`, data);
    if (res.status === 200) {
      toast.success(res.data);
      // console.log(res.data);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!name || !email ) {
    //   toast.error("Please fill correct details");
    // } else {
    if (!id) {
      addUser(state);
    } else {
      updateUser(state, id);
    }
    navigate("/");
    // }
    console.log("updated user",state);
  };
  
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div
      className="container mt-4"
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <Form
        style={{
          border: "2px solid gray",
          borderRadius: "2rem",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          marginLeft: "25%",
        }}
        onSubmit={handleSubmit}
      >
        <Form.Group
          className="mb-3"
          style={{ width: "50%", marginLeft: "20%" }}
          controlId="formBasicEmail"
        >
          <h1
            className="text-center mt-4"
            style={{
              marginLeft: "3rem",
              marginBottom: "2rem",
            }}
          >
            User Data
          </h1>
          <Form.Control
            type="text"
            value={state.name}
            onChange={handleInputChange}
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          style={{ width: "50%", marginLeft: "20%" }}
        >
          <Form.Control
            type="text"
            value={state.email}
            onChange={handleInputChange}
            name="email"
            placeholder=" Email"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          style={{ width: "50%", marginLeft: "20%" }}
        >
          <Form.Control
            type="text"
            value={state.phone}
            onChange={handleInputChange}
            name="phone"
            placeholder="Enter contact"
          />
        </Form.Group>
        <br />
        <input
          type="submit"
          value={id ? "Update" : "Add"}
          style={{
            backgroundColor: "#917c46 ",
            borderStyle: "none",
            fontSize: "20px",
            borderRadius: "2px",
            marginLeft: "30%",
            marginBottom: "2rem",
            width: "30%",
          }}
        />
        {/* <Button
          variant="dark"
          size="lg"
          // value={id ? "Update" : "Add"}
          type="submit"
          style={{ marginLeft: "30%", marginBottom: "2rem", width: "30%" }}
        >
          Add
        </Button> */}
      </Form>
    </div>
  );
};

export default AddEdit;
