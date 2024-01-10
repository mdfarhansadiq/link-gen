var anchorTag = '';


function linkGenerator() {
  var websiteLink = document.getElementById("webLink").value;
  var websiteName = document.getElementById("websiteName").value;
  anchorTag = "<a href='" + websiteLink + "' target='_blank'>" + websiteName + "</a>";

  if(websiteLink != '' && websiteName != '')
  {
    document.getElementById("copyBtn").style.display = 'block';
  }
}


// Add event listener to the form to prevent submission on page load
document.getElementById("linkGeneratorForm").addEventListener("submit", function(event) {
  event.preventDefault();
});



function valGet() {
  navigator.clipboard.writeText(anchorTag)
  document.getElementById("message").style.display = "block";
  document.getElementById("message").innerHTML = 'Copied';
}