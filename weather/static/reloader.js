// setInterval('window.location.reload()', 5000);
// console.log("hello");


function startRefresh() {
    $.get('', function(data) {
        $(document.body).html(data);
    });
}
$(function() {
    setTimeout(startRefresh,5000);
    console.log("hello");
});
