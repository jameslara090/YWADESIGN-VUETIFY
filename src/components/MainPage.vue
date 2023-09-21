<template>
    <div hide-details class="">
        <v-img 
        cover
      src="../assets/background-mesh.jpg"
      :height="600"
      :width="1400"
    >
      <v-container fill-height fluid>
        <v-row align="center" justify="center" class="pt-5">
          <v-col align="center" justify="center" cols="12" md="6">
            <v-img  height="500" width="500" src="../assets/avatar.png"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <div class="">
              <h1 class="pt-2 display-2" color="indigo">Hi There,</h1>
              <h1 class="pt-2 display-2">I'm Wiljames Lara</h1>
              <h2 class="pt-2 display-2">I am Web Developer</h2>
              <p class="pt-7 pr-5" justify="center">I am a passionate and driven web developer with a keen interest in creating innovative and user-friendly websites. My journey into the world of web development began with a curiosity about how the internet works and the desire to build something that could impact people's lives positively. Since then, I have been on a continuous learning path, exploring various programming languages and web technologies.</p>
              
             <!--<div class="pt-7">
                <v-btn color="primary" elavation="10">Read More</v-btn>
              </div> -->

              <div class="pt-5">
                  <v-btn icon color="indigo" variant="plain" size="small" class="mx-4 white--text"><v-icon>mdi-facebook</v-icon></v-btn>
                  <v-btn icon color="indigo" variant="plain" size="small" class="mx-4 white--text"><v-icon>mdi-twitter</v-icon></v-btn>
                  <v-btn icon color="indigo" variant="plain" size="small" class="mx-4 white--text"><v-icon>mdi-instagram</v-icon></v-btn>
                  <v-btn icon color="indigo" variant="plain" size="small" class="mx-4 white--text"><v-icon>mdi-linkedin</v-icon></v-btn>
              </div>
            </div>
          </v-col>
          <v-col>
            <div align="center" justify="center">
              <v-btn
              icon
              :size="100"
              >
                <v-icon :size="50" color="indigo">fa fa-angle-down</v-icon>
              </v-btn>
            </div>
          </v-col>

         
         
        </v-row>
      </v-container>
    </v-img>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageHeight: 400, // Customize the height of the background image
        imageWidth: 800, // Customize the width of the background image
      };
    },
  };
  </script>
  
  <style>
  /* Add any custom styles for your text here */
  .text-white {
    color: white;
  }
  
  .headline {
    font-size: 24px;
  }
  
  </style>
  