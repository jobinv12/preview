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
    Plotly.d3.csv("./datasets/Cheek_Left_Right.csv", function(err,rows){
        function unpack(rows,key){
            return rows.map(function(row){
                return row[key] }) }

    var x1 = unpack(rows, 'x1')
    var y1 = unpack(rows, 'y1')
    var z1 = unpack(rows, 'z1')
    
    var x2 = unpack(rows, 'x2')
    var y2 = unpack(rows, 'y2')
    var z2 = unpack(rows, 'z2')

    var x3 = unpack(rows, 'x3')
    var y3 = unpack(rows, 'y3')
    var z3 = unpack(rows, 'z3')

    var x4 = unpack(rows, 'x4')
    var y4 = unpack(rows, 'y4')
    var z4 = unpack(rows, 'z4')

    var layout={
        title: "Cheek_Left_Right.csv"
    }
    var x1_y1_z1 ={
        name: 'x1_y1_z1',
        type:'scatter3d',
        mode:'markers',
        x:x1,
        y:y1,
        z:z1,
        marker: {
            size: 12,
            symbol: 'circle',
            color : "blue"
        }
    }

    var x2_y2_z2 = {
        type:'scatter3d',
        mode:'markers',
        x:x2,
        y:y2,
        z:z2,
        marker: {
            size: 12,
            symbol: 'circle',
            color : "orange"
        }
    }

    var x3_y3_z3 = {
        name: "name of trace 1",
        type:'scatter3d',
        mode:'markers',
        x:x3,
        y:y3,
        z:z4,
        marker: {
            size: 12,
            symbol: 'circle',
            color : "green"
        }
    }

    var x4_y4_z4 = {
        name: "name of trace 1",
        type:'scatter3d',
        mode:'markers',
        x:x4,
        y:y4,
        z:z4,
        marker: {
            size: 12,
            symbol: 'circle',
            color : "red"
        }
    }

    var data1 = [x1_y1_z1]
    var data2 = [x2_y2_z2]
    var data3 = [x3_y3_z3]
    var data4 = [x4_y4_z4]
    Plotly.newPlot('div1',data1,layout)
    Plotly.newPlot('div2',data2)
    Plotly.newPlot('div3',data3)
    Plotly.newPlot('div4',data4)

    })
}

// 2
function Cheek_Tap(){

}

// 3
function Cheek_Touch_VS_Click(){

}

// 4
function Cheek_Up_Down(){

}

// 5
function Fontal_Control_Up(){

}

// 6
function Frontal_Control_Down(){

}

// 7
function Frontal_Control_Forward_Long_Press(){

}

// 8
function Frontal_Control_Forward(){

}

// 9
function Frontal_Control_Left(){

}

// 10
function Frontal_Control_Right(){

}

// 11
function Frontal_Left_Right(){

}

// 12
function Frontal_Resting_Control(){

}

// 13
function Frontal_Resting(){

}

// 14
function Frontal_Up_Down(){

}

