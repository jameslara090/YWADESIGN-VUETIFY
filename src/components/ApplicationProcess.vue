<template>
    <v-container>
             <h1 class="white--text pb-5 pt-5">APPLICATION PROCESS</h1>
             <v-card class="vcard-radius">
                <v-container>
                  <div>
                     <v-row>
                       <v-col cols="12">
                        <span>New to Applicant to YWA? No Idea to do next?</span> <br>
                        <span>Don’t worry, see the timeline below to know our process.</span>
                       </v-col>
                       <v-col cols="12">
                         <v-container>
                          <v-stepper v-model="e1">
                            <v-stepper-header>
                              <v-stepper-step :complete="e1 > 1" step="1">
                                 Step 1
                              </v-stepper-step>

                              <v-divider></v-divider>

                              <v-stepper-step :complete="e1 > 2" step="2">
                                Step 2
                              </v-stepper-step>

                              <v-divider></v-divider>

                              <v-stepper-step :complete="e1 > 3" step="3">
                                Step 3
                              </v-stepper-step>
                              <v-divider></v-divider>

                              <v-stepper-step :complete="e1 > 4" step="4">
                                Step 4
                              </v-stepper-step>

                              <v-divider></v-divider>

                              <v-stepper-step :complete="e1 > 5" step="5">
                                Step 5
                              </v-stepper-step>
                              
                            </v-stepper-header>

                            <v-stepper-items>
                              <v-stepper-content step="1">
                                <v-card
                                  class="mb-12"
                                  color="grey lighten-1"
                                  height="200px"
                                ></v-card>

                                <v-btn
                                  color="primary"
                                  @click="e1 = 2"
                                >
                                  Continue
                                </v-btn>

                                <v-btn text>
                                  Next
                                </v-btn>
                              </v-stepper-content>

                              <v-stepper-content step="2">
                                <v-card
                                  class="mb-12"
                                  color="grey lighten-1"
                                  height="200px"
                                ></v-card>

                                <v-btn
                                  color="primary"
                                  @click="e1 = 3"
                                >
                                  Continue
                                </v-btn>

                                <v-btn text>
                                  Cancel
                                </v-btn>
                              </v-stepper-content>

                              <v-stepper-content step="3">
                                <v-card
                                  class="mb-12"
                                  color="grey lighten-1"
                                  height="200px"
                                ></v-card>

                                <v-btn
                                  color="primary"
                                  @click="e1 = 1"
                                >
                                  Continue
                                </v-btn>

                                <v-btn text>
                                  Cancel
                                </v-btn>
                              </v-stepper-content>
                            </v-stepper-items>
                          </v-stepper>
                         </v-container>
                       </v-col>
                     </v-row>
                     
                  </div>
                </v-container>
             </v-card>
        </v-container>
</template>

<script>
 export default{
    data (){
      return {
        e1: 1,
    }
  }
 }

</script>