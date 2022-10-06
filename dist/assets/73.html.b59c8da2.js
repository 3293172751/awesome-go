import{_ as l,r as a,o as t,c as o,a as e,b as i,w as r,e as c,d as n}from"./app.f483d28b.js";const u={},g=c(`<h1 id="_1-go\u8DE8\u5E73\u53F0\u4EA4\u53C9\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#_1-go\u8DE8\u5E73\u53F0\u4EA4\u53C9\u7F16\u8BD1" aria-hidden="true">#</a> 1. Go\u8DE8\u5E73\u53F0\u4EA4\u53C9\u7F16\u8BD1</h1><h3 id="_1-1-1-\u5728-mac\u3001linux\u3001windows-\u4E0Bgo\u4EA4\u53C9\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u5728-mac\u3001linux\u3001windows-\u4E0Bgo\u4EA4\u53C9\u7F16\u8BD1" aria-hidden="true">#</a> 1.1.1. \u5728 Mac\u3001Linux\u3001Windows \u4E0BGo\u4EA4\u53C9\u7F16\u8BD1</h3><p>Go\u8BED\u8A00\u652F\u6301\u4EA4\u53C9\u7F16\u8BD1\uFF0C\u5728\u4E00\u4E2A\u5E73\u53F0\u4E0A\u751F\u6210\u53E6\u4E00\u4E2A\u5E73\u53F0\u7684\u53EF\u6267\u884C\u7A0B\u5E8F\uFF0C\u6700\u8FD1\u4F7F\u7528\u4E86\u4E00\u4E0B\uFF0C\u975E\u5E38\u597D\u7528\uFF0C\u8FD9\u91CC\u5907\u5FD8\u4E00\u4E0B\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u6211\u53D1\u73B0golang\u5728\u652F\u6301cgo\u7684\u65F6\u5019\u662F\u6CA1\u6CD5\u4EA4\u53C9\u7F16\u8BD1\u7684</p><p>Mac \u4E0B\u7F16\u8BD1 Linux \u548C Windows 64\u4F4D\u53EF\u6267\u884C\u7A0B\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build
    CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Linux \u4E0B\u7F16\u8BD1 Mac \u548C Windows 64\u4F4D\u53EF\u6267\u884C\u7A0B\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build
    CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Windows \u4E0B\u7F16\u8BD1 Mac \u548C Linux 64\u4F4D\u53EF\u6267\u884C\u7A0B\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    SET CGO_ENABLED=0
    SET GOOS=darwin
    SET GOARCH=amd64
    go build

    SET CGO_ENABLED=0
    SET GOOS=linux
    SET GOARCH=amd64
    go build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GOOS\uFF1A\u76EE\u6807\u5E73\u53F0\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF08darwin\u3001freebsd\u3001linux\u3001windows\uFF09</p><p>GOARCH\uFF1A\u76EE\u6807\u5E73\u53F0\u7684\u4F53\u7CFB\u67B6\u6784\uFF08386\u3001amd64\u3001arm\uFF09</p><p>\u4EA4\u53C9\u7F16\u8BD1\u4E0D\u652F\u6301 CGO \u6240\u4EE5\u8981\u7981\u7528\u5B83</p><p>\u4E0A\u9762\u7684\u547D\u4EE4\u7F16\u8BD1 64 \u4F4D\u53EF\u6267\u884C\u7A0B\u5E8F\uFF0C\u4F60\u5F53\u7136\u5E94\u8BE5\u4E5F\u4F1A\u4F7F\u7528 386 \u7F16\u8BD1 32 \u4F4D\u53EF\u6267\u884C\u7A0B\u5E8F \u5F88\u591A\u535A\u5BA2\u90FD\u63D0\u5230\u8981\u5148\u589E\u52A0\u5BF9\u5176\u5B83\u5E73\u53F0\u7684\u652F\u6301\uFF0C\u4F46\u662F\u6211\u8DF3\u8FC7\u90A3\u4E00\u6B65\uFF0C\u4E0A\u9762\u6240\u5217\u7684\u547D\u4EE4\u4E5F\u90FD\u80FD\u6210\u529F\uFF0C\u4E14\u5F97\u5230\u6211\u60F3\u8981\u7684\u7ED3\u679C\uFF0C\u53EF\u89C1\u90A3\u4E00\u6B65\u5E94\u8BE5\u662F\u975E\u5FC5\u987B\u7684\uFF0C\u6216\u662F\u6211\u6240\u4F7F\u7528\u7684 Go \u7248\u672C\u5DF2\u9ED8\u8BA4\u652F\u6301\u6240\u6709\u5E73\u53F0\u3002</p><p>\u6CE8\u610F\uFF1A\u5982\u679C\u7F16\u8BD1\u5B8C\u6210\u4EE5\u540E\u670D\u52A1\u5668\u4E0D\u80FD\u8FD0\u884C\u6587\u4EF6,\u8BB0\u5F97\u67E5\u770B\u4E00\u4E0B\u662F\u5426\u6709\u8FD0\u884C\u6743\u9650</p><p><code>ls -l</code>\u5982\u679C\u6CA1\u6709\u6267\u884C <code>sudo chmod 777 student</code> student\u662F\u4F60\u7684\u7F16\u8BD1\u51FA\u6765\u7684\u6587\u4EF6\u540D\u79F0</p><p>\u5982\u679C\u5728\u7F16\u8BD1\u7684\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u4E86\u4E00\u4E0B\u9519\u8BEF\uFF08\u6D4B\u8BD5\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u7F16\u8BD1gin\u6846\u67B6\u7684\u65F6\u5019\u9047\u5230\u4E86\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>../mattn/go-isatty/isatty_tcgets.go:7:8: cannot find package &quot;golang.org/x/sys/unix&quot; in any of:
    /usr/lib/golang/src/golang.org/x/sys/unix (from $GOROOT)
    /root/go/src/golang.org/x/sys/unix (from $GOPATH)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u9650\u5236\u95EE\u9898\uFF0C\u56FD\u5185\u4F7F\u7528 go get \u5B89\u88C5 golang \u5B98\u65B9\u5305\u53EF\u80FD\u4F1A\u5931\u8D25\uFF0C\u4E0D\u7FFB\u5899\u7684\u60C5\u51B5\u4E0B\u600E\u4E48\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1F\u5176\u5B9E golang \u5728 github \u4E0A\u5EFA\u7ACB\u4E86\u4E00\u4E2A\u955C\u50CF\u5E93\uFF0C\u5982 https://github.com/golang/net \u5373\u662F https://golang.org/x/net \u7684\u955C\u50CF\u5E93</p><p>\u89E3\u51B3\u529E\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ~/go/src
mkdir -p golang.org/x
cd golang.org/x
git clone https://github.com/golang/sys.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u8BF4\u660E" aria-hidden="true">#</a> 1.1.2. \u8BF4\u660E</h3><p>windows\u4E0B\u9762 powershell\u4E0D\u884C\uFF0C\u8981cmd</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="72.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="74.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,25),v=n("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),m={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},p=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),h=n(")"),b=n("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),_={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},x=n("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function O(E,G){const s=a("RouterLink"),d=a("ExternalLinkIcon");return t(),o("div",null,[g,e("ul",null,[e("li",null,[e("p",null,[i(s,{to:"/Gomd_super/"},{default:r(()=>[v]),_:1})])]),e("li",null,[e("p",null,[e("a",m,[p,i(d)]),h])]),e("li",null,[e("p",null,[b,e("a",_,[x,i(d)])])])])])}const w=l(u,[["render",O],["__file","73.html.vue"]]);export{w as default};