const MMSLS = [
    "https://www.maimemo.com/share/page?uid=30417148&pid=bc9d26a28c46e4e073a4df19f8f95731&tid=459b0ec871aa6f150f0b250e86359ff1",
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
