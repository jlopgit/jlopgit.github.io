function loadFeed(){

  var link = document.getElementById('input').value;

  //alert(link);

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){

      //alert(this.responseXML);
      createNode(this.responseXML);
    }
  }

  xhttp.open("GET", link, true);
  xhttp.send();

}

function createNode(xml){

  var test = "";
  var item = xml.getElementsByTagName("item");
  var i;

  for(i = 0; i < item.length; i ++){


    var title = document.createTextNode(item[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
    var description = document.createTextNode(item[i].getElementsByTagName("description")[0].childNodes[0].nodeValue);

    var titleNode = document.createElement("p");
    var descriptionNode = document.createElement("p");
    var audioNode = document.createElement("audio");
    audioNode.controls = "controls";
    audioNode.src = item[i].getElementsByTagName("enclosure")[0].getAttribute("url");
    titleNode.appendChild(title);
    descriptionNode.appendChild(description);

    var node = document.createElement("div");
    node.className = "jumbotron";
    node.appendChild(titleNode);
    node.appendChild(descriptionNode);
    node.appendChild(audioNode);

    document.getElementById("entries").append(node);



    /*
    test += item[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + " " +
    item[i].getElementsByTagName("description")[0].childNodes[0].nodeValue + " " +
    item[i].getElementsByTagName("enclosure")[0].getAttribute("url");
    */


  }

  //alert(test);
}
