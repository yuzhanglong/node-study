// timeout_vs_immediate.js
// 这两个 log 打印的顺序不是固定的，这是为什么？
// 按照事件循环的机制，timeout 回调阶段在 immediate 之前
// 但 setTimeout 对于 0 这个时间会判断非法，将其转变成 1(可以查看 js 层 setTimeout 的实现)
// 所以输出的顺序取决于到达启动定时器阶段时是否过去了 1ms, 这个受操作系统的影响。
// https://github.com/yuzhanglong/node-study/blob/721573cbe8ba12ce0018182af49ba0b8d2a36efb/lib/internal/timers.js#L167
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});
