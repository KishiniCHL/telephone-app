<template>
    <section>
        <div class="container_bottom_keyboard">
            <img src="@/assets/clavierphone.png" alt="background" id="keyboard_background">
            <div class="content_keyboard">
                <div class="num_container">
                    <p v-for="num in currentNumber" :key="num">{{ num }}</p>
                </div>

                <div class="keyboard_container">
                    <div class="button_container">
                        <button v-for="number in numbers" v-bind:key="number" @click="numberDisplay(number)" class="bouton_num">{{ number }}</button>
                    </div>
                </div>
            </div>
            <button>Appeler</button>
        </div>
    </section>
</template>
<script>
export default {
    name: 'ClavierTemplate',

    data() {
        return {
            numbers: [1,2,3,4,5,6,7,8,9,0],
            // currentNumber:[]
        }
    },
    methods: {
        numberDisplay(number){
            this.$store.commit('numberDisplay',number)
        }
    },
    computed:{
        currentNumber(){
            return this.$store.state.currentNumber.slice(0,10)
        }
    }
}
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Wallpoet&display=swap');

*{
    font-family: 'Roboto', sans-serif;
    font-family: 'Wallpoet', cursive;
}

    #keyboard_background{
        display: flex;
        /* justify-content: center; */
        align-items: center;
        height: 80vh;
        width: 100%;
        object-fit: contain;
        position: fixed;
        z-index: -1;
    }

    .content_keyboard{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .num_container{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 20vh;
        margin-bottom: 2rem;
        font-size: 2.2rem;
        
    }

    .button_container{
        flex-wrap: wrap;
        width: 50vh;
    }
/* CSS */
    .bouton_num {
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

    .bouton_num:hover {
    background-color: #fff;
    }

    .bouton_num:active {
    box-shadow: #BCD1FC 2px 2px 0 0;
    transform: translate(2px, 2px);
    }

</style>