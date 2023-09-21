<template>
    <v-app>
        <v-container>
            <h1>Coding is
                <span class="typed-text">{{ typeValue }}</span>
                <span class="cursor" :class="{'typing' : typeStatus}">&nbsp;</span>
            </h1>
        </v-container>
    </v-app>
</template>

<script>


export default{
   data: () => {
     return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['fun', 'awesome', 'a journey', 'life'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
     }
   },    
   methods: {
    typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length){
            if(!this.typeStatus)
             this.typeStatus = true;

            this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
            this.charIndex += 1;

            setTimeout(this.typeText, this.typingSpeed);
        }
        else {
            this.typeStatus = false;
            setTimeout(this.eraseText, this.newTextDelay);
        }
    },
    eraseText() {
        if(this.charIndex > 0 ) {
            if(!this.typeStatus)
             this.typeStatus = true;
        
            this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
            this.charIndex -=1;
            setTimeout(this.eraseText, this.erasingSpeed);

        }
        else{
            this.typeStatus = false;
            this.typeArrayIndex +=1;
            if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
            
         setTimeout();
        }
    }
   },
   create() {
     setTimeout(this.typeText, this.newTextDelay + 200)
   }
}

</script>

<style lang="scss" scoped>
 h1{
    font-size: 4rem;
    font-weight: normal;

    span.typed-text {
        color: #d38037;
    }
    span.cursor{
        display: inline;
        margin-left: 3px;
        width: 3px;
        background-color: #fff;
        animation: cursorBlink 1s infinite;
    }
    span.cursor.typing {
        animation: none;
    }
 }
 @keyframes cursorBlink {
  49% { background-color:#fff; }
  50% { background-color: #fbdf7e;}
  99% { background-color: #fbdf7e;}

}
</style>