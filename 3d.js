var selectValue;

function generateGraph3d() {
  selectValue = document.getElementById("datasets").value;
  console.log(selectValue);

  document.getElementById("Fig1").style.display = "block";
  document.getElementById("Fig2").style.display = "block";
  document.getElementById("Fig3").style.display = "block";
  document.getElementById("Fig4").style.display = "block";

  if (selectValue == "CheekLeftRight.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Cheek_Left_Right3D();
  } else if (selectValue == "Cheek_Tap.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Cheek_Tap3D();
  } else if (selectValue == "Cheek_Touch_VS_Click.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Cheek_Touch_VS_Click3D();
  } else if (selectValue == "Cheek_Up_Down.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Cheek_Up_Down3D();
  } else if (selectValue == "Fontal_Control_Up.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Fontal_Control_Up3D();
  } else if (selectValue == "Frontal_Control_Down.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Frontal_Control_Down3D();
  } else if (selectValue == "Frontal_Control_Forward_Long_Press.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Frontal_Control_Forward_Long_Press3D();
  } else if (selectValue == "Frontal_Control_Forward.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Frontal_Control_Forward3D();
  } else if (selectValue == "Frontal_Control_Left.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Frontal_Control_Left3D();
  } else if (selectValue == "Frontal_Control_Right.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Frontal_Control_Right3D();
  } else if (selectValue == "Frontal_Left_Right.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Frontal_Left_Right3D();
  } else if (selectValue == "Frontal_Resting_Control.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Frontal_Resting_Control3D();
  } else if (selectValue == "Frontal_Resting.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Frontal_Resting3D();
  } else if (selectValue == "Frontal_Up_Down.csv") {
    alert(selectValue + " 3D Graph is Generated.");
    Frontal_Up_Down3D();
  } else {
    alert("Please Load Data");
  }
}

// 1
function Cheek_Left_Right3D() {
  Plotly.d3.csv("./datasets/Cheek_Left_Right.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }

    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Cheek_Left_Right.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}

// 2
function Cheek_Tap3D() {
  Plotly.d3.csv("./datasets/Cheek_Tap.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Cheek_Tap.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}

// 3
function Cheek_Touch_VS_Click3D() {
  Plotly.d3.csv("./datasets/Cheek_Touch_VS_Click.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Cheek_Touch_VS_Click.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}

// 4
function Cheek_Up_Down3D() {
  Plotly.d3.csv("./datasets/Cheek_Up_Down.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }

    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Cheek_Up_Down.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}

// 5
function Fontal_Control_Up3D() {
  Plotly.d3.csv("./datasets/Fontal_Control_Up.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Fontal_Control_Up.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}

// 6
function Frontal_Control_Down3D() {
  Plotly.d3.csv("./datasets/Frontal_Control_Down.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Frontal_Control_Down.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}

// 7
function Frontal_Control_Forward_Long_Press3D() {
  Plotly.d3.csv(
    "./datasets/Frontal_Control_Forward_Long_Press_.csv",
    function (err, rows) {
      function unpack(rows, key) {
        return rows.map(function (row) {
          return row[key];
        });
      }
      var x1 = unpack(rows, "x1");
      var y1 = unpack(rows, "y1");
      var z1 = unpack(rows, "z1");

      var x2 = unpack(rows, "x2");
      var y2 = unpack(rows, "y2");
      var z2 = unpack(rows, "z2");

      var x3 = unpack(rows, "x3");
      var y3 = unpack(rows, "y3");
      var z3 = unpack(rows, "z3");

      var x4 = unpack(rows, "x4");
      var y4 = unpack(rows, "y4");
      var z4 = unpack(rows, "z4");

      var layout = {
        title: "Frontal_Control_Forward_Long_Press.csv",
      };
      var x1_y1_z1 = {
        name: "x1_y1_z1",
        type: "scatter3d",
        mode: "markers",
        x: x1,
        y: y1,
        z: z1,
        marker: {
          size: 12,
          symbol: "circle",
          color: "blue",
        },
      };

      var x2_y2_z2 = {
        type: "scatter3d",
        mode: "markers",
        x: x2,
        y: y2,
        z: z2,
        marker: {
          size: 12,
          symbol: "circle",
          color: "orange",
        },
      };

      var x3_y3_z3 = {
        type: "scatter3d",
        mode: "markers",
        x: x3,
        y: y3,
        z: z4,
        marker: {
          size: 12,
          symbol: "circle",
          color: "green",
        },
      };

      var x4_y4_z4 = {
        type: "scatter3d",
        mode: "markers",
        x: x4,
        y: y4,
        z: z4,
        marker: {
          size: 12,
          symbol: "circle",
          color: "red",
        },
      };

      var data1 = [x1_y1_z1];
      var data2 = [x2_y2_z2];
      var data3 = [x3_y3_z3];
      var data4 = [x4_y4_z4];
      Plotly.newPlot("div1", data1, layout);
      Plotly.newPlot("div2", data2);
      Plotly.newPlot("div3", data3);
      Plotly.newPlot("div4", data4);
    }
  );
}

// 8
function Frontal_Control_Forward3D() {
  Plotly.d3.csv("./datasets/Frontal_Control_Forward.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Frontal_Control_Forward.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}

// 9
function Frontal_Control_Left3D() {
  Plotly.d3.csv("./datasets/Frontal_Control_Left.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Frontal_Control_Left.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}

// 10
function Frontal_Control_Right3D() {
  Plotly.d3.csv("./datasets/Frontal_Control_Right.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Frontal_Control_Right.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}

// 11
function Frontal_Left_Right3D() {
  Plotly.d3.csv("./datasets/Frontal_Left_Right.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Frontal_Left_Right.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}

// 12
function Frontal_Resting_Control3D() {
  Plotly.d3.csv("./datasets/Frontal_Resting_Control.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Frontal_Resting_Control.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}

// 13
function Frontal_Resting3D() {
  Plotly.d3.csv("./datasets/Frontal_Resting.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Frontal_Resting.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}

// 14
function Frontal_Up_Down3D() {
  Plotly.d3.csv("./datasets/Frontal_Up_Down.csv", function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    var x1 = unpack(rows, "x1");
    var y1 = unpack(rows, "y1");
    var z1 = unpack(rows, "z1");

    var x2 = unpack(rows, "x2");
    var y2 = unpack(rows, "y2");
    var z2 = unpack(rows, "z2");

    var x3 = unpack(rows, "x3");
    var y3 = unpack(rows, "y3");
    var z3 = unpack(rows, "z3");

    var x4 = unpack(rows, "x4");
    var y4 = unpack(rows, "y4");
    var z4 = unpack(rows, "z4");

    var layout = {
      title: "Frontal_Up_Down.csv",
    };
    var x1_y1_z1 = {
      name: "x1_y1_z1",
      type: "scatter3d",
      mode: "markers",
      x: x1,
      y: y1,
      z: z1,
      marker: {
        size: 12,
        symbol: "circle",
        color: "blue",
      },
    };

    var x2_y2_z2 = {
      type: "scatter3d",
      mode: "markers",
      x: x2,
      y: y2,
      z: z2,
      marker: {
        size: 12,
        symbol: "circle",
        color: "orange",
      },
    };

    var x3_y3_z3 = {
      type: "scatter3d",
      mode: "markers",
      x: x3,
      y: y3,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "green",
      },
    };

    var x4_y4_z4 = {
      type: "scatter3d",
      mode: "markers",
      x: x4,
      y: y4,
      z: z4,
      marker: {
        size: 12,
        symbol: "circle",
        color: "red",
      },
    };

    var data1 = [x1_y1_z1];
    var data2 = [x2_y2_z2];
    var data3 = [x3_y3_z3];
    var data4 = [x4_y4_z4];
    Plotly.newPlot("div1", data1, layout);
    Plotly.newPlot("div2", data2);
    Plotly.newPlot("div3", data3);
    Plotly.newPlot("div4", data4);
  });
}
