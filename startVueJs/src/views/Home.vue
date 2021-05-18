<template>
    <div>
        <h1>welcome to Home</h1>
        <div id="counter">
          Counter: {{ counter }}
        </div>
        <div>
          <button id="stopCounter" @click="stopCount">카운터 종료</button>
        </div>
        <div id="bind-attribue">
          <span v-bind:title="message">
            기존에는 다양한 텍스트를 작성할 수 있으며,<br />
            여기에 마우스를 올려서 보면 실행한시간을 확인하는 것이 가능합니다.
          </span>
        </div>
        <div id="event-handling">
          {{ reverseMessage }}
        </div>
        <button v-on:click="reverseMessageFn">문자열 뒤짚기</button>
        <div id="two-way-binding">
          <p>{{ messageTowWayBindg }}</p>
          <input v-model="messageTowWayBindg">
        </div>
        <div id="condtional-rendering">
          <span v-if="seen">여기를 볼 수 있다는 뜻은 v-if가 true라는 의미입니다.</span>
        </div>
        <div id="list-rendering">
          <ol>
            <li  v-for="todo in todos" v-bind:key="todo">{{ todo.text }}</li>
          </ol>
        </div>
        <div id="todo-list-app">
          <TodoItem />
        </div>  
    </div>
</template>

<script>
import TodoItem from '../components/anyComponent/todoItem.vue'
export default {
  props: {
    title: String
  },
  data(){
    
    return {
      counter: 0,
      interval: null,
      message: '당신이 지금 확인하는 현재시간은 다음과 같습니다.' +new Date().toLocaleString(),
      reverseMessage : 'Hello Vue.js',
      messageTowWayBindg: 'Hello Vue!',
      seen : true,
      todos: [
        {text:'고블린1'},
        {text:'고블린2'},
        {text:'트롤1'}
      ]
    }
  },
  mounted(){
    this.interval = setInterval(() => {
      this.counter++
    }, 1000);
    

  },
  setup(props) {
    console.log(props);
  },
  methods:{
    stopCount(){
      clearInterval(this.interval);
    },
    reverseMessageFn(){

      this.reverseMessage = this.reverseMessage.split('').reverse().join('')
    }
  },
  components:{
    TodoItem: TodoItem
  }
}
</script>