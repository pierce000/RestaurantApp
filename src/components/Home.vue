<template>
<Header />
<h1>Seja bem vindo(a) {{name}}!</h1>
<table border="1">
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Acões</td>
    </tr>
    <tr v-for="item in menu" key="item.id">
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td>{{item.contact}}</td>
    <td>{{item.address}}</td>
    <td>
    <router-link :to="'/update/'+item.id">Atualizar</router-link>
    <button v-on:click=" deleteRestaurant(item.id)">Delete </button>
    </td>
    </tr>
</table>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default{
    name: 'Home',
    data(){
        return{
            name:'',
            menu:[],
        }
    },
    components:{
    Header
},
methods:{
  async  deleteRestaurant(id){
     let result =await axios.delete("http://localhost:3000/menu/"+id);
     console.warn(result)
     if(result.status==200){
        this.loadData();
     }
    },
   async loadData(){
         let user= localStorage.getItem('user-info');
         this.name= JSON.parse(user).name;
         if(!user){
               this.$router.push({name:'SignUp'})
         }
         let result = await axios.get("http://localhost:3000/menu");
         console.warn(result)
         this.menu=result.data;
    }
},
    async mounted()
     {
        this.loadData();
     }
}
</script>

<style>
td{
    width:160px;
    height: 40px;
}
table{
    margin-left: 25%;

}
</style>
