function saveWeight(){const w=document.getElementById('bw').value;localStorage.setItem('weight',w);document.getElementById('progress').innerHTML='Latest Weight: '+w+' kg';}
function openVid(q){window.open('https://www.youtube.com/results?search_query='+encodeURIComponent(q));}
window.onload=function(){const w=localStorage.getItem('weight');if(w){document.getElementById('progress').innerHTML='Latest Weight: '+w+' kg';document.getElementById('bw').value=w;}}
