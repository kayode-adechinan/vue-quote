<template>
  <div>
    {{ content }} <br />
    {{ author }}
  </div>
</template>

<script>
export default {
  name: "Quote",

  data() {
    return {
      content: "",
      author: ""
    };
  },

  created() {
    fetch("https://api.quotable.io/random")
      .then(resp => resp.json()) // Transform the data into json
      .then(data => {
        this.author = data.author;
        this.content = data.content;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
