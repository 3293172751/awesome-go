import{_ as l,r as i,o as u,c as d,a as n,b as a,w as o,e as s,d as c}from"./app.74bed754.js";const r={},k=n("h1",{id:"goroutine",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#goroutine","aria-hidden":"true"},"#"),s(" Goroutine")],-1),g={class:"table-of-contents"},h=s("\u524D\u8A00"),m=s("\u534F\u7A0B\u548C\u7BA1\u9053"),v=s("#\u8FDB\u7A0B"),_=s("#Go\u8BED\u8A00\u534F\u7A0B\u548CGo\u4E3B\u7EBF\u7A0B"),b=s("\u4F7F\u7528goroutine"),f=s("\u542F\u52A8\u5355\u4E2Agoroutine"),G=s("\u542F\u52A8\u591A\u4E2Agoroutine"),w=s("\u6CE8\u610F"),q=s("goroutine\u4E0E\u7EBF\u7A0B"),y=s("\u53EF\u589E\u957F\u7684\u6808"),x=s("goroutine\u8C03\u5EA6"),P=s("END \u94FE\u63A5"),E=n("p",null,"[toc]",-1),B=n("h2",{id:"\u524D\u8A00",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),s(" \u524D\u8A00")],-1),S=n("p",null,"Goroutine\u662F\u5F88\u91CD\u8981\u7684\uFF0C\u63A5\u89E6\u4E86Go\u8BED\u8A00\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u8BED\u8A00\u8D8A\u591A\uFF0C\u8D8A\u53D1\u73B0\u8FD9\u95E8\u8BED\u8A00\u8DDFc\u8BED\u8A00\u5F88\u50CF\uFF1A\u5E73\u5766\u7684\u5185\u5B58\uFF0C\u6307\u9488\uFF0C\u7FFB\u8BD1\u673A\u5668\u6307\u4EE4\u7B49\u7B49\u3002",-1),C=s("Go\u7684"),A=n("code",null,"runtime",-1),M=s("\u63D0\u4F9B\u4E86\u4E00\u4E9B\u57FA\u672C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u62BD\u8C61\uFF0C"),O=n("code",null,"goroutine",-1),H=s("\u5BF9\u5E94\u8FDB\u7A0B\uFF0C"),D=n("code",null,"channel",-1),F=s("\u5BF9\u5E94\u8FDB\u7A0B\u95F4\u901A\u4FE1\uFF0C\u53E6\u5916Go\u6709\u81EA\u5DF1\u7684\u865A\u62DF\u5185\u5B58\u7BA1\u7406\uFF0C\u6240\u4EE5\u5982\u679C\u7528Go\u6765\u7F16\u5199\u5185\u6838\uFF0C\u8FDB\u7A0B\u8C03\u5EA6\u548C\u5185\u5B58\u7BA1\u7406\u8FD9\u4E9B\u7E41\u7410\u7684\u4E1C\u897F\u5C31\u76F4\u63A5\u53EF\u4EE5\u7528\u73B0\u6210\u7684\u4E86\uFF0C\u90A3\u4E48\u56E0\u6B64\u662F\u4E0D\u662F\u53EF\u4EE5\u5B9E\u73B0 "),N={href:"https://github.com/3293172751/cubgo-os/",target:"_blank",rel:"noopener noreferrer"},L=s("cubos-go"),V=c('<p>\u5728java/c++\u4E2D\u6211\u4EEC\u8981\u5B9E\u73B0\u5E76\u53D1\u7F16\u7A0B\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u901A\u5E38\u9700\u8981\u81EA\u5DF1\u7EF4\u62A4\u4E00\u4E2A\u7EBF\u7A0B\u6C60\uFF0C\u5E76\u4E14\u9700\u8981\u81EA\u5DF1\u53BB\u5305\u88C5\u4E00\u4E2A\u53C8\u4E00\u4E2A\u7684\u4EFB\u52A1\uFF0C\u540C\u65F6\u9700\u8981\u81EA\u5DF1\u53BB\u8C03\u5EA6\u7EBF\u7A0B\u6267\u884C\u4EFB\u52A1\u5E76\u7EF4\u62A4\u4E0A\u4E0B\u6587\u5207\u6362\uFF0C\u8FD9\u4E00\u5207\u901A\u5E38\u4F1A\u8017\u8D39\u7A0B\u5E8F\u5458\u5927\u91CF\u7684\u5FC3\u667A\u3002\u90A3\u4E48\u80FD\u4E0D\u80FD\u6709\u4E00\u79CD\u673A\u5236\uFF0C\u7A0B\u5E8F\u5458\u53EA\u9700\u8981\u5B9A\u4E49\u5F88\u591A\u4E2A\u4EFB\u52A1\uFF0C\u8BA9\u7CFB\u7EDF\u53BB\u5E2E\u52A9\u6211\u4EEC\u628A\u8FD9\u4E9B\u4EFB\u52A1\u5206\u914D\u5230CPU\u4E0A\u5B9E\u73B0\u5E76\u53D1\u6267\u884C\u5462\uFF1F</p><p>Go\u8BED\u8A00\u4E2D\u7684goroutine\u5C31\u662F\u8FD9\u6837\u4E00\u79CD\u673A\u5236\uFF0Cgoroutine\u7684\u6982\u5FF5\u7C7B\u4F3C\u4E8E\u7EBF\u7A0B\uFF0C\u4F46 goroutine\u662F\u7531Go\u7684\u8FD0\u884C\u65F6\uFF08runtime\uFF09\u8C03\u5EA6\u548C\u7BA1\u7406\u7684\u3002Go\u7A0B\u5E8F\u4F1A\u667A\u80FD\u5730\u5C06 goroutine \u4E2D\u7684\u4EFB\u52A1\u5408\u7406\u5730\u5206\u914D\u7ED9\u6BCF\u4E2ACPU\u3002Go\u8BED\u8A00\u4E4B\u6240\u4EE5\u88AB\u79F0\u4E3A\u73B0\u4EE3\u5316\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5C31\u662F\u56E0\u4E3A\u5B83\u5728\u8BED\u8A00\u5C42\u9762\u5DF2\u7ECF<strong>\u5185\u7F6E\u4E86\u8C03\u5EA6\u548C\u4E0A\u4E0B\u6587\u5207\u6362\u7684\u673A\u5236</strong>\u3002</p><p>\u5728Go\u8BED\u8A00\u7F16\u7A0B\u4E2D\u4F60\u4E0D\u9700\u8981\u53BB\u81EA\u5DF1\u5199\u8FDB\u7A0B\u3001\u7EBF\u7A0B\u3001\u534F\u7A0B\uFF0C\u4F60\u7684\u6280\u80FD\u5305\u91CC\u53EA\u6709\u4E00\u4E2A\u6280\u80FD\u2013goroutine\uFF0C\u5F53\u4F60\u9700\u8981\u8BA9\u67D0\u4E2A\u4EFB\u52A1\u5E76\u53D1\u6267\u884C\u7684\u65F6\u5019\uFF0C\u4F60\u53EA\u9700\u8981\u628A\u8FD9\u4E2A\u4EFB\u52A1\u5305\u88C5\u6210\u4E00\u4E2A\u51FD\u6570\uFF0C\u5F00\u542F\u4E00\u4E2Agoroutine\u53BB\u6267\u884C\u8FD9\u4E2A\u51FD\u6570\u5C31\u53EF\u4EE5\u4E86.</p><h2 id="\u534F\u7A0B\u548C\u7BA1\u9053" tabindex="-1"><a class="header-anchor" href="#\u534F\u7A0B\u548C\u7BA1\u9053" aria-hidden="true">#</a> \u534F\u7A0B\u548C\u7BA1\u9053</h2><blockquote><p>\u5148\u770B\u4E00\u4E2A\u9700\u6C42,\u7EDF\u8BA11~900000000000\u4E2D\u6709\u54EA\u4E9B\u7D20\u6570</p></blockquote><p><strong>\u4F20\u7EDF\u65B9\u6CD5\uFF1A\u4F7F\u7528\u4E00\u4E2A\u5FAA\u73AF\uFF0C\u5224\u65AD\u54EA\u4E9B\u6570\u662F\u7D20\u6570</strong></p><p><strong>\u4F7F\u7528\u5E76\u53D1\u6216\u5E76\u884C\u7684\u65B9\u5F0F\uFF0C==\u5C06\u7EDF\u8BA1\u7D20\u6570\u7684\u4EFB\u52A1\u5206\u914D\u4E2A\u591A\u4E2Agoroution\u5B8C\u6210==(\u901F\u5EA6\u6700\u5C11\u63D0\u9AD8\u56DB\u500D\uFF0C\u5206\u914D\u7ED9\u56DB\u4E2ACPU)</strong></p>',7),R={id:"\u8FDB\u7A0B",tabindex:"-1"},U=n("a",{class:"header-anchor",href:"#\u8FDB\u7A0B","aria-hidden":"true"},"#",-1),W=s(),I={href:"https://go.nsddd.top/markdown/18.html#%E8%BF%9B%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},K=s("#"),X=s("\u8FDB\u7A0B"),j=n("blockquote",null,[n("p",null,"\u5728\u5B66\u4E60goroutine\u4E2D\u6211\u4EEC\u9700\u8981\u719F\u6089\u4E0B\u64CD\u4F5C\u7CFB\u7EDF\u7684\u8FDB\u7A0B")],-1),z=n("ol",null,[n("li",null,[n("p",null,"\u8FDB\u7A0B\uFF1A\u8FDB\u7A0B\u5C31\u662F\u7A0B\u5E8F\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u4E00\u6B21\u6267\u884C\u8FC7\u7A0B\uFF0C\u662F\u7CFB\u7EDF\u8FDB\u884C\u8D44\u6E90\u8C03\u5EA6\u548C\u5206\u914D\u7684\u57FA\u672C\u5355\u4F4D")]),n("li",null,[n("p",null,"\u7EBF\u7A0B\uFF1A\u7EBF\u7A0B\u662F\u8FDB\u7A0B\u7684\u4E00\u4E2A\u6267\u884C\u5B9E\u4F8B\uFF0C\u662F\u7A0B\u5E8F\u6267\u884C\u7684\u4E00\u4E2A\u6700\u5C0F\u5355\u4F4D\uFF0C\u5B83\u662F\u6BD4\u8FDB\u7A0B\u8DDF\u5C0F\u80FD\u591F\u72EC\u7ACB\u5B8C\u6210\u7684\u57FA\u672C\u5355\u4F4D\u3002")])],-1),T=n("blockquote",null,[n("p",null,"\u6BD4\u5982\u6253\u5F00\u7F51\u76D8\uFF0C\u6B64\u65F6\u6253\u5F00\u7F51\u76D8\u662F\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u5982\u679C\u6211\u4EEC\u5728\u7F51\u76D8\u4E2D\u4E0B\u8F7D\u591A\u4E2A\u89C6\u9891\uFF0C\u6B64\u65F6\u4E0B\u8F7D\u5C31\u53EB\u505A\u7EBF\u7A0B\uFF0C\u7EBF\u7A0B\u5403\u7684\u8D44\u6E90\u66F4\u5C0F")],-1),Y=n("p",null,[n("strong",null,"\u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u521B\u5EFA\u6216\u8005\u9500\u6BC1\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u540C\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u7684\u591A\u4E2A\u7EBF\u7A0B\u53EF\u4EE5==\u5E76\u53D1==\u8FDB\u884C")],-1),J=n("p",null,[n("strong",null,"\u4E00\u4E2A\u7A0B\u5E8F\u81F3\u5C11\u6709\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u81F3\u5C11\u6709\u4E00\u4E2A\u7EBF\u7A0B")],-1),Q=s("\u{1F5B1}\uFE0F"),Z={href:"https://go.nsddd.top/markdown/%E5%B9%B6%E5%8F%91.html",target:"_blank",rel:"noopener noreferrer"},$=s("\u70B9\u51FB\u8FDB\u5165\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5E76\u53D1\u5B66\u4E60"),nn={id:"go\u8BED\u8A00\u534F\u7A0B\u548Cgo\u4E3B\u7EBF\u7A0B",tabindex:"-1"},sn=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00\u534F\u7A0B\u548Cgo\u4E3B\u7EBF\u7A0B","aria-hidden":"true"},"#",-1),an=s(),on={href:"https://go.nsddd.top/markdown/18.html#go%E8%AF%AD%E8%A8%80%E5%8D%8F%E7%A8%8B%E5%92%8Cgo%E4%B8%BB%E7%BA%BF%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},en=s("#"),tn=s("Go\u8BED\u8A00\u534F\u7A0B\u548CGo\u4E3B\u7EBF\u7A0B"),cn=c(`<p>Go\u8BED\u8A00\u4E3B\u7EBF\u7A0B\uFF08\u4E5F\u79F0\u4E3A\u7EBF\u7A0B\uFF0C\u4E5F\u53EF\u4EE5\u7406\u89E3\u4E3A\u8FDB\u7A0B\uFF09\uFF0C\u4E00\u4E2AGo\u8BED\u8A00\u7EBF\u7A0B\u4E0A\u53EF\u4EE5\u8D77\u591A\u4E2A\u534F\u7A0B\uFF0C<strong>\u534F\u7A0B\u662F\u8F7B\u91CF\u7EA7\u7684\u7EBF\u7A0B</strong></p><blockquote><p>\u7F16\u8BD1\u5668\u4F18\u5316</p></blockquote><p><strong>Go\u8BED\u8A00\u534F\u7A0B\u7279\u70B9\uFF08\u91CD\u8981\uFF09\uFF1A</strong></p><ul><li>\u6709\u72EC\u7ACB\u7684\u6808\u7A7A\u95F4</li><li>\u5171\u4EAB\u7A0B\u5E8F\u5806\u7A7A\u95F4</li><li>\u8C03\u5EA6\u7531\u7528\u6237\u63A7\u5236</li><li>\u534F\u7A0B\u662F\u8F7B\u91CF\u7EA7\u7684\u7EBF\u7A0B</li></ul><p><img src="https://go.nsddd.top/assets/RGvViKLpwlOXuEB.29ead913.png" alt="image-20220319135256999"></p><h2 id="\u4F7F\u7528goroutine" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528goroutine" aria-hidden="true">#</a> \u4F7F\u7528goroutine</h2><p>Go\u8BED\u8A00\u4E2D\u4F7F\u7528goroutine\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5728\u8C03\u7528\u51FD\u6570\u7684\u65F6\u5019\u5728\u524D\u9762\u52A0\u4E0Ago\u5173\u952E\u5B57\uFF0C\u5C31\u53EF\u4EE5\u4E3A\u4E00\u4E2A\u51FD\u6570\u521B\u5EFA\u4E00\u4E2Agoroutine\u3002</p><p>\u4E00\u4E2Agoroutine\u5FC5\u5B9A\u5BF9\u5E94\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2Agoroutine\u53BB\u6267\u884C\u76F8\u540C\u7684\u51FD\u6570\u3002</p><h3 id="\u542F\u52A8\u5355\u4E2Agoroutine" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5355\u4E2Agoroutine" aria-hidden="true">#</a> \u542F\u52A8\u5355\u4E2Agoroutine</h3><p>\u542F\u52A8goroutine\u7684\u65B9\u5F0F\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5728\u8C03\u7528\u7684\u51FD\u6570\uFF08\u666E\u901A\u51FD\u6570\u548C\u533F\u540D\u51FD\u6570\uFF09\u524D\u9762\u52A0\u4E0A\u4E00\u4E2Ago\u5173\u952E\u5B57\u3002</p><p><strong>\u4E3E\u4E2A\u4F8B\u5B50\u5982\u4E0B\uFF1A</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Goroutine!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main goroutine done!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u793A\u4F8B\u4E2Dhello\u51FD\u6570\u548C\u4E0B\u9762\u7684\u8BED\u53E5\u662F\u4E32\u884C\u7684\uFF0C\u6267\u884C\u7684\u7ED3\u679C\u662F\u6253\u5370\u5B8CHello Goroutine!\u540E\u6253\u5370main goroutine done!\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5728\u8C03\u7528hello\u51FD\u6570\u524D\u9762\u52A0\u4E0A\u5173\u952E\u5B57go\uFF0C\u4E5F\u5C31\u662F\u542F\u52A8\u4E00\u4E2Agoroutine\u53BB\u6267\u884Chello\u8FD9\u4E2A\u51FD\u6570\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Goroutine!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u542F\u52A8\u53E6\u5916\u4E00\u4E2Agoroutine\u53BB\u6267\u884Chello\u51FD\u6570</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main goroutine done!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E00\u6B21\u7684\u6267\u884C\u7ED3\u679C\u53EA\u6253\u5370\u4E86<code>main goroutine done!</code>\uFF0C\u5E76\u6CA1\u6709\u6253\u5370<code>Hello Goroutine!</code>\u3002\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><p>\u{1F4DC} \u5BF9\u4E0A\u9762\u7684\u89E3\u91CA\uFF1A</p><blockquote><p>\u5728\u7A0B\u5E8F\u542F\u52A8\u65F6\uFF0CGo\u7A0B\u5E8F\u5C31\u4F1A\u4E3A<code>main()</code>\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u9ED8\u8BA4\u7684<code>goroutine</code>\u3002</p><p>\u5F53<code>main()</code>\u51FD\u6570\u8FD4\u56DE\u7684\u65F6\u5019\u8BE5<code>goroutine</code>\u5C31\u7ED3\u675F\u4E86\uFF0C\u6240\u6709\u5728<code>main()</code>\u51FD\u6570\u4E2D\u542F\u52A8\u7684<code>goroutine</code>\u4F1A\u4E00\u540C\u7ED3\u675F.</p></blockquote><p>\u6240\u4EE5\u6211\u4EEC\u8981\u60F3\u529E\u6CD5\u8BA9main\u51FD\u6570\u7B49\u4E00\u7B49hello\u51FD\u6570\uFF0C\u6700\u7B80\u5355\u7C97\u66B4\u7684\u65B9\u5F0F\u5C31\u662F<code>time.Sleep</code>\u4E86\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Goroutine!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u542F\u52A8\u53E6\u5916\u4E00\u4E2Agoroutine\u53BB\u6267\u884Chello\u51FD\u6570</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main goroutine done!&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u4EE3\u7801\u4F60\u4F1A\u53D1\u73B0\uFF0C\u8FD9\u4E00\u6B21\u5148\u6253\u5370<code>main goroutine done!</code>\uFF0C\u7136\u540E\u7D27\u63A5\u7740\u6253\u5370<code>Hello Goroutine!</code>\u3002</p><p>\u9996\u5148\u4E3A\u4EC0\u4E48\u4F1A\u5148\u6253\u5370<code>main goroutine done!</code>\u662F\u56E0\u4E3A\u6211\u4EEC\u5728\u521B\u5EFA\u65B0\u7684<code>goroutine</code>\u7684\u65F6\u5019\u9700\u8981\u82B1\u8D39\u4E00\u4E9B\u65F6\u95F4\uFF0C\u800C\u6B64\u65F6<code>main</code>\u51FD\u6570\u6240\u5728\u7684<code>goroutine</code>\u662F\u7EE7\u7EED\u6267\u884C\u7684\u3002</p><h3 id="\u542F\u52A8\u591A\u4E2Agoroutine" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u591A\u4E2Agoroutine" aria-hidden="true">#</a> \u542F\u52A8\u591A\u4E2Agoroutine</h3><p>\u5728Go\u8BED\u8A00\u4E2D\u5B9E\u73B0\u5E76\u53D1\u5C31\u662F\u8FD9\u6837\u7B80\u5355\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u542F\u52A8\u591A\u4E2A<code>goroutine</code>\u3002\u8BA9\u6211\u4EEC\u518D\u6765\u4E00\u4E2A\u4F8B\u5B50\uFF1A \uFF08\u8FD9\u91CC\u4F7F\u7528\u4E86<code>sync.WaitGroup</code>\u6765\u5B9E\u73B0<code>goroutine</code>\u7684\u540C\u6B65\uFF09</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// goroutine\u7ED3\u675F\u5C31\u767B\u8BB0-1</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Goroutine!&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u542F\u52A8\u4E00\u4E2Agoroutine\u5C31\u767B\u8BB0+1</span>
        <span class="token keyword">go</span> <span class="token function">hello</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>   <span class="token comment">//\u8FD9\u4E2A\u5C82\u4E0D\u662F\u542F\u52A8\u4E86\u5341\u6B21</span>
    <span class="token punctuation">}</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u7B49\u5F85\u6240\u6709\u767B\u8BB0\u7684goroutine\u90FD\u7ED3\u675F</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u591A\u6B21\u6267\u884C\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u4F1A\u53D1\u73B0\u6BCF\u6B21\u6253\u5370\u7684\u6570\u5B57\u7684\u987A\u5E8F\u90FD\u4E0D\u4E00\u81F4\u3002\u8FD9\u662F\u56E0\u4E3A10\u4E2A<code>goroutine</code>\u662F\u5E76\u53D1\u6267\u884C\u7684\uFF0C\u800C<code>goroutine</code>\u7684\u8C03\u5EA6\u662F\u968F\u673A\u7684\u3002</p><h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h3><ul><li>\u5982\u679C\u4E3B\u534F\u7A0B\u9000\u51FA\u4E86\uFF0C\u5176\u4ED6\u4EFB\u52A1\u8FD8\u6267\u884C\u5417\uFF08\u8FD0\u884C\u4E0B\u9762\u7684\u4EE3\u7801\u6D4B\u8BD5\u4E00\u4E0B\u5427\uFF09</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5408\u8D77\u6765\u5199</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i <span class="token operator">:=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;new goroutine: i = %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
            time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    i <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        i<span class="token operator">++</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;main goroutine: i = %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="goroutine\u4E0E\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#goroutine\u4E0E\u7EBF\u7A0B" aria-hidden="true">#</a> goroutine\u4E0E\u7EBF\u7A0B</h2><h3 id="\u53EF\u589E\u957F\u7684\u6808" tabindex="-1"><a class="header-anchor" href="#\u53EF\u589E\u957F\u7684\u6808" aria-hidden="true">#</a> \u53EF\u589E\u957F\u7684\u6808</h3><p>OS\u7EBF\u7A0B\uFF08\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\uFF09\u4E00\u822C\u90FD\u6709\u56FA\u5B9A\u7684\u6808\u5185\u5B58\uFF08\u901A\u5E38\u4E3A2MB\uFF09\uFF0C\u4E00\u4E2Agoroutine\u7684\u6808\u5728\u5176\u751F\u547D\u5468\u671F\u5F00\u59CB\u65F6\u53EA\u6709\u5F88\u5C0F\u7684\u6808\uFF08\u5178\u578B\u60C5\u51B5\u4E0B2KB\uFF09\uFF0Cgoroutine\u7684\u6808\u4E0D\u662F\u56FA\u5B9A\u7684\uFF0C\u4ED6\u53EF\u4EE5\u6309\u9700\u589E\u5927\u548C\u7F29\u5C0F\uFF0Cgoroutine\u7684\u6808\u5927\u5C0F\u9650\u5236\u53EF\u4EE5\u8FBE\u52301GB\uFF0C\u867D\u7136\u6781\u5C11\u4F1A\u7528\u5230\u8FD9\u4E2A\u5927\u3002\u6240\u4EE5\u5728Go\u8BED\u8A00\u4E2D\u4E00\u6B21\u521B\u5EFA\u5341\u4E07\u5DE6\u53F3\u7684goroutine\u4E5F\u662F\u53EF\u4EE5\u7684\u3002</p><h3 id="goroutine\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#goroutine\u8C03\u5EA6" aria-hidden="true">#</a> goroutine\u8C03\u5EA6</h3><p>GPM\u662FGo\u8BED\u8A00\u8FD0\u884C\u65F6\uFF08runtime\uFF09\u5C42\u9762\u7684\u5B9E\u73B0\uFF0C\u662Fgo\u8BED\u8A00\u81EA\u5DF1\u5B9E\u73B0\u7684\u4E00\u5957\u8C03\u5EA6\u7CFB\u7EDF\u3002\u533A\u522B\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u8C03\u5EA6OS\u7EBF\u7A0B\u3002</p><ul><li><code>G</code>\u5F88\u597D\u7406\u89E3\uFF0C\u5C31\u662F\u4E2A<code>goroutine</code>\u7684\uFF0C\u91CC\u9762\u9664\u4E86\u5B58\u653E\u672Cgoroutine\u4FE1\u606F\u5916 \u8FD8\u6709\u4E0E\u6240\u5728P\u7684\u7ED1\u5B9A\u7B49\u4FE1\u606F\u3002</li><li><code>P</code>\u7BA1\u7406\u7740\u4E00\u7EC4goroutine\u961F\u5217\uFF0CP\u91CC\u9762\u4F1A\u5B58\u50A8\u5F53\u524Dgoroutine\u8FD0\u884C\u7684\u4E0A\u4E0B\u6587\u73AF\u5883\uFF08\u51FD\u6570\u6307\u9488\uFF0C\u5806\u6808\u5730\u5740\u53CA\u5730\u5740\u8FB9\u754C\uFF09\uFF0CP\u4F1A\u5BF9\u81EA\u5DF1\u7BA1\u7406\u7684goroutine\u961F\u5217\u505A\u4E00\u4E9B\u8C03\u5EA6\uFF08\u6BD4\u5982\u628A\u5360\u7528CPU\u65F6\u95F4\u8F83\u957F\u7684goroutine\u6682\u505C\u3001\u8FD0\u884C\u540E\u7EED\u7684goroutine\u7B49\u7B49\uFF09\u5F53\u81EA\u5DF1\u7684\u961F\u5217\u6D88\u8D39\u5B8C\u4E86\u5C31\u53BB\u5168\u5C40\u961F\u5217\u91CC\u53D6\uFF0C\u5982\u679C\u5168\u5C40\u961F\u5217\u91CC\u4E5F\u6D88\u8D39\u5B8C\u4E86\u4F1A\u53BB\u5176\u4ED6P\u7684\u961F\u5217\u91CC\u62A2\u4EFB\u52A1\u3002</li><li><code>M</code>\uFF08machine\uFF09\u662FGo\u8FD0\u884C\u65F6\uFF08runtime\uFF09\u5BF9\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u7EBF\u7A0B\u7684\u865A\u62DF\uFF0C M\u4E0E\u5185\u6838\u7EBF\u7A0B\u4E00\u822C\u662F\u4E00\u4E00\u6620\u5C04\u7684\u5173\u7CFB\uFF0C \u4E00\u4E2Agroutine\u6700\u7EC8\u662F\u8981\u653E\u5230M\u4E0A\u6267\u884C\u7684\uFF1B</li></ul><p>P\u4E0EM\u4E00\u822C\u4E5F\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\u3002\u4ED6\u4EEC\u5173\u7CFB\u662F\uFF1A P\u7BA1\u7406\u7740\u4E00\u7EC4G\u6302\u8F7D\u5728M\u4E0A\u8FD0\u884C\u3002\u5F53\u4E00\u4E2AG\u957F\u4E45\u963B\u585E\u5728\u4E00\u4E2AM\u4E0A\u65F6\uFF0C<code>runtime</code>\u4F1A\u65B0\u5EFA\u4E00\u4E2AM\uFF0C\u963B\u585EG\u6240\u5728\u7684P\u4F1A\u628A\u5176\u4ED6\u7684G \u6302\u8F7D\u5728\u65B0\u5EFA\u7684M\u4E0A\u3002\u5F53\u65E7\u7684G\u963B\u585E\u5B8C\u6210\u6216\u8005\u8BA4\u4E3A\u5176\u5DF2\u7ECF\u6B7B\u6389\u65F6 \u56DE\u6536\u65E7\u7684M\u3002</p><p>P\u7684\u4E2A\u6570\u662F\u901A\u8FC7<code>runtime.GOMAXPROCS</code>\u8BBE\u5B9A\uFF08\u6700\u5927256\uFF09\uFF0C<code>Go1.5</code>\u7248\u672C\u4E4B\u540E\u9ED8\u8BA4\u4E3A\u7269\u7406\u7EBF\u7A0B\u6570\u3002 \u5728\u5E76\u53D1\u91CF\u5927\u7684\u65F6\u5019\u4F1A\u589E\u52A0\u4E00\u4E9BP\u548CM\uFF0C\u4F46\u4E0D\u4F1A\u592A\u591A\uFF0C\u5207\u6362\u592A\u9891\u7E41\u7684\u8BDD\u5F97\u4E0D\u507F\u5931\u3002</p><p>\u5355\u4ECE\u7EBF\u7A0B\u8C03\u5EA6\u8BB2\uFF0CGo\u8BED\u8A00\u76F8\u6BD4\u8D77\u5176\u4ED6\u8BED\u8A00\u7684\u4F18\u52BF\u5728\u4E8EOS\u7EBF\u7A0B\u662F\u7531OS\u5185\u6838\u6765\u8C03\u5EA6\u7684\uFF0Cgoroutine\u5219\u662F\u7531Go\u8FD0\u884C\u65F6\uFF08runtime\uFF09\u81EA\u5DF1\u7684\u8C03\u5EA6\u5668\u8C03\u5EA6\u7684\uFF0C\u8FD9\u4E2A\u8C03\u5EA6\u5668\u4F7F\u7528\u4E00\u4E2A\u79F0\u4E3A<code>m:n</code>\u8C03\u5EA6\u7684\u6280\u672F\uFF08\u590D\u7528/\u8C03\u5EA6m\u4E2A<code>goroutine</code>\u5230n\u4E2AOS\u7EBF\u7A0B\uFF09\u3002 \u5176\u4E00\u5927\u7279\u70B9\u662F<code>goroutine</code>\u7684\u8C03\u5EA6\u662F\u5728\u7528\u6237\u6001\u4E0B\u5B8C\u6210\u7684\uFF0C \u4E0D\u6D89\u53CA\u5185\u6838\u6001\u4E0E\u7528\u6237\u6001\u4E4B\u95F4\u7684\u9891\u7E41\u5207\u6362\uFF0C\u5305\u62EC\u5185\u5B58\u7684\u5206\u914D\u4E0E\u91CA\u653E\uFF0C\u90FD\u662F\u5728\u7528\u6237\u6001\u7EF4\u62A4\u7740\u4E00\u5757\u5927\u7684\u5185\u5B58\u6C60\uFF0C \u4E0D\u76F4\u63A5\u8C03\u7528\u7CFB\u7EDF\u7684<code>malloc</code>\u51FD\u6570\uFF08\u9664\u975E\u5185\u5B58\u6C60\u9700\u8981\u6539\u53D8\uFF09\uFF0C\u6210\u672C\u6BD4\u8C03\u5EA6OS\u7EBF\u7A0B\u4F4E\u5F88\u591A\u3002 \u53E6\u4E00\u65B9\u9762\u5145\u5206\u5229\u7528\u4E86\u591A\u6838\u7684\u786C\u4EF6\u8D44\u6E90\uFF0C\u8FD1\u4F3C\u7684\u628A\u82E5\u5E72<code>goroutine</code>\u5747\u5206\u5728\u7269\u7406\u7EBF\u7A0B\u4E0A\uFF0C \u518D\u52A0\u4E0A\u672C\u8EAB<code>goroutine</code>\u7684\u8D85\u8F7B\u91CF\uFF0C\u4EE5\u4E0A\u79CD\u79CD\u4FDD\u8BC1\u4E86go\u8C03\u5EA6\u65B9\u9762\u7684\u6027\u80FD\u3002</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="8.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="10.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,40),pn=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),ln={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},un=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),dn=s(")"),rn=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),kn={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},gn=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function hn(mn,vn){const e=i("router-link"),t=i("ExternalLinkIcon"),p=i("RouterLink");return u(),d("div",null,[k,n("nav",g,[n("ul",null,[n("li",null,[a(e,{to:"#\u524D\u8A00"},{default:o(()=>[h]),_:1})]),n("li",null,[a(e,{to:"#\u534F\u7A0B\u548C\u7BA1\u9053"},{default:o(()=>[m]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#\u8FDB\u7A0B"},{default:o(()=>[v]),_:1})]),n("li",null,[a(e,{to:"#go\u8BED\u8A00\u534F\u7A0B\u548Cgo\u4E3B\u7EBF\u7A0B"},{default:o(()=>[_]),_:1})])])]),n("li",null,[a(e,{to:"#\u4F7F\u7528goroutine"},{default:o(()=>[b]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#\u542F\u52A8\u5355\u4E2Agoroutine"},{default:o(()=>[f]),_:1})]),n("li",null,[a(e,{to:"#\u542F\u52A8\u591A\u4E2Agoroutine"},{default:o(()=>[G]),_:1})]),n("li",null,[a(e,{to:"#\u6CE8\u610F"},{default:o(()=>[w]),_:1})])])]),n("li",null,[a(e,{to:"#goroutine\u4E0E\u7EBF\u7A0B"},{default:o(()=>[q]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#\u53EF\u589E\u957F\u7684\u6808"},{default:o(()=>[y]),_:1})]),n("li",null,[a(e,{to:"#goroutine\u8C03\u5EA6"},{default:o(()=>[x]),_:1})])])]),n("li",null,[a(e,{to:"#end-\u94FE\u63A5"},{default:o(()=>[P]),_:1})])])]),E,B,n("blockquote",null,[S,n("p",null,[C,A,M,O,H,D,F,n("a",N,[L,a(t)])])]),V,n("h3",R,[U,W,n("a",I,[K,a(t)]),X]),j,z,T,Y,J,n("p",null,[Q,n("a",Z,[$,a(t)])]),n("h3",nn,[sn,an,n("a",on,[en,a(t)]),tn]),cn,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/Gomd_super/"},{default:o(()=>[pn]),_:1})])]),n("li",null,[n("p",null,[n("a",ln,[un,a(t)]),dn])]),n("li",null,[n("p",null,[rn,n("a",kn,[gn,a(t)])])])])])}const bn=l(r,[["render",hn],["__file","9.html.vue"]]);export{bn as default};