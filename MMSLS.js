const MMSLS = [
    "https://www.maimemo.com/share/page?uid=30417148&pid=5104099a3f33caa9d125da8a2e8f10ba&tid=887fdbf18fe2f68893135c15c33512f6",
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
