function domainName(url){
   var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
}

//google.com

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

//google
//tests
Test.assertEquals(domainName("http://google.com"), "google");
Test.assertEquals(domainName("http://google.co.jp"), "google");
Test.assertEquals(domainName("www.xakep.ru"), "xakep");
Test.assertEquals(domainName("https://youtube.com"), "youtube");
