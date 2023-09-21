const MMSLS = [
    "https://www.maimemo.com/share/page?uid=30417148&pid=4672f3a134b77bbd9b8bd3b139f45784&tid=2f129b2b194837121e44b901b78fae19",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
