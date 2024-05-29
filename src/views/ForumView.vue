<template>
    <div>
      <h1>This is Forum</h1>
      <p v-for="c in list" :key="c.id"> {{c.code}} -- {{c.desc}} -- {{c.cp}} -- {{c.type}} --</p> 
      <!-- course -->
    </div>
   
  </template>
  
  <script>
  export default {
    data() {
        return {
            list: [
                {id: 1, code:'ICT10001', desc:'Problem Solving with ICT', cp:12.5, type:'Core'},
                {id: 2, code:'COS10005', desc:'Web Development', cp:12.5, type:'Core'},
                {id: 3, code:'INF10003', desc:'Introduction to Business Information Systems', cp:12.5, type:'Core'},
                {id: 4, code:'INF10002', desc:'Database Analysis and Design', cp:12.5, type:'Core'}
            ]
        }
    }
  }
  </script>
  