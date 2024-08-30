const axios = require("axios");

axios({
  method: "get",
  url: "https://v1.nocodeapi.com/senamuntest/instagram/OQrwbKEKMkwbeAXV",
  params: {},
})
  .then(function (response: any) {
    console.log(response.data);
  })
  .catch(function (error: any) {
    // handle error
    console.log(error);
  });
