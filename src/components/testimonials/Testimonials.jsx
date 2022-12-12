// import "./testimonials.css";
// import AVTR1 from "../../assets/avatar1.jpg";
// import AVTR2 from "../../assets/avatar2.png";
// import AVTR3 from "../../assets/avatar3.jpg";
// import AVTR4 from "../../assets/avatar4.jpg";
// //import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// const Testimonials = () => {
//   const data = [
//     {
//       avatar: AVTR1,
//       name: "Luiz snow",
//       review:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,ipsam inventore",
//     },
//     {
//       avatar: AVTR2,
//       name: "Luiz snow",
//       review:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,ipsam inventore",
//     },
//     {
//       avatar: AVTR3,
//       name: "Luiz snow",
//       review:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,ipsam inventore",
//     },
//     {
//       avatar: AVTR4,
//       name: "Luiz snow",
//       review:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,ipsam inventore",
//     },
//   ];
//   return (
//     <section id="testimonials">
//       <h5>Clients Review</h5>
//       <h2>Testimonials</h2>

//       <Swiper
//         className="container testimonials__container
//       "
//         // install Swiper modules
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={40}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//       >
//         {data.map(({ avatar, name, review }, index) => {
//           return (
//             <SwiperSlide key={index} className="testimonial">
//               <div className="client__avatar">
//                 <img src={avatar} alt="avatar 1" />
//               </div>
//               <h5>{name}</h5>
//               <small className="client__review">{review}</small>
//             </SwiperSlide>
//           );
//         })}
//         ...
//       </Swiper>

//       {/* <Swiper
//         className="container testimonials__container
//       "
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={50}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//       >
//         {data.map(({ avatar, name, review }, index) => {
//           return (
//             <SwiperSlide key={index} className="testimonial">
//               <div className="client__avatar">
//                 <img src={avatar} alt="avatar 1" />
//               </div>
//               <h5>{name}</h5>
//               <small className="client__review">{review}</small>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper> */}
//     </section>
//   );
// };

// export default Testimonials;
