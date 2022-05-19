const schedule = require("node-schedule");

module.exports = {
    name: "testing",
    description: "로스트아크 골드 시세 확인",
    execute(message, args, client, mongoose) {
          // Timer Function
  // Schedule 1
  const rule_one = new schedule.RecurrenceRule();
  rule_one.hour = [1, 11, 13, 23];
  rule_one.minute = 30;
  rule_one.second = 0;
  rule_one.tz = "America/New_York";

  // Schedule 2 & 3
  const rule_two = new schedule.RecurrenceRule();
  rule_two.hour = [0, 6, 12, 18];
  rule_two.minute = 30;
  rule_two.second = 5;
  rule_two.tz = "America/New_York";

  // Schedule 2
  const rule_three = new schedule.RecurrenceRule();
  rule_three.hour = [2, 9, 14, 21];
  rule_three.minute = 30;
  rule_three.second = 10;
  rule_three.tz = "America/New_York";

  // Schedule 3
  const rule_four = new schedule.RecurrenceRule();
  rule_three.hour = [3, 10, 15, 22];
  rule_three.minute = 30;
  rule_three.second = 10;
  rule_three.tz = "America/New_York";

  // Schedule 1 & 3
  const rule_five = new schedule.RecurrenceRule();
  rule_three.hour = [4, 7, 16, 19];
  rule_three.minute = 30;
  rule_three.second = 10;
  rule_three.tz = "America/New_York";

  // Schedule 1 & 2
  const rule_six = new schedule.RecurrenceRule();
  rule_three.hour = [5, 8, 17, 20];
  rule_three.minute = 30;
  rule_three.second = 10;
  rule_three.tz = "America/New_York";

  // Schedule 1: 1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM and PM)
  const job_one = schedule.scheduleJob(rule_one, function () {
    client.channels
      .fetch(`975275099626274826`)
      .then((channel) =>
        channel.send(
          `\`\`\`---------- 현재 떠돌이 상인 스폰 ----------\n` +
            `루카스(Lucas) - 유디아(Yudia)\n\n` +
            `모리스(Morris) - 루테란 동부(East Luterra)\n\n` +
            `맥(Mac) - 애니츠(Anikka)\n\n` +
            `제프리(Jeffrey) - 슈샤이어(Shushire)\n\n` +
            `도렐라(Dorella) - 페이튼(Feiton)\n` +
            `---------- 떠돌이 상인 스폰 ----------\`\`\`` +
            `\`\`\`떠돌이 상인의 위치가 궁금하다면?\n` +
            `https://lost-ark.maxroll.gg/resources/wandering-merchant-guide\`\`\``
        )
      )
      .catch(console.error);
  });
  // Schedule 2: 12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM and PM)
  const job_two = schedule.scheduleJob(rule_three, function () {
    client.channels
      .fetch(`975275099626274826`)
      .then((channel) =>
        channel.send(
          `\`\`\`---------- 현재 떠돌이 상인 스폰 ----------\n` +
            `말론(Malone) - 루테란 서부(West Luterra)\n\n` +
            `버트(Burt) - 루테란 동부(East Luterra)\n\n` +
            `올리버(Oliver) - 토토이크(Tortoyk)\n\n` +
            `녹스(Nox) - 아르데타인(Arthetine)\n\n` +
            `아리세르(Aricer) - 로헨델(Rohendel)\n\n` +
            `레이니(Rayni) - 파프니카(Punika)\n` +
            `---------- 떠돌이 상인 스폰 ----------\`\`\`` +
            `\`\`\`떠돌이 상인의 위치가 궁금하다면?\n` +
            `https://lost-ark.maxroll.gg/resources/wandering-merchant-guide\`\`\``
        )
      )
      .catch(console.error);
  });
  // Schedule 3: 12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM and PM)
  const job_three = schedule.scheduleJob(rule_four, function () {
    client.channels
      .fetch(`975275099626274826`)
      .then((channel) =>
        channel.send(
          `\`\`\`---------- 현재 떠돌이 상인 스폰 ----------\n` +
            `벤(Ben) - 아르테미스(Rethramis)\n\n` +
            `피터(Peter) - 베른 북부(North Vern)\n\n` +
            `라이티르(Laitir) - 욘(Yorn)\n\n` +
            `에반(Evan) - 베른 남부(South Vern)\n` +
            `---------- 떠돌이 상인 스폰 ----------\`\`\`` +
            `\`\`\`떠돌이 상인의 위치가 궁금하다면?\n` +
            `https://lost-ark.maxroll.gg/resources/wandering-merchant-guide\`\`\``
        )
      )
      .catch(console.error);
  });

  // Schedule 2 & 3
  const job_four = schedule.scheduleJob(rule_two, function () {
    client.channels
      .fetch(`975275099626274826`)
      .then((channel) =>
        channel.send(
          `\`\`\`---------- 현재 떠돌이 상인 스폰 ----------\n` +
            `말론(Malone) - 루테란 서부(West Luterra)\n\n` +
            `버트(Burt) - 루테란 동부(East Luterra)\n\n` +
            `올리버(Oliver) - 토토이크(Tortoyk)\n\n` +
            `녹스(Nox) - 아르데타인(Arthetine)\n\n` +
            `아리세르(Aricer) - 로헨델(Rohendel)\n\n` +
            `레이니(Rayni) - 파프니카(Punika)\n\n` +
            `벤(Ben) - 아르테미스(Rethramis)\n\n` +
            `피터(Peter) - 베른 북부(North Vern)\n\n` +
            `라이티르(Laitir) - 욘(Yorn)\n\n` +
            `에반(Evan) - 베른 남부(South Vern)\n` +
            `---------- 떠돌이 상인 스폰 ----------\`\`\`` +
            `\`\`\`떠돌이 상인의 위치가 궁금하다면?\n` +
            `https://lost-ark.maxroll.gg/resources/wandering-merchant-guide\`\`\``
        )
      )
      .catch(console.error);
  });

  // Schedule 1 & 3
  const job_five = schedule.scheduleJob(rule_five, function () {
    client.channels
      .fetch(`975275099626274826`)
      .then((channel) =>
        channel.send(
          `\`\`\`---------- 현재 떠돌이 상인 스폰 ----------\n` +
            `루카스(Lucas) - 유디아(Yudia)\n\n` +
            `모리스(Morris) - 루테란 동부(East Luterra)\n\n` +
            `맥(Mac) - 애니츠(Anikka)\n\n` +
            `제프리(Jeffrey) - 슈샤이어(Shushire)\n\n` +
            `도렐라(Dorella) - 페이튼(Feiton)\n\n` +
            `벤(Ben) - 아르테미스(Rethramis)\n\n` +
            `피터(Peter) - 베른 북부(North Vern)\n\n` +
            `라이티르(Laitir) - 욘(Yorn)\n\n` +
            `에반(Evan) - 베른 남부(South Vern)\n` +
            `---------- 떠돌이 상인 스폰 ----------\`\`\`` +
            `\`\`\`떠돌이 상인의 위치가 궁금하다면?\n` +
            `https://lost-ark.maxroll.gg/resources/wandering-merchant-guide\`\`\``
        )
      )
      .catch(console.error);
  });

  // Schedule 1 & 2
  const job_six = schedule.scheduleJob(rule_six, function () {
    client.channels
      .fetch(`975275099626274826`)
      .then((channel) =>
        channel.send(
          `\`\`\`---------- 현재 떠돌이 상인 스폰 ----------\n` +
            `루카스(Lucas) - 유디아(Yudia)\n\n` +
            `모리스(Morris) - 루테란 동부(East Luterra)\n\n` +
            `맥(Mac) - 애니츠(Anikka)\n\n` +
            `제프리(Jeffrey) - 슈샤이어(Shushire)\n\n` +
            `도렐라(Dorella) - 페이튼(Feiton)\n\n` +
            `말론(Malone) - 루테란 서부(West Luterra)\n\n` +
            `버트(Burt) - 루테란 동부(East Luterra)\n\n` +
            `올리버(Oliver) - 토토이크(Tortoyk)\n\n` +
            `녹스(Nox) - 아르데타인(Arthetine)\n\n` +
            `아리세르(Aricer) - 로헨델(Rohendel)\n\n` +
            `레이니(Rayni) - 파프니카(Punika)\n` +
            `---------- 떠돌이 상인 스폰 ----------\`\`\`` +
            `\`\`\`떠돌이 상인의 위치가 궁금하다면?\n` +
            `https://lost-ark.maxroll.gg/resources/wandering-merchant-guide\`\`\``
        )
      )
      .catch(console.error);
  });

    }
}