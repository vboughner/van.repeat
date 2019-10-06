module.exports.function = function makeSilence (silenceLength) {
  return (silenceLength < 1) ? " " : " ".repeat(silenceLength)
}
