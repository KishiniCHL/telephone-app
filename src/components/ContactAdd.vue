<template>
    <div class="modal-overlay" @click="$emit('closeModal')">  
        <div class="modal" @click.stop>

            <form @submit.prevent="contactAdd" class="addForm">
                <input 
                    type="text" 
                    placeholder="Name..."
                    v-model="contactForm.name"
                    >
                    <!-- <span error="false" class="error">Le name doit avoir au moins 3 caractères</span> -->
                <input 
                    type="text"
                    placeholder="Numéro..."
                    v-model="contactForm.numero"
                    @input="limitNum"
                    >
                <button type="submit">Ajouter</button> 
                <div class="close">
                    <button @click="$emit('closeModal')" class="closeButton">Annuler</button>
                </div> 
            </form>
            
        </div>

    </div>
</template>
<script>
export default {
    name:'ContactAdd',

    
    data() {
        return {
        contactForm:[
        {
            name:'',
            numero:null
        }
    ]
        }
    },

    methods:{
        contactAdd(){
            if(this.contactForm.name =="" || this.contactForm.numero===null)return

            // if(this.contactForm.numero.length< 10){
            //     // this.error = true
            //     return
            // }

            // if(this.contacts.find(contact => contact.name===this.contactForm.name)) return


            this.$store.commit('contactAdd', this.contactForm)
            this.contactForm={
                name:"",
                numero:null
            }
        },
        limitNum(event){
            if(event.target.value.toString().length >= 10 ){
                this.contactForm.numero = parseInt(event.target.value.toString().substring(0,10))
            }
        }

    }
}
</script>
<style>

.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    background-color: #000000da;
}

.modal {
    display: flex;
    /* justify-content: space-around; */
    flex-direction: column;
    /* flex-direction: column; */
    text-align: center;
    background-color: white;
    height: 40vh;
    width: 40vh;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
}
.close {
    /* margin: 10% 0 0 16px; */
    cursor: pointer;

}

.addForm{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;

}


button {
    background-color: #f4f7ff;
    border: 2px solid #BCD1FC;
    border-radius: 30px;
    box-shadow: #BCD1FC 4px 4px 0 0;
    color: #BCD1FC;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    font-size: 18px;

    line-height: 50px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    min-width: 120px;
    padding: 0 25px;
    }

    button:hover {
    background-color: #fff;
    }

    button:active {
    box-shadow: #BCD1FC 2px 2px 0 0;
    transform: translate(2px, 2px);
    }

    .closeButton{
        border: 2px solid #fcbcbc;
        box-shadow: #fcbcbc 4px 4px 0 0;
        color: #fcbcbc;
    }
    
</style>