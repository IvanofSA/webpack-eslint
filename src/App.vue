<template>
  <main class="main">
    <Nav />
    <section class="github-people"></section>
    <div class="container">
      <h1 class="github-people__title">Hello Vudfsdfasdasde!</h1>
    </div>
  </main>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'App',
  components: {
    Nav,
  },
};
</script>

<style scoped lang="scss">
body {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
}

.github-people {
  &__title {
    text-align: center;
    font-size: 32px;
    font-family: 'Arial', sans-serif;
    color: #000;
  }
}
</style>
