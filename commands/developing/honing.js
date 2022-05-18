module.exports = {
  name: "강화",
  description: "로스트아크 강화 시뮬레이션",
  execute(message, args, client, mongoose) {

    function getRandomArbitrary(min, max) {
    //   percentage = 0;
      const numb = Math.random() * (max - min) + min;
      const decimal = numb.toFixed(2);
      console.log(decimal);
      return Math.round10(decimal, -1);
    }

    function decimalAdjust(type, value, exp) {
      // exp가 undefined 또는 0인 경우...
      if (typeof exp === "undefined" || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // 값이 숫자가 아니거나 정수형이 아닌 경우...
      if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
        return NaN;
      }
      // Shift
      value = value.toString().split("e");
      value = Math[type](
        +(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))
      );
      // Shift back
      value = value.toString().split("e");
      return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
    }
    if (!Math.round10) {
      Math.round10 = function (value, exp) {
        // console.log(decimalAdjust("round", value, exp));
        const res = decimalAdjust("round", value, exp);
        console.log(res);
        return res;
      };
    }
    if (!Math.floor10) {
      Math.floor10 = function (value, exp) {
        // console.log(decimalAdjust("floor", value, exp));
        const res = decimalAdjust("floor", value, exp);
        console.log(res);
        return res;
      };
    }

    if (args[0]) {
      switch (args[0]) {
        case "7강":
          message.channel.send(`${args[0]}의 강화를 진행 하겠습니다.`);
        const percentage = getRandomArbitrary(-0, 101);
          console.log("what is percent", percentage);
          if (percentage <= 60) {
            message.channel.send("강화성공");
          } else {
            message.channel.send("강화실패");
          }
          break;
        case "8강":
          message.channel.send(`${args[0]}의 강화를 진행 하겠습니다.`);
          break;
        case "9강":
          // Do something here
          break;
        case "10강":
          // Do something here
          break;
        case "11강":
          // Do something here
          break;
        case "12강":
          // Do something here
          break;
        case "13강":
          // Do something here
          break;
        case "14강":
          // Do something here
          break;
        case "15강":
          // Do something here
          break;
        case "16강":
          // Do something here
          break;
        case "17강":
          // Do something here
          break;
        case "18강":
          // Do something here
          break;
        case "19강":
          // Do something here
          break;
        case "20강":
          // Do something here
          break;
        case "21강":
          // Do something here
          break;
        case "22강":
          // Do something here
          break;
        case "23강":
          // Do something here
          break;
        case "24강":
          // Do something here
          break;
        case "25강":
          // Do something here
          break;
      }
    } else {
      message.channel.send(
        "몇 단계 강화를 하실지 입력해주셔야 합니다. 예. !!강화 15강"
      );
    }
  },
};
