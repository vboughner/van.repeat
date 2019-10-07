module.exports.function = function repeatAction (repeatInput, voiceName) {
  const util = require('lib/util.js')
  const voiceStyle = util.getVoiceStyleForName(voiceName)

  let speechText
  if (voiceStyle) {
    speechText = "<speak><lang xml:lang=\"" + voiceStyle.locale + "\" voice=\"" + voiceStyle.profile + "\">" + repeatInput + "</lang></speak>"
  } else {
    speechText = repeatInput
  }

  return {
    displayText: repeatInput,
    speechText: speechText
  }
}
