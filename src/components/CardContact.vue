<template>
    <div>
        <div class="card_container">
            <span>{{ contact.name }}</span> :
            <span>{{ contact.numero }}</span> 
            <button v-on:click="callTimestamp">Appeler</button>
        </div>

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
<style scoped>

.card_container{
    background-color: rgb(255, 255, 255);
    /* width: 80%; */
    margin: 0.5rem 2rem;
    padding: 0.5rem;
    border-radius: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>