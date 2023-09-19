const MMSLS = [
    "https://www.maimemo.com/share/page?uid=30417148&pid=ccd5866f03f443c32a3ad24402134790&tid=ba0561ffd3532c998f6edf966f15b87e",
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
