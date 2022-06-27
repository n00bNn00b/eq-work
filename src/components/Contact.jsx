import React from "react";

const Contact = () => {
  return (
    <div id="contact" class="card card-side bg-base-100 mx-5 shadow-xl pb-16">
      <figure>
        <img
          src="https://api.lorem.space/image/house?w=400&h=400"
          alt="Movie"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Contact Us</h2>
        <p>info@eqworks.com</p>
        <p>
          1235 Bay Street, Suite 401
          <br />
          Toronto, ON M5R 3K
        </p>
      </div>
    </div>
  );
};

export default Contact;
