define(function(require, exports, module) {
  require("bootstrap!js.net.URLConnection");

  return Class.forName({
    name: "class js.net.HttpURLConnection extends js.net.URLConnection",

    "public static getConnection": function() {
      var xhr = null;

      if (typeof XMLHttpRequest != 'undefined') {
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
      }
      return xhr;
    }
  }).getClassConstructor();

});