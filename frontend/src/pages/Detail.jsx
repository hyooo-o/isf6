import React, { useEffect, useState } from "react";
import styles from "./styles/Detail.module.css";
import LiveBtn from "../components/Detail/LiveBtn";
import z from "../assets/images/z.png";
import DetailModal from "../components/Detail/DetailModal";
import { useNavigate, useParams } from "react-router";

// heroicons
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import {
  HeartIcon,
  ChevronLeftIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
// swiper - 이미지 슬라이더
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import axios from "axios";

export default function Detail() {
  const params = useParams();
  const productId = params.productId;
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
<<<<<<< HEAD
    // 상품 정보를 가져오는 GET 요청
    axios.get(`http://localhost:8080/product/detail/${params.productId}`)
    .then((res) => {
      console.log(res)
      setProduct(res.data)
    })
    .catch((err) => { console.log(err) })
  })


  useEffect(() => {
=======
    // 상품 정보 불러오기
>>>>>>> 49afea2a9d91dbaffa7e0202084f389afbc2a1ab
    axios.get(`http://localhost:8080/product/${productId}`)
    .then((res) => { 
      setProduct(res.data)
      console.log(res.data)
    })
    .catch((err) => { console.log(err)});
  }, [])

  // 일반채팅하기
  const requestChat = () => {
    // 판매자 정보, 구매자 정보 보내주기
    axios.post('http://localhost:8080/chat/room', {
      userCode1 : 1,
      userCode2 : 2,
    })
    .then((res) => { console.log(res.data)})
    .catch((err) => { console.log(err)})
  }

  // 라이브 요청하기
  const requestLive = () => {
    // 2 포인트 빼기,,,
    
  }

  return (
    <div className={styles.body}>
      {/* 상품 이미지 배너 */}
      <div className={styles.swiperbox}>
        {/* <ChevronLeftIcon className="w-6 h-6 text-gray-100" /> */}
        <Swiper
          className={styles.swiper}
          navigation={true}
          pagination={true}
          loop={true}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <img
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_3218672%2F32186720809.20220505182637.jpg&type=a340"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_3218672%2F32186720809.20220505182637.jpg&type=a340"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_3218672%2F32186720809.20220505182637.jpg&type=a340"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_3218672%2F32186720809.20220505182637.jpg&type=a340"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        {/* 라이브 예약 알림 */}
        <div className={styles.livealert}>
          <span>1/24 16시</span>
          <span>LIVE 예정</span>
        </div>
      </div>
      {/* 상품 정보 container */}
      <div className={styles.container}>
        <div className={styles.seller}>
          <div className={styles.sellerImgBox}>
            <img
              src="https://sitem.ssgcdn.com/18/83/93/item/2097000938318_i1_1200.jpg"
              className={styles.sellerImg}
            />
          </div>
          <div className={styles.sellerName}>딸기우유 서녕</div>
        </div>
        {/* 드롭다운 */}
        <select
          className={styles.dropdown}
          onChange={(e) => {
            if (e.target.value === "거래완료") {
              setModalOpen(true);
            } else {
              setModalOpen(false);
            }
          }}
          name=""
          id=""
        >
          <option value="판매 중">판매 중</option>
          <option value="예약 중">예약 중</option>
          <option value="거래완료">거래완료</option>
        </select>
        {/*  판매자에게만 수정하기 버튼이 보임*/}
        {true ? (
          <div className={styles.canedit}>
            <div className={styles.title}>{product.title}</div>
            <PencilSquareIcon className={styles.editbtn} onClick={() => {navigate(`/update/${productId}`, {
              state: product
            })}}/>
          </div>
        ): (
          <div className={styles.title}>{product.title}</div>

        )}

        <div className={styles.price}>{product.price}원</div>
        <div className={styles.desc}>{product.description}</div>
        <div className={styles.icons}>
          <div className={styles.zbox}>
            <div className={styles.z}>
              <img src={z} className={styles.zimg} alt="" />
            </div>
            <div className={styles.count}>2</div>
          </div>
          <div className={styles.chatBox}>
            <ChatBubbleLeftRightIcon />
            <div className={styles.count}>2</div>
          </div>
          <div className={styles.heartBox}>
            <HeartIcon />
            <div className={styles.count}>5</div>
          </div>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.timeTitle}>Live 가능 시간대 :</span>
          <div className={styles.timeContent}>
            <span>{product.reservation}</span>
          </div>
        </div>
        <LiveBtn />
      </div>
      {modalOpen ? <DetailModal setModalOpen={setModalOpen} /> : null}
    </div>
  );
}
