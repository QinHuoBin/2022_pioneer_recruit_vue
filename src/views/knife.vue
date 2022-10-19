<template>
  <div>
    <h1>砍亿刀</h1>
    <h3>欢迎来到拼夕夕在线购物商城！</h3>
    <p>
      集满 <b>1</b> flag 即可领取Crazy Thursday 50优惠卷！
      <br>
      <br>
      参与即送 <b>0.5</b> flag，点击下方按钮领取更多flag！
    </p>
    <p>flag: <b id="flag">0.502975</b></p>
    <script type="application/javascript">
      function knife(e) {
        if ( typeof(console.log.hidden_var) == "undefined" ) {
          console.log.hidden_var=0
        }
        if(e>4){
          alert(window.atob("a25pZmUgbm90IGZvdW5k"));
          return;
        }
        console.log.hidden_var+=10**e;
        var x=console.log.hidden_var;
        if(x>1e8){x=1e8;}
        var b=(0- (1/1e8 * 141/200) ** 2);
        var process= b *(x-1e8)**2+1;
        document.getElementById("flag").innerHTML=process;
        if(process>=1){
          if ( typeof(console.log.showed) == "undefined" ) {
            console.log(window.atob("cGlvbmVlcntGdUdlX3ZfTWVfNTB9"));
            alert(window.atob("cGlvbmVlcntGdUdlX3ZfTWVfNTB9"));
            console.log.showed=1;
          }
        }
      }
    </script>
    <button onclick="knife(0)" id="btn">砍一刀</button><br><br>
    <button onclick="knife(1)" id="btn">砍十刀</button><br><br>
    <button onclick="knife(2)" id="btn">砍百刀</button><br><br>
    <button onclick="knife(3)" id="btn">砍千刀</button><br><br>
    <button onclick="knife(4)" id="btn">砍万刀</button><br>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "knife",
  methods: {},
};
</script>

<style scoped></style>
