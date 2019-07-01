/**
 * Created by Administrator on 2019/7/1.
 */
/**
 * this的指向问题
 */

function Foo(val) {
  console.log(this)
  this.val = val
  this.getVal = function () {
    console.log(this)
    return this.val
  }
  this.setVal = function (val) {
    console.log(this)
    this.val = val
  }
}


// 1.直接调用
Foo('zhi')  // 打印window

// 2.new()
var f1 = new Foo('zhi2')  // new() 出的对象

// 3.对象属性
f1.getVal()   // 指向f1

// 4.call, apply, bind修改指向
var obj = {}
f1.getVal.call(obj, 'zhi3')  // 指向obj