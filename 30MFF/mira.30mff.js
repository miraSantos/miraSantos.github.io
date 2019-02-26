//on click make image disappear
$("#watch_target").click(function() {
    $(full).hide()
    setTimeout(function() { document.location.href = "watch.html"; }, 400);
});

$("#read_target").click(function() {
    $(full).hide()
    setTimeout(function() { document.location.href = "read.html"; }, 300);
});

$("#listen_target").click(function() {
    $(full).hide()
    setTimeout(function() { document.location.href = "listen.html"; }, 300);
});

$("#meet_target").click(function() {
    $(full).hide()
    setTimeout(function() { document.location.href = "meet.html"; }, 300);
});