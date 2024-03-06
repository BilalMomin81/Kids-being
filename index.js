
    function Table(){
        var a = document.getElementById("num").value
        a = Number(a)
        var print = document.getElementsByTagName("h1")
        for(var i = 1; i <= 10;i++){
            console.log(a * i)
            print[i].innerText = a + " x " + i + "  = "+a * i
            // if(print[i] % 2 != 0){
            //     print[i].style.backgroundColor = "gary"
            // }
        }

    }
    