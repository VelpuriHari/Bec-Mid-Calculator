function mid() {
  ass1 = document.getElementById("ass1").value;
  ass2 = document.getElementById("ass2").value;
  mid1 = document.getElementById("mid1").value;
  mid2 = document.getElementById("mid2").value;
  s = (parseInt(ass1) + parseInt(ass2)) / 2;
  m1 = Math.max(parseInt(mid1), parseInt(mid2)) * 0.75;
  m2 = Math.min(parseInt(mid1), parseInt(mid2)) * 0.25;
  document.getElementById("result").innerHTML = `${Math.ceil(
    s + m1 / 1.75 + m2 / 1.75
  )}`;
}
