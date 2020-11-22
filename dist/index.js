var dfd = require("danfojs-node")
var selectValue
var isLoaded = false
function loadData(){
    selectValue = document.getElementById("datasets").value

    if(selectValue == "Select"){
        console.log(selectValue)
        alert("Select a dataset to load data")
    }else{
        alert(selectValue+" is Loaded")
        isLoaded = true
    }
}

function generateGraph(){
    selectValue = document.getElementById("datasets").value
    if(isLoaded == true){
        alert(selectValue+" Graph is Generated.")
        if(selectValue == "CheekLeftRight.csv"){
            Cheek_Left_Right()
            isLoaded=false
        }else if(selectValue == "Cheek_Tap.csv"){
            Cheek_Tap()
            isLoaded=false
        }else if(selectValue == "Cheek_Touch_VS_Click.csv"){
            Cheek_Touch_VS_Click()
            isLoaded=false
        }else if(selectValue == "Cheek_Up_Down.csv"){
            Cheek_Up_Down()
            isLoaded=false
        }else if(selectValue == "Fontal_Control_Up.csv"){
            Fontal_Control_Up()
            isLoaded=false
        }else if(selectValue == "Frontal_Control_Down.csv"){
            Frontal_Control_Down()
            isLoaded=false
        }else if(selectValue == "Frontal_Control_Forward_Long_Press.csv"){
            Frontal_Control_Forward_Long_Press()
            isLoaded=false
        }else if(selectValue == "Frontal_Control_Forward.csv"){
            Frontal_Control_Forward()
            isLoaded=false
        }else if(selectValue == "Frontal_Control_Left.csv"){
            Frontal_Control_Left()
            isLoaded=false
        }else if(selectValue == "Frontal_Control_Right.csv"){
            Frontal_Control_Right()
            isLoaded=false
        }else if(selectValue == "Frontal_Left_Right.csv"){
            Frontal_Left_Right()
            isLoaded=false
        }else if(selectValue == "Frontal_Resting_Control.csv"){
            Frontal_Resting_Control()
            isLoaded=false
        }else if(selectValue == "Frontal_Resting.csv"){
            Frontal_Resting()
            isLoaded=false
        }else if(selectValue == "Frontal_Up_Down.csv"){
            Frontal_Up_Down()
            isLoaded=false
        }
    }else{
        alert("Please Load Data")
    }
}


// 1
function Cheek_Left_Right(){
    dfd.read_csv("./datasets/Cheek_Left_Right.csv")
        .then(df=>{

            var layout={
                title: "Cheek_Left_Right.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 2
function Cheek_Tap(){
    dfd.read_csv("./datasets/Cheek_Tap.csv")
        .then(df=>{
            var layout={
                title: "Cheek_Tap.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 3
function Cheek_Touch_VS_Click(){
    dfd.read_csv("./datasets/Cheek_Touch_VS_Click.csv")
        .then(df=>{
            var layout={
                title: "Cheek_Touch_VS_Click.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 4
function Cheek_Up_Down(){
    dfd.read_csv("./datasets/Cheek_Up_Down.csv")
        .then(df=>{
            var layout={
                title: "Cheek_Up_Down.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 5
function Fontal_Control_Up(){
    dfd.read_csv("./datasets/Fontal_Control_Up.csv")
        .then(df=>{
            var layout={
                title: "Fontal_Control_Up.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 6
function Frontal_Control_Down(){
    dfd.read_csv("./datasets/Frontal_Control_Down.csv")
        .then(df=>{
            var layout={
                title: "Frontal_Control_Down.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 7
function Frontal_Control_Forward_Long_Press(){
    dfd.read_csv("./datasets/Frontal_Control_Forward_Long_Press_.csv")
        .then(df=>{
            var layout={
                title: "Frontal_Control_Forward_Long_Press.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 8
function Frontal_Control_Forward(){
    dfd.read_csv("./datasets/Frontal_Control_Forward.csv")
        .then(df=>{
            var layout={
                title: "Frontal_Control_Forward.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 9
function Frontal_Control_Left(){
    dfd.read_csv("./datasets/Frontal_Control_Left.csv")
        .then(df=>{
            var layout={
                title: "Frontal_Control_Left.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 10
function Frontal_Control_Right(){
    dfd.read_csv("./datasets/Frontal_Control_Right.csv")
        .then(df=>{
            var layout={
                title: "Frontal_Control_Right.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 11
function Frontal_Left_Right(){
    dfd.read_csv("./datasets/Frontal_Left_Right.csv")
        .then(df=>{
            var layout={
                title: "Frontal_Left_Right.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 12
function Frontal_Resting_Control(){
    dfd.read_csv("./datasets/Frontal_Resting_Control.csv")
        .then(df=>{
            var layout={
                title: "Frontal_Resting_Control.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 13
function Frontal_Resting(){
    dfd.read_csv("./datasets/Frontal_Resting.csv")
        .then(df=>{
            var layout={
                title: "Frontal_Resting.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

// 14
function Frontal_Up_Down(){
    dfd.read_csv("./datasets/Frontal_Up_Down.csv")
        .then(df=>{
            var layout={
                title: "Frontal_Up_Down.csv"
            }
            df.plot("div1").line({columns:["x1","y1","z1"], layout:layout})
            df.plot("div2").line({columns:["x2","y2","z2"]})
            df.plot("div3").line({columns:["x3","y3","z3"]})
            df.plot("div4").line({columns:["x4","y4","z4"]})
        }).catch(err=>{
            console.log(err)
        })
}

