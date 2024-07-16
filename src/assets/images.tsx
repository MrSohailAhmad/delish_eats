import Clock from "./Header/clock-0300-svgrepo-com.svg?react";
import Location from "./Header/location-sign-svgrepo-com.svg?react";
import Tiktok from "./Header/tiktok-svgrepo-com.svg?react";
import Facebook from "./Header/facebook-svgrepo-com.svg?react";
import Instagram from "./Header/instagram-svgrepo-com.svg?react";
import FreeDelivery from "./Home/free-delivery-free-svgrepo-com.svg?react";
import CardImg1 from "./Home/Green_Modern_Minimal_Chicken_Wrap_Sale_Poster_12_a9jvcm-removebg-preview.png";
import CardImg2 from "./Home/Green_Modern_Minimal_Chicken_Wrap_Sale_Poster_13_oupraf-removebg-preview.png";
import CardImg3 from "./Home/Green_Modern_Minimal_Chicken_Wrap_Sale_Poster_5_enzb7b-removebg-preview.png";
import CardImg4 from "./Home/Green_Modern_Minimal_Chicken_Wrap_Sale_Poster_6_qghnnc-removebg-preview.png";
import CardImg5 from "./Home/Green_Modern_Minimal_Chicken_Wrap_Sale_Poster_7_sictok-removebg-preview.png";
import cardimg from "./Home/White_Sushi_Rolls_Food_Channel_YouTube_Thumbnail_60_x_60_px_in54ec.png";

export const images = {
  clock: (props: string) => <Clock className={`${props}`} />,
  location: (props: string) => <Location className={`${props}`} />,
  //
  CardImg1,
  CardImg2,
  CardImg3,
  CardImg4,
  CardImg5,
  //
  cardimg,

  // header social media icons
  tiktok: (props: string) => <Tiktok className={`${props}`} />,
  facebook: (props: string) => <Facebook className={`${props}`} />,
  instagram: (props: string) => <Instagram className={`${props}`} />,
  freeDelivery: (props: string) => <FreeDelivery className={`${props}`} />,
};
