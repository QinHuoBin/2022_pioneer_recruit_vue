<template>
  <div>
    <h1>点击一下按钮</h1>
    <script type="application/javascript">
      function on_click_btn() {
        if (
          window.btoa(document.getElementById("btn").innerHTML) ===
          "cGlvbmVlcg=="
        ) {
          console.log(window.atob("ZmxhZ3t5b3UtZGlkLWEtZ29vZC1qb2J9"));
        } else {
          alert("再仔细想想");
        }
      }
    </script>
    <button disabled onclick="on_click_btn()" id="btn">
      Click me and get the flag.
    </button>
    <p>
      hint:按钮是灰的？点不开？没关系，请补充一下html和浏览器的相关知识再来看看
    </p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "base64",
  methods: {},
};
</script>

<style scoped></style>
