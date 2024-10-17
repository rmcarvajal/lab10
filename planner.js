const textbox = document.getElementById("actbox")

const pendBox = document.getElementById("pend")

const ongBox = document.getElementById("ong")

const endBox = document.getElementById("end")

const pendList=[]

const ongList=[]

const endList=[]

function addTask(){
    const taskInput = document.getElementById("input")
    const value = taskInput.value
    if(value === ""){
        alert("No task found")
    }
    else{
        pendList.push(value);
        pendBox.innerHTML +=`
                <div class="pendItem">
                    <h2>${value}</h2>
                    <div class="pendButton">
                        <button onclick="pendToOng()">🠊</button>
                    </div>
                </div>
        `
        console.log(pendList)
    }
}

function pendToOng(){
    const taskInput = pendList
    const value = taskInput.value
    ongList.push=[value]
    ongBox.innerHTML+=`
                <div class="ongItem">
                    <h2>${value}</h2>
                    <div class="ongButton">
                        <button onclick="addTask()">🠈</button>
                        <button onclick="ongToEnd()">🠊</button>
                    </div>
                </div>
        `
    
}

function ongToEnd(){
    const taskInput = document.getElementById("input")
    const value = taskInput.value
    endList.push=[value]
    endBox.innerHTML+=`
                <div class="endItem">
                    <h2>${value}</h2>
                </div>
        `
}

