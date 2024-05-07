import{_ as i,c as s,o as a,a4 as p}from"./chunks/framework.IpiIUH1b.js";const m=JSON.parse('{"title":"CPU飙升","description":"","frontmatter":{},"headers":[],"relativePath":"nav/日常积累/CPU飙升排查/CPU飙升排查.md","filePath":"nav/日常积累/CPU飙升排查/CPU飙升排查.md","lastUpdated":null}'),t={name:"nav/日常积累/CPU飙升排查/CPU飙升排查.md"},l=p(`<h1 id="cpu飙升" tabindex="-1">CPU飙升 <a class="header-anchor" href="#cpu飙升" aria-label="Permalink to &quot;CPU飙升&quot;">​</a></h1><p>线上资源cpu飙升是我们工作中常见的问题，一篇文章搞定排查方法</p><h2 id="一、问题复现" tabindex="-1">一、问题复现 <a class="header-anchor" href="#一、问题复现" aria-label="Permalink to &quot;一、问题复现&quot;">​</a></h2><ul><li>现在我有两个接口，代码如下</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RestController</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CPUCheck</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">helloWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/run&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>代码很简单 接口1“/hello” 返回“hello World”，接口2“/run” 进入死循环，这样就保证了访问接口2cpu升高。</li></ul><h2 id="二、测试" tabindex="-1">二、测试 <a class="header-anchor" href="#二、测试" aria-label="Permalink to &quot;二、测试&quot;">​</a></h2><ol><li>我们将项目打包部署在服务器上，并启动</li></ol><p><img src="https://p.ipic.vip/6d32k1.jpg#from=url&amp;id=PFIS9&amp;originHeight=61&amp;originWidth=796&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><ol><li>测试接口</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>curl http://localhost:9901/thing-test/hello</span></span></code></pre></div><p><img src="https://p.ipic.vip/uuml1a.jpg#from=url&amp;id=UdCir&amp;originHeight=558&amp;originWidth=732&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><h2 id="三、排查" tabindex="-1">三、排查 <a class="header-anchor" href="#三、排查" aria-label="Permalink to &quot;三、排查&quot;">​</a></h2><ol><li>通过top命令可以查看到有一个java进程占用cpu资源异常</li><li>获取pid为32306</li><li>通过命令查询tid</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">命令：ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -mp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 【pid】</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> THREAD,tid,time</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">实例：ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -mp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32306</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> THREAD,tid,time</span></span></code></pre></div><p><img src="https://p.ipic.vip/dyikob.jpg#from=url&amp;id=kMFir&amp;originHeight=503&amp;originWidth=732&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><ol><li>可以看到引起cpu异常的tid是32327</li><li>因为现在的tid32327是十进制的，需要将其转化为十六进制</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>命令：printf &quot;%x\\n&quot; 【十进制tid】</span></span>
<span class="line"><span>实例：printf &quot;%x\\n&quot; 32327</span></span></code></pre></div><p><img src="https://p.ipic.vip/ys57nq.jpg#from=url&amp;id=HUNAb&amp;originHeight=44&amp;originWidth=349&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><ol><li>根据pid 和 tid查询导致cpu飙升的代码</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">命令：jstack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 【10进制pid】</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 【16进制tid】</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">实例：jstack</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32306</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 7e47</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span></span></code></pre></div><p><img src="https://p.ipic.vip/8zlovj.jpg#from=url&amp;id=Ojt5s&amp;originHeight=503&amp;originWidth=732&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""><img src="https://p.ipic.vip/gemop6.jpg#from=url&amp;id=Cq3Sz&amp;originHeight=504&amp;originWidth=732&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><hr><p>end....</p>`,24),n=[l];function h(e,k,r,o,d,g){return a(),s("div",null,n)}const y=i(t,[["render",h]]);export{m as __pageData,y as default};
