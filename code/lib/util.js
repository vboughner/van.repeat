'use strict'

const util = {}

util.getVoiceStyles = function() {
  return [
    { voice: ("Stephanie"), locale: ("en-US"), profile: ("F03"), language: ("English (US)") },
    { voice: ("John"), locale: ("en-US"), profile: ("M02"), language: ("English (US)") },
    { voice: ("Lisa"), locale: ("en-US"), profile: ("F05"), language: ("English (US)") },
    { voice: ("Julia"), locale: ("en-US"), profile: ("F04"), language: ("English (US)") },
    { voice: ("Amy"), locale: ("en-GB"), profile: ("F02"), language: ("English (GB)") },
    { voice: ("Chris"), locale: ("en-GB"), profile: ("M02"), language: ("English (GB)") },
    { voice: ("Slow"), locale: ("zh-CN"), profile: ("F02"), language: ("Slow English") },

  ]
}

util.getVoiceStyleForName = function(voiceName) {
  if (voiceName) {
    const voiceStyles = util.getVoiceStyles()
    for (let i = 0; i < voiceStyles.length; i++) {
      if (voiceStyles[i].voice === voiceName.trim()) {
        return voiceStyles[i]
      }
    }
  }
  return null
}

module.exports = util
