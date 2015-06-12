(function() {
    tinymce.PluginManager.add('weptile_mce_button', function( editor, url ) {
        editor.addButton( 'weptile_mce_button', {
            title : 'Weptile Image Slider',
            icon: true,
            image: url + '/weptile-favicon.ico.png',
                onclick: function() {
                    var width = jQuery(window).width();
                    var tbWidth = ( 720 < width ) ? 720 : width;
                    var tbHeight = jQuery(window).height();
                    editor.windowManager.open( {
                        title: 'Weptile Image Shortcode',
                        id:'wep-image-pop',
                        width:tbWidth,
                        height:tbHeight-200,
                        url:url + '/shortcode.html',

                        onsubmit: function( e ) {
                            if(e.data.responsive==false){
                                gelenresponsive = 0;
                            }else{
                                gelenresponsive = 1;
                            }
                            if(e.data.directionalnav==false){
                                gelendirectionalnav = 0;
                            }else{
                                gelendirectionalnav = 1;
                            }
                            if(e.data.buttonnav==false){
                                gelenbuttonnav = 0;
                            }else{
                                gelenbuttonnav = 1;
                            }
                            if(e.data.pausehover==false){
                                gelenpausehover = 0;
                            }else{
                                gelenpausehover = 1;
                            }
                            if(e.data.startrandom==false){
                                gelenstartrandom = 0;
                            }else{
                                gelenstartrandom = 1;
                            }
                            editor.insertContent( '[weptile-slider imgs="' + e.data.imgs + '" width="' + e.data.width + '" height="' + e.data.height + '" responsive="' + gelenresponsive + '" theme="' + e.data.slidertheme + '" directional-nav="' + gelendirectionalnav + '" buttonnav="' + gelenbuttonnav + '" pausehover="' + gelenpausehover + '" startrandom="' + gelenstartrandom + '" prevtext="' + e.data.prevtext + '" nexttext="' + e.data.nexttext + '" effect="' + e.data.effect + '" speed="' + e.data.speed + '" duration="' + e.data.duration + '" slice="' + e.data.slice + '" box-columns="' + e.data.boxcolumns + '" box-rows="' + e.data.boxrows + '"]');
                        }
                    });
                }
        });
    });
})();