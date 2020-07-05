import React from "react";

import styles from "./page_3.module.css";

import pic6 from "../../img/pic6.png";
import First from "../../components/first/first";
import Last from "../../components/last/last";
import Mid from "../../components/mid/mid";

class Page3 extends React.Component {
  render() {
    return (
      <div className={styles.page_3}>
        <img src={pic6} alt="pic6" />
        <div className={styles.container}>
          <div className={styles.first}>
            <First />
          </div>
          <div className={styles.mid}>
            <Mid />
          </div>
          <div className={styles.last}>
            <Last />
          </div>
        </div>
      </div>
    );
  }
}

export default Page3;
