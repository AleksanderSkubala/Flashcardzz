<template>
  <div>
    <h1>Hi, {{$store.state.user.data.displayName}}</h1>
    <h3>That's your app</h3>
    <button @click="logout()">log out</button>
  </div>
</template>

<script>
import { auth } from '@/initFirebase';

export default {
  name: 'Main',
  methods: {
    logout() {
      auth.signOut();
    },
  },
};
</script>

<style lang="scss">

</style>
