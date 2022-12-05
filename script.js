function percentEncodeAllChars(str) {
  var strEncoded = "";

  for (var i = 0, ilen = str.length; i < ilen; i++) {
    var strHex = parseInt(str.charCodeAt(i)).toString(16);
    strEncoded += "%" + strHex.toUpperCase();
  }
  strEncoded = strEncoded.replace("%68%74%74%70%73%3A%2F%2F", "https://");
  strEncoded = strEncoded.replace("%68%74%74%70%3A%2F%2F", "http://");
  strEncoded = strEncoded.replace("%2F", "/");

  return strEncoded;
}

function doEncode() {
  var strInput = document.getElementById("encode").value;

  document.getElementById("result").innerHTML = percentEncodeAllChars(strInput);
}
