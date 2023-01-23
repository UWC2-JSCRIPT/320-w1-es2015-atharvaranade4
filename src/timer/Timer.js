// function Timer(seconds) {
//   this.seconds = seconds;
// }

// Timer.prototype.start = () => {
//   const instance = this;
//   const timerInterval = setInterval(() => {
//     if (instance.seconds === 0) {
//       clearInterval(timerInterval);
//     }

//     console.log(instance.seconds);
//     instance.seconds -= 1;
//   }, 1000);
// };

const Timer = class {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    // const instance = this.seconds;
    const timerInterval = setInterval((() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }

      // console.log(this.seconds);
      this.seconds -= 1;
    }).bind(this), 1000);
  }
};

export default Timer;
