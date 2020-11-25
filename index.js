var dfd = require("danfojs-node");
var selectValue;

function generateGraph() {
  selectValue = document.getElementById("datasets").value;

  document.getElementById("Fig1").style.display = "none";
  document.getElementById("Fig2").style.display = "none";
  document.getElementById("Fig3").style.display = "none";
  document.getElementById("Fig4").style.display = "none";

  if (selectValue == "CheekLeftRight.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Cheek_Left_Right2D();
  } else if (selectValue == "Cheek_Tap.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Cheek_Tap();
  } else if (selectValue == "Cheek_Touch_VS_Click.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Cheek_Touch_VS_Click2D();
  } else if (selectValue == "Cheek_Up_Down.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Cheek_Up_Down();
  } else if (selectValue == "Fontal_Control_Up.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Fontal_Control_Up2D();
  } else if (selectValue == "Frontal_Control_Down.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Frontal_Control_Down2D();
  } else if (selectValue == "Frontal_Control_Forward_Long_Press.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Frontal_Control_Forward_Long_Press2D();
  } else if (selectValue == "Frontal_Control_Forward.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Frontal_Control_Forward2D();
  } else if (selectValue == "Frontal_Control_Left.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Frontal_Control_Left2D();
  } else if (selectValue == "Frontal_Control_Right.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Frontal_Control_Right2D();
  } else if (selectValue == "Frontal_Left_Right.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Frontal_Left_Right2D();
  } else if (selectValue == "Frontal_Resting_Control.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Frontal_Resting_Control2D();
  } else if (selectValue == "Frontal_Resting.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Frontal_Resting2D();
  } else if (selectValue == "Frontal_Up_Down.csv") {
    alert(selectValue + " 2D Graph is Generated.");
    Frontal_Up_Down2D();
  } else {
    alert("Please Load Data");
  }
}

// 1
function Cheek_Left_Right2D() {
  dfd
    .read_csv("./datasets/Cheek_Left_Right.csv")
    .then((df) => {
      var layout = {
        title: "Cheek_Left_Right.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 2
function Cheek_Tap2D() {
  dfd
    .read_csv("./datasets/Cheek_Tap.csv")
    .then((df) => {
      var layout = {
        title: "Cheek_Tap.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 3
function Cheek_Touch_VS_Click2D() {
  dfd
    .read_csv("./datasets/Cheek_Touch_VS_Click.csv")
    .then((df) => {
      var layout = {
        title: "Cheek_Touch_VS_Click.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 4
function Cheek_Up_Down2D() {
  dfd
    .read_csv("./datasets/Cheek_Up_Down.csv")
    .then((df) => {
      var layout = {
        title: "Cheek_Up_Down.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 5
function Fontal_Control_Up2D() {
  dfd
    .read_csv("./datasets/Fontal_Control_Up.csv")
    .then((df) => {
      var layout = {
        title: "Fontal_Control_Up.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 6
function Frontal_Control_Down2D() {
  dfd
    .read_csv("./datasets/Frontal_Control_Down.csv")
    .then((df) => {
      var layout = {
        title: "Frontal_Control_Down.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 7
function Frontal_Control_Forward_Long_Press2D() {
  dfd
    .read_csv("./datasets/Frontal_Control_Forward_Long_Press_.csv")
    .then((df) => {
      var layout = {
        title: "Frontal_Control_Forward_Long_Press.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 8
function Frontal_Control_Forward2D() {
  dfd
    .read_csv("./datasets/Frontal_Control_Forward.csv")
    .then((df) => {
      var layout = {
        title: "Frontal_Control_Forward.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 9
function Frontal_Control_Left2D() {
  dfd
    .read_csv("./datasets/Frontal_Control_Left.csv")
    .then((df) => {
      var layout = {
        title: "Frontal_Control_Left.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 10
function Frontal_Control_Right2D() {
  dfd
    .read_csv("./datasets/Frontal_Control_Right.csv")
    .then((df) => {
      var layout = {
        title: "Frontal_Control_Right.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 11
function Frontal_Left_Right2D() {
  dfd
    .read_csv("./datasets/Frontal_Left_Right.csv")
    .then((df) => {
      var layout = {
        title: "Frontal_Left_Right.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 12
function Frontal_Resting_Control2D() {
  dfd
    .read_csv("./datasets/Frontal_Resting_Control.csv")
    .then((df) => {
      var layout = {
        title: "Frontal_Resting_Control.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 13
function Frontal_Resting2D() {
  dfd
    .read_csv("./datasets/Frontal_Resting.csv")
    .then((df) => {
      var layout = {
        title: "Frontal_Resting.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 14
function Frontal_Up_Down2D() {
  dfd
    .read_csv("./datasets/Frontal_Up_Down.csv")
    .then((df) => {
      var layout = {
        title: "Frontal_Up_Down.csv",
      };
      df.plot("div1").line({ columns: ["x1", "y1", "z1"], layout: layout });
      df.plot("div2").line({ columns: ["x2", "y2", "z2"] });
      df.plot("div3").line({ columns: ["x3", "y3", "z3"] });
      df.plot("div4").line({ columns: ["x4", "y4", "z4"] });
    })
    .catch((err) => {
      console.log(err);
    });
}
