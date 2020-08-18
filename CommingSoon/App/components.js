import Vue from 'vue';

//userFlow components
import userFlowNavbar from "./components/userFlow/shared/userFlowNavbar.vue";
import subNavbar from "./components/userFlow/shared/subNavbar.vue";
import sliderCard from "./components/userFlow/sliderCard.vue";
import footer from "./components/userFlow/shared/footer.vue";
import videoCard from "./components/userFlow/videoCard.vue";
import preFooter from "./components/userFlow/preFooter.vue";
import instructorCard from "./components/userFlow/instructorCard.vue";
import homeHeader from "./components/userFlow/homeHeader.vue";
import providerCard from "./components/userFlow/providerCard.vue";

//userFlow main pages
import homePage from "./components/userFlow/homePage.vue";
import categoriesPage from "./components/userFlow/categoriesPage.vue";

//userFlow main pages
Vue.component("home-page", homePage);
Vue.component("categories-page", categoriesPage);


//userflow components
Vue.component("uf-navbar", userFlowNavbar);
Vue.component("sub-navbar", subNavbar);
Vue.component("slider-card", sliderCard);
Vue.component("uf-footer", footer);
Vue.component("pre-footer", preFooter);
Vue.component("video-card", videoCard);
Vue.component("instructor-card", instructorCard);
Vue.component("home-header", homeHeader);
Vue.component("provider-card", providerCard);