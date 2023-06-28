<template>
   <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-row>
      <v-col cols="12" class="pt-10 pb-10" sm="12">
           <VueCarousel />
      </v-col>
      <v-col cols="12" sm="12">
        <v-container>
          <about />
        </v-container>
      </v-col>
      <v-col cols="12" sm="12" class="bg-gradient">
        <AppProcess />
      </v-col>

      <v-col cols="12">
        <Hiring/>
      </v-col>
    
      <v-col cols="12 pb-10">
        <v-container color="primary">
          
        </v-container>
      </v-col>
  
    </v-row>
    <YwaFooter/>
   </v-app>
</template>

<script>
import VueCarousel from '../components/HomeCarousel.vue'
import YwaFooter from '../components/FooterLayout.vue'
import about from '../components/AboutHome.vue'
import AppProcess from '../components/ApplicationProcess.vue'
import Hiring from '../components/WeAreHiring.vue'


export default {
  name: 'HomeView',
  components :{
    VueCarousel,
    YwaFooter,
    about,
    AppProcess,
    Hiring

  
  }, 
};
</script>

<style scoped>
    .text-overlay {
        position: absolute;
        top: 50%; /* Positions the text 50% from the top */
        left: 50%; /* Positions the text 50% from the left */
        transform: translate(-50%, -50%); /* Centers the text using negative translate */
        text-align: center; /* Centers the text horizontally */
        color: #f8f3f3; /* Optional text color for the overlay */
        padding: 10px; /* Optional padding for the overlay */
      }
    .img-opacity{
      position: relative;
      color:rgb(104, 20, 206);
     }
     .img-opacity:after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(70, 23, 180, 0.5); /* Change the color and opacity values as per your requirement */
     }
     .bg-gradient{
      background: rgb(2,0,36);
             background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,62,156,1) 34%, rgba(5,103,183,1) 50%, rgba(5,91,175,1) 59%, rgba(5,97,179,1) 70%, rgba(9,9,121,1) 83%, rgba(0,212,255,1) 100%);
     }
     .availableJobsHeading{
       font-family: sans-serif;
       letter-spacing: 4px;
       color: #f8f3f3;
     }
     .vcard-radius{
       border-radius: 20px;
     }
</style>
