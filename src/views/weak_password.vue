<template>
  <div>
    <script
      type="application/javascript"
      src="https://cdn.bootcdn.net/ajax/libs/crypto-js/4.0.0/crypto-js.js"
    ></script>

    <script type="application/javascript">
      /**
       * AES-256-ECB对称加密
       * @param text {string} 要加密的明文
       * @param secretKey {string} 密钥，43位随机大小写与数字
       * @returns {string} 加密后的密文，Base64格式
       */
      function AES_ECB_ENCRYPT(text, secretKey) {
        const keyHex = CryptoJS.enc.Base64.parse(secretKey);
        const messageHex = CryptoJS.enc.Utf8.parse(text);
        var encrypted = CryptoJS.AES.encrypt(messageHex, keyHex, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        });
        return encrypted.toString();
      }

      /**
       * AES-256-ECB对称解密
       * @param textBase64 {string} 要解密的密文，Base64格式
       * @param secretKey {string} 密钥，43位随机大小写与数字
       * @returns {string} 解密后的明文
       */
      function AES_ECB_DECRYPT(textBase64, secretKey) {
        var keyHex = CryptoJS.enc.Base64.parse(secretKey);
        var decrypt = CryptoJS.AES.decrypt(textBase64, keyHex, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        });
        return CryptoJS.enc.Utf8.stringify(decrypt);
      }

      function f() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        try {
          const word =
            "t//zaK55CIKIey/n/mgDbbJMuRE4vom1cIV9eBjU5iNSNna+vSxwN2ZYZ+3FqQLZ";
          let key = username + password;
          key = key.toString().padStart(32, "0");
          console.log(key);
          const ecbDecrypt = AES_ECB_DECRYPT(word, key);
          console.log(ecbDecrypt);
          if (ecbDecrypt === "") {
            alert("错误的用户名或密码");
          } else {
            alert(ecbDecrypt + "\n帐号密码正确！\n这也是为何弱口令如此可怕");
          }
        } catch (err) {
          alert("不对哦");
        }
      }
    </script>

    <script type="application/javascript">
      // function submit_click() {
      //   let username = document.getElementById("username").value;
      //   let password = document.getElementById("password").value;
      //   let key = username + password;
      //   const message = "123加密解密工具测试类sss";
      //   key = "KUf4hM5rThssysJhcRFCfxLR8Imihjl0eMsyhh1M7Wk";
      //
      //   // 测试AES-256-ECB
      //   const ecbEncrypt = AES_ECB_ENCRYPT(message, key);
      //   console.log("ecb加密", ecbEncrypt);
      //   const ecbDecrypt = AES_ECB_DECRYPT(ecbEncrypt, key);
      //   console.log("ecb结果比较---", message === ecbDecrypt);
      // }
    </script>
    <label for="username">username:</label><br />
    <input type="text" id="username" name="username" value="guest" /><br />
    <label for="password">password:</label><br />
    <input type="text" id="password" name="password" value="" /><br /><br />
    <button onclick="f()">submit</button>
  </div>
</template>

<script>
export default {
  name: "weak_password",
};
</script>

<style scoped></style>
