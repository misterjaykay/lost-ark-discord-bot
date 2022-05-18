const schedule = require("node-schedule");

module.exports = {
  name: "강화",
  description: "로스트아크 강화 시뮬레이션",
  execute(message, args, client, mongoose) {
    // if (message.member.roles.member._roles.includes("749687210013491303")) {
    const rule_one = new schedule.RecurrenceRule();
    rule_one.hour = [1, 4, 5, 7, 8, 11, 13, 16, 17, 19, 20, 23];
    rule_one.minute = 30;
    rule_one.tz = "America/New_York";

    const rule_two = new schedule.RecurrenceRule();
    rule_two.hour = [0, 2, 5, 6, 8, 9, 12, 14, 17, 18, 20, 21];
    rule_two.minute = 30;
    rule_two.tz = "America/New_York";

    const rule_three = new schedule.RecurrenceRule();
    rule_three.hour = [0, 3, 4, 6, 7, 10, 12, 15, 16, 18, 19, 22];
    rule_three.minute = 30;
    rule_three.tz = "America/New_York";

    // Schedule 1: 1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM and PM)
    const job_one = schedule.scheduleJob(rule_one, function () {
      client.channels
        .fetch(`975275099626274826`)
        .then((channel) => channel.send(
            `\`\`\`---------- 현재 떠돌이 상인 스폰 ----------\n`,
            `루카스(Lucas) - 유디아(Yudia)\n`,
            `모리스(Morris) - 루테란 동부(East Luterra)\n`,
            `맥(Mac) - 애니츠(Anikka)\n`,
            `제프리(Jeffrey) - 슈샤이어(Shushire)\n`,
            `도렐라(Dorella) - 페이튼(Feiton)`,
            `---------- 떠돌이 상인 스폰 ----------\`\`\``,
            `\`\`\` 떠돌이 상인의 위치가 궁금하다면?\n`,
            `https://lost-ark.maxroll.gg/resources/wandering-merchant-guide\`\`\``
        ))
        .catch(console.error);
    });
    // Schedule 2: 12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM and PM)
    const job_two = schedule.scheduleJob(rule_two, function () {
        client.channels
        .fetch(`975275099626274826`)
        .then((channel) => channel.send(
            `\`\`\`---------- 현재 떠돌이 상인 스폰 ----------\n`,
            `말론(Malone) - 루테란 서부(West Luterra)\n`,
            `버트(Burt) - 루테란 동부(East Luterra)\n`,
            `올리버(Oliver) - 토토이크(Tortoyk)\n`,
            `녹스(Nox) - 아르데타인(Arthetine)\n`,
            `아리세르(Aricer) - 로헨델(Rohendel)\n`,
            `레이니(Rayni) - 파프니카(Punika)`
            `---------- 떠돌이 상인 스폰 ----------\`\`\``,
            `\`\`\` 떠돌이 상인의 위치가 궁금하다면?\n`,
            `https://lost-ark.maxroll.gg/resources/wandering-merchant-guide\`\`\``
        ))
        .catch(console.error);
    });
    // Schedule 3: 12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM and PM)
    const job_three = schedule.scheduleJob(rule_three, function () {
        client.channels
        .fetch(`975275099626274826`)
        .then((channel) => channel.send(
            `\`\`\`---------- 현재 떠돌이 상인 스폰 ----------\n`,
            `벤(Ben) - 아르테미스(Rethramis)\n`,
            `피터(Peter) - 베른 북부(North Vern)\n`,
            `라이티르(Laitir) - 욘(Yorn)\n`,
            `에반(Evan) - 베른 남부(South Vern)\n`
            `---------- 떠돌이 상인 스폰 ----------\`\`\``,
            `\`\`\` 떠돌이 상인의 위치가 궁금하다면?\n`,
            `https://lost-ark.maxroll.gg/resources/wandering-merchant-guide\`\`\``
        ))
        .catch(console.error);
    });
  },
};
