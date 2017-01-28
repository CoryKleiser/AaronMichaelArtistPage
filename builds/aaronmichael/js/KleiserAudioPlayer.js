(function () {
    "use strict";
    var audioPlayers = Array.from(document.getElementsByTagName('audio'));

    console.log(audioPlayers);

    function insertAfter(newNode, referenceNode) {
        return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    var i = 0;

    audioPlayers.forEach(function (audio) {

        //container
        var audioContainer = document.createElement('div');
        audioContainer.setAttribute('class', 'audio');

        //set innerHTML
        audioContainer.innerHTML = '\n        <div class="ap-scrubberContainer">\n            <div class="ap-scrubberBar">\n                <div style="width:0%" class="ap-scrubber">&nbsp;</div>\n            </div>\n        </div>\n        <div class="ap-controls">\n            <div class="ap-navigation">\n                <button class="ap-back10">&laquo;10</button>\n                <button class="ap-togglePlay"></button>\n                <button class="ap-skip10">10&raquo;</button>\n            </div>\n        </div>        \n';

        //add to document
        insertAfter(audioContainer, audio);

        //set up button
        var playPause = document.getElementsByClassName('ap-togglePlay')[i];
        playPause.innerHTML = '&#9658';
        var togglePlayPause = Rx.Observable.fromEvent(playPause, 'click');
        /**
         * toggle play/pause track
         */
        togglePlayPause.forEach(function (e) {
            if (audio.paused) {
                audio.play();
                setTimeout(function () {
                    return console.log(audio.currentTime / audio.duration * 100 + '%');
                }, 1000);
                playPause.innerHTML = '&#10073;&#10073;';
            } else {
                audio.pause();
                playPause.innerHTML = '&#9658';
            }
        });

        //set up nav controls

        var back10 = document.getElementsByClassName('ap-back10')[i];
        var back10sec = Rx.Observable.fromEvent(back10, 'click');
        /**
         * go back 10 seconds
         */
        back10sec.forEach(function (e) {
            return audio.currentTime -= 10;
        });
        var skip10 = document.getElementsByClassName('ap-skip10')[i];
        /**
         * skip forward 10 seconds
         */
        var skip10sec = Rx.Observable.fromEvent(skip10, 'click');
        skip10sec.forEach(function(e){
            return audio.currentTime += 10;
        });


        //set up scrubber
        var scrubberBox = document.getElementsByClassName('ap-scrubberContainer')[i];
        var scrubber = document.getElementsByClassName('ap-scrubberBar')[i];
        var currentPosition = document.getElementsByClassName('ap-scrubber')[i];

        var scrubberClicks = Rx.Observable.fromEvent(scrubberBox, 'click');
        /**
         * skip to location in track based on scrubber clicks
         */
        scrubberClicks.forEach(function (e) {
            console.log(e);
            var rect = scrubberBox.getBoundingClientRect();
            var positionRequested = (e.clientX - rect.left) / rect.width;
            audio.currentTime = audio.duration * positionRequested;
        });

        /**
         * Animate Scrubber to time updates
         */
        audio.ontimeupdate = function () {
            audio.percentPlayed = audio.currentTime / audio.duration * 100;
            currentPosition.setAttribute('style', 'width: ' + audio.percentPlayed + '%');
            if (audio.percentPlayed === 100) {
                playPause.innerHTML = '&#9658;';
            }
        };

        i++;
    });
}());