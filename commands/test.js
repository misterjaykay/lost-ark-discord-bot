module.exports = {
    name: "testing",
    description: "로스트아크 골드 시세 확인",
    execute(message, args, client, mongoose) {
        message.reply(
            `\`\`\`---------- 현재 떠돌이 상인 스폰 ----------\n` +
            `   루카스(Lucas) - 유디아(Yudia)\n\n` +
            `   모리스(Morris) - 루테란 동부(East Luterra)\n` +
            `   맥(Mac) - 애니츠(Anikka)\n` +
            `   제프리(Jeffrey) - 슈샤이어(Shushire)\n` +
            `   도렐라(Dorella) - 페이튼(Feiton)\n` +
            `---------- 떠돌이 상인 스폰 ----------\`\`\`` +
            `\`\`\`떠돌이 상인의 위치가 궁금하다면?\n` +
            `https://lost-ark.maxroll.gg/resources/wandering-merchant-guide\`\`\``
        )
    }
}