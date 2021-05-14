<template>
    <div id="todo-list-app2">
        <ol>
            <todo-item v-for="item in groceryList" v-bind:todo2="item" v-bind:key="item"></todo-item>
        </ol>
    </div>   
</template>


<script>
import {createApp} from 'vue';
const todoList= {
  data(){
    return{
      
    }
  }
};
const app = createApp();
app.component('todo-item',{
    props :['todo2'],
    template: `<li> {{ todo2.text }} </li>`,
    data: function(){
        return{
            groceryList: [
                {id: 0, text: "채소"},
                {id: 1, text: "치즈"},
                 {id: 2, text: "고기"}
            ]
        }
    }
});
app.mount('#todo-list-app2')
console.log(app,todoList,document.querySelector('#todo-list-app2'));
export default app;
</script>