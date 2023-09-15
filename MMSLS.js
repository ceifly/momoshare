const MMSLS = [
    "https://www.maimemo.com/share/page?uid=30417148&pid=d8208a89dcb51ed7ff9bdc35913fa457&tid=7e4c184bc92cb7f4de7d50f348b02fa4",
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
