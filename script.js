let hr = 00;
let min = 00;
let sec = 00;
let ms = 00;

let timer = false;

function startStop()
{
    if(document.getElementById("initiate").classList.contains("start"))
    {
        document.getElementById("initiate").classList.remove("start");    
        document.getElementById("initiate").classList.add("stop"); 
        document.getElementById("initiate").innerHTML = "stop"; 
        timer = true;
        stopWatch();
    }
    else if(document.getElementById("initiate").classList.contains("stop"))
    {
        document.getElementById("initiate").classList.remove("stop"); 
        document.getElementById("initiate").classList.add("start");
        document.getElementById("initiate").innerHTML = "start";  
        timer = false;  
    }

}

function reset()
{
    timer = false;

        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minute").innerHTML = "00";
        document.getElementById("second").innerHTML = "00";
        document.getElementById("millisecond").innerHTML = "00";

    if(document.getElementById("initiate").classList.contains("stop"))
    {
        document.getElementById("initiate").classList.remove("stop"); 
        document.getElementById("initiate").classList.add("start");
        document.getElementById("initiate").innerHTML = "start";  
        timer = false;  
    }
}

function stopWatch()
{
    if(timer == true)
    {
        ms = ms + 1;
        if(ms == 100)
        {
            sec = sec+1;
            ms = 0;   
        }
        if(sec == 60)
        {
            min = min + 1;
            sec = 0;
        }
        if(min == 60)
        {
            hr = hr +1;
            sec = 0;
            min = 0;   
        }

        let strHr = hr;
        let strMin = min;
        let strSec = sec;
        let strMs = ms;

        if(hr< 10)
        {
            strHr = "0" + strHr;
        }

        if(min < 10)
        {
            strMin = "0" + strMin;
        }

        if(sec < 10)
        {
            strSec = "0"+ strSec;
        }

        if(ms < 10)
        {
            strMs = "0" + strMs;
        }


        document.getElementById("hours").innerHTML = strHr;
        document.getElementById("minute").innerHTML = strMin;
        document.getElementById("second").innerHTML = strSec;
        document.getElementById("millisecond").innerHTML = strMs;
        

        setTimeout("stopWatch()",10);
    }
   
}