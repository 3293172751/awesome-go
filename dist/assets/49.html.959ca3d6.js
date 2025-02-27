import{_ as o,r as e,o as i,c,a as n,b as a,w as l,d as u,e as s}from"./app.798d5e9d.js";const k={},r=u(`<h1 id="_1-topic\u6A21\u5F0F-\u8BDD\u9898\u6A21\u5F0F-\u4E00\u4E2A\u6D88\u606F\u88AB\u591A\u4E2A\u6D88\u8D39\u8005\u83B7\u53D6-\u6D88\u606F\u7684\u76EE\u6807queue\u53EF\u7528bindingkey\u4EE5\u901A\u914D\u7B26-\u4E00\u4E2A\u6216\u591A\u4E2A\u8BCD-\u4E00\u4E2A\u8BCD-\u7684\u65B9\u5F0F\u6307\u5B9A" tabindex="-1"><a class="header-anchor" href="#_1-topic\u6A21\u5F0F-\u8BDD\u9898\u6A21\u5F0F-\u4E00\u4E2A\u6D88\u606F\u88AB\u591A\u4E2A\u6D88\u8D39\u8005\u83B7\u53D6-\u6D88\u606F\u7684\u76EE\u6807queue\u53EF\u7528bindingkey\u4EE5\u901A\u914D\u7B26-\u4E00\u4E2A\u6216\u591A\u4E2A\u8BCD-\u4E00\u4E2A\u8BCD-\u7684\u65B9\u5F0F\u6307\u5B9A" aria-hidden="true">#</a> 1. Topic\u6A21\u5F0F\uFF08\u8BDD\u9898\u6A21\u5F0F\uFF0C\u4E00\u4E2A\u6D88\u606F\u88AB\u591A\u4E2A\u6D88\u8D39\u8005\u83B7\u53D6\uFF0C\u6D88\u606F\u7684\u76EE\u6807queue\u53EF\u7528BindingKey\u4EE5\u901A\u914D\u7B26\uFF0C\uFF08#\uFF1A\u4E00\u4E2A\u6216\u591A\u4E2A\u8BCD\uFF0C*\uFF1A\u4E00\u4E2A\u8BCD\uFF09\u7684\u65B9\u5F0F\u6307\u5B9A</h1><p><img src="https://s2.loli.net/2022/04/10/qHPNTDr6FUklQhi.jpg" alt="img"></p><ul><li>\u661F\u53F7\u4E95\u53F7\u4EE3\u8868\u901A\u914D\u7B26</li><li>\u661F\u53F7\u4EE3\u8868\u591A\u4E2A\u5355\u8BCD,\u4E95\u53F7\u4EE3\u8868\u4E00\u4E2A\u5355\u8BCD</li><li>\u8DEF\u7531\u529F\u80FD\u6DFB\u52A0\u6A21\u7CCA\u5339\u914D</li><li>\u6D88\u606F\u4EA7\u751F\u8005\u4EA7\u751F\u6D88\u606F,\u628A\u6D88\u606F\u4EA4\u7ED9\u4EA4\u6362\u673A</li><li>\u4EA4\u6362\u673A\u6839\u636Ekey\u7684\u89C4\u5219\u6A21\u7CCA\u5339\u914D\u5230\u5BF9\u5E94\u7684\u961F\u5217,\u7531\u961F\u5217\u7684\u76D1\u542C\u6D88\u8D39\u8005\u63A5\u6536\u6D88\u606F\u6D88\u8D39</li></ul><p>\u76EE\u5F55\u7ED3\u6784</p><p><img src="https://s2.loli.net/2022/04/10/bTEpswgJ5KqCetM.png" alt="img"></p><p>kuteng-RabbitMQ</p><p>-RabbitMQ</p><p>--rabitmq.go //\u8FD9\u4E2A\u662FRabbitMQ\u7684\u5C01\u88C5</p><p>-publish</p><p>--mainpublish.go //Publish \u5148\u542F\u52A8</p><p>-recieve1</p><p>--mainrecieve.go</p><p>-recieve2</p><p>--mainrecieve.go</p><p>rabitmq.go\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> RabbitMQ

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;log&quot;</span>

    <span class="token string">&quot;github.com/streadway/amqp&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u8FDE\u63A5\u4FE1\u606F</span>
<span class="token keyword">const</span> MQURL <span class="token operator">=</span> <span class="token string">&quot;amqp://kuteng:kuteng@127.0.0.1:5672/kuteng&quot;</span>

<span class="token comment">//rabbitMQ\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> RabbitMQ <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    conn    <span class="token operator">*</span>amqp<span class="token punctuation">.</span>Connection
    channel <span class="token operator">*</span>amqp<span class="token punctuation">.</span>Channel
    <span class="token comment">//\u961F\u5217\u540D\u79F0</span>
    QueueName <span class="token builtin">string</span>
    <span class="token comment">//\u4EA4\u6362\u673A\u540D\u79F0</span>
    Exchange <span class="token builtin">string</span>
    <span class="token comment">//bind Key \u540D\u79F0</span>
    Key <span class="token builtin">string</span>
    <span class="token comment">//\u8FDE\u63A5\u4FE1\u606F</span>
    Mqurl <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u521B\u5EFA\u7ED3\u6784\u4F53\u5B9E\u4F8B</span>
<span class="token keyword">func</span> <span class="token function">NewRabbitMQ</span><span class="token punctuation">(</span>queueName <span class="token builtin">string</span><span class="token punctuation">,</span> exchange <span class="token builtin">string</span><span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>RabbitMQ <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>RabbitMQ<span class="token punctuation">{</span>QueueName<span class="token punctuation">:</span> queueName<span class="token punctuation">,</span> Exchange<span class="token punctuation">:</span> exchange<span class="token punctuation">,</span> Key<span class="token punctuation">:</span> key<span class="token punctuation">,</span> Mqurl<span class="token punctuation">:</span> MQURL<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u65AD\u5F00channel \u548C connection</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">Destory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span>conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u9519\u8BEF\u5904\u7406\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">failOnErr</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">,</span> message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%s&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%s&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u8BDD\u9898\u6A21\u5F0F</span>
<span class="token comment">//\u521B\u5EFARabbitMQ\u5B9E\u4F8B</span>
<span class="token keyword">func</span> <span class="token function">NewRabbitMQTopic</span><span class="token punctuation">(</span>exchangeName <span class="token builtin">string</span><span class="token punctuation">,</span> routingKey <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>RabbitMQ <span class="token punctuation">{</span>
    <span class="token comment">//\u521B\u5EFARabbitMQ\u5B9E\u4F8B</span>
    rabbitmq <span class="token operator">:=</span> <span class="token function">NewRabbitMQ</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> exchangeName<span class="token punctuation">,</span> routingKey<span class="token punctuation">)</span>
    <span class="token keyword">var</span> err <span class="token builtin">error</span>
    <span class="token comment">//\u83B7\u53D6connection</span>
    rabbitmq<span class="token punctuation">.</span>conn<span class="token punctuation">,</span> err <span class="token operator">=</span> amqp<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span>rabbitmq<span class="token punctuation">.</span>Mqurl<span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;failed to connect rabbitmq!&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">//\u83B7\u53D6channel</span>
    rabbitmq<span class="token punctuation">.</span>channel<span class="token punctuation">,</span> err <span class="token operator">=</span> rabbitmq<span class="token punctuation">.</span>conn<span class="token punctuation">.</span><span class="token function">Channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;failed to open a channel&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> rabbitmq
<span class="token punctuation">}</span>

<span class="token comment">//\u8BDD\u9898\u6A21\u5F0F\u53D1\u9001\u6D88\u606F</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">PublishTopic</span><span class="token punctuation">(</span>message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.\u5C1D\u8BD5\u521B\u5EFA\u4EA4\u6362\u673A</span>
    err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">ExchangeDeclare</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        <span class="token comment">//\u8981\u6539\u6210topic</span>
        <span class="token string">&quot;topic&quot;</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    r<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;Failed to declare an excha&quot;</span><span class="token operator">+</span>
        <span class="token string">&quot;nge&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">//2.\u53D1\u9001\u6D88\u606F</span>
    err <span class="token operator">=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Publish</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        <span class="token comment">//\u8981\u8BBE\u7F6E</span>
        r<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        amqp<span class="token punctuation">.</span>Publishing<span class="token punctuation">{</span>
            ContentType<span class="token punctuation">:</span> <span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">,</span>
            Body<span class="token punctuation">:</span>        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u8BDD\u9898\u6A21\u5F0F\u63A5\u53D7\u6D88\u606F</span>
<span class="token comment">//\u8981\u6CE8\u610Fkey,\u89C4\u5219</span>
<span class="token comment">//\u5176\u4E2D\u201C*\u201D\u7528\u4E8E\u5339\u914D\u4E00\u4E2A\u5355\u8BCD\uFF0C\u201C#\u201D\u7528\u4E8E\u5339\u914D\u591A\u4E2A\u5355\u8BCD\uFF08\u53EF\u4EE5\u662F\u96F6\u4E2A\uFF09</span>
<span class="token comment">//\u5339\u914D kuteng.* \u8868\u793A\u5339\u914D kuteng.hello, kuteng.hello.one\u9700\u8981\u7528kuteng.#\u624D\u80FD\u5339\u914D\u5230</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">RecieveTopic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.\u8BD5\u63A2\u6027\u521B\u5EFA\u4EA4\u6362\u673A</span>
    err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">ExchangeDeclare</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        <span class="token comment">//\u4EA4\u6362\u673A\u7C7B\u578B</span>
        <span class="token string">&quot;topic&quot;</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;Failed to declare an exch&quot;</span><span class="token operator">+</span>
        <span class="token string">&quot;ange&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">//2.\u8BD5\u63A2\u6027\u521B\u5EFA\u961F\u5217\uFF0C\u8FD9\u91CC\u6CE8\u610F\u961F\u5217\u540D\u79F0\u4E0D\u8981\u5199</span>
    q<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">QueueDeclare</span><span class="token punctuation">(</span>
        <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u968F\u673A\u751F\u4EA7\u961F\u5217\u540D\u79F0</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;Failed to declare a queue&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">//\u7ED1\u5B9A\u961F\u5217\u5230 exchange \u4E2D</span>
    err <span class="token operator">=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">QueueBind</span><span class="token punctuation">(</span>
        q<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>
        <span class="token comment">//\u5728pub/sub\u6A21\u5F0F\u4E0B\uFF0C\u8FD9\u91CC\u7684key\u8981\u4E3A\u7A7A</span>
        r<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">)</span>

    <span class="token comment">//\u6D88\u8D39\u6D88\u606F</span>
    messges<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Consume</span><span class="token punctuation">(</span>
        q<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>
        <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    forever <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> d <span class="token operator">:=</span> <span class="token keyword">range</span> messges <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Received a message: %s&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u9000\u51FA\u8BF7\u6309 CTRL+C\\n&quot;</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;-</span>forever
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mainpublish.go\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;strconv&quot;</span>
    <span class="token string">&quot;time&quot;</span>

    <span class="token string">&quot;github.com/student/kuteng-RabbitMQ/RabbitMQ&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    kutengOne <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQTopic</span><span class="token punctuation">(</span><span class="token string">&quot;exKutengTopic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;kuteng.topic.one&quot;</span><span class="token punctuation">)</span>
    kutengTwo <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQTopic</span><span class="token punctuation">(</span><span class="token string">&quot;exKutengTopic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;kuteng.topic.two&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        kutengOne<span class="token punctuation">.</span><span class="token function">PublishTopic</span><span class="token punctuation">(</span><span class="token string">&quot;Hello kuteng topic one!&quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        kutengTwo<span class="token punctuation">.</span><span class="token function">PublishTopic</span><span class="token punctuation">(</span><span class="token string">&quot;Hello kuteng topic Two!&quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>recieve1/mainrecieve.go\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/student/kuteng-RabbitMQ/RabbitMQ&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    kutengOne <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQTopic</span><span class="token punctuation">(</span><span class="token string">&quot;exKutengTopic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#&quot;</span><span class="token punctuation">)</span>
    kutengOne<span class="token punctuation">.</span><span class="token function">RecieveTopic</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>recieve2/mainrecieve.go\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/student/kuteng-RabbitMQ/RabbitMQ&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    kutengOne <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQTopic</span><span class="token punctuation">(</span><span class="token string">&quot;exKutengTopic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;kuteng.*.two&quot;</span><span class="token punctuation">)</span>
    kutengOne<span class="token punctuation">.</span><span class="token function">RecieveTopic</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="48.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="50.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,24),d=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),v={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},b=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),m=s(")"),g=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),f={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},q=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function h(y,w){const p=e("RouterLink"),t=e("ExternalLinkIcon");return i(),c("div",null,[r,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/Gomd_super/"},{default:l(()=>[d]),_:1})])]),n("li",null,[n("p",null,[n("a",v,[b,a(t)]),m])]),n("li",null,[n("p",null,[g,n("a",f,[q,a(t)])])])])])}const Q=o(k,[["render",h],["__file","49.html.vue"]]);export{Q as default};
