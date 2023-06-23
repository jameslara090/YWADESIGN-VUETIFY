<template>
     <v-carousel
      v-model="currentSlide"
      :interval="slideInterval"
      height="520"
      show-arrows="hover"
      show-dots
      hide-delimiter-background
      cycle
      >
        <v-carousel-item v-for="(item, index) in items" :key="index">      
                <v-sheet
                  v-if="showTimer"
                  :value="timerProgress"
                  height="5"
                  background-color="grey lighten-2"
                  :class="img-opacity" 
                  
                >
              <v-img :src="item.src" class="img-opacity" height="600" :alt="item.alt"></v-img>
                <div class="text-overlay">
                      <div class="text-h3">
                      YWA is now inviting you to Apply Abroad. We'll Help you to achieved your Dreams
                        of becoming Professional
                      </div>
                      <br>
                      <v-btn color="primary" :class="text-h2">
                          Apply Now
                      </v-btn>

                </div>
                </v-sheet>
        </v-carousel-item>
      </v-carousel>
  </template>
  
  <style scoped>
  .text-overlay {
    position: absolute;
    top: 50%; /* Positions the text 50% from the top */
    left: 50%; /* Positions the text 50% from the left */
    transform: translate(-50%, -50%); /* Centers the text using negative translate */
    text-align: center; /* Centers the text horizontally */
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
  background-color: rgba(25, 40, 73, 0.5); /* Change the color and opacity values as per your requirement */
 }
</style>


<script>
export default {

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
  