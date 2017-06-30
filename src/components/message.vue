<template>
  <div>
    <ul>
      <li v-for="m in messages">
        <router-link :to="`/home/message/mdetail/${m.id}`">{{m.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>

</template>


<script>
  export default {
      data () {
          return {
            messages: []
          }
      },
      created () {
          setTimeout(() => {
              this.messages = [
                {id:1 , name: 'message01'},
                {id:2 , name: 'message02'},
                {id:3 , name: 'message03'},
                {id:4 , name: 'message04'}
              ]
          },1000)
      }
  }
</script>


<style></style>
