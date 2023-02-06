import React from "react";
import styles from "./ProductItem.module.css";
import testImg from "../../assets/images/testImg.jpg";
import zImg from "../../assets/images/z.png";

import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ProductItem({ product, clickProduct }) {
  const [status, setstatus] = useState(true);
  console.log(product)
  return (
    <div
      className={styles.body}
      onClick={() => {
        clickProduct(product.productId);
      }}
    >
      <div className={styles.productimg}>
        <img src={testImg} alt="" />
      </div>
      <div className={styles.product}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>{product.price}원</div>
        <div className={styles.bottom}>
          <div className={styles.status}>판매중</div>
          <div className={styles.icons}>
            <div className={styles.icon}>
              {false ? <div><HeartIcon class="fill-black" /></div>:<div><HeartIcon /></div>}
              {/* <HeartIcon /> */}
              <div className={styles.count}>{product.wishSize}</div>
            </div>
            <div className={styles.icon}>
              <div className={styles.zimg}>
                <img src={zImg} alt="" />
              </div>
              <div className={styles.zcount}>{product.liveReqSize}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
