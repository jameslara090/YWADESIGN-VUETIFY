<template>
    <v-footer dark padless style="margin: 0; padding-top: 25px;">
      <v-col cols="12">
        <v-container>
       <v-row justify="center">
          <v-col justify="center" cols="12" sm="4">
            <v-container class="bg-surface-variant">
              <h3 class="white--text">DOWNLOAD YWA APP</h3>
              <v-row no-gutters>
                <v-col cols="4">
                  <v-sheet class="pa-2 ma-2" color="transparent">
                    <v-img src="../assets/img/default_qrcode.png" max-width="100" max-height="100" ></v-img>
                  </v-sheet>
                </v-col>
                <v-col cols="8">
                  <v-sheet class="pa-2 ma-2 outlined">
                    <v-img src="../assets/img/googleplay.png" max-width="160" max-height="30" ></v-img>
                  </v-sheet>
                  <v-sheet class="pa-2 ma-2">
                    <v-img src="../assets/img/download.png" max-width="160" max-height="30" ></v-img>
                  </v-sheet>
                </v-col> 
              </v-row>
              <h3 class="pb-2">FOLLOW US</h3>
                <div class="pl-0">
                  <v-btn icon variant="plain" size="small" class="mx-4 white--text"><v-icon>mdi-facebook</v-icon></v-btn>
                  <v-btn icon variant="plain" size="small" class="mx-4 white--text"><v-icon>mdi-twitter</v-icon></v-btn>
                  <v-btn icon variant="plain" size="small" class="mx-4 white--text"><v-icon>mdi-instagram</v-icon></v-btn>
                  <v-btn icon variant="plain" size="small" class="mx-4 white--text"><v-icon>mdi-linkedin</v-icon></v-btn>
                </div>
            </v-container>
          </v-col>
          <v-col cols="12" sm="3">
            <v-container>
                  <h3 class="white--text pl-4">QUICK LINKS</h3>
                  <v-card-text class="pt-4">Clients</v-card-text>
                  <v-card-text class="pt-0">Job Search</v-card-text>
                  <v-card-text class="pt-0">Our Industries</v-card-text>
                  <v-card-text class="pt-0">Ou Teams</v-card-text>
            </v-container>
           </v-col>
            <v-col cols="12" sm="5">
              <v-container>
                <h3 class="pl-10 pb-2">CONTACT US</h3>
                <v-card-text class="pt-0"><v-btn icon size="small" class="mx-4 white--text"><v-icon>mdi-map-marker</v-icon></v-btn>1268 General Luna Street, Paco, Manila 1007</v-card-text>
                <v-card-text class="pt-0"><v-btn icon size="small" class="mx-4 white--text"><v-icon>mdi-cellphone</v-icon></v-btn>(Recruitment Division)+639487249493</v-card-text>
                <v-card-text class="pt-0"><v-btn icon size="small" class="mx-4 white--text"><v-icon>mdi-phone</v-icon></v-btn>(Recruitment Division)+639487249493</v-card-text>
                <v-card-text class="pt-0"><v-btn icon size="small" class="mx-4 white--text"><v-icon>mdi-cellphone</v-icon></v-btn>(Recruitment Division)+639487249493</v-card-text>
              </v-container>
            </v-col>
    </v-row>
    </v-container>
     </v-col>
    </v-footer>
</template>

<style>
.bg-footer{
    background-image: linear-gradient(to right top, #05357e, #082d79, #0c2573, #101d6d, #141466);
    
}
</style>