<template>
   <v-app>
    <v-row>
      <v-col id="home" cols="12" class="" sm="12">
        <div hide-details class="">
              <v-img 
              cover
            src="../assets/night-hd-desktop.jpg"
            :height="750"
            :width="1400"
            style="filter: grayscale(50%);"
          >
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-col cols="12" md="12">
                  <div class="text-center">
                    <div style="border-bottom: 2px;">
                      <h1 class="display-2" style="color:white">Hi, I'M WILJAMES</h1>
                    </div>
                     <h2 class="pt-3" style="color:white">Welcome to my Website!</h2>
                     <code>
                       <div>
                         <h1 style="color:white">
                            I'm a
                            <span class="typed-text">{{ typeValue }}</span>
                            <span class="blinking-cursor">|</span>
                            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
                          </h1>
                       </div>
                     </code>
                  </div>
                </v-col>
                <v-col cols="12" md="12">
                  <div align="center" justify="center" >
                    <v-btn
                    icon
                    :size="100"
                    class="mt-5"
                    >
                      <button @click="scroll('aboutme')"><v-icon :size="50" color="white">mdi mdi-chevron-double-down</v-icon></button>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
      </div>
      </v-col>

      <v-col id="aboutme" cols="12">
        <v-container>
          <div justify="center" style="margin-top: 100px; margin-bottom: 35px;">
            <v-row>
              <v-col cols="12" md="6">
                <div class="egg">
                  <v-img src="../assets/profile.jpg" max-height="300"></v-img>
                </div>
              </v-col> 
              <v-col cols="12" md="6">
                
                  <h1>About Me</h1>
                  <h1>Hello, My name is Wiljames Lara</h1>
                   <p class="pt-3">I am a passionate and driven web developer with a keen interest in creating innovative and user-friendly websites. My journey into the world of web development began with a curiosity about how the internet works and the desire to build something that could impact people's lives positively. Since then, I have been on a continuous learning path, exploring various programming languages and web technologies.</p>
                   <p>I'm currently wor king as Freelance Web Developer</p>
                    <p>If you have plan for me or you want to work with me, Write to me!</p>
                   <v-btn color="black" elevation="4">
                     <div style="color:white;">
                      <v-icon>
                        mdi mdi-download
                      </v-icon>
                      Download My CV
                     </div>
                   </v-btn>
              </v-col> 
            </v-row>
          </div>
        </v-container>
      </v-col>
      <!------------------------->
      <v-col id="passion" cols="12" sm="12">
          <v-container>
            <div align="center" style="margin-top: 80px; margin-bottom: 35px;"  justify="center">
              <v-container>
                  <h2>WHAT I DO</h2>
                  <v-row class="pt-5">
                      <v-col cols="12" md="4">
                          <div class="icon-styles"><v-icon :size="100" color="white">mdi-laptop</v-icon></div>
                          <h2 class="pt-5 pb-5">Web Design</h2>
                          <div>
                            Design is a broad and multifaceted concept that encompasses the creative process of conceiving and planning the appearance and functionality of products and also about the transforming ideas into tangible, meaningful, and visually appealing outcomes that address real-world needs and aspirations.
                          </div>
                      </v-col>
                      <v-col cols="12" md="4">
                          <div class="icon-styles"><v-icon :size="100" color="white">mdi-xml</v-icon></div>
                          <h2 class="pt-5 pb-5">Web Development</h2>
                          <div class=""> 
                            Web Development is process of combining Front-end and Back-End into a Functional Web Application and it involves a wide range of technologies, frameworks, and practices to deliver functional, user-friendly, and secure online experiences.
                          </div>
                      </v-col>
                      <v-col cols="12" md="4">
                          <div class="icon-styles"><v-icon :size="100" color="white">mdi-lightbulb</v-icon></div>
                          <h2 class="pt-5 pb-5">Web Deployment</h2>
                          <div>
                            Web deployment is an essential step in bringing your web project to life and making it accessible to users worldwide. It requires careful planning, attention to security, and ongoing maintenance to ensure that your website or web application remains functional and performs well.
                          </div>
                      </v-col>
                  </v-row>
              </v-container>
          </div>
        </v-container>
      </v-col>
      <!----------------------->
      <v-col id="experience" cols="12" sm="12">
            <div style="margin-top: 65px; margin-bottom: 35px;">
               <v-container class="pt-10">
                <h2 align="center">EXPERIENCE</h2>
                <h3 align="center" class="pt-5">I've been doing web development for about 3 years now, and I'm always eager 
                    <br> to learn more in this fast paced industry.</h3>
                    <v-row class="pt-10">
                        <v-col cols="12" md="8">
                            <h2>SOME TECHNOLOGIES I'VE WORKED WITH:</h2>
                            <v-row class="pt-5 pl-10 pr-10">
                                <v-col cols="4" md="2"><div><v-icon size="100">mdi-language-html5</v-icon><p class="text-center">HTML</p></div></v-col>
                                <v-col cols="4" md="2"><div><v-icon size="100">mdi-language-css3</v-icon><p class="text-center">CSS</p></div></v-col>
                                <v-col cols="4" md="2"><div><v-icon size="100">mdi-bootstrap</v-icon><p class="text-center">BOOTSTRAP</p></div></v-col>
                                <v-col cols="4" md="2"><div><v-icon size="100">mdi-language-javascript</v-icon><p class="text-center">JAVASCRIPT</p></div></v-col>
                                <v-col cols="4" md="2"><div><v-icon size="100">mdi-jquery</v-icon><p class="text-center">JQUERY</p></div></v-col>
                                <v-col cols="4" md="2"><div><v-icon size="100">mdi-language-php</v-icon><p class="text-center">PHP</p></div></v-col>
                                <v-col cols="4" md="2"><div><v-icon size="100">mdi-laravel</v-icon><p class="text-center">LARAVEL</p></div></v-col>
                                <v-col cols="4" md="2"><div><v-icon size="100">mdi-vuejs</v-icon><p class="text-center">VUE JS</p></div></v-col>
                                <v-col cols="4" md="2"><div><v-icon size="100">mdi-vuetify</v-icon><p class="text-center">VUETIFY</p></div></v-col>
                                <v-col cols="4" md="2"><div><v-icon size="100">mdi-database</v-icon><p class="text-center">My SQL</p></div></v-col>
                                <v-col cols="4" md="2"><div><v-icon size="100">mdi-git</v-icon><p class="text-center">Git</p></div></v-col>
                                <v-col cols="4" md="2"><div><v-icon size="100">mdi-github</v-icon><p class="text-center">Github</p></div></v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="4">
                            <h2>WHERE I'VE WORK:</h2>
                            <p class="pt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut tempora possimus alias nulla adipisci ducimus iure ipsam natus odio eligendi earum, nemo, quas sapiente, enim nisi facilis nam tenetur labore!</p>
                            <p class="pt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut tempora possimus alias nulla adipisci ducimus iure ipsam natus odio eligendi earum, nemo, quas sapiente, enim nisi facilis nam tenetur labore!</p>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
      </v-col>
    <!------------------------>
      <v-col id="work" cols="12" sm="12">
            <div style="margin-top: 100px; margin-bottom: 35px;">
            <v-container>
            <div>
                <h2 class="text-center">WHAT I'VE DONE</h2>
                <p class="text-center">More Coming Soon!</p>
            </div>
            <v-row>
                    <v-col cols="6" md="4">
                       <v-img src="../assets/homepage-final.png"></v-img>
                    </v-col>
                    <v-col cols="6" md="4">
                        <v-img src="../assets/Screen Shot 2019-10-07 at 1.30.32 PM.png"></v-img>
                    </v-col>
                    <v-col cols="6" md="4">
                        <v-img src="../assets/ywa-project.png"></v-img>
                    </v-col>
                    <v-col cols="6" md="4">
                        <v-img src="../assets/no-thumbnail-medium.png"></v-img>
                    </v-col>
                    <v-col cols="6" md="4">
                        <v-img src="../assets/no-thumbnail-medium.png"></v-img>
                    </v-col>
                    <v-col cols="6" md="4">
                        <v-img src="../assets/no-thumbnail-medium.png"></v-img>
                    </v-col>
            </v-row>
            </v-container>
            </div>
      </v-col>
<!---------------------------->
      <v-col id="contact" cols="12" md="12" align="center">
        <div style="background-color:azure; margin-top: 100px; margin-bottom: 35px;" align="center" justify="center" >
            <v-container>
                <v-row> 
                    <v-container>
                      <v-sheet max-width="600" class="pt-5 pl-5 pr-5" style="background-color:azure;">
                            <v-form @submit.prevent>
                              <v-row>
                                <v-col cols="12" md="12">
                                  <v-img height="100" width="100" src="../assets/paper-icon.png"></v-img>
                                  <h2 class="pt-3">GET IN TOUCH</h2>
                                  <p class="pt-3">Whether you have an idea for a project or just want to chat, <br>
                                  feel free to shoot me an email</p>
                                  <v-btn outlined color="white">Get Copy</v-btn>
                              </v-col>
                                <v-col cols="6" md="6">
                                  <v-text-field
                                    v-model="firstName"
                                    label="First name"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="6" md="6">
                                  <v-text-field
                                    v-model="lastName"
                                    label="Last Name"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="12">
                                  <v-text-field
                                    v-model="Email"
                                    label="Email"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="12">
                                  <v-text-field  height="100" label="Message" variant="solo"></v-text-field>
                                </v-col>
                              </v-row>
                              <div class="pt-5 pb-5">
                                <v-btn color="black" elevation="4" block>
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
        </div>
      </v-col>
    </v-row>
     <!------------------------>
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
   </v-app>
</template>

<script>

export default {
  name: 'HomeView',
  components :{
    
  
  }, 
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Front-End Developer", "Back-End Developer" ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
        scroll(refName) {
            const element = document.getElementById(refName)
            element.scrollIntoView({behavior: "smooth"})
        },
      typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  }
};
</script>
<style>

.blinking-cursor {
  font-size: 2rem;
  color: #dee3e9;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #eceef0;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #eef1f3;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #e6eaee;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #f3f5f7;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #eaeef1;
  }
}

.icon-styles{
    background-color: rgb(8, 8, 110);
    height: 200px;
    width: 200px;
    border-radius: 200px;
    padding: 45px 20px 45px 20px;
}
.egg{
  display:block;
  margin-left: 60px;
  margin-top: 50px;
  width: 356px;
  background-color: #fbdf7e;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 0%;
}

</style>


