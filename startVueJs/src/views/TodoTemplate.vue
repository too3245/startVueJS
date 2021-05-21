<template id="miniBody">
    <div id="container">
        <TodoHeader @toggle-add-task="toggleAddTask" title="Task Trake" :showAreaAddTask="showAreaAddTask" />
        <div v-show="showAreaAddTask">
            <AddTask @add-task="addTask"/>
        </div>
        <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
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
import Tasks from '../components/anyComponent/Tasks.vue'
import AddTask from '../components/anyComponent/AddTask.vue'

export default {
    data(){
        return{
            tasks: [],
            firstName: 'Jone',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            showAreaAddTask: false
        }
    },
    async created(){
        this.tasks = await this.fetchTasks()
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
        },
        async deleteTask(id){
            if(confirm('진짜로 삭제하시나요?')){
                const res = await fetch(`http://localhost:5000/tasks/${id}`,{
                    method: 'DELETE'
                })
                res.status === 200 ?(this.tasks = this.tasks.filter((task)=> task.id !== id)) : alert('데이터 전송중 오류발생!')
                
            }
        },
        async toggleReminder(id){
            const taskToToggle = await this.fetchTask(id)
            const updTask = {...taskToToggle,reminder: !taskToToggle.reminder}
            console.log('taskToToggle',taskToToggle,id)
            const res = await fetch(`http://localhost:5000/tasks/${id}`,{
                method: 'PUT',
                header: {
                    'Content-type': 'applycation/json'
                },
                body: JSON.stringify(updTask)
            })
            const data = await res.json()
            this.tasks = this.tasks.map((task)=> task.id === id ? {...task,reminder: !task.reminder}:task)
        },
        async fetchTasks(){
            const res = await fetch('http://localhost:5000/tasks')

            const data = await res.json()

            return data
        },
        async fetchTask(id){
            const res = await fetch(`http://localhost:5000/tasks/${id}`)
            
            const data = await res.json()
            
            return data
        },
        async addTask(task){
            const res = await fetch('http://localhost:5000/tasks',{
                method: 'POST',
                headers:{
                    'Content-type' : 'application/json',
                },
                body: JSON.stringify(task),
            })
            this.tasks = [...this.tasks, task]
        },
        toggleAddTask(){
            this.showAreaAddTask = !this.showAreaAddTask
        }
    },
    components:{
        TodoHeader,
        Tasks,
        AddTask
    },
    emits:['delete-task','toggle-reminder'],
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
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
#container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
}

</style>