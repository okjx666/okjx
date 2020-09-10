if(host == domain)
{
if(document.domain == domain)
{
if(document.domain == host)
{
if (document.domain ==  host)
{
if (domain ==  host)
{
function lcf(a,b,c,d,x,s,t){return lce((b&c)|((~b)&d),a,b,x,s,t);};function lcg(a,b,c,d,x,s,t){return lce((b & d)|(c&(~d)),a,b,x,s,t);};function lce(q,a,b,x,s,t){return lcl(lcc(lcl(lcl(a,q),lcl(x,t)),s),b)};function lch(a,b,c,d,x,s,t){return lce(b^c^d,a,b,x,s,t)};function lci(a,b,c,d,x,s,t){return lce(c^(b|(~d)),a,b,x,s,t)};function lcb(x){var a = 1732584193;var b = -271733879;var c = -1732584194;var d = 271733878;if(x !== '1'){for(var i = 0; i < x.length; i += 16){var a1 = a;var b1 = b;var c1 = c;var d1 = d;a = lcf(a,b,c,d,x[i+0],7,-680876936);d = lcf(d,a,b,c,x[i+1],12,-389564586);c = lcf(c,d,a,b,x[i+2],17,606105819);b = lcf(b,c,d,a,x[i+3],22,-1044525330);a = lcf(a,b,c,d,x[i+4],7,-176418897);d = lcf(d,a,b,c,x[i+5],12,1200080426);c = lcf(c,d,a,b,x[i+6],17,-1473231341);b = lcf(b,c,d,a,x[i+7],22,-45705983);a = lcf(a,b,c,d,x[i+8],7,1770035416);d = lcf(d,a,b,c,x[i+9],12,-1958414417);c = lcf(c,d,a,b,x[i+10],17,-42063);b = lcf(b,c,d,a,x[i+11],22,-1990404162);a = lcf(a,b,c,d,x[i+12],7,1804603682);d = lcf(d,a,b,c,x[i+13],12,-40341101);c = lcf(c,d,a,b,x[i+14],17,-1502002290);b = lcf(b,c,d,a,x[i+15],22,1236535329);a = lcg(a,b,c,d,x[i+1],5,-165796510);d = lcg(d,a,b,c,x[i+6],9,-1069501632);c = lcg(c,d,a,b,x[i+11],14,643717713);b = lcg(b,c,d,a,x[i+0],20,-373897302);a = lcg(a,b,c,d,x[i+5],5,-701558691);d = lcg(d,a,b,c,x[i+10],9,38016083);c = lcg(c,d,a,b,x[i+15],14,-660478335);b = lcg(b,c,d,a,x[i+4],20,-405537848);a = lcg(a,b,c,d,x[i+9],5,568446438);d = lcg(d,a,b,c,x[i+14],9,-1019803690);c = lcg(c,d,a,b,x[i+3],14,-187363961);b = lcg(b,c,d,a,x[i+8],20,1163531501);a = lcg(a,b,c,d,x[i+13],5,-1444681467);d = lcg(d,a,b,c,x[i+2],9,-51403784);c = lcg(c,d,a,b,x[i+7],14,1735328473);b = lcg(b,c,d,a,x[i+12],20,-1926607734);a = lch(a,b,c,d,x[i+5],4,-378558);d = lch(d,a,b,c,x[i+8],11,-2022574463);c = lch(c,d,a,b,x[i+11],16,1839030562);b = lch(b,c,d,a,x[i+14],23,-35309556);a = lch(a,b,c,d,x[i+1],4,-1530992060);d = lch(d,a,b,c,x[i+4],11,1272893353);c = lch(c,d,a,b,x[i+7],16,-155497632);b = lch(b,c,d,a,x[i+10],23,-1094730640);a = lch(a,b,c,d,x[i+13],4,681279174);d = lch(d,a,b,c,x[i+0],11,-358537222);c = lch(c,d,a,b,x[i+3],16,-722521979);b = lch(b,c,d,a,x[i+6],23,76029189);a = lch(a,b,c,d,x[i+9],4,-640364487);d = lch(d,a,b,c,x[i+12],11,-421815835);c = lch(c,d,a,b,x[i+15],16,530742520);b = lch(b,c,d,a,x[i+2],23,-995338651);a = lci(a,b,c,d,x[i+0],6,-198630844);d = lci(d,a,b,c,x[i+7],10,1126891415);c = lci(c,d,a,b,x[i+14],15,-1416354905);b = lci(b,c,d,a,x[i+5],21,-57434055);a = lci(a,b,c,d,x[i+12],6,1700485571);d = lci(d,a,b,c,x[i+3],10,-1894986606);c = lci(c,d,a,b,x[i+10],15,-1051523);b = lci(b,c,d,a,x[i+1],21,-2054922799);a = lci(a,b,c,d,x[i+8],6,1873313359);d = lci(d,a,b,c,x[i+15],10,-30611744);c = lci(c,d,a,b,x[i+6],15,-1560198380);b = lci(b,c,d,a,x[i+13],21,1309151649);a = lci(a,b,c,d,x[i+4],6,-145523070);d = lci(d,a,b,c,x[i+11],10,-1120210379);c = lci(c,d,a,b,x[i+2],15,718787259);b = lci(b,c,d,a,x[i+9],21,-343485551);a = lcl(a,a1);b = lcl(b,b1);c = lcl(c,c1);d = lcl(d,d1);};return [a,b,c,d];}else{return [a,d,c,b];}};function md(str){var c1,c2,c3,c4;var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);var i=0,len=str.length,string='';while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c1==-1);if(c1==-1)break;do{c2=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c2==-1);if(c2==-1)break;string+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)return string;c3=base64DecodeChars[c3]}while(i<len&&c3==-1);if(c3==-1)break;string+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)return string;c4=base64DecodeChars[c4]}while(i<len&&c4==-1);if(c4==-1)break;string+=String.fromCharCode(((c3&0x03)<<6)|c4)};return string};eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('9 l(x,y){3 a=(x&e)+(y&e);3 b=(x>>5)+(y>>5)+(a>>5);7(b<<5)|(a&e)};9 k(a,b){7(a<<b)|(a>>>(p-b))};9 m(t){3 a="n";3 b="";d(3 i=0;i<t.c*4;i++){b+=a.f((t[i>>2]>>((i%4)*8+4))&h)+a.f((t[i>>2]>>((i%4)*8))&h)};7 b};9 j(t){3 a=o(1)+t;7 a.q(/[\\-|\\,]/g,\'\')};9 r(t){3 a=((t.c+8)>>6)+1;3 b=s u(a*5);d(3 i=0;i<a*5;i++)b[i]=0;d(3 i=0;i<t.c;i++)b[i>>2]|=(t.v(i)&w)<<((i%4)*8);b[i>>2]|=z<<((i%4)*8);b[a*5-2]=t.c*8;7 b}',36,36,'|||var||16||return||function|||length|for|0xFFFF|charAt||0xF||lco|lcc|lcl|lca|0123456789abcdef|lcb|32|replace|lcd|new||Array|charCodeAt|0xFF|||0x80'.split('|'),0,{}))
var token = lca(lcb(lcd(lco($.md5(host+time)))));
var keep = lca(lcb(lcd(lco($.md5(domain+time)))));
}
else
{
var token = lca(lcb(lcd(lco($.md5(1789764317)))));
var keep = lca(lcb(lcd(lco($.md5(host+time)))));
}
}
else
{
var token = lca(lcb(lcd(lco($.md5(1789764317)))));
var keep = lca(lcb(lcd(lco($.md5(host+time)))));
}
}
else
{
var url = '1006_d86f75e0a5094b5a813587a866ac9d66';
}
}
else
{
var url = '1006_d86f75e0a5094b5a813587a866ac9d66';
}
}
else
{
var url = '1006_d86f75e0a5094b5a813587a866ac9d66';
}