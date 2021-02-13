<template>
<div class="container">
  <b-jumbotron>

    <template slot="lead" v-if="currentQuestion">
      {{currentQuestion.question}}
    </template>
    <hr class="my-4">

    <b-list-group>
      <b-list-group-item v-for="( answer, index ) in answers" :key="index" @click.prevent="selectAnswer(index)" 
      :class="answerClass(index)" >{{answer}}
      </b-list-group-item>
    </b-list-group>

    <b-button variant="primary" @click="submitAnswer" :disabled="selectedIndex === null || answered">Submit</b-button>
    <b-button @click="next" variant="success" >Next</b-button>
  </b-jumbotron> 
</div>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function
  },
  data() {
    return {
      selectedIndex: null,
      correctindex: null,
      shuffleAnswers: [],
      answered: false
    }
  },
   computed: {
    answers(){
      let answers = [...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
       return answers

    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler(){
        this.selectedIndex = null
        this.answered = false
        this.shuffleAnswer()
      }
    }
  },

  methods: {
    selectAnswer(index){
      this.selectedIndex = index
      // console.log(index);
    },
    submitAnswer(){
      let isCorrect = false
      if(this.selectedIndex === this.correctindex){
          isCorrect = true
      }

      this.answered = true
      this.increment(isCorrect)
    },

    shuffleAnswer(){
    let answers =  [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
    this.shuffleAnswers = _.shuffle(answers)
    this.correctindex = this.shuffleAnswers.indexOf(this.currentQuestion.correct_answer)
    },
    answerClass(index){
      let answerClass = ''
      if(!this.answered && this.selectedIndex === index ) {
        answerClass = 'selected'
      }
      else if(this.answered && this.correctindex === index){
        answerClass = 'correct'
      }
      else if(this.answered && this.selectedIndex === index  && this.correctindex !==index) {
        answerClass = 'incorrect'
      }
      
        return answerClass

    }
  }
}
</script>

<style scoped>
  .list-group{
    margin-bottom: 15px;
  }
  .list-group-item:hover {
    background: #EEE;
    cursor: pointer;
  }
  .btn {
    margin: 10px;
  }
  .selected {
    background-color: lightblue;
  }
  .correct {
    background-color: rgb(111, 238, 111);
  }
  .incorrect {
    background-color: rgb(235, 101, 101);
  }
</style>