<template>
  <v-container class="pb-5">
    <v-carousel hide-delimiters v-model="sliderValue" height="420" :transition="sliderTransition" show-arrows>
      <v-carousel-item v-for="(slide, index) in slideChunks" :key="index">
        <v-row>
          <v-col v-for="(card, cardIndex) in slide" :key="cardIndex" cols="4">
            <v-card class="mx-auto" max-width="330">
              <v-img :src="card.image" height="150"></v-img>
              <v-card-title class="text--white">{{ card.title }}</v-card-title>
                          <v-card-text>
                  <v-row align="center">
                    <v-col cols="auto">
                      <v-icon>mdi-map-marker</v-icon>
                    </v-col>
                    <v-col>
                      <span class="info-label">Location:</span> New York
                    </v-col>
                  </v-row>
                  <v-row align="center">
                    <v-col cols="auto">
                      <v-icon>mdi-account</v-icon>
                    </v-col>
                    <v-col>
                      <span class="info-label">Profile:</span> Software Engineer
                    </v-col>
                  </v-row>
                  <v-row align="center">
                    <v-col cols="auto">
                      <v-icon>mdi-currency-usd</v-icon>
                    </v-col>
                    <v-col>
                      <span class="info-label">Salary:</span> $100,000
                    </v-col>
                  </v-row>
                </v-card-text>
              <v-divider class="mx-4 mb-1"></v-divider>
              <v-card-actions class="pl-10 pr-10" style="align-items: center;">
                <v-btn
                  color="#000046"
                  variant="text"
                  outlined
                >
                  Read More
                </v-btn>
                <v-btn
                  color="#000046"
                  variant="text"
                  outlined
                >
                  Apply Now
                </v-btn>
              
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sliderValue: 0,
      cards: [
        {
          title: 'Welder',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../assets/img/welder_1.jpg'),
        },
        {
          title: 'Card 2',
          description: 'Praesent dapibus mi id malesuada commodo.',
          image: 'https://example.com/card2.jpg',
        },
        {
          title: 'Card 3',
          description: 'Donec vitae elit nec dolor convallis vestibulum.',
          image: 'https://example.com/card3.jpg',
        },
        {
          title: 'Card 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: 'https://example.com/card1.jpg',
        },
        {
          title: 'Card 5',
          description: 'Praesent dapibus mi id malesuada commodo.',
          image: 'https://example.com/card2.jpg',
        },
        {
          title: 'Card 6',
          description: 'Donec vitae elit nec dolor convallis vestibulum.',
          image: 'https://example.com/card3.jpg',
        },
        {
          title: 'Card 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: 'https://example.com/card1.jpg',
        },
        {
          title: 'Card 8',
          description: 'Praesent dapibus mi id malesuada commodo.',
          image: 'https://example.com/card2.jpg',
        },
        {
          title: 'Card 9',
          description: 'Donec vitae elit nec dolor convallis vestibulum.',
          image: 'https://example.com/card3.jpg',
        },
        // Add more cards...
      ],
      sliderTransition: 'carousel-transition',
    };
  },
  computed: {
    slideChunks() {
      const chunkSize = 3; // Number of cards in each slide
      const chunks = [];
      let i, j;
      for (i = 0, j = this.cards.length; i < j; i += chunkSize) {
        chunks.push(this.cards.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
};
</script>

<style>
.carousel-transition-enter-active,
.carousel-transition-leave-active {
  transition: transform 0.5s;
}

.carousel-transition-enter,
.carousel-transition-leave-to {
  transform: translateX(100%);
}
</style>
