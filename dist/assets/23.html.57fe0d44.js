import{_ as l,r as e,o as c,c as u,a as n,b as a,w as t,e as s,d as r}from"./app.798d5e9d.js";const d={},k=n("h1",{id:"update\u64CD\u4F5C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#update\u64CD\u4F5C","aria-hidden":"true"},"#"),s(" Update\u64CD\u4F5C")],-1),v={class:"table-of-contents"},m=s("update\u64CD\u4F5C"),b=s("END \u94FE\u63A5"),_=r(`<p>[toc]</p><h2 id="update\u64CD\u4F5C-1" tabindex="-1"><a class="header-anchor" href="#update\u64CD\u4F5C-1" aria-hidden="true">#</a> update\u64CD\u4F5C</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>

    <span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
    <span class="token string">&quot;github.com/jmoiron/sqlx&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    UserId   <span class="token builtin">int</span>    <span class="token string">\`db:&quot;user_id&quot;\`</span>
    Username <span class="token builtin">string</span> <span class="token string">\`db:&quot;username&quot;\`</span>
    Sex      <span class="token builtin">string</span> <span class="token string">\`db:&quot;sex&quot;\`</span>
    Email    <span class="token builtin">string</span> <span class="token string">\`db:&quot;email&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Place <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Country <span class="token builtin">string</span> <span class="token string">\`db:&quot;country&quot;\`</span>
    City    <span class="token builtin">string</span> <span class="token string">\`db:&quot;city&quot;\`</span>
    TelCode <span class="token builtin">int</span>    <span class="token string">\`db:&quot;telcode&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> Db <span class="token operator">*</span>sqlx<span class="token punctuation">.</span>DB

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    database<span class="token punctuation">,</span> err <span class="token operator">:=</span> sqlx<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root:root@tcp(127.0.0.1:3306)/test&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;open mysql failed,&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    Db <span class="token operator">=</span> database
    <span class="token keyword">defer</span> db<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// \u6CE8\u610F\u8FD9\u884C\u4EE3\u7801\u8981\u5199\u5728\u4E0A\u9762err\u5224\u65AD\u7684\u4E0B\u9762</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    res<span class="token punctuation">,</span> err <span class="token operator">:=</span> Db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token string">&quot;update person set username=? where user_id=?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stu0003&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;exec failed, &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    row<span class="token punctuation">,</span> err <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">RowsAffected</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;rows failed, &quot;</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;update succ:&quot;</span><span class="token punctuation">,</span>row<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><p>\u7B2C\u4E00\u6B21\u8FD0\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    update succ: 1
    #\u53D7\u5F71\u54CD\u7684\u884C\u6570 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u6B21\u8FD0\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    update succ: 0
    #\u53D7\u5F71\u54CD\u7684\u884C\u6570 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="22.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="24.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,10),f=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),h={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},g=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),q=s(")"),y=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),x={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},w=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function E(C,D){const i=e("router-link"),p=e("RouterLink"),o=e("ExternalLinkIcon");return c(),u("div",null,[k,n("nav",v,[n("ul",null,[n("li",null,[a(i,{to:"#update\u64CD\u4F5C-1"},{default:t(()=>[m]),_:1})]),n("li",null,[a(i,{to:"#end-\u94FE\u63A5"},{default:t(()=>[b]),_:1})])])]),_,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/Gomd_super/"},{default:t(()=>[f]),_:1})])]),n("li",null,[n("p",null,[n("a",h,[g,a(o)]),q])]),n("li",null,[n("p",null,[y,n("a",x,[w,a(o)])])])])])}const P=l(d,[["render",E],["__file","23.html.vue"]]);export{P as default};
