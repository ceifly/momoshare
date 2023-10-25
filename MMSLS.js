const MMSLS = [
    "https://www.maimemo.com/share/page?uid=30417148&pid=f93f3d48c80039802582c2491d7ea983&tid=aff25a0b984c03502ca51ba8f225a540",
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
