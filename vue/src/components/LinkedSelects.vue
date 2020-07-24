<template>
  <div id="root">
    <select v-model="user_id" v-on:change="changed">
      <option v-for="(v, k) in users" v-bind:value="k" :key="k">{{ v.name }}</option>
    </select>
     <select v-if="users[user_id].phones.length" v-model="phone_number">
      <option v-for="phone in users[user_id].phones" :key="phone">{{ phone }}</option>
    </select><br>
    You have selected user #{{ user_id }} with
    <template v-if="phone_number">phone {{ phone_number }}</template>
    <template v-else>no phone</template>
  </div>
</template>
<script>
export default {
  name: 'LinkedSelects',
  data() {
    return {
      users: {
        1: {name: 'aaa', phones: ['1', '2']},
        2: {name: 'bbb', phones: ['11', '22', '33']},
        3: {name: 'ccc', phones: []},
        5: {name: 'ddd', phones: ['111', '222', '333', '444']},
      },
      user_id: '2',
      phone_number: '33'
    }
  },
  methods: {
    changed: function(){
      let phones = this.users[this.user_id].phones;
      this.phone_number = phones.length?phones[0]:null;
    }
  }
}
</script>

<style scoped>
#root {
  font: sans-serif;
}
</style>
