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
            여기에 마우스를 올려서 보면 현재 시간을 실시간으로 확인하는 것이 가능합니다.
          </span>
        </div>
        <div id="event-handling">
          {{ reverseMessage }}
        </div>
        <button v-on:click="reverseMessageFn">문자열 뒤짚기</button>
    </div>
</template>

<script>

export default {
  props: {
    title: String
  },
  data(){
    
    return {
      counter: 0,
      interval: null,
      message: '당신이 지금 확인하는 현재시간은 다음과 같습니다.' +new Date().toLocaleString(),
      reverseMessage : 'Hello Vue.js'
    }
  },
  mounted(){
    this.interval = setInterval(() => {
      this.counter++
    }, 1000);
    
  },
  setup(props) {
    console.log(props)
  },
  methods:{
    stopCount(){
      clearInterval(this.interval);
    },
    reverseMessageFn(){

      this.reverseMessage = this.reverseMessage.split('').reverse().join('')
    }
    
  }
}
</script>