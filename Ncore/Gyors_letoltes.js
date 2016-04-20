// ==UserScript==
// @name        Ncore Gyors Letöltés
// @namespace   https://ncore.cc/torrents.php
// @description Ncore Gyors Letöltés
// @include     https://ncore.cc/torrents.php*
// @version     1
// @grant       none
// ==/UserScript==
//By Soresu

function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function main() {
    var torrents = []
    var link = '<div class="torrent_also"><a style="margin-left:3px;" href="https://ncore.cc/torrents.php?action=download&id=[ID]"><b>Letöltés</b></a> </div>';

    $(window).load(function () {
        var index = 0;
        $('a[href*="action=details&id="]').each(function (index) {
            var id = /id=([0-9])\w+/.exec($(this).attr('href'))[0];
            id = id.substr(3, id.length - 3);
            if (torrents.indexOf(id) < 0) {
                var torrent_txt = $(this).parent();
                if (parseInt(torrent_txt.css('margin-top')) > 5) {
                    torrent_txt.css('margin-top', parseInt(torrent_txt.css('margin-top'))/2+"px");
                }
                torrent_txt.append(link.replace("[ID]", id)); ;
                torrents[index] = id;
                index++;
            }
        });
    });
}

