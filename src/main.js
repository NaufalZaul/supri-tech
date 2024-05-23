import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import AOS from "aos";
import 'aos/dist/aos.css'
AOS.init(
  //   {
  //   offset: 200, // offset (in px) from the original trigger point
  //   delay: 500, // values from 0 to 3000, with step 50ms
  //   duration: 400, // values from 0 to 3000, with step 50ms
  //   easing: 'ease', // default easing for AOS animations
  //   once: true, // whether animation should happen only once - while scrolling down
  //   mirror: false, // whether elements should animate out while scrolling past them
  //   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  // }
);

createApp(App)
  .use(router)
  .mount("#app");
