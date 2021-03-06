
var botui = new BotUI('my-botui-app');

// Start Bot
// First Messages
botui.message.bot({
    content: 'Hi there! 👋',
    loading: true,
    delay: 3000,
}).then(function () {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "I'm Deepali Sharma, a web developer from India.",
    });
}).then(function () {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "i wanted to share this tool for you.",
    });
}).then(function () {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "[BotUI](http://docs.botui.org/)",
    });
}).then(function () {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "Pretty cool tool or?",
    });
}).then(function () {
  return botui.action.button({
        delay: 1500,
        loading: true,
        addMessage: true,
        action: [{
            text: 'Yes!',
            value: 'yes'
        }, {
            text: 'No.',
            value: 'no'
        }]
    })
}).then(function (res) {
  if (res.value == 'yes') {
     return botui.message.bot({
                loading: true,
                delay: 1500,
                content: "I quite agree!",
            });
  } else {
    return botui.message.bot({
                loading: true,
                delay: 1500,
                content: "Okay, I'm sorry ...",
            });
  }
}).then(function () {
  return botui.message.bot({
                loading: true,
                delay: 1500,
                content: "Bye, I need to go know.",
            });
})