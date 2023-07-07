<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-row>
      <v-col cols="12" style="padding: 18px 150px 10px 150px;">
        <v-img max-height="400" max-with="400" src="../assets/img/OUR TEAM.jpg"></v-img>
      </v-col>
      <v-col cols="12">
        <div style="padding: 10px 110px 20px 110px;">
          <v-container>
            <p>
            Our humble beginnings have laid the solid foundation to what is now a world class multinational company with proven track record. Standing strong since our birth in 1994 is a testament of how we can stride concurrently in this age of globalization. We are a company with a strong aspiration to become the world’s number one skilled workforce placement agency. The company’s head office in the Philippines and its global offices in Australia, Canada, New Zealand and USA, managed by teams of dedicated professionals, work diligently and relentlessly to support the needs and demands of our industry leading employers in all business sectors.
           </p>
           <p>
            YWA’s vision to build lives, economies and nations is what propels each employee to go the extra mile everyday. This is fostered by thinking out of the box and diligently refining every recruitment strategy to make sure that we do not only deliver to what our clients need, but most importantly, we understand every aspect of the hiring requirements and execute ethically and flawlessly with the best interest of both our clients and workers in mind. We are also committed to ensure that all of the host nation’s legal requirements have been met and respected.
           </p>
          </v-container>
        </div>
      </v-col>
    </v-row>
    <YwaFooter />
  </v-app>
</template>

<script>
import YwaFooter from '../components/FooterLayout.vue'

export default{
  components: {
    YwaFooter,
  }
}

</script>
