var current_image;
function backgroundImage() {
    var img_path = 'assets/images/';

    var img_num = 11;
    var random_img_num = function () {
        return Math.floor(Math.random() * img_num + 1);
    };

    var img_url = function () {
        return img_path + 'bg_' + random_img_num() + '.jpg';
    };

    if (current_image === undefined) {
        current_image = img_url();
    }

    if ('querySelector' in document) {
        var body = document.querySelector('body').style;
    } else {
        var body = document.body.style;
    }
    body.backgroundSize = 'cover';
    body.backgroundRepeat = 'no-repeat';
    setTimeout(function () {
        body.backgroundImage = 'url(' + current_image + ')';
    });

    var span = document.getElementById('img_placer');
    span.innerHTML = '<span style="background-image: url(' + (current_image = img_url()) + ');width: 0px;height: 0px;display: inline;"></span>';
}

backgroundImage();
setInterval(function(){
    backgroundImage();
},5000);
