import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign.scss";
import { Field, Formik, Form, ErrorMessage } from "formik";
import axios from "axios";
import registerSchema from "../../Sechma/SignSchema";
import Error from "../../Compontents/Error/Error";

export default function Sign() {
  const navigat = useNavigate();
  function Submit(values, actions) {
    axios.post("http://localhost:3000/users", values).then(() => {
      console.log("email register");
      navigat("/");
    });
    actions.resetForm();
  }
  return (
    <Fragment>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={Submit}
        validationSchema={registerSchema}
      >
        {({ errors }) => {
          return (
            <div className="sign">
              <Form className="container sign-cointer">
                <h1>Sign Up</h1>
                <div className="sigin-felds">
                  <div>
                    <Field type="text" placeholder=" Your Name" name="name" />
                    <Error>{<ErrorMessage name="name" />}</Error>
                  </div>
                  <div>
                    <Field
                      type="email"
                      placeholder=" Email Address"
                      name="email"
                    />
                    <Error>{<ErrorMessage name="email" />}</Error>
                  </div>

                  <div>
                    <Field
                      type="password"
                      placeholder=" Password"
                      name="password"
                    />
                    <Error>{<ErrorMessage name="password" />}</Error>
                  </div>
                  <button
                    type="submit"
                    disabled={Object.keys(errors).length}
                    style={
                      Object.keys(errors).length ? { opacity: "40%" } : null
                    }
                  >
                    Continue
                  </button>
                </div>
                <div className="login-account">
                  <p>
                    Already Have Account? <Link>Login</Link>
                  </p>
                </div>
                <div className="sign-agree">
                  <input type="checkbox" />
                  <p>By Continuing, i agree to the terms</p>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </Fragment>
  );
}
