module.exports.function = function repeatAction (repeatInput, voiceStyle) {
  const console = require("console")
  const displayText = repeatInput

  let speechText
  if (voiceStyle) {
    speechText = "<speak> <lang xml:lang=\"" + voiceStyle.locale + "\" voice=\"" + voiceStyle.profile + "\">" + repeatInput + " </lang></speak>"
  } else {
    speechText = repeatInput
  }
  console.log('speechText is', speechText)

  return {
    displayText: displayText,
    speechText: speechText
  }
}
