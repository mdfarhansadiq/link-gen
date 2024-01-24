var anchorTag = '';


function linkGenerator() {
  var websiteLink = document.getElementById("webLink").value;
  var websiteName = document.getElementById("websiteName").value;
  var checkHttps = websiteLink.slice(0, 8);
  if (checkHttps === "https://") {
    anchorTag = '<a href="' + websiteLink + '" target="_blank">' + websiteName + '</a>';
  }
  else {
    anchorTag = '<a href="https://' + websiteLink + '" target="_blank">' + websiteName + '</a>';
  }
  document.getElementById("copyBtn").style.display = 'block';
  document.getElementById("webAnchor").innerHTML = anchorTag;
  
}


// Add event listener to the form to prevent submission on page load
document.getElementById("linkGeneratorForm").addEventListener("submit", function(event) {
  event.preventDefault();
});



function valGet() {
  navigator.clipboard.writeText(anchorTag)
  document.getElementById("message").style.display = "block";
}


function valClear()
{
  document.getElementById("webLink").value = "";
  document.getElementById("websiteName").value = "";
}
