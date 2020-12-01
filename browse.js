var dfd = require("danfojs-node");
var path = require("path");
var filepath;

function browseGraph2D() {
  filepath = document.getElementById("filepath").value;

  console.log(filepath);
  filename = path.basename(filepath);
  console.log(filename);

  document.getElementById("Fig1").style.display = "none";
  document.getElementById("Fig2").style.display = "none";
  document.getElementById("Fig3").style.display = "none";
  document.getElementById("Fig4").style.display = "none";

  dfd.read_csv(filepath).then((df) => {
    var layout = {
      title: filename,
    };

    df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
    df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
    df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
    df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
  });
}

function browseGraph3d() {
  alert("This feature is under development");
  // filepath = documnet.getElementById("filepath").value;
  // filename = path.basename(filepath);

  // document.getElementById("Fig1").style.display = "block";
  // document.getElementById("Fig2").style.display = "block";
  // document.getElementById("Fig3").style.display = "block";
  // document.getElementById("Fig4").style.display = "block";
}
