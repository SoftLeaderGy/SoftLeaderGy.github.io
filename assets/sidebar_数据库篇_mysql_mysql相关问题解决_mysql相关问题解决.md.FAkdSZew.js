import{_ as s,c as i,o as a,a4 as l}from"./chunks/framework.IpiIUH1b.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/数据库篇/mysql/mysql相关问题解决/mysql相关问题解决.md","filePath":"sidebar/数据库篇/mysql/mysql相关问题解决/mysql相关问题解决.md","lastUpdated":null}'),n={name:"sidebar/数据库篇/mysql/mysql相关问题解决/mysql相关问题解决.md"},t=l(`<h2 id="_1、quartz服务报错" tabindex="-1">1、quartz服务报错 <a class="header-anchor" href="#_1、quartz服务报错" aria-label="Permalink to &quot;1、quartz服务报错&quot;">​</a></h2><ul><li>问题描述</li></ul><blockquote><p>quartz 报错：Failure obtaining db row lock: Table ‘test.QRTZ_LOCKS‘ doesn‘t exist</p></blockquote><ul><li>思路</li></ul><blockquote><p>首先我的数据库的表是没问题的 表名是qrtz_locks 那么问题就出在表名大小写问题上，顺着这个我就查了下，在我们本地电脑上mysql是不区分大小写的， 但是本次部署我把mysql部署在了linux上，在linux上的mysql默认是区分大小写的</p></blockquote><ul><li>解决办法 <ul><li>方法一：改表名就可以了（快，但不建议）</li><li>方法二：修改mysql服务使其忽略大小写</li></ul></li></ul><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 先执行sql查看lower_case_table_names</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show variables </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">like</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;%lower_case_table_names%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 修改</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">my</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cnf文件</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，在文件末尾加lower_case_table_names</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vim </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">my</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cnf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 末尾加上lower_case_table_names</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  保存退出</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mysqld </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">restart</span></span></code></pre></div><h2 id="_2、解决mysql中文乱码问题" tabindex="-1">2、解决MYSQL中文乱码问题 <a class="header-anchor" href="#_2、解决mysql中文乱码问题" aria-label="Permalink to &quot;2、解决MYSQL中文乱码问题&quot;">​</a></h2><h3 id="_2-1、更改mysql服务器字符集" tabindex="-1">2.1、更改MySQL服务器字符集 <a class="header-anchor" href="#_2-1、更改mysql服务器字符集" aria-label="Permalink to &quot;2.1、更改MySQL服务器字符集&quot;">​</a></h3><ul><li>查看MySQL服务器当前的字符集设置。：</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> variables</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> like</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ‘character%’</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><ul><li>如果发现MySQL使用的不是UTF-8字符集，那么您需要更改它。您可以通过编辑MySQL配置文件my.cnf或my.ini文件来实现这一点。</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[client]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">character</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utf8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[mysql]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">character</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utf8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[mysqld]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">character</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utf8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">collation</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utf8_general_ci</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">init</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">connect</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SET NAMES utf8&#39;</span></span></code></pre></div><ul><li>其中，character-set-server和collation-server配置项用于设置MySQL服务器的字符集和校对规则。init-connect配置项用于在每个新连接上设置字符集。</li><li>需要重启MySQL服务以使更改生效。</li></ul>`,14),h=[t];function e(k,p,r,E,d,y){return a(),i("div",null,h)}const o=s(n,[["render",e]]);export{g as __pageData,o as default};
