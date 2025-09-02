import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { Field, Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const Apiexam = () => {
    const [ini, setIni] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: null,
    });

    const [list, setList] = useState([]);

    const [editId, setEditId] = useState(null);

    const token = "prlJhuPZTAhNAlpu";

    useEffect(() => {
        viewData();
    }, []);

    function viewData() {
        axios.get("https://generateapi.techsnack.online/api/e-commerce", {
            headers: {
                Authorization: token
            }
        })
            .then((res) =>
                setList(res.data.Data)
            )
            .catch((error) =>
                console.log(error)
            )
    }
    const handleSubmit = ((values, { resetForm }) => {

        console.log(values);
        
        const formData = new FormData();

        formData.append("name", values.name);
        formData.append("description", values.description)
        formData.append("category", values.category)
        formData.append("price", values.price)
        formData.append("stock", values.stock)
        formData.append("image", values.image)

        if (editId) {
            axios.patch(`https://generateapi.techsnack.online/api/e-commerce/${editId}`, formData, {
                headers: {
                    Authorization: token,
                    "Content-Type": "multipart/form-data",
                }
            })
                .then(() => {
                    setEditId(null);
                    resetForm();
                    setIni({
                        name: "",
                        description: "",
                        category: "",
                        price: "",
                        stock: "",
                        image: null
                    });
                    viewData();
                })
                .catch((error) => console.log(error));
        } else {
            axios.post("https://generateapi.techsnack.online/api/e-commerce", formData, {
                headers: {
                    Authorization: token,
                    "Content-Type": "multipart/form-data",
                }
            })
                .then(() => {
                    resetForm();
                    viewData();
                })
                .catch((error) => console.log(error));
        }
    })

    const deleteData = (id) => {
        axios.delete(`https://generateapi.techsnack.online/api/e-commerce/${id}`, {
            headers: {
                Authorization: token
            }
        })
            .then(() => viewData())
            .catch((error) => console.log(error));
    };

    const editData = (item) => {
        setIni({
            name: item.name,
            description: item.description,
            category: item.category,
            price: item.price,
            stock: item.stock,
            image: null,
        });
        setEditId(item._id);
        console.log("error");
        
    };


    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={ini}
                onSubmit={handleSubmit}>
                {({ setFieldValue }) => (
                    <Form style={{ textAlign: "center", paddingTop: "50px" }}>
                        Name:-<Field name="name" placeholder="Name" /><br /><br />
                        Description:-<Field name="description" placeholder="Description" /><br /><br />
                        category:-<Field name="category" placeholder="Category" /><br /><br />
                        price:-<Field name="price" type="number" placeholder="Price" /><br /><br />
                        stock:-<Field name="stock" type="number" placeholder="Stock" /><br /><br />
                        <input
                            type="file"
                            name="image"
                            onChange={(e) => setFieldValue("image", e.target.files[0])}
                        /><br /><br />
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>


            <Grid container spacing={2} sx={{ paddingTop: "30px" }}>
                {list.map((item) => (
                    <Grid>
                        <Card sx={{ backgroundColor: "pink" }}>
                            <CardContent>
                                Name:-<Typography> {item.name}</Typography>
                                Description:- <Typography>{item.description}</Typography>
                                Category:-<Typography> {item.category}</Typography>
                                Price:-<Typography>{item.price}</Typography>
                                Stock:-<Typography> {item.stock}</Typography>
                            </CardContent>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={item.image}
                            />
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => deleteData(item._id)}
                                >
                                    Delete
                                </Button>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={() => editData(item)}
                                >
                                    Update
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div >
    )
}

export default Apiexam




