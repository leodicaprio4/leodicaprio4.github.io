if(top===self) var p=document.URL; else var p=document.referrer;var dt=new Date().getTime();
var exoDocumentProtocol = (document.location.protocol != "https:" && document.location.protocol != "http:") ? "https:" : document.location.protocol;
if(typeof(ad_sub) == 'undefined') var ad_sub = "";
if(typeof(ad_tags) == 'undefined') var ad_tags = "";
if(typeof(ad_email) == 'undefined') var ad_email = "";
var ad_type = ad_width + 'x' + ad_height;
if(ad_width == '100%' && ad_height == '100%') ad_type = 'auto';
var ad_screen_resolution = screen.width + 'x' + screen.height;
document.write('<iframe frameborder="0" scrolling="no" width="' + ad_width + '" height="' + ad_height + '" src="' + exoDocumentProtocol + '//syndication.exosrv.com/ads-iframe-display.php?idzone=' + ad_idzone + '&type=' + ad_type + '&p=' + escape(p) + '&dt=' + dt + '&sub=' + ad_sub + '&tags=' + ad_tags + '&screen_resolution=' + ad_screen_resolution + '&email=' + ad_email + '"></iframe>');