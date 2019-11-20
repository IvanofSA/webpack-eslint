<template>
  <nav>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style scoped lang="scss">
nav {
  max-width: 1280px;
  margin: 0 auto;
}

ul {
  list-style: none;
  text-align: center;
  li {
    display: inline-block;
    font-size: 24px;
    color: red;
  }
}
</style>
