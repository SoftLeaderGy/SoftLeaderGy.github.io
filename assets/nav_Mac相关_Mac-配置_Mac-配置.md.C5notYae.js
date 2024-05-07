import{_ as s,c as i,o as a,a4 as h}from"./chunks/framework.IpiIUH1b.js";const n="/assets/1659929687246-d8d61cdd-3467-4602-9515-401905f7e75c.CHFDwizv.png",c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"nav/Mac相关/Mac-配置/Mac-配置.md","filePath":"nav/Mac相关/Mac-配置/Mac-配置.md","lastUpdated":null}'),k={name:"nav/Mac相关/Mac-配置/Mac-配置.md"},l=h(`<h2 id="一、mac-配置环境变量" tabindex="-1">一、Mac-配置环境变量 <a class="header-anchor" href="#一、mac-配置环境变量" aria-label="Permalink to &quot;一、Mac-配置环境变量&quot;">​</a></h2><blockquote><p>作为计算机专业的，大学期间，环境变量是我的噩梦，但是他又很简单。。。。</p></blockquote><h3 id="_1、步骤" tabindex="-1">1、步骤： <a class="header-anchor" href="#_1、步骤" aria-label="Permalink to &quot;1、步骤：&quot;">​</a></h3><div class="language-haskell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">haskell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 打开终端</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vim </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~/.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bash_profile</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 配置环境变量就是在</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bash_profile文件中起一个变量名字</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">，</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">变量名字等于配置者的安装路径</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">（</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">到bin的上层即可</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> export </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MAVEN_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Users</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">maven</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">maven</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 配置PATH </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> export </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MAVEN_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wq(保存操作)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> source </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~/.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bash_profile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">（</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">是刚才修改的内容生效</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **************************************************************************</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">若当时终端生效</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">，</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">在新建终端窗口后命令不生效情况</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vim </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~/.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">zshrc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">将配置在</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~/.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bash_profile中的信息</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">，</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">复制一份放在</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~/.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">zshrc文件中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wq(保存修改的内容)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">source </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~/.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">zshrc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ***************************************************************************</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ######################################</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> #</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">在配置mysql的时候如果不生效</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~/.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bashrc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mysql</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysql</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysql</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">source</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~/.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bashrc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> #</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">到此为止即可解决问题</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ################</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> END</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> #######################</span></span></code></pre></div><p><em><strong>.bash_profile文件</strong></em></p><div class="language-haskell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">haskell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">配置HomeBrew环境变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># HomeBrew</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HOMEBREW_BOTTLE_DOMAIN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">://</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mirrors</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ustc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">edu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">homebrew</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bottles</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/usr/local/bin:$PATH&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/usr/local/sbin:$PATH&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># java</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># HomeBrew END</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">配置zookeeper环境变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/usr/local/Cellar/zookeeper/bin:$PATH&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">配置命令</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">“</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">”</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">alias ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;ls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">alF&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">alias &#39;ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">配置maven</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Maven</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MAVEN_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Users</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">maven</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">maven</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MAVEN_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">配置mysql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#Mysql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#export MYSQL_HOME=/usr/local/mysql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#export PATH=$PATH:$MYSQL_HOME/bin</span></span></code></pre></div><p><em><strong>.zshrc文件</strong></em></p><div class="language-haskell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">haskell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># HomeBrew</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HOMEBREW_BOTTLE_DOMAIN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">://</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mirrors</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ustc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">edu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">homebrew</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bottles</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/usr/local/bin:$PATH&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/usr/local/sbin:$PATH&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># HomeBrew END</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/usr/local/Cellar/zookeeper/bin:$PATH&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">source </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~/.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bash_profile</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">source </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~/.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bashrc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span></span></code></pre></div><p><em><strong>~/.bashrc文件</strong></em></p><div class="language-haskell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">haskell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">alias mysql</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysql</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysql</span></span></code></pre></div><p><em><strong>MacOS 当前系统环境</strong></em><img src="`+n+'" alt="image.png"> ----------2021/07/19 00:13</p><h2 id="二、mac路由篇" tabindex="-1">二、mac路由篇 <a class="header-anchor" href="#二、mac路由篇" aria-label="Permalink to &quot;二、mac路由篇&quot;">​</a></h2><h3 id="_1、mac添加路由" tabindex="-1">1、mac添加路由 <a class="header-anchor" href="#_1、mac添加路由" aria-label="Permalink to &quot;1、mac添加路由&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> route</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -net</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10.0.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -netmask</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255.0.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10.59.122.129</span></span></code></pre></div><h3 id="_2、mac删除路由" tabindex="-1">2、mac删除路由 <a class="header-anchor" href="#_2、mac删除路由" aria-label="Permalink to &quot;2、mac删除路由&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> route</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10.0.0.0</span></span></code></pre></div><h3 id="_3、mac查看路由表" tabindex="-1">3、mac查看路由表 <a class="header-anchor" href="#_3、mac查看路由表" aria-label="Permalink to &quot;3、mac查看路由表&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rn</span></span></code></pre></div>',18),p=[l];function t(e,E,r,d,g,y){return a(),i("div",null,p)}const o=s(k,[["render",t]]);export{c as __pageData,o as default};
