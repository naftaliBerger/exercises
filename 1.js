const timer = {
  message: "Time is up!",
  start() {
    setTimeout(function () {
      console.log(this);
    }, 2000);
  }
};

timer.start();