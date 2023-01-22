<template>
    <div>
        <span>{{ contact.name }}</span> |
        <span>{{ contact.numero }}</span> |
        <button v-on:click="callTimestamp">Appeler</button>
        <!-- <p v-if="callTimestamp " error>Vous avez appelé {{ contact.name }}</p> -->
    </div>
</template>
<script>
export default {
    name:'CardContact',
    props:[
        'contact'
    ],

    // data(){
    //     return{
    //         timestamp:null
    //     }
    // },
    methods:{
        callTimestamp(){
            this.$store.commit('callTimestamp')
        }
    },
    computed:{
        timestamp(){
            return this.$store.state.contacts.timestamp
        }
    }
}
</script>
<style>
    
</style>