<template id="miniBody">
    <div id="container">
        <TodoHeader title="Task Trake" />
        <div id="todoApp">
            <img :class="gender" v-bind:src="picture" v-bind:alt="`${firstName} ${lastName}`"/>
            <h2>{{firstName}} {{lastName}}</h2>
            <h3>Email: {{ email }}</h3>
            <button @click="getUser" :class="gender">Get Random User</button>
        </div>
    </div>    
</template>

<script>
import TodoHeader from '../components/layout/TodoHeader.vue'
export default {
    data(){
        return{
            firstName: 'Jone',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    setup() {
        
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            //console.log(results)
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.medium
        }
    },
    components:{
        TodoHeader,
    },
}
</script>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#miniBody{
    font-family: Arial, Helvetica, sans-serif;
}
h1, h3{
    margin-bottom: 1rem;
    font-weight: normal;
}

img{
    border-radius: 50%;
    border: 5px #333 solid;
    margin-bottom: 1rem;
}
.male{
    border-color: steelblue;
    background-color: steelblue;
}
.female{
    border-color: pink;
    background-color: pink;
    color: #333;
}
button{
    cursor: pointer;
    display: inline-block;
    background: #333;
    color: white;
    font-size: 18px;
    border: 0;
    padding: 1rem 1.5rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
}

</style>