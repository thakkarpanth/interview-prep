function a() {
    for (var i=0;i<3;i++) {
      setTimeout(function log() {
        console.log(i);
      }, 0);
    }
}

a();