/* to learn 
type, timestamp, defaultPrevented
target, toElement, srcElement, currentTarget,
clientX, clientY, screenX, screenY
altkey, ctrlkey, shiftkey, keyCode


bubbling means that the codes output will be shown from unit size
to larger . 
document.getElementById('owl').addEventListener('click', function(e)
{ console.log("oo");
 e.stopPropagation()    //to stop bubbling
}, false)   //false is the default



