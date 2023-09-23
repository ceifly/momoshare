const MMSLS = [
    "https://www.maimemo.com/share/page?uid=30417148&pid=f542fb78c24b1f186b7fd2a7d86f0d0b&tid=9be7bdcef41b7ddb97f3dd234a48162c",
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
