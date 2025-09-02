import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

const ImageUpload = () => {
  const [ini, setIni] = useState({
    name: "",
    image: "",
  });

  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    // let formData = new FormData()
    // formData.append("name", values.name)
    // formData.append("image", values.image)

    axios
      .post("https://generateapi.techsnack.online/api/user", values, {
        headers: {
          Authorization: "IpcMaiQUcVTvsato",
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Formik initialValues={ini} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form encType="multipart/form-data">
            <Field name="name"></Field> <br />
            <br />
            <input
              type="file"
              name="image"
              id=""
              onChange={(e) => setFieldValue("image", e.target.files[0])}
            />
            <button>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ImageUpload;
