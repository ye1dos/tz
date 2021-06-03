import React from "react";

const Footer = () => {
    return (
      <React.Fragment>
        <footer>
          <div class="container">
            <div class="row">
              <div class="footer-caption">
                <ul class="liste-unstyled pull-right">
                  <li>
                    <a href="#facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#instagram">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
}

export default Footer;