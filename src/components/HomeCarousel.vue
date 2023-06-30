<template>
  <v-carousel
   v-model="currentSlide"
   :interval="slideInterval"
   :show-arrows="false"
   height="500"
   hide-delimiters
   cycle
   class="xc4565"
   transition="slide-x-transition"
   >
     <v-carousel-item v-for="(item, index) in items" :key="index">      
             <v-sheet
               v-if="showTimer"
               :value="timerProgress"
               height="5"
               background-color="grey lighten-2"
               :class="img-opacity" 
               
             >
           <v-img :src="item.src" class="img-opacity" height="620" :alt="item.alt"></v-img>
             <div class="text-overlay">
                   <Transition
                    appear
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                   >
                    <div class="text-h1 font-weight-bold">
                      Helping People Achieve Thier Goals
                    </div>
                  </Transition>

                  <Transition
                    appear
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                  >
                    <p class="text-h5">YWA is now inviting you to Apply Abroad. We'll Help you to achieved your Dreams
                        of becoming Professional</p>
                      <br>
                  </Transition>
                  <Transition>
                    <v-btn rounded="xl" size="x-large" color="primary">
                          <h2 class="pl-2 pt-2 pr-2 pb-2">Apply Now</h2>
                    </v-btn>
                  </Transition>  
             </div>
             </v-sheet>
     </v-carousel-item>
   </v-carousel>
</template>

<style scoped>
.text-overlay {
 position: absolute;
 top: 53%; /* Positions the text 50% from the top */
 left: 40%; /* Positions the text 50% from the left */
 transform: translate(-50%, -50%); /* Centers the text using negative translate */
 color: #fff; /* Optional text color for the overlay */
 padding: 10px; /* Optional padding for the overlay */
}
.img-opacity{
position: relative;
}
.img-opacity:after{
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(8, 51, 145, 0.5); /* Change the color and opacity values as per your requirement */
}
.xc4565{
border-top-left-radius: 280px;
border-bottom-right-radius: 300px;
padding-top: 0px;
padding-right: 20px;
padding-left: 20px;
}

</style>


<script>

import gsap from 'gsap'
export default {
    setup(){
      const beforeEnter = (el) => {
        console.log('before enter - set initial state')
        el.style.transform = 'translateY(-60px)'
        el.style.opacity = 0
      }
      const enter = (el, done) => {
        console.log('starting to enter - make transition')
        gsap.to( el, {
          duration: 1,
          y:0,
          opacity: 1,
          onComplete: done
        });
      }
      const afterEnter = () => {
        console.log('after enter')
      }
      return { beforeEnter, enter, afterEnter}
    },
    data() {
    return {
    currentSlide: 0,
    slideInterval: 7000, // Interval between slides in milliseconds
    showTimer: true,
    timerProgress: 0,
        items: [
        { src: require('../assets/img/heavy-operator.jpg') },
        { src: require('../assets/img/welder.jpg') },
        { src: require('../assets/img/electrician.jpg') },
        { src: require('../assets/img/health-care.jpg') },
        { src: require('../assets/img/carpenter.jpg') },
        ],
        slides: [
        ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
        ['Item 5', 'Item 6', 'Item 7', 'Item 8'],
        ['Item 9', 'Item 10', 'Item 11', 'Item 12']
        // Add more rows or modify as needed
        ]
        };
    },
    mounted() {
    if (this.showTimer) {
    this.startTimer();
    }
    },
    methods: {
    nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    if (this.showTimer) {
    this.timerProgress = 0;
    this.startTimer();
    }
    },
    startTimer() {
    let progress = 0;
    const interval = setInterval(() => {
    progress += (200 / this.slideInterval) * 200;
    this.timerProgress = Math.min(progress, 200);
    if (progress >= 200) {
      clearInterval(interval);
      this.nextSlide();
    }
    }, 100);
    },
    },
};
</script>
