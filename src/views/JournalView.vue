<template>
    <div>
        <h1>Le journal</h1>
        <div v-for="contact in contacts" :key="contact.time"> 
            <JournalCard :name="contact.name" :time="contact.time" :numero="contact.numero"/>
            <p>{{ contact.name }}</p>
            <p v-if="this.$store.state.contacts.timestamp">{{ this.$store.state.contacts.timestamp }}</p>
        </div>

    </div>
</template>
<script>
import JournalCard from '@/components/JournalCard.vue';
export default {
    name:'JournalView',
    components:{
        JournalCard
    },

    // props:[
    //     'contacts'
    // ],

    emits:[
        'timestamp'
    ],

    // methods:{
    //     callTimestamp(){
    //         this.$store.commit('callTimestamp')
    //     }
    // },
    computed:{
        contacts(){
            return this.$store.state.contacts
        }
    }
}
</script>
<style>
    
</style>