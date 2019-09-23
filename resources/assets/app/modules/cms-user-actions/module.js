import {changeTab} from "./handlers/changeTab";

$(document)

    /**
     * Change url on tab change
     */
    .on('click', '.deploy-tabs .nav-link', changeTab)

    /**
     * Set cursor to parent node
     */
    .on('mouseenter', 'td', function () {
        if($(this).find('.hidden-wrapper').length) {
            $(this).css('cursor', 'pointer');
        }
    })

    /**
     * Open deploy info
     */
    .on('click', 'td', function () {
        const wrapper = $(this).find('.hidden-wrapper');

        if (wrapper && wrapper.hasClass('open')) {
            if (!window.getSelection().toString().length) {
                wrapper.removeClass('open')
            } else {
                document.execCommand("copy")
            }
        } else {
            wrapper.addClass('open')
        }
    });

