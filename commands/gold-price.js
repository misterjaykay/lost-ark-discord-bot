module.exports = {
  name: "골드시세",
  description: "로스트아크 골드 시세 확인",
  execute(message, args, client, mongoose) {
    const axios = require("axios");
    const cheerio = require("cheerio");

    const getPostTitles = async () => {
      try {
        const { data } = await axios.get(
          "https://www.g2g.com/offer/Avesta---US-East?service_id=lgc_service_1&brand_id=lgc_game_23027&region_id=dfced32f-2f0a-4df5-a218-1e068cfadffa&fa=lgc_23027_dropdown_18%3Algc_23027_dropdown_18_44724&sort=lowest_price&include_offline=1"
        );
        const $ = cheerio.load(data);
        const postTitles = [];
        let medianNumb = 0;
        var res = {
            lowest: 0,
            middle: 0
        };

        $(
          "div > div#pre_checkout_sls_offer > div > div > div > div > div.price-other_offers > span.offer-price-amount"
        ).each((_idx, el) => {
          const postTitle = $(el).text();
          const postInt = parseFloat(postTitle);
          // .toFixed(6);
          postTitles.push(postInt);
          // console.log(postTitles);
        });
        for (let i = 0; i < postTitles.length; i++) {
          // postTitles[i] += medianNumb;
          medianNumb = medianNumb + postTitles[i];
          // console.log('check', postTitles[i], medianNumb);
        }
        res.middle = medianNumb / postTitles.length * 10000;
        res.lowest = postTitles[0] * 10000;
        return res;
      } catch (error) {
        throw error;
      }
    };

    getPostTitles().then((res) => {
        message.reply(`\`\`\` 현재의 골드시세는 \n 평균가: 10000골드당 $${res.middle.toFixed(2)} \n 가장 싼가격: 10000골드당 $${res.lowest.toFixed(2)}\`\`\``);
    });
  },
};
