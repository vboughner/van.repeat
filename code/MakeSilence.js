module.exports.function = function makeSilence (silenceLength) {
  // TODO: figure out a way to vary the length of the pause here
  return (silenceLength < 1) ? " " : " ".repeat(silenceLength)
}
