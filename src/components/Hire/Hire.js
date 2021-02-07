import React from "react";
import { Button } from "antd";

function Hire() {
  return (
    <div className="hire">
      <div className="container">
        <h1>I Am Available For Freelancer !</h1>
        <Button type="primary" shape="round" size="large">
          <a
            href="https://www.upwork.com/freelancers/~017ebfe65697f4f459"
            target="_blank"
            rel="noreferrer"
          >
            Hire me.
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Hire;
