<template>
    <v-app class="" style="height: 0px;">
      <v-app-bar
       app
       flat 
      >
      
        <v-toolbar-title>
          <v-img :max-width="185" :max-height="190" src="../assets/Ywa.png"  lazy-src="../assets/Ywa.png"></v-img>
          </v-toolbar-title>
          <v-spacer></v-spacer>
                    <!--Homepage-->
                   <v-btn v-if="!isMobileView"
                        :class="{ 'navtext-active': $route.name === 'home' }"
                        plain
                        @click.prevent="HomePage"
                        density="compact"
                    ><div class="navtext">Home</div></v-btn>
                    
                    <!--Clients-->
                    <v-btn
                        :class="{ 'navtext-active': $route.name === 'client' }"
                        plain
                        @click.prevent="ClientPage"
                        class="d-none d-sm-flex"
                        density="compact"
                    >  
                    <div class="navtext">Clients</div> 
                    </v-btn>
                    <!--Jobs-->
                    <v-btn
                        :class="{ 'navtext-active': $route.name === 'jobs' }"
                        plain
                        @click.prevent="JobsPage"
                        class="d-none d-sm-flex"
                        density="compact"
                    >  
                    <div class="navtext">Job Search</div> 
                    </v-btn>
                    <!--Our Industries-->
                    <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn
                             plain
                             class="d-none d-sm-flex"
                             density="compact"
                             v-bind="attrs" 
                             v-on="on">
                             <div class="navtext">Our Industries</div> 
                            </v-btn>
                            </template>

                            <v-list>
                            <v-list-item v-for="(item, index) in IndustriesItemsItems" :key="index" @click="navigate(item.route)">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                            </v-list>
                        </v-menu>
                    
                    <!--About Us-->
                       <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn
                             plain
                             class="d-none d-sm-flex"
                             density="compact"
                             v-bind="attrs"
                             :class="{ 'navtext-active': $route.name === 'about' }" 
                             v-on="on">
                             <div class="navtext">ABOUT</div> 
                            </v-btn>
                            </template>

                            <v-list>
                            <v-list-item v-for="(item, index) in menuItems"  :key="index" @click="navigate(item.route)">
                                <v-list-item-title :class="{ 'navtext-active': $route.name =='item.route'}">{{ item.title }}</v-list-item-title>
                            </v-list-item>
                            </v-list>
                        </v-menu>
    
 
                    <!--Contact Us-->
                    <v-btn
                        :class="{ 'navtext-active': $route.name === 'contact' }"
                        plain
                        @click.prevent="ContactPage"
                        class="d-none d-sm-flex"
                        density="compact"
                    >  
                    <div class="navtext">Contact Us</div> 
                    </v-btn>
         
 
            <v-col cols="auto" v-if="!isMobileView">
             <v-btn @click.prevent="loginPage" color="#000046" outlined density="comfortable"><v-icon>mdi-login-variant</v-icon>Login</v-btn>
            </v-col>
      

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
        <VueScrollProgress color="primary" hieght="20px"></VueScrollProgress>
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
            menuItems: [
                { title: 'ABOUT US', route: 'about' ,link: '' },
                { title: 'OUR TEAM', route: 'ywateams' },
                { title: 'OUR SERVICES', route: 'services' },
                { title: 'MISSION,VISION & QPS', route: 'mission' },
                { title: 'TRAINING CENTER', route: 'training' }
            ],
            IndustriesItemsItems: [
                { title: 'HEALTHCARE', route: '' },
                { title: 'HOSPALITY', route: '' },
                { title: 'LOGISTICS', route: '' },
                { title: 'MANUFACTURING', route: '' },
                { title: 'TRANSPORT', route: '' },
                { title: 'CONTRACTION', route: '' },

            ],

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
        navigate(route){
            if(this.$route.name != 'route') {
                this.$router.push(route);
            }    
        },
        loginPage() {
            if(this.$route.name != 'Login') {
                this.$router.push({name: 'Login'});
            }
        },
        HomePage() {
            if(this.$route.name != 'home') {
                this.$router.push({name: 'home'});
                
            }
        },
        ClientPage() {
            if(this.$route.name != 'client') {
                this.$router.push({name: 'client'});
            }
        },
        JobsPage() {
            if(this.$route.name != 'jobs') {
                this.$router.push({name: 'jobs'});
            }
        },
        OurIndustries() {
            if(this.$route.name != 'OurIndustries') {
                this.$router.push({name: 'OurIndustries'});
            }
        },
        aboutPage() {
            if(this.$route.name != 'about') {
                this.$router.push({name: 'about'});
            }
        },
        ContactPage() {
            if(this.$route.name != 'contact') {
                this.$router.push({name: 'contact'});
            }
        },
    },
 }
 </script>
 
 <style scoped>
 .navtext{
    font-family: sans-serif;
    font-size: 14px;
    color:rgb(5, 7, 13);
    
 }
 .navtext-active{
    border-bottom: 5px solid #0c2fa1;
    color:rgb(0, 0, 0);
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
