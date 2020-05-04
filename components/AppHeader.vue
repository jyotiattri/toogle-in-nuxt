<template>
  <header id="header">
    <div class="logo">
      <span class="icon fa-gem" />
    </div>
    <div class="content">
      <div class="inner">
        <h1>{{ title }}</h1>
        <p>{{ data }}</p>
      </div>
    </div>
    <div v-bind="toggleBodySection">
      <nav>
        <ul>
          <li>
            <nuxt-link to="#intro" value="option-1">
              Intro
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#work" value="option-2">
              Work
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#about" value="option-3">
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#contact" value="option-4">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      title: "Dimension",
      data:
        "A fully responsive site template designed by HTML5 UP and released for free under the Creative Commons license."
    };
  }
};
</script>
<style>
li {
  display: inline-block;
  padding: 10px;
  border: 1px solid #000;
  margin: 10px;
}
a {
  color: #000;
  text-decoration: none;
}
div#wrapper {
  width: 80%;
  margin: 0 auto;
  padding: 10px 0px;
}
article#intro {
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
}
article#work {
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
}
article#about {
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
}
</style>
