/*
 * @Date: 2020-12-14 05:51:31
 * @LastEditors: kuangw
 * @LastEditTime: 2020-12-14 06:01:33
 * @FilePath: \my-node\docs\.vuepress\components\public\yzm.js
 * @desc: Do not edit
 */
class YZM {
  constructor(
    select,
    { codeNum } = {
      codeNum: 4,
    }
  ) {

    flutter-基础(select);

    this.canvas = document.querySelector(select);
    this.ctx = this.canvas.getContext("2d");
    this.h = this.canvas.height;
    this.w = this.canvas.width;
    this.code = "";
    this.codeNum = codeNum;
  }

  createCode() {
    this.code = "";
    this.drawBg();
    this.drawObstacle();
    this.drawCode();
    // this.startActive()
    return this.code;
  }

  // 绘制背景
  drawBg() {
    this.ctx.fillStyle = this.rc(190, 250);
    this.ctx.fillRect(0, 0, this.w, this.h);
  }
  // 绘制干扰
  drawObstacle() {
    // let ctx = this.ctx;
    // let rn = this.rn;
    // let rc = this.rc;
    let w = this.w;
    let h = this.h;
    // 绘制10条干扰线
    for (let index = 0; index < 10; index++) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.rn(0, w), this.rn(0, h));
      this.ctx.lineTo(this.rn(0, w), this.rn(0, h));
      this.ctx.strokeStyle = this.rc(180, 230);
      this.ctx.closePath();
      this.ctx.stroke();
    }
    // 绘制小圆点
    for (let index = 0; index < 40; index++) {
      this.ctx.beginPath();
      this.ctx.arc(this.rn(0, w), this.rn(0, h), 1, 0, 2 * Math.PI);
      this.ctx.closePath();
      this.ctx.fillStyle = this.rc(0, 255);
      this.ctx.fill();
    }
  }

  // 生成随机颜色
  rc(min, max) {
    let r = this.rn(max, min);
    let g = this.rn(max, min);
    let b = this.rn(max, min);
    return `rgb(${r},${g},${b})`;
  }

  // 生成随机数
  rn(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

  // 画验证码内容

  drawCode() {
    let flag = !this.code;
    let w = this.w;
    let h = this.h;
    // 设置字符串的内容
    let pool = `QWERTYUOPASDFGHJKLZXCVBNM234567890`;
    for (let index = 0; index < this.codeNum; index++) {
      let c = flag ? pool[this.rn(0, pool.length)] : this.code[index];
      // 字体的大小
      this.code += c;
      let fs = this.rn(20, 30);
      // 旋转的角度
      let deg = this.rn(-30, 30);
      this.ctx.font = fs + "px Simhei";
      this.ctx.textBaseline = "top";
      this.ctx.fillStyle = this.rc(0, 150);
      this.ctx.save();
      this.ctx.translate((w / this.codeNum) * index + 15, 15);
      this.ctx.rotate((deg * Math.PI) / 180);
      this.ctx.fillText(c, -5, -5);
      this.ctx.restore();
    }
  }
  startActive() {
    setInterval(() => {
      this.drawBg();
      this.drawObstacle();
      this.drawCode();
    }, 1000);
  }
}
export default YZM