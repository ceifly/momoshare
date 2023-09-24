const MMSLS = [
    "https://www.maimemo.com/share/page?uid=30417148&pid=f6a29b3caceb2ac456c1391a13c57b1e&tid=0bc9543ac7c523ae77d84d8dd32f29d4",
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
