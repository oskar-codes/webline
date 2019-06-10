var input = document.querySelector("#input");
var log = document.querySelector(".log");
var color = "#22ff11";
log.innerHTML =
  "<p>Welcome to this little command line ! Start by typing help.</p><br>";

function submit() {
  var command = input.value;
  input.value = "";
  var commands = strToArr(command);
  var parameters = command.substr(command.indexOf(" ") + 1);
  if (commands[0] != "") {
  if (commands[0] == "help") {
    log.innerHTML +=
      `<p style="color: `+ color +`;">Command list:</p><br>
       <table style="color: ` + color + `;">
         <tr>
          <td>help:</td><td>shows this help panel</td>
         </tr>
         <tr>
          <td>info:</td><td>shows information about this console</td>
         </tr>
         <tr>
          <td>clear:</td><td>clears the console</td>
         </tr>
         <tr>
          <td>codepen [pen id] [view (pen,details,full,debug]</td><td>browses to codepen, at the specified pen id, with the specified view</td>
         </tr>
         <tr>
          <td>codepenuser [user]</td><td>browses to the specified user's Codepen profile</td>
         </tr>
         <tr>
          <td>codepensearch [query]</td><td>searches Codepen for your query</td>
         </tr>
         <tr>
          <td>url [url]</td><td>browses to the specified url. This automatically appends https:// if not in url.</td>
         </tr>
         <tr>
          <td>cache [url] [view (full,text,source)]</td><td>browses to the cache of the specified url, and on the specified view.</td>
         </tr>
         <tr>
          <td>google [query]</td><td>searches Google for your query</td>
         </tr>
         <tr>
          <td>youtube [query]</td><td>searches YouTube for your query</td>
         </tr>
         <tr>
          <td>github [query]</td><td>searches Github for your query</td>
         </tr>
         <tr>
          <td>print [text]</td><td>prints text to the console</td>
         </tr>
         <tr>
          <td>color [value]</td><td>sets the color of the console's text, or resets it if no color is specified</td>
         </tr>
         <tr>
          <td>js [code]</td><td>executes some JavaScript code</td>
         </tr>
       </table>
      `
  } else if (commands[0] == "info") {
    log.innerHTML += "<p style='color: " + color + "'>This console was made by ZOSK, a young amateur web and game developer. It was originally made in Codepen, and then moved to Github. That's why a lot of commands have to do with Codepen.<br>Check out my Twitter account <a style='color: " + color + ";' href='https://twitter.com/ZOSK17'>here</a>.</p><br>";
  } else if (commands[0] == "codepen") {
    if (commands[1]) {
      if (commands[2]) {
        window.open("https://codepen.io/ZOSK/" + encodeURIComponent(commands[2]) + "/" + encodeURIComponent(commands[1]));
      } else {
        window.open("https://codepen.io/ZOSK/pen/" + encodeURIComponent(commands[1]));
      }
    } else {
      window.open("https://codepen.io");
    }
  } else if (commands[0] == "codepenuser") {
    if (commands[1]) {
      window.open("https://codepen.io/" + parameters) + "/";
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: No user specified.</p><br>";
    }
  } else if (commands[0] == "codepensearch") {
    if (commands[1]) {
      window.open(
        "https://codepen.io/search/pens?q=" +
        encodeURIComponent(parameters) +
        "&page=1&order=popularity&depth=everything"
      );
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: No query specified.</p><br>";
    }
  } else if (commands[0] == "url") {
    if (commands[1]) {
      window.open(formatUrl(commands[1]));
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: No url specified.</p><br>";
    }
  } else if (commands[0] == "cache") {
    if (commands[1]) {
      if (commands[2] == "full") {
        window.open("http://webcache.googleusercontent.com/search?q=cache:" + encodeURI(formatUrl(commands[1])) + "&safe=active&client=safari&hl=en-ch&prmd=ivn&strip=0&vwsrc=0");
      } else if (commands[2] == "text") {
        window.open("http://webcache.googleusercontent.com/search?q=cache:" + encodeURI(formatUrl(commands[1])) + "&safe=active&client=safari&hl=en-ch&prmd=ivn&strip=1&vwsrc=0");
      } else if (commands[2] == "source") {
        window.open("http://webcache.googleusercontent.com/search?q=cache:" + encodeURI(formatUrl(commands[1])) + "&safe=active&client=safari&hl=en-ch&prmd=ivn&strip=0&vwsrc=1");
      } else {
        window.open("http://webcache.googleusercontent.com/search?q=cache:" + encodeURI(formatUrl(commands[1])) + "&safe=active&client=safari&hl=en-ch&prmd=ivn&strip=0&vwsrc=0");
      }
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: No url specified.</p><br>";
    }
  } else if (commands[0] == "urlinfo") {
    if (commands[1]) {
      log.innerHTML += "<p>Information about " +encodeURI(formatUrl(commands[1]))+"<br>Description: "
        + getUrlInfo(encodeURI(formatUrl(commands[1])))[0] + "<br>Keywords: "
        + getUrlInfo(encodeURI(formatUrl(commands[1])))[1]; + "</p><br>"
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: No url specified.</p><br>";
    }
  } else if (commands[0] == "google") {
    if (commands[1]) {
      window.open("https://google.com/search?q=" + encodeURIComponent(parameters));
    } else {
      window.open("https://google.com")
    }
  } else if (commands[0] == "youtube") {
    if (commands[1]) {
      window.open("https://youtube.com/search?q=" + encodeURIComponent(parameters));
    } else {
      window.open("https://youtube.com")
    }
  } else if (commands[0] == "github") {
    if (commands[1]) {
      window.open("https://github.com/search?q=" + encodeURIComponent(parameters));
    } else {
      window.open("https://github.com")
    }
  } else if (commands[0] == "clear") {
    log.innerHTML = "";
  } else if (commands[0] == "print") {
    if (commands[1]) {
      log.innerHTML +=
        '<p style="color: ' + color + '">' + parameters + "</p><br>";
    } else {
      log.innerHTML +=
        '<p style="color: red">Error: no text to print.</p><br>';
    }
  } else if (commands[0] == "color") {
    if (commands[1]) {
      color = parameters;
      log.innerHTML +=
        '<p style="color: ' +
        color +
        '">Color successfully set to ' +
        color +
        ".</p><br>";
    } else {
      color = "#22ff11";
      log.innerHTML +=
        '<p style="color: ' + color + '">Color successfully reset.</p><br>';
    }
  } else if (commands[0] == "js") {
    if (commands[1]) {
      var result = eval(parameters);
      if (result) {
        log.innerHTML +=
          '<p style="color: ' + color + '">Return value: ' + result + "</p><br>";
      }
      log.innerHTML +=
        '<p style="color: ' +
        color +
        '">JavaScript code successfully executed.</p><br>';
    } else
      log.innerHTML +=
      '<p style="color: red">Error: No JavaScript code to execute.</p><br>';
    end;
  } else {
    log.innerHTML +=
      '<p style="color: red">Error: Unknown command ('+ commands[0] +'). Type help for command reference.</p><br>';
  }
  }
  window.scrollBy(0, 100000);
}

$("#input").keydown(function (e) {
  if (e.keyCode == 13) {
    submit();
  }
});

function formatUrl(url){
  var httpString = 'http://';
  var httpsString = 'https://';

  if (url.substr(0, httpString.length) !== httpString && url.substr(0, httpsString.length) !== httpsString) {
    url = httpsString + url;
  }
  return url;
}

function getUrlInfo(url) {
  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/' + $('input').val()
  }).then(function(data) {
    var html = $(data);
    return [getMetaContent(html, 'description') || 'no description found',
            getMetaContent(html, 'keywords') || 'no keywords found';]
  });
}

function getMetaContent(html, name) {
  return html.filter(
  (index, tag) => tag && tag.name && tag.name == name).attr('content');
}

window.onload = function () {
  input.focus();
};

function nWordsInStr(str) {
  return $.trim(str).split(" ").length;
}

function strToArr(str) {
  return str.trim().split(" ");
}
