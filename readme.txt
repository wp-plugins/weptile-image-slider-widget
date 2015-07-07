=== Weptile Image Slider Widget ===
Contributors: weptile, yigitnerukuc, ufukerdogmus, onurure, jrds
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WQ5TC9J9UWALN
Tags: image, slider, widget, slideshow, nivo, sidebar, rotator, responsive
Requires at least: 3.3
Tested up to: 4.2.2
Stable tag: 1.2.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Easily create responsive & lightweight image slider (rotator) widgets in any sidebar, post or page.

== Description ==

Weptile Image Slider Widget is a responsive, easy, lightweight image slider widget plugin integrating nivo slider script to any sidebar, post or page without any conflicts. 

You can add images to rotate in any sidebar. Arrange image order with drag & drop. You can also add links to each image.

The slider settings are all done within the widget. There are 16 widget settings including 16 animation options and 4 built in slider templates.

You can use multiple sliders on multiple sidebars on the same page.

You can use the shortcode support to add it to your posts or pages.

Example shortcode:
[weptile-image-slider items="image=http://url-to-image-1.jpg|link=http://link-of-image-1|target=_blank|caption=Test Caption|alt=Test Alternate Text,image=http://url-to-image-2.jpg|link=http://link-of-image-2|target=_blank|caption=Test Caption|alt=Test Alternate Text" width="700" height="100" responsive="0" effect="boxRandom" directionalnav="0" buttonnav="1" pausehover="1" start-random="1" slices="30" center="0"]

Shortcode Variables:
items : this is a 2 level shortcode variable which includes the images to rotate in slider, their target url when they're clicked (optional), caption and alt text.
width : number pixel value, without px at the end
height : number pixel value, without px at the end
responsive : 0 or 1 (off / on)
theme : default,light,dark,bar
directional-nav : 0 or 1 (default: 0)
button-nav : 0 or 1 (default: 0)
pause-hover : 0 or 1 (default: 0)
start-random : 0 or 1 (default: 0)
slices : any integer value (default is 15)
box-columns : any integer value (default is 8)
box-rows (sayi degeri olacak, default:4)
prev-text : any text for the previous button (default:Previous)
next-text : any text for the next button (default:Next)
effect : (fade, fold, slideInLeft, slideInRight, random, sliceDown, sliceDownLeft, sliceUp, sliceUpLeft, sliceUpDown, sliceUpDownLeft, boxRandom, boxRain, boxRainReverse, boxRainGrow, boxRainGrowReverse)
center: 0 or 1 (default: 0)

Change Log:
1.2.2
Fixed the bug where captions were mixed up on shuffle.
1.2.1
Corrected several language/text mistakes.
1.2.0
Moved the cache folder under uploads folder to prevent missing images after plugin update.
(With this update you need to re-save the widget settings to re-create the cache folder one last time. From this point on, it's all safe for future updates :) )
Improved UI with larger image, smaller buttons
Improved widget setting process
Added image target link, alt text, caption options
Added slider center align option
Added link, alt text, caption options to shortcode system
Changed the whole shortcode system to include the new additions. 
(Legacy shortcode still works)
1.1.4
Added shortcode variable to center align the slider on page
1.1.0
Added Shortcode support for posts/pages
Fixed several bugs in widget update


== Installation ==

1. Upload the 'weptile-image-slider-widget' folder to the '/wp-content/plugins/' directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Add your "weptile image slider widget" to any sidebar from the 'Widgets' screen.
4. Setup the slider / rotator setting within the widget or use the shortcode in the post/page editor.
5. Enjoy!

== Frequently asked questions ==

= Can we use the slider in any sidebar?=
Yes.

= Can we use the slider in any page or post?=
Yes! (just added this in this update - more to follow)

= Can we add links to images? =
Yes.  You can add a different link for each image in each slider, as you like.

= Can we reorder images easily in the slider? =
Yes. You can drag and drop the images to reorder them easily.

= Can we easily edit options and reorder images within the widget? =
Yes. There are 16 options, 16 animation effects and you can drag the images to arrange order after you insert them to the widget.

= Can we use multiple widgets in the same sidebar? =
Yes. As many as you like.

= Can we use multiple widgets in the same page? =
Yes. As many as you like.

= Can we use the widgets in the same page where we have another nivo script running? =
Yes. It won't conflict with existing nivo scripts.

= Can we change the appearence of sliders? =
Yes. There are 4 out of the box themes for our slider widget. You can also add custom themes if you want. All you have to do is create a folder in your /plugins folder and name it as you like (for example: minimal-slider) and put your css and image files in it. In the widget options select that you want to specify a custom theme and write your own theme folder's name (for exmaple: minimal-slider). You can use any available theme css as your theme template to create a new one. One last thing, you must use your theme's name in your css file as a namespace with "theme" prefix (for example: .theme-minimal-slider{ ... } ).

= I can not see images in the slider =
If this error happened right after the plugin update, resave all widget settings and it'll be fixed once and forall.
Else, you might want to check your folder permissions for this plugins' cache folder under your uploads folder. 

== Screenshots ==

1. Weptile Image Slider Widget Settings Panel

2. Weptile Image Slider Widget Settings Panel - Slider Effects



== Changelog ==

= 1.2.1 =

* Bug fix: Fixed a bug where admin panel gave an error on servers running with PHP version older than 5.3.

= 1.2.0 =

* Improved UI: Widgete thumbs larger, edit buttons working better and user friendly.
* Cache folder moved: Moved the plugin cache folder under uploads to prevent broken widgets on each plugin update in the future. 
* Shortcode changed: Created a new shortcode to allow further options to be used on pages and posts. Old shortcode is still working to be backwards compatible.
* Title, alt and target link variables added to the shortcode support.

= 1.1.4 =

* Feature added: Center align variable added to in-page slider shortcode

= 1.1.3 =

* Feature added: Shortcode to add slider to page

= 1.0.5 =

* Bug fix: Image links not working on IE
* Bug fix: Plugin was broken on older versions of Wordpress 3.5

= 1.0.4 =

* Bug fix: Admin panel javascript conflict about media library popup window resolved.
* Feature: Added "target" and "rel" attribute options to the image links' settings.
* Feature: Now you can implement custom themes for your slider, see FAQ section for details.
* Deprecated image_resize function replaced with the new WP_Image_Editor class.

= 1.0.3 =

* Bug fix: Admin panel glitch that causes images won't be created in Wordpress 3.5 and above
* Feature: Alternative text (Alt) attribute for slider images.

= 1.0.2 =

* Critical bug-fix where images won't resize and be created in some situations.

= 1.0.1 =

* Descriptions and readme.txt fixed.

= 1.0 =

* Weptile Image Slider Widget launched.

== Upgrade notice ==


