const textbox = document.getElementById("actbox")

const pendBox = document.getElementById("pend")

const pendList=[]

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
                        <button>🠊</button>
                    </div>
                </div>
        `
    }
}

