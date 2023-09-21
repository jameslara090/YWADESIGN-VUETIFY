<template>
    <v-app class="" style="height: 0px;">
      <v-app-bar
        app 
        flat 
        color="black"
      >
        
        <v-toolbar-title>
         <h3 class="ml-10" style="color:white !important;"><v-icon :size="40" color="white">mdi mdi-draw-pen</v-icon>WBL</h3>
        </v-toolbar-title>
          <v-spacer></v-spacer>
                    <!--Homepage-->
                   <v-btn v-if="!isMobileView"
                        class="navtext-active"
                        plain
                        @click="scroll('home')"
                        density="compact"
                    ><div class="navtext">Home</div></v-btn>
                    <!--Homepage-->
                   <v-btn v-if="!isMobileView"
                        plain
                        @click="scroll('aboutme')"
                        density="compact"
                    ><div class="navtext">About</div></v-btn>

                     <!--Skill-->
                     <v-btn v-if="!isMobileView"
                        :class="{ 'navtext-active': $route.name === 'blog' }"
                        plain
                        @click="scroll('passion')"
                        density="compact"
                    ><div class="navtext">Services</div></v-btn>


                    <!--Project-->
                    <v-btn v-if="!isMobileView"
                        :class="{ 'navtext-active': $route.name === 'blog' }"
                        plain
                        @click="scroll('experience')"
                        density="compact"
                    ><div class="navtext">Experience</div></v-btn>
                    
                     <!--About-->
                     <v-btn v-if="!isMobileView"
                        :class="{ 'navtext-active': $route.name === 'blog' }"
                        plain
                        @click="scroll('work')"
                        density="compact"
                    ><div class="navtext">Work</div></v-btn>
                    
 
                    <!--Contact Us-->
                    <v-btn
                        :class="{ 'navtext-active': $route.name === 'contact' }"
                        plain
                        @click="scroll('contact')"
                        class="d-none d-sm-flex mr-10"
                        density="compact"
                    >  
                    <div class="navtext">Contact</div> 
                    </v-btn>
         
      

        <!--<Theme />-->  
        <v-menu>
        <template v-slot:activator="{ on, attrs }">       
                <div class="pr-5">
                    <v-app-bar-nav-icon v-bind="attrs"
                        v-on="on"
                        class="d-flex d-sm-none"
                        color="indigo"
                        size="x-large"
                        density="comfortable">
                    </v-app-bar-nav-icon>
               
                </div>
        </template>
        
       </v-menu>
 
      </v-app-bar>
        
    </v-app>
    
 </template>
 
 <script>
 export default {
    name: 'TopNav',
    components: {
        
    },
    data() {
        return {
            isMobileView: false,

        };
    },
    mounted(){
        // Check the screen width on component mount and whenever the window is resized
        window.addEventListener('resize', this.checkMobileView);
        this.checkMobileView();
    },
    methods: {
        // Adjust the breakpoint as per your needs
        checkMobileView() {
         this.isMobileView = window.innerWidth <= 768; 
        },
        beforeDestroy() {
        // Remove the event listener when the component is destroyed
         window.removeEventListener('resize', this.checkMobileView);
        },
        scroll(refName) {
            
            const element = document.getElementById(refName)
            element.scrollIntoView({behavior: "smooth"})
        }
        
    },
 }
 </script>
 
 <style scoped>
 .navtext{
    font-family: sans-serif;
    font-size: 14px;
    color:white !important;
    font-weight: bold;
    
 }
 .navtext-active{
    border-bottom: 5px solid #e8e7ee;
    color:rgb(20, 20, 97);
    text-decoration: #0c2fa1;
 }

 /* play with some lines below */
#progress-container-el {
  /* background */
  background-color: transparent !important;
  top: calc(100% - 4px) !important; /* remove if Vue 3.x */
}
#progress-el {
  /* progress bar */
  background-color: red !important;
}
 </style>
