import{_ as o,r as e,o as c,c as i,a as n,b as a,w as l,e as u,d as s}from"./app.f483d28b.js";const r={},d=u(`<h1 id="_1-redis\u8FDE\u63A5\u6C60" tabindex="-1"><a class="header-anchor" href="#_1-redis\u8FDE\u63A5\u6C60" aria-hidden="true">#</a> 1. Redis\u8FDE\u63A5\u6C60</h1><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;github.com/garyburd/redigo/redis&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> pool <span class="token operator">*</span>redis<span class="token punctuation">.</span>Pool  <span class="token comment">//\u521B\u5EFAredis\u8FDE\u63A5\u6C60</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    pool <span class="token operator">=</span> <span class="token operator">&amp;</span>redis<span class="token punctuation">.</span>Pool<span class="token punctuation">{</span>     <span class="token comment">//\u5B9E\u4F8B\u5316\u4E00\u4E2A\u8FDE\u63A5\u6C60</span>
        MaxIdle<span class="token punctuation">:</span><span class="token number">16</span><span class="token punctuation">,</span>    <span class="token comment">//\u6700\u521D\u7684\u8FDE\u63A5\u6570\u91CF</span>
        <span class="token comment">// MaxActive:1000000,    //\u6700\u5927\u8FDE\u63A5\u6570\u91CF</span>
        MaxActive<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>    <span class="token comment">//\u8FDE\u63A5\u6C60\u6700\u5927\u8FDE\u63A5\u6570\u91CF,\u4E0D\u786E\u5B9A\u53EF\u4EE5\u75280\uFF080\u8868\u793A\u81EA\u52A8\u5B9A\u4E49\uFF09\uFF0C\u6309\u9700\u5206\u914D</span>
        IdleTimeout<span class="token punctuation">:</span><span class="token number">300</span><span class="token punctuation">,</span>    <span class="token comment">//\u8FDE\u63A5\u5173\u95ED\u65F6\u95F4 300\u79D2 \uFF08300\u79D2\u4E0D\u4F7F\u7528\u81EA\u52A8\u5173\u95ED\uFF09    </span>
        Dial<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>redis<span class="token punctuation">.</span>Conn <span class="token punctuation">,</span><span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>     <span class="token comment">//\u8981\u8FDE\u63A5\u7684redis\u6570\u636E\u5E93</span>
            <span class="token keyword">return</span> redis<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:6379&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    c <span class="token operator">:=</span> pool<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u4ECE\u8FDE\u63A5\u6C60\uFF0C\u53D6\u4E00\u4E2A\u94FE\u63A5</span>
    <span class="token keyword">defer</span> c<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u51FD\u6570\u8FD0\u884C\u7ED3\u675F \uFF0C\u628A\u8FDE\u63A5\u653E\u56DE\u8FDE\u63A5\u6C60</span>

        <span class="token boolean">_</span><span class="token punctuation">,</span>err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token string">&quot;Set&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        r<span class="token punctuation">,</span>err <span class="token operator">:=</span> redis<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token string">&quot;Get&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;get abc faild :&quot;</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
        pool<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u5173\u95ED\u8FDE\u63A5\u6C60</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Redis\u547D\u4EE4\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    127.0.0.1:6379&gt; get abc
    &quot;200&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="32.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="34.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,8),k=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),v={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),f=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),_={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},h=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function g(x,q){const p=e("RouterLink"),t=e("ExternalLinkIcon");return c(),i("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/Gomd_super/"},{default:l(()=>[k]),_:1})])]),n("li",null,[n("p",null,[n("a",v,[m,a(t)]),b])]),n("li",null,[n("p",null,[f,n("a",_,[h,a(t)])])])])])}const y=o(r,[["render",g],["__file","33.html.vue"]]);export{y as default};