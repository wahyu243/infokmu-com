//<![CDATA[
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(7($){$.Q.P=7(t){8 1={d:0,G:0,e:"o",B:"S",3:5};6(t){$.J(1,t)}8 p=c;6("o"==1.e){$(1.3).v("o",7(e){8 F=0;p.C(7(){6($.s(c,1)||$.x(c,1)){}f 6(!$.n(c,1)&&!$.m(c,1)){$(c).w("u")}f{6(F++>1.G){h E}}});8 H=$.N(p,7(9){h!9.k});p=$(H)})}c.C(7(){8 2=c;6(j==$(2).b("r")){$(2).b("r",$(2).b("i"))}6("o"!=1.e||j==$(2).b("i")||1.z==$(2).b("i")||($.s(2,1)||$.x(2,1)||$.n(2,1)||$.m(2,1))){6(1.z){$(2).b("i",1.z)}f{$(2).Z("i")}2.k=E}f{2.k=D}$(2).11("u",7(){6(!c.k){$("<Y />").v("U",7(){$(2).V().b("i",$(2).b("r"))[1.B](1.W);2.k=D}).b("i",$(2).b("r"))}});6("o"!=1.e){$(2).v(1.e,7(e){6(!2.k){$(2).w("u")}})}});$(1.3).w(1.e);h c};$.n=7(9,1){6(1.3===j||1.3===5){8 4=$(5).y()+$(5).I()}f{8 4=$(1.3).g().q+$(1.3).y()}h 4<=$(9).g().q-1.d};$.m=7(9,1){6(1.3===j||1.3===5){8 4=$(5).A()+$(5).M()}f{8 4=$(1.3).g().l+$(1.3).A()}h 4<=$(9).g().l-1.d};$.s=7(9,1){6(1.3===j||1.3===5){8 4=$(5).I()}f{8 4=$(1.3).g().q}h 4>=$(9).g().q+1.d+$(9).y()};$.x=7(9,1){6(1.3===j||1.3===5){8 4=$(5).M()}f{8 4=$(1.3).g().l}h 4>=$(9).g().l+1.d+$(9).A()};$.J($.10[\':\'],{"T-L-4":"$.n(a, {d : 0, 3: 5})","R-L-4":"!$.n(a, {d : 0, 3: 5})","O-K-4":"$.m(a, {d : 0, 3: 5})","l-K-4":"!$.m(a, {d : 0, 3: 5})"})})(X);',62,64,'|settings|self|container|fold|window|if|function|var|element||attr|this|threshold|event|else|offset|return|src|undefined|loaded|left|rightoffold|belowthefold|scroll|elements|top|original|abovethetop|options|appear|bind|trigger|leftofbegin|height|placeholder|width|effect|each|true|false|counter|failurelimit|temp|scrollTop|extend|of|the|scrollLeft|grep|right|lazyload|fn|above|show|below|load|hide|effectspeed|jQuery|img|removeAttr|expr|one'.split('|'),0,{}));var randomRelatedIndex,showRelatedPost;(function(q,l,p){var b={widgetTitle:"<h4>Artikel Terkait:</h4>",homePage:"http://www.infokmu.com",numPosts:7,titleLength:"auto",callBack:function(){}},c;for(c in relatedPostConfig)b[c]="undefined"==relatedPostConfig[c]?b[c]:relatedPostConfig[c];var h=function(a){var b=l.createElement("script");b.type="text/javascript";b.src=a;p.appendChild(b)},m=function(a){var b=a.length,d,c;if(0===b)return!1;for(;--b;)d=Math.floor(Math.random()*(b+1)),c=a[b],a[b]=a[d],a[d]=c;return a},f="object"==typeof labelArray&&0<labelArray.length?"/-/"+m(labelArray)[0]:"";randomRelatedIndex=function(a){a=a.feed.openSearch$totalResults.$t-b.numPosts;a=0<a?a:1;a=Math.floor(Math.random()*(a-1+1))+1;h(b.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+f+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+b.numPosts+"&callback=showRelatedPost")};showRelatedPost=function(a){var c=document.getElementById(b.containerId);a=m(a.feed.entry);var d=b.widgetTitle+"<ul>",h=b.newTabLink?' target="_blank"':"",f,g,n;if(c){for(var e=0;e<b.numPosts&&e!=a.length;e++){g=a[e].title.$t;n="auto"!==b.titleLength&&b.titleLength<g.length?g.substring(0,b.titleLength)+"&hellip;":g;for(var k=0,l=a[e].link.length;k<l;k++)f="alternate"==a[e].link[k].rel?a[e].link[k].href:"#";d+='<li><a title="'+g+'" href="'+f+'"'+h+">"+n+"</a></li>"}c.innerHTML=d+'</ul><span class="section"></span>';b.callBack()}};h(b.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+f+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]);$(document).ready(function(){$(".tutupc").click(function(){$("#comments-container").hide()});$(".reply-btn").click(function(){$("#you_form-comment-message").hide()});$(".cancel-reply-btn").click(function(){$("#you_form-comment-message").show()})});$(".avatar-image-container[data-src]").each(function(){$(this).html('<img class="photo" width="33" height="33" itemprop="image" src="'+$(this).data("src").replace(/\/s[0-9]+(\-c)?/,"/s33-c")+'"></img>')});var originalSource=document.getElementById("comment-editor").src.split("#");function replyTo(e){var d=document.getElementById("comment-editor"),c=document.getElementById("custom-comment-form"),a=(e!="cancel")?document.getElementById("form-container-"+e):document.getElementById("custom-comments"),b=originalSource;d.style.height="50px";d.style.visibility="hidden";d.src=(e!="cancel")?b[0]+"&parentID="+e+"#"+b[1]:b[0]+"#"+b[1];a.insertBefore(c,null);d.onload=function(){this.style.height="250px";this.style.visibility="visible"}};function repText(b){var a=document.getElementById(b)?document.getElementById(b):"",a=""!==a?a.innerHTML:a,a=a.replace(/\[note\](.*?)\[\/note\]/ig,"<div class='note'>$1</div>"),a=a.replace(/\[(youtube|iframe)\](.*?)\[\/(youtube|iframe)\]/ig,"<div class='fluid-video loader'><iframe class='video' data-src='$2'></iframe></div>"),a=a.replace(/<em rel="note">(.*?)<\/em>/ig,"<div class='note'>$1</div>"),a=a.replace(/<i rel="pre">(.*?)<\/i>/ig,"<pre><code>$1</code></pre>"),a=a.replace(/<i rel="code">(.*?)<\/i>/ig,"<code>$1</code>"),a=a.replace(/<b rel="h([0-6])">(.*?)<\/b>/ig,"<h$1>$2</h$1>"),a=a.replace(/<\/h([0-6])>(<br ?\/?>)+/g,"</h$1>"),a=a.replace(/(<br ?\/?>)+(:|;|\^|=)/ig,"<br> $2"),a=a.replace(/^(&nbsp;|<br ?\/?>| <br ?\/?>)+/ig,""),a=a.replace(/\@<a href="\#c([0-9]+)\"( rel="nofollow")?>.*?<\/a>\:? ?/g,""),a=a.replace(/<i rel="anchor">(.*?)<\/i>/ig,"<a class='allow' href='$1' rel='nofollow'>$1</a>"),a=a.replace(/\[(link|url)\](.*?)\[\/(link|url)\]/ig,"<a class='allow' href='$2' rel='nofollow'>$2</a>"),a=a.replace(/\[url\=('|")?(.*?)('|")?\](.*?)\[\/url\]/ig,"<a class='allow' href='$2' rel='nofollow'>$4</a>"),a=a.replace(/(<i rel="image">|\[img\])(.*?)(<\/i>|\[\/img\])/ig,"<figure class='center'><img class='img-attachment' data-src='$2' alt='Loading...'></figure>").replace(/<\/h([0-6])>(<br ?\/?>)+/g,"</h$1>"),a=a.replace(/<\/h([0-6])>(<br ?\/?>)+/g,"</h$1>"),a=a.replace(/\[blockquote\](.*?)\[\/blockquote\]/ig,"<blockquote>$1</blockquote>"),a=a.replace(/&amp;feature=[0-9a-zA-Z-_]*/ig,""),a=a.replace(/\/s(640|1600)/g,"/s400"),a=a.replace(/\s:\)+/g," <img class='emo' width='15' height='15' alt=':)' src='http://4.bp.blogspot.com/-wYLy6cRY8Ek/Uqb1VwEvJyI/AAAAAAAAHA4/vCk4U_sndnw/s15/01.gif'/>"),a=a.replace(/\s=\(/g," <img class='emo' width='15' height='15' alt='=(' src='http://4.bp.blogspot.com/-8Hpoe9rGy5I/Uqb1V5EZuyI/AAAAAAAAHA8/Yw6GVP9WzBg/s15/04.gif'/>"),a=a.replace(/\s@@,/g," <img class='emo' width='15' height='15' alt='@@,' src='http://2.bp.blogspot.com/-EUHq5CiIbP0/Uqb1V-HXLFI/AAAAAAAAHBA/dG621l82sNk/s21/05.gif'/>"),a=a.replace(/\s:s/ig," <img class='emo' width='15' height='15' alt=':s' src='http://3.bp.blogspot.com/-7414II-ovG0/Uqb1W8oSmQI/AAAAAAAAHBM/dzC41X0dh9U/s21/07.gif'/>"),a=a.replace(/\s:(\\|\/)/g," <img class='emo' width='16' height='16' alt=':(|' src='http://4.bp.blogspot.com/-ZxDdlpoSvLs/Uqb1XFLOBKI/AAAAAAAAHBQ/w2mz8qGKLps/s16/08.gif'/>"),a=a.replace(/\s:D/g," <img class='emo' width='15' height='15' alt=':D' src='http://2.bp.blogspot.com/-vWfVnh5taV0/Uqb1XJaPePI/AAAAAAAAHBk/zR3bUoCpruA/s15/09.gif'/>"),a=a.replace(/\s:-D/g," <img class='emo' width='15' height='15' alt=':-D' src='http://2.bp.blogspot.com/-6paHQtsvjQY/Uqb1XxgtRMI/AAAAAAAAHBg/DnB1zYJznNQ/s15/10.gif'/>"),a=a.replace(/\s\^:D/g," <img class='emo' width='23' height='26' alt='^:D' src='http://4.bp.blogspot.com/-0NA2jEx6scc/Uqb1YEoAOzI/AAAAAAAAHBo/dNfDScC7kwE/s26/11.gif'/>"),a=a.replace(/\sT_T/ig," <img class='emo' width='15' height='15' alt='T_T' src='http://2.bp.blogspot.com/-CUGz_rVfcqc/Uqb1YrSwc9I/AAAAAAAAHB4/R5z83tEAzgo/s15/15.gif'/>"),a=a.replace(/\s:Q/ig," <img class='emo' width='21' height='15' alt=':Q' src='http://1.bp.blogspot.com/-FWX0iljS3dM/Uqb1YsQ2y0I/AAAAAAAAHB8/45_Bp_z8z8E/s21/17.gif'/>"),a=a.replace(/\s7:\(/g," <img class='emo' width='15' height='15' alt='7:(' src='http://3.bp.blogspot.com/-aEVZKi3TLJI/Uqb1Za8lxcI/AAAAAAAAHCA/XYQbUnd5p90/s15/19.gif'/>"),a=a.replace(/\s:p/ig," <img class='emo' width='15' height='15' alt=':p' src='http://2.bp.blogspot.com/-ABpLFHANTLU/Uqb1Z0GWz0I/AAAAAAAAHCI/sRgtGrbJpw8/s15/20.gif'/>"),a=a.replace(/\s\\o\//ig," <img class='emo' width='30' height='15' alt='o/' src='http://3.bp.blogspot.com/-YnzAzIdb2zM/Uqb1Z6egelI/AAAAAAAAHCc/X0-eni4kyxo/s30/23.gif'/>"),a=a.replace(/\s\^o\^/ig," <img class='emo' width='29' height='21' alt='^o^' src='http://4.bp.blogspot.com/-Qj3lJE30FJg/Uqb1aYIjYcI/AAAAAAAAHCY/L9m1EUMG4Cw/s29/27.gif'/>"),a=a.replace(/\s:-a/ig," <img class='emo' width='15' height='15' alt=':-a' src='http://4.bp.blogspot.com/-sOjsGPloNkU/Uqb1akOSNxI/AAAAAAAAHCk/ZCLpWbT4Zrw/s15/28.gif'/>"),a=a.replace(/\s\*fck\*/ig," <img class='emo' width='19' height='15' alt='*fck*' src='http://3.bp.blogspot.com/-X7BwwrRE3jg/Uqb1bcIZQOI/AAAAAAAAHCs/RqEp-gHnm4E/s19/29.gif'/>"),a=a.replace(/\s:W/g," <img class='emo' width='25' height='19' alt=':W' src='http://1.bp.blogspot.com/-WMCy0ksXQpI/Uqb1bnS05nI/AAAAAAAAHC0/z4o4_s4_J5M/s25/37.gif'/>"),a=a.replace(/\sx@/ig," <img class='emo' width='15' height='23' alt='x@' src='http://4.bp.blogspot.com/-PX8cE9RadRo/Uqb1cC8uZSI/AAAAAAAAHC4/I7QhpPtUUsM/s23/38.gif'/>");document.getElementById(b)&&(document.getElementById(b).innerHTML=a)}repText("comments-area");repText("you_emo-bar");$(document.body).on("click",function(){$(".emoKey").remove()});$(".emo").on("click",function(b){$(".emoKey").remove();$(this).after('<input class="emoKey" type="text" value=" '+this.alt+'"/>');$(".emoKey").focus().select();b.stopPropagation()});$(document).ready(function(){$(".emo").one("click",function(){$(".tooltipsemot").fadeIn(1000,"easeInOutCirc")});$(".link-close").click(function(){$(".tooltipsemot").fadeOut(1000,"easeInBack")})});$(function(){$('.tanda').stickyBar({animated:true,top:62,speed:2000,easing:"easeInOutCirc"});});function blockLinks(d,f){if(document.getElementById(d)){for(var b=document.getElementById(d).getElementsByTagName(f),a=0;a<b.length;a++){var e=/(^| |>|\/|\(|"|'|&quot;|&#39;|\[)(OOT|OTT|keluar topik|out of topic|off topic|diluar topik|di luar topik|tidak sesuai dengan pembahasan|tidak sesuai topik|tidak sesuai dengan topik|menyimpang dari topik|minta template|blackberry|nokia|acer|samsung|togel|ready stock|menawarkan produk|produk yang ditawarkan|produk yang kami tawarkan|promo|jual|numpang promo)(\]|nya|"|'|&quot;|&#39;|\,|\.|\!|\?|\:|\;|\)|\/|<| |$)/ig,c=b[a].innerHTML;b[a].innerHTML=e.test(c)?"<del>"+c.replace(e,"$1<mark>$2</mark>$3")+"</del><br><br><p class='comment-spam'><cite>Maaf komentar anda telah ditandai. Ini terjadi karena kemungkinan komentar anda berisi kata-kata yang dilarang seperti keluar dari topik dan juga mengiklankan produk. Gunakanlah Iklan Baris Gratis untuk mengiklankan produk anda, atau pasang iklan premium di blog ini.</cite></p>":c;if(b[a].innerHTML.indexOf("</a>")!==-1){b[a].innerHTML="Maaf komentar anda terhapus otomatis oleh sistem kemungkinan ini terjadi karena terdapat link aktif pada komentar anda. Sebaiknya link ditulis berupa teks URL biasa. Terima kasih.",b[a].className="comment-spam"}}}}blockLinks("comments-area","p");var isUrl = /(\()((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\))|(\[)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\])|(\{)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\})|(<|&(?:lt|#60|#x3c);)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(>|&(?:gt|#62|#x3e);)|((?:^|[^=\s'"\]])\s*['"]?|[^=\s]\s+)(\b(?:ht|f)tps?:\/\/[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]+(?:(?!&(?:gt|#0*62|#x0*3e);|&(?:amp|apos|quot|#0*3[49]|#x0*2[27]);[.!&',:?;]?(?:[^a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]|$))&[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]*)*[a-z0-9\-_~$()*+=\/#[\]@%])/img;var txt = document.getElementById('comments-area');txt.innerHTML = txt.innerHTML.replace(isUrl, '$1$4$7$10$13<a href="$2$5$8$11$14" Title="Link" rel="nofollow">$2$5$8$11$14</a>$3$6$9$12');setTimeout(function(){$('.jsfiddle-demo').each(function(){$(this).html('<iframe width="100%" height="300px" src="' + $(this).data('src') + '" allowfullscreen></iframe>');});},5000);if (window.addEventListener) window.addEventListener("load", createIframe, false);else if (window.attachEvent) window.attachEvent("onload", createIframe);else window.onload = createIframe;function newWindow(m,l,n,e,j,f,g,k,i,a,o){var d=(screen.width-n)/2;var h=(screen.height-e)/2;var c="height="+e+",width="+n+",top="+h+",left="+d+",scrollbars="+j+",resizable="+f+",menubar="+g+",toolbar="+k+",location="+i+",statusbar="+a+",fullscreen="+o+"";var b=window.open(m,l,c);if(parseInt(navigator.appVersion)>=4){b.window.focus()}};//]]>