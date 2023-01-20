<template>
    <div>
        <h2>Patate</h2>
        <div>
            <input type="text" v-model="value">
        </div>
        <section class="container_template">

            <div class="clavier_container">
                <!-- <img src="../assets/clavierphone.png" alt="Clavier fond d'écran" id="wallpaper_clavier"> -->
                <div class="button_container">
                    <button v-for="number in numbers" :key="number" @click="numberDisplay(number)" class="bouton_num">{{ number }}</button>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'ClavierTemplate',

    data() {
        return {
            value: '',
            numbers: [1,2,3,4,5,6,7,8,9,0],
            currentNumber:null
        }
    },
    methods: {
        numberDisplay(number){
            // this.currentNumber=number
            this.value=`${this.value}${number}`
        }
    },
    computed:{
        showNumber(){
            return this.$store.state.numberKey
        }
    }
}
</script>
<style scoped>
    
    .container_template{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .clavier_container{
        /* width: 60vh; */
        height: 80vh;
        width: auto;
        background-image: url('~@/assets/clavierphone.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    /* #wallpaper_clavier{
        width: 100%;
        height: 100%;
        object-fit: contain;
    } */
    

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
    padding: 0 18px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    }

    .bouton_num:hover {
    background-color: #fff;
    }

    .bouton_num:active {
    box-shadow: #BCD1FC 2px 2px 0 0;
    transform: translate(2px, 2px);
    }

    @media (min-width: 768px) {
    .bouton_num {
        min-width: 120px;
        padding: 0 25px;
    }
    }

</style>