import React from "react";
import "./css/GetStarted.css";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://www.hayeslocums.com/wp-content/uploads/2023/03/Hayes-Locums-NationalDoctorsDay-1024x498.jpg.webp"
              class="img-fluid"
              alt="Sample image"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div
            class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 "
            style={{ marginTop: "80px" }}
          >
            <form>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label class="form-label" for="form3Example3">
                  Email address
                </label>
              </div>

              <div class="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label class="form-label" for="form3Example4">
                  Password
                </label>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" class="text-body">
                  Forgot password?
                </a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" class="link-danger">
                    <Link to="/Register">Register</Link>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
