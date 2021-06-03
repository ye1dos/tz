import React from "react";

const Home = () => {
    return (
      <React.Fragment>
        <section id="home">
          <div class="container">
            <div class="row">
              <div class="col-md-6 caption">
                <h1>Welcome</h1>

                <p></p>

                <a href="#pomadoro" class="btn btn-transparent">
                  Get Started
                </a>
              </div>

              <div class="col-md-5 col-md-offset-1">
                <form class="signup-form">
                  <h2 class="text-center">Signup</h2>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      required="required"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                      required="required"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="User Name"
                      required="required"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Password"
                      required="required"
                    />
                  </div>

                  <div class="form-group text-center">
                    <button type="submit" class="btn btn-blue btn-block">
                      Start Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}

export default Home;