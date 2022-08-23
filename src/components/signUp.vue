<template>
<img class="logo" src="../assets/lotuslogo.png" alt="">
<h1>Sign Up</h1>
<div class="register">
    <input type="text" v-model="name" placeholder="Nome">
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Senha">
    <button v-on:click="signUp">Criar Conta</button>
    <p>
        <router-link to="/login">Login</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
import { onMounted } from 'vue';
export default{
    name : 'signUp',
    data()
    {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods: {
        async signUp(){
           let result = await axios.post("http://localhost:3000/users",{
            email:this.email,
            password:this.password,
            name:this.name
           });
           console.warn(result);
           if(result.status==201)
           {
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name:'Home'})
           }
        }
    },
     mounted()
     {
         let user= localStorage.getItem('user-info');
         if(user){
               this.$router.push({name:'Home'})
         }
     }
}
</script>

