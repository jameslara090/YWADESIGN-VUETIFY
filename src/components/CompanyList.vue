<template>
    <v-container>
        <h1 class="text-center">Our Recent Employer</h1>
        <div style="padding: 10px 180px 10px 180px">
            <v-row align="center">
            <v-col col="12" sm="4" v-for="(item, index) in items" :key="index">
                <v-card>
                    <v-container>
                        <div>
                            <v-img :src="item.src"></v-img>
                        </div>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        </div>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            items: [
            { src: require('../assets/img/ad-coote-logo.png') },
            { src: require('../assets/img/alrashed-logo-new-new.jpg') },
            { src: require('../assets/img/alrashed-logo-new-new.jpg') },
            { src: require('../assets/img/alrashed-logo-new-new.jpg') },
            { src: require('../assets/img/alrashed-logo-new-new.jpg') },
            { src: require('../assets/img/alrashed-logo-new-new.jpg') },
           
            ]
        }
    }
}
</script>