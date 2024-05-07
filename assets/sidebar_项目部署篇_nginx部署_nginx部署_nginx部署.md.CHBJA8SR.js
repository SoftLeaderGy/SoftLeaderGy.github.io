import{_ as e,c as i,o,a4 as n}from"./chunks/framework.IpiIUH1b.js";const l="/assets/1692761159805-dd61dfaa-1548-459a-9075-e00b5438b866.nXEI0UYa.png",a="/assets/1692761326781-79cc2280-cce6-4ead-b451-1475631f8ec3.FADZO5vh.png",u=JSON.parse('{"title":"一、离线安装","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/项目部署篇/nginx部署/nginx部署/nginx部署.md","filePath":"sidebar/项目部署篇/nginx部署/nginx部署/nginx部署.md","lastUpdated":null}'),t={name:"sidebar/项目部署篇/nginx部署/nginx部署/nginx部署.md"},s=n('<blockquote><p>nginx部署报错问题请看--&gt; <a href="/项目部署篇/nginx部署/nginx部署趟坑/nginx部署趟坑.html">nginx部署趟坑</a></p></blockquote><h1 id="一、离线安装" tabindex="-1">一、离线安装 <a class="header-anchor" href="#一、离线安装" aria-label="Permalink to &quot;一、离线安装&quot;">​</a></h1><ul><li>安装包获取：<a href="https://gitee.com/yang-guo-code/nginx-rely-on/releases/tag/nginx-1.18.0%E8%BD%AF%E4%BB%B6%E3%80%81%E4%BE%9D%E8%B5%96%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85%E5%8C%85" target="_blank" rel="noreferrer">nginx-1.18.0软件、依赖离线安装包 · 洋洋洋/nginx-rely-on - Gitee.com</a></li></ul><h2 id="_1-1、上传安装包" tabindex="-1">1.1、上传安装包 <a class="header-anchor" href="#_1-1、上传安装包" aria-label="Permalink to &quot;1.1、上传安装包&quot;">​</a></h2><ul><li>nginx安装包：<code>nginx-1.18.0.tar.gz</code></li><li>nginx安装依赖包：<code>gcc.zip</code>、<code>tools.zip</code></li><li>openssl源码包：<code>openssl-1.1.1d.tar.gz</code></li></ul><h2 id="_1-2、解压安装" tabindex="-1">1.2、解压安装 <a class="header-anchor" href="#_1-2、解压安装" aria-label="Permalink to &quot;1.2、解压安装&quot;">​</a></h2><ol><li>解压依赖包<code>gcc.zip</code>、<code>tools.zip</code></li><li>解压openssl源码包<code>openssl-1.1.1d.tar.gz</code>（有的nginx版本需要，在<code>步骤7</code>最后可配置，不需要可以去掉）</li><li>进入gcc、tools文件夹内</li><li>分别执行里边的install.sh (<code>sh install.sh</code>)</li><li>解压nginx安装包</li><li>进入解压后的nginx文件夹</li><li>执行命令（最后的<code>--with-openssl=/home/openssl-1.1.1d</code>需要指定<code>步骤2</code>解压的源码包）</li></ol><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">./</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --prefix=/opt/nginx --with-http_stub_status_module --with-http_ssl_module  --with-http_gzip_static_module --with-openssl=/home/openssl-1.1.1d</span></span></code></pre></div><ol start="8"><li>如果不报错执行<code>make &amp;&amp; make install</code></li><li>执行后可以进到<code>/opt/nginx/sbin</code>下看能否执行<code>./nginx</code></li><li>可以<code>curl [http://localhost:80/](http://localhost:80/)</code> 如果返回<code>Welcome to nginx!</code> 说明nginx部署完成！</li></ol><h2 id="_1-3、说明" tabindex="-1">1.3、说明 <a class="header-anchor" href="#_1-3、说明" aria-label="Permalink to &quot;1.3、说明&quot;">​</a></h2><ul><li>在<code>1.2</code>节中如果第7步出现错误，基本上就是缺依赖</li><li>查看报错缺少什么依赖</li><li>点击<a href="https://developer.aliyun.com/mirror/?spm=5176.28055625.J_4VYgf18xNlTAyFFbOuOQe.121.1147154aprlHtb&amp;scm=20140722.M_9489626._.V_1" target="_blank" rel="noreferrer">阿里巴巴开源镜像站-OPSX镜像站-阿里云开发者社区</a> -&gt; 选择资源包 -&gt; 进行下载缺少的资源包</li></ul><p><img src="'+l+'" alt="image.png"><img src="'+a+'" alt="image.png"></p><ul><li>将下载好的.rpm文件依赖包上传至服务器</li><li>执行 <code>rpm -Uvh XXXXX.rpm --nodeps --force</code> 或者可以放在一个文件夹下 直接执行<code>rpm -Uvh *.rpm --nodeps --force</code></li><li>然后在重复<code>1.2节</code>的<code>7步骤</code>及以后</li></ul><hr>',14),c=[s];function d(r,p,h,g,_,m){return o(),i("div",null,c)}const b=e(t,[["render",d]]);export{u as __pageData,b as default};
