<template>
    <section id="theJournalList">
        <div class="journal_container">
            <h1>Le journal</h1>
            <div v-for="contact in contacts" :key="contact.time"> 
                <JournalCard :name="contact.name" :time="contact.time" :numero="contact.numero"/>
                <p>{{ contact.name }}</p>
                <p v-if="this.$store.state.contacts.timestamp">{{ this.$store.state.contacts.timestamp }}</p>
            </div>
        </div>
    </section>
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
<style scoped>
#theJournalList{
    display: flex;
    justify-content: center;
}
.journal_container{
        width: 65vh;
        min-height: 80vh;
        background-color: #E8EFFF;
        
    }
    
</style>