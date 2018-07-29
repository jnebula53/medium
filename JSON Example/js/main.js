/*jslint node:true*/
/*eslint-env browser*/
'use strict';

var roomInfo, details, xhr; // eslint-disable-line no-unused-vars


xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();




function display(value) {
	var i;
	window.console.log(value);
	document.getElementById('roomName').innerHTML = roomInfo[value].name;
	document.getElementById('desc').innerHTML = roomInfo[value].description;
	document.getElementById('photo').src = roomInfo[value].photo;

	document.getElementById('weekday').innerHTML = roomInfo[value].cost.weekday;
	document.getElementById('weekend').innerHTML = roomInfo[value].cost.weekend;

	details = '';
	for (i = 0; i < roomInfo[value].details.length; i += 1) {
		window.console.log(roomInfo[value].details[i]);
		details += '<p>' + roomInfo[value].details[i] + '</p>';
	}

	document.getElementById('details').innerHTML = details;
}

xhr.onload = function () {
    if (xhr.status === 200) {
        roomInfo = JSON.parse(xhr.responseText);
        window.console.log(roomInfo);
        display(0);
    }
};

/*
    // eslint-disable-line no-unused-vars

*/
