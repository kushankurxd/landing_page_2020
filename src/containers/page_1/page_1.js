import React from "react";

import styles from "./page_1.module.css";

import pic1 from "../../img/pic1.png";

class Page1 extends React.Component {
  render() {
    return (
      <div className={styles.page_1}>
        <img src={pic1} alt="pic1" />
      </div>
    );
  }
}

export default Page1;
