import React from "react";

const ToDo = () => {
    return (
      <React.Fragment>
        <section id="story">
          <div
            class="container-fluid"
            style="display: flex;
align-items: center;
justify-content: center;"
          >
            <div class="col-md-6">
              <div class="story-content">
                <h2></h2>

                <p class="story-quote"></p>
                <div id="myDIV" class="header">
                  <h2 style="margin:5px">To Do List</h2>
                  <input type="text" id="myInput" placeholder="Title..." />
                </div>

                <ul id="myUL">
                  <li class="1">Hit the gym</li>
                  <li class="1 checked">Pay bills</li>
                  <li class="1">Meet George</li>
                  <li class="1">Buy eggs</li>
                  <li class="1">Read a book</li>
                  <li class="1">Organize office</li>
                </ul>
                <div class="story-text">
                  <p></p>
                </div>
                <span onclick="newElement()" class="btn btn-white addBtn">
                  Add
                </span>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}

export default ToDo;