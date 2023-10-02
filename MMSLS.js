const MMSLS = [
    "https://www.maimemo.com/share/page?uid=30417148&pid=fe0dc1f8f82ddfc77de703eb37a17d83&tid=b93d7a1f1b2fce6cebea85eee9eb7e06",
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
