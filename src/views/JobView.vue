<template>
        <v-row no-gutters>
        <v-col cols="12 pt-8 pl-5 pr-5" class="bg-blue">
                <v-row>
                  <v-col col="12" sm="3">
                    <v-text-field  class="bg-white" outlined label="Enter a Keyword"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <v-select outlined label="Job Qualification">item1</v-select>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <v-select  outlined label="Location">item1</v-select>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <v-card color="primary" outlined block><p style="padding-left:85px; padding-right:85px; padding-top:15px;">SEARCH</p></v-card>
                  </v-col>
                 </v-row>
         </v-col>
        <v-col cols="5">
            <v-sheet class="pa-2 ma-2">
                <v-card
                    v-scroll.self="onScroll"
                    class="overflow-y-auto"
                    max-height="400"
                >
                    <v-banner
                    class="justify-center text-h5 font-weight-light"
                    sticky
                    >
                    Scroll Me - Method invoked

                    <span
                        class="font-weight-bold"
                        v-text="scrollInvoked"
                    ></span>

                    times
                    </v-banner>

                    <v-card-text>
                    <div
                        v-for="n in 12"
                        :key="n"
                        class="mb-4"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi earum tenetur. Asperiores dolorem placeat ab nobis iusto culpa, autem molestias molestiae quidem pariatur. Debitis beatae expedita nam facere perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus cupiditate rerum officiis consequuntur laborum doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam at corporis, similique ratione quasi illo!
                    </div>
                    </v-card-text>
                </v-card>
            </v-sheet>
        </v-col>
        <v-col cols="7">
            <v-sheet class="pa-2 ma-2">
            .v-col-6
            </v-sheet>
        </v-col>
        </v-row>
   
 
</template>
<style scoped>
v-row{
    margin-top: 0 !important; 
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-bottom: 0 !important;
    padding: 0, 0, 0, 0 !important;
}
.bg-blue{
    background-image: linear-gradient(to right top, #0c3471, #002d74, #002677, #001d78, #081278);
}
.bg-white{
    background-color: aliceblue;
}
</style>
<script>
  export default {
    data: () => ({
      scrollInvoked: 0,
    }),

    methods: {
      onScroll () {
        this.scrollInvoked++
      },
    },
  }
</script>