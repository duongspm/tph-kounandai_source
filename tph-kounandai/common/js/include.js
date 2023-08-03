function parts(rootDir, File) {
    $.ajax({
        url: rootDir + "library/" + File,
        cache: false,
        async: false,
        dataType: 'html',
        success: function (html) {
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}

$(document).ready(function () {
    let url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");

    let dir = url.substring(0, url.lastIndexOf('/')),
        dirRegExp = new RegExp(dir.replace(/\/$/, '') + "$");

    if ($('body').hasClass("top")) {
        $('.menu li a.top').addClass('isActive');
    } else {
        $('.menu  li  a').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('isActive');
            }
            if (dirRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('isActive');
            }
        });
    }
});
