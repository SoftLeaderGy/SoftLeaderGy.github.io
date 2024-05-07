import{_ as a,c as n,o as l,a4 as i,m as s}from"./chunks/framework.IpiIUH1b.js";const e="/assets/1690870557198-7556ded6-e91a-468f-993f-9ba67493ce4a.BFxaR2O3.png",p="/assets/1690870524873-606beaef-fa5e-4d01-b4c9-4fe301df7d62.CWCLsxVM.png",v=JSON.parse('{"title":"一、前言","description":"","frontmatter":{},"headers":[],"relativePath":"nav/日常积累/nginx代理DB、ip限制/nginx代理DB、ip限制.md","filePath":"nav/日常积累/nginx代理DB、ip限制/nginx代理DB、ip限制.md","lastUpdated":null}'),h={name:"nav/日常积累/nginx代理DB、ip限制/nginx代理DB、ip限制.md"},t=i(`<h1 id="一、前言" tabindex="-1">一、前言 <a class="header-anchor" href="#一、前言" aria-label="Permalink to &quot;一、前言&quot;">​</a></h1><p>我们的生产环境基本上都部署在云服务器上，例如应用服务器、MySQL服务器等。如果MySQL服务器直接暴露在公网，就会存在很大的风险，为了保证数据安全，MySQL服务器的端口是不对外开放的。 好巧不巧，线上业务遇到bug了，开发的小伙伴需要远程连接MySQL来查看数据，那应该怎么办呢？ 我们可以通过Nginx代理（“跳板机”）来进行连接。</p><h1 id="二、nginx代理连接" tabindex="-1">二、nginx代理连接 <a class="header-anchor" href="#二、nginx代理连接" aria-label="Permalink to &quot;二、nginx代理连接&quot;">​</a></h1><p>要实现对连接的代理转发，我们需要一台服务器并安装Nginx，且与MySQL服务器处于一个内网之中，内网之间可以访问。 其次，我们需要用到<code>ngx_stream_core_module</code>模块，该模块不是默认构建的，我们需要在<code>configure</code>时添加<code>--with-stream</code>来进行构建。</p><h2 id="_2-1、在原有模块添加ngx-stream-core-module" tabindex="-1">2.1、在原有模块添加<code>ngx_stream_core_module</code> <a class="header-anchor" href="#_2-1、在原有模块添加ngx-stream-core-module" aria-label="Permalink to &quot;2.1、在原有模块添加\`ngx_stream_core_module\`&quot;">​</a></h2><ul><li>安装stream模块</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装stream模块实现tcp代理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">./</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --with-http_ssl_module --add-module=/usr/local/src/nginx-module-vts-0.1.18/ --with-http_stub_status_module --with-http_sub_module --with-stream</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编译</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">make</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 停止当前nginx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">nginx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -s stop</span></span></code></pre></div><ul><li>备份原有的nginx二进制文件<code>mv /use/sbin/nginx{,.bak}</code></li><li>替换原有的二进制文件<code>cp objs/nginx /use/sbin/</code>（拷贝到当前nginx所在文件夹下）</li><li>启动nginx</li><li>使用<code>nginx -V</code>查看nginx安装了那些模块</li><li>配置stream</li></ul><p>既然要用到<code>ngx_stream_core_module</code>模块，首当其冲，是看看其提供的指令，我们才知道怎么来进行配置。</p><h2 id="_2-2、stream" tabindex="-1">2.2、stream <a class="header-anchor" href="#_2-2、stream" aria-label="Permalink to &quot;2.2、stream&quot;">​</a></h2><p>该指令定义了stream服务器。与<code>http</code>块平级，定义在main块中。</p>`,11),k=s("ul",null,[s("li",null,"作用域：main"),s("li",{"css-module":"."},"语法：stream"),s("li",null,"示例：")],-1),d=i(`<div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         ......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><h2 id="_2-3、server" tabindex="-1">2.3、server <a class="header-anchor" href="#_2-3、server" aria-label="Permalink to &quot;2.3、server&quot;">​</a></h2><p>该指令定义一个虚拟主机，与<code>http</code>块中的<code>server</code>类似。我们可以在<code>stream</code>块中定义多个<code>server</code>块</p>`,3),r=s("ul",null,[s("li",null,"作用域：stream"),s("li",{"css-module":"."},"语法：server"),s("li",null,"示例：")],-1),c=i(`<div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         ......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         ......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><h2 id="_2-4、listen" tabindex="-1">2.4、listen <a class="header-anchor" href="#_2-4、listen" aria-label="Permalink to &quot;2.4、listen&quot;">​</a></h2><p>该指令定义虚拟主机<code>server</code>要监听的socket的地址和端口。</p><ul><li>作用域：<code>server</code></li><li>语法：<code>listen address:port;</code></li><li>示例：</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">127.0.0.1:3306;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*:3306;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 效果与listen *:3306一样</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3306</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localhost:3306;</span></span></code></pre></div><h2 id="_2-5、配置示例" tabindex="-1">2.5、配置示例 <a class="header-anchor" href="#_2-5、配置示例" aria-label="Permalink to &quot;2.5、配置示例&quot;">​</a></h2><ul><li>代理MySQL服务器，端口3306（单机环境）</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3306</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">192.168.110.101:3306;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><ul><li>代理MySQL服务器，端口3306（集群环境）</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mysql_socket </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.110.101:3306;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">             listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3309</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">             proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysql_socket;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><ul><li>此时，我们就可以通过例如Navicat等客户端连接<code>nginx ip:3309</code>，因为本次搭建是用自己电脑的nginx，使用的是<code>localhost:3309</code>即可连接到mysql。</li></ul><p><img src="`+e+'" alt="image.png"><img src="'+p+`" alt="image.png"></p><h1 id="三、限制访问ip" tabindex="-1">三、限制访问IP <a class="header-anchor" href="#三、限制访问ip" aria-label="Permalink to &quot;三、限制访问IP&quot;">​</a></h1><p>实现了对连接的代理，所有人都可以通过访问Nginx来连接MySQL服务器，解决了外网无法连接的问题。 为了更进一步的缩小访问范围，保证数据安全，我们可以限制只有公司网络的IP地址可以通过Nginx进行连接。 Nginx提供了<code>ngx_stream_access_module</code>模块，其指令非常简单，仅包含<code>allow</code>和<code>deny</code>指令。</p><h2 id="_3-1、allow" tabindex="-1">3.1、allow <a class="header-anchor" href="#_3-1、allow" aria-label="Permalink to &quot;3.1、allow&quot;">​</a></h2><p>该指令设置指定的IP允许访问。可以和deny指令配合使用</p><ul><li>作用域：stream, server</li><li>语法：allow address | CIDR | unix: | all;</li><li>示例：</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 允许192.168.110.1访问</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> allow </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168.110.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 允许192.168.110.1到192.168.255.254</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> allow </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">192.168.110.0/16;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 允许192.168.110.1到192.168.110.254</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> allow </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">192.168.110.0/24;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 允许所有的IP访问</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> allow </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="_3-2、deny" tabindex="-1">3.2、deny <a class="header-anchor" href="#_3-2、deny" aria-label="Permalink to &quot;3.2、deny&quot;">​</a></h2><p>该指令设置指定的IP禁止访问。可以和allow指令配合使用。</p><ul><li>作用域：stream, server</li><li>语法：deny address | CIDR | unix: | all;</li><li>示例：</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 禁止192.168.110.1访问</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> deny </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168.110.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 禁止192.168.110.1到192.168.255.254</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> deny </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">192.168.110.0/16;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 禁止192.168.110.1到192.168.110.254</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> deny </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">192.168.110.0/24;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 禁止所有的IP访问</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> deny </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="_3-3、配置示例" tabindex="-1">3.3、配置示例 <a class="header-anchor" href="#_3-3、配置示例" aria-label="Permalink to &quot;3.3、配置示例&quot;">​</a></h2><ul><li>禁止所有的IP访问，192.168.110.100除外。</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">allow </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168.110.100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> deny </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><ul><li><strong>Tips：如果指定了allow，需要配合deny使用，否则就是允许所有的IP地址访问！！！！！</strong></li></ul><h2 id="_3-4、综合案例" tabindex="-1">3.4、综合案例 <a class="header-anchor" href="#_3-4、综合案例" aria-label="Permalink to &quot;3.4、综合案例&quot;">​</a></h2><ul><li>只允许<code>127.0.0.1</code>通过Nginx连接MySQL服务器。</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     allow </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0.0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     deny </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3309</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">192.168.110.101:3306;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><ul><li>允许一些指定的一些ip通过nginx访问Mysql服务器</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     allow </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0.0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     allow </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xxx.xxx.xxx.xxx;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     allow </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xxx.xxx.xxx.xxx;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     allow </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xxx.xxx.xxx.xxx;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     deny </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3309</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">192.168.110.101:3306;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><hr>`,32),g=[t,k,d,r,c];function E(o,y,u,x,_,m){return l(),n("div",null,g)}const A=a(h,[["render",E]]);export{v as __pageData,A as default};
