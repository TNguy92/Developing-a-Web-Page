
var counter = 0;
var limit = 15;
function addInput(){

	if (counter == limit)  
	{
		alert("Unable to create anymore text input box");
	}
	
	else if(findInvisible())
	{
	 	counter++;
	 	return
	}
	else 
	{	
		var newdiv = document.getElementById('model');
		var duplicate = newdiv.cloneNode(true);
		duplicate.id = "xxx";
		duplicate.getElementsByTagName('a')[0].innerHTML = counter + 2;
		duplicate.getElementsByTagName('input')[0].value = '';
		duplicate.getElementsByTagName('span')[0].innerHTML = 0;
		document.getElementById('Body').appendChild(duplicate);
		document.getElementsByTagName('input')[counter+1].addEventListener("keyup", counting());
		counter++;
	}
}
function alphabetical(a, b){
	var A = a.toLowerCase();
    var B = b.toLowerCase();
    if (A < B)
	{
        return -1;
    }
	else if (A > B)
	{
       	return  1;
    }
	else
	{
       	return 0;
    }
}

function sortInput()
{
	var arrInput = [];	
	for (i = 0 ; i <= counter; i++) 
	{
    	arrInput.push(document.getElementsByTagName('input')[i].value);
	}
	arrInput.sort(alphabetical);

	for(i = 0; i <= counter; i++)
	{
		document.getElementsByTagName('input')[i].value = arrInput[i];
		document.getElementsByTagName('span')[i].innerHTML = document.getElementsByTagName('input')[i].value.length;
	}
}
function findInvisible(){
	var arr = document.getElementById('Body').childNodes;

	for(var tmp = 0; tmp < arr.length;tmp++)
	{
		if(arr[tmp].className == "hidden" && arr[tmp].id == "xxx")
		{
			arr[tmp].className = "visible";
			return true;
		}
	}
	return false;
}
function removeInput(){

	if(counter==0)
	{
		alert("You cannot delete this text input");
		return;
	}
	var arr = document.getElementById('Body').childNodes;

	for(var tmp = arr.length; tmp >= 0;tmp--)
	{
		if(arr[tmp-1].className == "visible")
		{
			arr[tmp-1].className = "hidden";
			counter--;
			return;
		}
	}
}

function counting(){
	
	for(i=0; i<= counter; i++)
	{
		document.getElementsByTagName('span')[i].innerHTML = document.getElementsByTagName('input')[i].value.length;	
	}
}
