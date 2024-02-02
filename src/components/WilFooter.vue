<template>
  <v-footer style="background-color:rgb(27, 25, 25);" class="text-center d-flex flex-column">
            <v-col cols="12" md="12" class="pt-10">
                    <v-btn color="#212121" class="ml-2"><v-icon color="white">mdi mdi-facebook</v-icon></v-btn>
                    <v-btn color="#212121" class="ml-2"><v-icon color="white">mdi mdi-github</v-icon></v-btn>
                    <v-btn color="#212121" class="ml-2"><v-icon color="white">mdi mdi-twitter</v-icon></v-btn>
                    <v-btn color="#212121" class="ml-2"><v-icon color="white">mdi mdi-instagram</v-icon></v-btn>
                    <v-btn color="#212121" class="ml-2"><v-icon color="white">mdi mdi-linkedin</v-icon></v-btn>

                    <div class="pt-5">
                        <button @click="scroll('home')">
                            <v-icon color="white" size="70">mdi-rocket</v-icon>
                        </button>
                    </div>

                    <div class="pt-5">
                        <p style="color: aliceblue !important;">©&nbsp;&nbsp;Wiljames Lara 2023</p>
                    </div>
                    
            </v-col>     
    </v-footer>
</template>
<script>
export default{
    methods: {
        scroll(refName) {
          
          const element = document.getElementById(refName)
          element.scrollIntoView({behavior: "smooth"})
      }
    }
}
</script>