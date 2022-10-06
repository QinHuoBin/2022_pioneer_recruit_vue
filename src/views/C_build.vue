<template>
  <div>
    <h1>它们是一样的吗？</h1>
    <p>请说明展示的两个程序是否是同一个程序。</p>
    <Button
      type="primary"
      @click="getDownload('a.out')"
      icon="ios-download-outline"
      >下载a文件</Button
    >
    <Button
      type="primary"
      @click="getDownload('b.out')"
      icon="ios-download-outline"
      >下载b文件</Button
    >
  </div>
</template>

<script>
export default {
  name: "C_build",
  methods: {
    getDownload: function (file) {
      const anchor = document.createElement("a");
      anchor.href = `${process.env.BASE_URL}static/bin/${file}`;
      anchor.setAttribute("download", file);
      anchor.innerHTML = "downloading...";
      anchor.style.display = "none";
      document.body.appendChild(anchor);
      setTimeout(() => {
        anchor.click();
        document.body.removeChild(anchor);
        setTimeout(() => {
          self.URL.revokeObjectURL(anchor.href);
        }, 250);
      }, 66);
    },
  },
};
</script>

<style scoped></style>
