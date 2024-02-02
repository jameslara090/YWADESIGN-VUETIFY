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
                  <div v-for="(item, index) in nav" :key="index"  class="pl-3 pr-3">
                    <a 
                      class="pl-5 pr-5 nav__link"
                      plain
                      @click="scroll(`${item.navlinkItem}`)"
                      density="compact"
                    ><div class="navtext">{{ item.navlinkItem }}</div></a>
                  </div>
      <!--<Theme />-->  
      <v-menu>
      <template v-slot:activator="{ on, attrs }">       
              <div class="pr-5">
                  <v-app-bar-nav-icon v-bind="attrs"
                      @click.stop="drawer = !drawer"
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
          activeId : 0,
          nav: [
          { id:1, navlinkItem:'HOME' },
          { id:2, navlinkItem:'ABOUT' },
          { id:3, navlinkItem:'SERVICES' },
          { id:4, navlinkItem:'EXPERIENCES'},
          { id:5, navlinkItem:'WORK' },
          { id:6, navlinkItem:'CONTACT' }
          ],

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
  font-size: 13px;
  letter-spacing: 3px;
  color:white !important;
  font-weight: bold;
  
}
.navtext-active{
  border-bottom: 2px solid #faf9fc;
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
