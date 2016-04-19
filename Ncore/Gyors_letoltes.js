// ==UserScript==
// @name        Ncore Gyors Letöltés
// @namespace   https://ncore.cc/torrents.php
// @description Ncore Gyors Letöltés
// @include     https://ncore.cc/torrents.php*
// @version     1
// @grant       none
// ==/UserScript==
//By Soresu

var $ = unsafeWindow.jQuery;
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
				torrent_txt.css('margin-top', "1px");
			}
			torrent_txt.append(link.replace("[ID]", id)); ;
			torrents[index] = id;
			index++;
		}
	});
});