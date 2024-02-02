<template>
  <v-container>
              <v-row> 
                  <v-container>
                    <v-sheet max-width="600" class="pt-5 pl-5 pr-5" style="background-color:azure;">
                          <v-form @submit.prevent="sendEmail">
                            <v-row>
                              <v-col cols="12" md="12">
                                <v-img height="100" width="100" src="../assets/paper-icon.png"></v-img>
                                <h2 class="pt-3">GET IN TOUCH</h2>
                                <p class="pt-3">Whether you have a project idea in mind or simply want to have a conversation,<br> please don't hesitate to send me an email.</p>
                            </v-col>
                              <v-col cols="12" md="12">
                                <v-text-field
                                  type="text"
                                  v-model="name"
                                  name="name"
                                  label="Your Name"
                                  required
                                ></v-text-field>
                                
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-text-field
                                  type="email"
                                  requered=""
                                  v-model="email"
                                  name="email"
                                  label="Email"
                                  required
                                ></v-text-field>
                                
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-text-field
                                  name="message"
                                  requered=""
                                  v-model="message"
                                  height="100"
                                  label="Message"
                                  variant="solo"
                                  required
                                  ></v-text-field>
                              </v-col>
                              <v-col cols="12" v-if="emailSent">
                                  <div class="success-message">
                                    The email has been sent successfully! We appreciate your message and will be in touch soon.
                                  </div>
                                </v-col>
                            </v-row>
                            <div class="pt-5 pb-5">
                              <v-btn type="submit" color="black" elevation="4" block>
                                <div style="color:white;">
                                  <v-icon>
                                    mdi mdi-send
                                  </v-icon>
                                  Submit
                                </div>
                              </v-btn>
                            </div>
                          </v-form>
                      </v-sheet>
                  </v-container>       
              </v-row>
  </v-container>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
name: 'ContactUs',
data() {
  return {
    error: [],
    name: '',
    email: '',
    message: '',
    emailSent: false, // Add a data property to track email sending status
    errorMessage: '',
  }
},
methods: {
  async sendEmail(e) {
    
      try {
        
      const response = await emailjs.sendForm('service_sicydq9', 'template_xh7q87y', e.target,
      '6YFzzw3h5E7tHZ8iZ', {
        name: this.name,
        email: this.email,
        message: this.message
      });
      if (response.status === 200) {
        this.emailSent = true; // Set the emailSent property to true on success
      }
    } catch(error) {
        this.error=[];
        if(!this.name){
          this.error.push("Name is required");
        }
        if(!this.email){
          this.error.push("Name is required");
        }
        if(!this.message){
          this.error.push("Name is required");
        }
    }
    // Reset form field
    this.name = ''
    this.email = ''
    this.message = ''
    }
   
  
},

}

</script>

<style scoped>
.success-message {
margin-top: 20px;
font-weight: bold;
color: white;
border: 3px 3px 3px 3px;
background-color: green;
margin: 4px 4px 4px 4px;
border-radius: 2px 2px 2px 2px;
}
</style>