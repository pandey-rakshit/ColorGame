var won = false;
var bool = false;
var loose = false;
$('#myModal').modal({ show: false});

var lis = document.getElementsByClassName("nav-link");
for(var i = 0;i < lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        this.style.color = "green";
    });
    lis[i].addEventListener("mouseout", function(){
        this.style.color = "white";
    });    
}

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'RGB(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

function addClick(e){
    e.classList.add("clk");
}

function removeClick(e){
    e.classList.remove("clk");
}
function backgroundColor(e, col){
    e.style.background = col;
}

function random(mn, mx) {  
    return Math.random() * (mx - mn) + mn;  
}  

function textChange(e, text){
    e.textContent = text;
}

function canvas(){
    won = false;
    bool = false;
    loose = false;
    var arr = [];
    var count = 0;
    document.getElementById("new-color").textContent = "New Colors";
    document.getElementById("header").style.background = "cornflowerblue";
    document.getElementsByClassName("navbar-text")[0].textContent = " ";
    var co = document.querySelectorAll("#Colors"); 
    for(let i = 0; i < co.length; i++){
        removeClick(co[i])
        backgroundColor(co[i] , random_rgb())
        arr.push(co[i].style.background);
        
    }
    var color = document.getElementsByClassName("selected");
    color[0].innerHTML = "<h1>"+arr[Math.floor(random(1, 6))-1] +"</h1>"

    for(let i = 0; i < co.length; i++){
        co[i].addEventListener("click",function(){
            if (this.style.background == color[0].textContent){
                won = true;
                textChange(document.getElementsByClassName("navbar-text")[0], "Yeah!"+"you made it.");
                for(let j = 0; j < co.length; j++){
                    backgroundColor(co[j], color[0].textContent);
                }
                count = 0;
                backgroundColor(document.getElementById("header"), color[0].textContent);
                }

            else{
                count += 1;
                if(count === 5){
                    textChange(document.getElementsByClassName("navbar-text")[0],"You Failed!"); 
                    backgroundColor(document.getElementById("header"), color[0].textContent);
                    for(let j = 0; j < co.length; j++){
                        addClick(co[j]);
                        backgroundColor(co[i], "black");  
                        textChange(document.getElementById("new-color"), "Try Again?");
                        loose = true; 
                        modal();
                   }
                }
                else{
                    textChange(document.getElementsByClassName("navbar-text")[0], "Oops!"+"Try Again!.");
                    backgroundColor(co[i],"black");
                    addClick(co[i]);
                }   
            }
        });
    }
}

function easy(won,loose){
    if (won || loose){
        canvas();

        bool = true;
        var ar = [];
        var easyvesy = document.getElementsByClassName("hard");
        for(let x = 0; x < easyvesy.length; x++){
            ar.push(easyvesy[x].style.background);
        }
        const found = ar.find(element => element === document.getElementsByClassName("selected")[0].textContent)

        if(!found){
            for(let x = 0; x < easyvesy.length; x++){
                backgroundColor(easyvesy[x], "black");
                addClick(easyvesy[x]);
            }
            return true; 
        }
        else{
            easyvesy = document.getElementsByClassName("easy");
            for(let x = 0; x < easyvesy.length; x++){
                backgroundColor(easyvesy[x], "black");
                addClick(easyvesy[x]);
            } 
            return true;

        }
    }
    else{
        bool = true;
        var ar = [];
        var easyvesy = document.getElementsByClassName("hard");
        for(let x = 0; x < easyvesy.length; x++){
            ar.push(easyvesy[x].style.background);
        }
        const found = ar.find(element => element === document.getElementsByClassName("selected")[0].textContent)

        if(!found){
            for(let x = 0; x < easyvesy.length; x++){
                backgroundColor(easyvesy[x], "black");
                addClick(easyvesy[x]);
            } 
        }
        else{
            easyvesy = document.getElementsByClassName("easy");
            for(let x = 0; x < easyvesy.length; x++){
                backgroundColor(easyvesy[x], "black");
                addClick(easyvesy[x]);
            } 

        }
    }
}


function hard(bool,won,loose){
    if(bool || won || loose){
        bool = false;
        won = false;
        canvas();
    }
    else{
        textChange(document.getElementsByClassName("navbar-text")[0], "Click the colors to Identify correct RGB.");
    }
}

canvas();



// modal
function modal(){
    // $('#myModal').modal('show');
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        $('#myModal').modal({ show: false})
        modal.style.display = "none";
        canvas();
    }

    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
