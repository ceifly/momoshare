const MMSLS = [
    "https://www.maimemo.com/share/page?uid=30417148&pid=f87fe5203c433e2fca9b6ea8e5dd48da&tid=3b8b8b536732251017de8030d48ae89e",
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
