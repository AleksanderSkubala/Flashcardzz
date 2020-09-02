<template>
  <div>
    <h1>Add new group</h1>
    <input name="groupName" type="text" />
    <ul>
      <li :v-for="card in cards" :key="card.firstSide">
        {{`${card.firstSide} | ${card.secondSide}`}}
      </li>
    </ul>
    <input name="firstSide" type="text" />
    <input name="secondSide" type="text" />
  </div>
</template>

<script>
export default {
  name: "NewGroup",
  data() {
    return {
      cards: [
        { firstSide: 'hello', secondSide: 'world', },
        { firstSide: 'adam', secondSide: 'romański', },
      ],
    };
  },
};
</script>

<style>

</style>