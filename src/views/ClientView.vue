<template>
    <v-app :style="{background: $vuetify.theme.themes.light.background}">
        <v-row>
            <v-col cols="12">
                <PageHeader />
            </v-col>
            <v-col cols="12" align="center">
                <CompanyList />
            </v-col> 
        </v-row>
        <YwaFooter />
    </v-app>
</template>

<script>
import PageHeader from '../components/HeaderLayout.vue'
import CompanyList from '@/components/CompanyList.vue';
import YwaFooter from '../components/FooterLayout.vue'
export default{
    components: {
      PageHeader,
      CompanyList,
      YwaFooter

    }
}

</script>