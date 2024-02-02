<template>
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
</template>

<script>
  export default {
    
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
</style>