//PLAY VIDEO ON HOVER
const mouseOver = (e) => {
  setTimeout(() => {
    e.play();
  }, 1600);
};
const mouseOut = (e) => {
  e.pause();
};

//AUTOPLAY IN VIEWPORT ON MOBILES
if (window.innerWidth <= 480) {
  let playState = null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        myVideo.pause();
        playState = false;
      } else {
        myVideo.play();
        playState = true;
      }
    });
  }, {});

  observer.observe(myVideo);

  const onVisibilityChange = () => {
    if (document.hidden || !playState) {
      myVideo2.pause();
    } else {
      myVideo2.play();
    }
    document.addEventListener("visibilitychange", onVisibilityChange);
  };

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        myVideo2.pause();
        playState = false;
      } else {
        myVideo2.play();
        playState = true;
      }
    });
  }, {});

  observer2.observe(myVideo2);

  const onVisibilityChange2 = () => {
    if (document.hidden || !playState) {
      myVideo2.pause();
    } else {
      myVideo2.play();
    }
  };
  document.addEventListener("visibilitychange", onVisibilityChange2);
}
