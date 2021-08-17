var old_names=[];
var arr = [];
var temp = [];
var inputValue="";

function addCandidate()
{
    var candidate = document.getElementById("cname").value;  
    if(localStorage.getItem('cname') == null){
        localStorage.setItem('cname' , '[]');
    }
    old_names = JSON.parse(localStorage.getItem('cname'));
    old_names.push(candidate);
    localStorage.setItem('cname' , JSON.stringify(old_names));
    alert("Candidate " + candidate + " added!");
    document.getElementById("cname").value='';
}

function vote() 
{
    var names=JSON.parse(localStorage.getItem('cname'));
    names.forEach((candidates, i) => {
        var labelValue = document.createElement('label');
        labelValue.innerHTML = candidates;
        inputValue = document.createElement('input');
        inputValue.type = "radio";
        inputValue.name = "r";
        inputValue.id = candidates;
        labelValue.id = "la";
        document.body.appendChild(labelValue);
        document.body.appendChild(inputValue);
     });
}

function giveVote() 
{
    var radios = document.getElementsByTagName("input");
    if (localStorage.getItem("ename") == null) 
    {
        localStorage.setItem("ename", "[]");
    }
    for (var i = 0; i < radios.length; i++) 
    {
        if (radios[i].type === "radio" && radios[i].checked) 
        {
            temp = JSON.parse(localStorage.getItem("ename"));
            temp.push(radios[i].id);
            localStorage.setItem("ename", JSON.stringify(temp));
        }
    }
}

function voterid()
{
    var candidate = document.getElementById('vid').value; 
    arr = JSON.parse(localStorage.getItem('vname'));
    if(localStorage.getItem('vname') == null)
    {
        localStorage.setItem('vname' , '[]');
    }
    if (arr.indexOf(candidate) != -1) 
    {
        alert("Already Exists!");
        document.getElementById("vid").value='';
    } 
    else 
    {
        alert("You have voted for " + candidate);
        arr.push(candidate);
        localStorage.setItem('vname' , JSON.stringify(arr));
        giveVote();
        document.getElementById("vid").value='';
    }
}

function count_votes() 
{
    var div = document.getElementById("sumnames");
    var temp_names = JSON.parse(localStorage.getItem("ename"));
    temp_names.sort();
    var current = null;
    var cnt = 0;
    for (var i = 0; i < temp_names.length; i++) 
    {
        if (temp_names[i] != current) 
        {
            if (cnt > 0) 
            {
                div.innerHTML += current + " : " + cnt + "<br>";
            }
            current = temp_names[i];
            cnt = 1;
        } 
        else 
        {
            cnt++;
        }
    }
    if (cnt > 0) 
    {
      div.innerHTML += current + " : " + cnt;
    }
}

function poll_result()
{
    var div = document.getElementById("pollresult");
    var temp_names = JSON.parse(localStorage.getItem("ename"));
    var max = Number.MIN_SAFE_INTEGER;
    var min = Number.MAX_SAFE_INTEGER;
    var cnt = 0;
    var maname;
    for (var i = 0; i < temp_names.length; i++) 
    {
        cnt = 0;
        for (var j = 0; j < temp_names.length; j++) 
        {
            if (temp_names[i] == temp_names[j]) 
            {
                cnt++;
            }
        }
        if (cnt < min) 
        {
            min = cnt;
            miname = temp_names[i];
        }
        if (cnt > max) 
        {
            max = cnt;
            maname = temp_names[i];
        }
    }
    div.innerHTML = "Won : " + maname + " (" + max + ")<br/>";
    div.innerHTML += "Lost : " + miname + " (" + min + ")";
}
