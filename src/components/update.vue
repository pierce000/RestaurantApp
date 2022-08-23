<template>
<Header />
<h1>Atualize seu pedido</h1>
<form class="add">
    <input type="text" name="name" placeholder="Nome" v-model="restaurant.name" />
    <input type="text" name="address" placeholder="Endereço" v-model="restaurant.address" />
    <input type="text" name="contact" placeholder="Contato" v-model="restaurant.contact" />
    <button type="button" v-on:click="updaterestaurant">Atualizar pedido</button>
</form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default{
    name: 'Update',
    components:{
    Header
},
data(){
    return{
        restaurant :{
            name:'',
            address:'',
            contact:''
        }
    }
},
methods:{
    async updaterestaurant(){
        console.warn(this.restaurant)
         const result = await axios.put("http://localhost:3000/menu/"+this.$route.params.id,{
           name:this.restaurant.name,
           address:this.restaurant.address,
           contact:this.restaurant.contact
       });
       if(result.status==200){
            this.$router.push({name:'Home'})
       }
    }
},
   async  mounted()
     {
         let user= localStorage.getItem('user-info');
         if(!user){
               this.$router.push({name:'SignUp'})
         }
         const result = await axios.get("http://localhost:3000/menu/"+this.$route.params.id)
        //  console.warn(this.$route.params.id)
        console.warn(result.data)
        this.restaurant=result.data
     }
}
</script>
