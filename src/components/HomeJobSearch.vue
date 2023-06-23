<template>
          <v-card class="pt-6" color="white" elevation="5" >
            <v-form class="pl-5">
               <v-container>
                 <v-row>
                  <v-col col="12" sm="3">
                    <v-text-field  outlined label="Enter a Keyword"></v-text-field>
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
               </v-container>
            </v-form>
          </v-card>
</template>

<script>

export default {
    name: 'JobSearch',
   

};

</script>