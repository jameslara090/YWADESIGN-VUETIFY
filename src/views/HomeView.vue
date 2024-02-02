<template>
   <v-app>
    <v-row>
      <v-col id="HOME" cols="12" class="section" sm="12">
        <MainSection/>
      </v-col>

      <v-col id="ABOUT"  class="section" cols="12">
         <About/>
      </v-col>
      
      <v-col id="SERVICES"  class="section" cols="12" sm="12">
         <Passion/>
      </v-col>
      
      <v-col id="EXPERIENCES" class="section" cols="12" sm="12">
            <div style="margin-top: 65px; margin-bottom: 35px;">
            <Experiences/>
            </div>
      </v-col>
   
      <v-col id="WORK" class="section" cols="12" sm="12">
            <div style="margin-top: 100px; margin-bottom: 35px;">
                <Project/>
            </div>
      </v-col>
      <v-col id="CONTACT" class="section" cols="12" md="12" align="center">
        <div style="background-color:azure; margin-top: 100px; margin-bottom: 35px;" align="center" justify="center" >
            <ContactMe/>
        </div>
      </v-col>
    </v-row>
     
        <Footer/>
   </v-app>
</template>

<script>
 import About from '../components/AboutMe.vue';
 import Passion from '../components/PassionComponent.vue';
 import Experiences from '../components/SkillComponent.vue';
 import Project from '../components/RecentProject.vue';
 import ContactMe from '../components/ContactComponent.vue';
 import Footer from '../components/WilFooter.vue';
 import MainSection from '../components/MainPage.vue';

export default {
  
  name: 'HomeView',
  components :{
    About,
    Passion,
    Experiences,
    Project,
    ContactMe,
    Footer,
    MainSection
  },
 
};
</script>


