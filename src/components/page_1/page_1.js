import React from "react";

import styles from "./page_1.module.css";
import "font-awesome/css/font-awesome.min.css";

const page_1 = (props) => {
  return (
    <div className={styles.page_1}>
      <div className={styles.first}>
        <div className={styles.first_heading}>
          <div>NEW</div>
          <div>COLLEC</div>
          <div>TION</div>
        </div>
        <div className={styles.first_image}></div>
      </div>
      <div className={styles.mid}>
        <div className={styles.mid_heading}>
          The information nowadays is one click away and all you have to do to
          get it is to choose the device that suits you best.
        </div>
        <div className={styles.mid_card}>
          <div className={styles.mid_card_title}>
            Check out our new <br></br>
            <span>collection</span>
          </div>
          <div className={styles.mid_card_arrow}>
            <span className="fa fa-long-arrow-right"></span>
          </div>
        </div>
      </div>
      <div className={styles.last}>
        <div>01</div>
      </div>
    </div>
  );
};

export default page_1;
