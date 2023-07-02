<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-row>
      <v-col cols="12">
        <v-card class="pt-10" style="background-image: linear-gradient(to right top, #07316f, #002d79, #002782, #131f89, #26108e);">
          <v-container>
            <v-row class="pb-5">
              <v-col cols="12" sm="3">
                <input class="pl-3 pr-3" style="background-color: aliceblue; height:50px; width:280px; color:#002782;" placeholder="Job Title, Keyword, Company">
                <!---<v-text-field style="background-color: azure;" outlined placeholder="Enter a Keyword"></v-text-field> -->
              </v-col>
              <v-col cols="12" sm="3">
                <select class="pl-3 pr-3" style="background-color: aliceblue; height: 50px; width: 280px;">
                  <option>Select Country</option>
                  <option>New Zealand</option>
                  <option value="saab">Japan</option>
                  <option value="mercedes">Auckland</option>
                  <option value="audi">Australia</option>
                </select>
              </v-col>
              <v-col cols="12" sm="4">
                <select  class="pl-3 pr-3" style="background-color: aliceblue; height: 50px; width: 380px;">
                  <option>All Job Specializations</option>
                  <option>Healthcare</option>
                  <option>Farming</option>
                  <option>Manufacturing</option>
                  <option>Electronic</option>
                </select>
              </v-col>
              <v-col col="12" sm="2">
                    <v-btn color="primary" style="height:50px; width: 150px;" density="comfortable"><h3>Search</h3></v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" align="center">
          <v-row>
            <v-container>
               <v-col cols="12" sm="9" v-for="(item, index) in items" :key="index">
                  <v-card>
                    <v-container>
                      <v-row>
                         <v-col cols="12" sm="4">
                           <div style="align-items: center; padding:50px 5px 50px 5px;">
                            <v-img  :max-width="200" :max-height="100" :src="item.src"></v-img>
                           </div>
                         </v-col>
                         <v-divider :thickness="3" vertical></v-divider>
                         <v-col cols="12" sm="8">
                           <div align="left">
                           <h2>{{ item.position }}</h2>
                           <h3><v-icon>fa fa-location</v-icon>{{ item.location }}<v-icon></v-icon> |  Accreditation: {{ item.AccNumber }}</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reiciendis saepe id officiis nemo omnis ut architecto ullam hic sunt harum, iure tempora recusandae possimus inventore fugiat facilis dolorem enim.</p>
                           </div>
                           <div align="left">
                            <v-btn color="#000046" outlined density="comfortable"><v-icon></v-icon>Read More</v-btn>
                            <v-btn  class="ml-3 mr-3" color="primary" density="comfortable"><v-icon></v-icon>Apply Now</v-btn>
                           </div>
                         </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
               </v-col>  
            </v-container>
          </v-row>
      </v-col>
    </v-row>
    <YwaFooter />
  </v-app>
</template>
<script>
import YwaFooter from '../components/FooterLayout.vue'
export default{
  components: {
    YwaFooter
    
  },
  data() {
    return{
      items: [
       { src: require('../assets/img/Pilbara_Iron.png'), position: 'Mechanical Maintainer (HD Fitters)', location: 'Australia',
         AccNumber: '10379443' },
       { src: require('../assets/img/stellarlogo.png'), position: 'Scaffolder', location : 'New Zealand', AccNumber: '103618821'  },
       { src: require('../assets/img/stellarlogo.png'), position: 'Steel Fixer', location : 'New Zealand', AccNumber: '103618821'  },
       { src: require('../assets/img/stellarlogo.png'), position: 'Heavy Equivalent', location : 'New Zealand', AccNumber: '103618821'  },
       { src: require('../assets/img/stellarlogo.png'), position: 'Heavy Equipment Operators', location : 'New Zealand', AccNumber: '103618821'  },
       { src: require('../assets/img/stellarlogo.png'), position: 'Carpenter', location : 'New Zealand', AccNumber: '103618821'  },
       { src: require('../assets/img/stellarlogo.png'), position: 'Drainlayer', location : 'New Zealand', AccNumber: '103618821'  },
       { src: require('../assets/img/stellarlogo.png'), position: 'Electrician', location : 'New Zealand', AccNumber: '103618821'  },
       { src: require('../assets/img/stellarlogo.png'), position: 'Tiler Roof', location : 'New Zealand', AccNumber: '103618821'  },
       { src: require('../assets/img/ad-coote-logo.png') },
       { src: require('../assets/img/alrashed-logo-new-new.jpg') },
      ]
    }
  }
}
</script>

<style>
</style>