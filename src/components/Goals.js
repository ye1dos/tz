import React from "react";

const Goals = () => {
    return (
      <React.Fragment>
        <section id="clients" class="section-padding">
          <div class="container">
            <div class="row">
              <h2>Goals</h2>

              <p></p>

              <div style="display: flex; justify-content: space-around; align-items: flex-start">
                <div class="item">
                  <h3>My daily goals</h3>
                  <p>shopping</p>
                  <p>etc</p>
                </div>

                <div class="item">
                  <h3>My weekly goals</h3>
                  <p>finish tasks</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}

export default Goals;