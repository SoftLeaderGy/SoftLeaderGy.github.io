import{_ as a,c as i,o as s,a4 as e}from"./chunks/framework.IpiIUH1b.js";const t="/assets/1712562117585-9207a360-630f-4b61-a019-315ec430f06c.Cu4GUVpD.png",l="/assets/1712562123004-9cd8f9f8-2c12-4d6b-a479-0bc061f1731b.G3uP5co1.png",n="/assets/1712562197266-4e0d5f24-a766-421a-b13d-8a67666ccd6f.auf7hPXU.png",h="/assets/1712562211496-b6333934-2877-4a63-9243-b23226dbb49a.CKPBpxxY.png",o="/assets/1712562246095-0bb86949-910b-44cb-ab26-a884e96b0e17.BPx-4_Xz.png",E=JSON.parse('{"title":"一、什么是语雀","description":"","frontmatter":{},"headers":[],"relativePath":"nav/乱七八糟教程/语雀导出文件图片CND指向问题/语雀导出文件图片CND指向问题.md","filePath":"nav/乱七八糟教程/语雀导出文件图片CND指向问题/语雀导出文件图片CND指向问题.md","lastUpdated":null}'),p={name:"nav/乱七八糟教程/语雀导出文件图片CND指向问题/语雀导出文件图片CND指向问题.md"},r=e('<h1 id="一、什么是语雀" tabindex="-1">一、什么是语雀 <a class="header-anchor" href="#一、什么是语雀" aria-label="Permalink to &quot;一、什么是语雀&quot;">​</a></h1><blockquote><p>文档与知识管理工具 语雀，是蚂蚁集团旗下的在线文档编辑与协同工具。 语雀使用了“结构化知识库管理”，形式上类似书籍的目录。与其他产品可以随意建立文档不同，语雀上的每一篇文档必须属于某一个知识库，语雀希望通过这样的产品设计，来从源头上帮助用户建立起知识管理的意识，培养良好的知识管理习惯。 2022年2月22日正式推出移动端版本，移动端iOS与Android是同步上线。</p></blockquote><h1 id="二、为什么要解决-图片cnd指向问题" tabindex="-1">二、为什么要解决“图片CND指向问题” <a class="header-anchor" href="#二、为什么要解决-图片cnd指向问题" aria-label="Permalink to &quot;二、为什么要解决“图片CND指向问题”&quot;">​</a></h1><p>语雀是我们爱记笔记同学的一款非常趁手的云文档软件了，我也是在语雀还没开始会员机制的时候就在使用了，也可以说是语雀的老玩家了。但是我发现在导出语雀文章的时候正常md文件访问，文件中的图片是没问题的，但是只要我把我的笔记部署在我的网站上的时候语雀图片就显示不了。原因就是图片的cdn指向的仍然是语雀的图床cdn。</p><h1 id="三、解决方案" tabindex="-1">三、解决方案 <a class="header-anchor" href="#三、解决方案" aria-label="Permalink to &quot;三、解决方案&quot;">​</a></h1><p>通过网络爬虫的方式将文章中语雀图床的图片爬取下来，存放在本地，并将文章中的图片cdn替换成下载的图片路径。 项目自行下载-&gt;<a href="https://gitee.com/softleadergy/yuque-md-img-handle" target="_blank" rel="noreferrer">洋洋洋/yuque-md-img-handle</a></p><blockquote><p>由于项目是python所写，需要有python3环境</p></blockquote><h2 id="_3-1、使用" tabindex="-1">3.1、使用 <a class="header-anchor" href="#_3-1、使用" aria-label="Permalink to &quot;3.1、使用&quot;">​</a></h2><blockquote><p>使用步骤中的文件夹位置，是我自己电脑的实际位置，实际使用时可替换成自己电脑的文件夹路径</p></blockquote><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">python3 main.py fileName</span></span></code></pre></div><h3 id="_3-1-1、步骤" tabindex="-1">3.1.1、步骤 <a class="header-anchor" href="#_3-1-1、步骤" aria-label="Permalink to &quot;3.1.1、步骤&quot;">​</a></h3><ol><li>首先将下载的语雀原始md文件放在/Users/yang/SoftWare/knowledge-base/docs/yuque/fileName/下 路径可以在main.py文件中修改</li><li>执行 python3 main.py fileName</li><li>main会将原始md文件中的图片爬去下来，存放的路径是原始文件所在的文件夹下的images目录下</li><li>并且在此目录下生成一个名为new_fileName.md的文件，该文件里边的图片指向就是刚才爬去的图片</li><li>至此就可以完成需求。。。。</li><li>但是我为了方便，生成新文件后，我将原始文件删除，并把新文件改名成原始的文件名</li><li>这样就做到将语雀导出的md文件中的图片转换处成本地指向的路径</li></ol><h3 id="_3-1-2、实例运行" tabindex="-1">3.1.2、实例运行 <a class="header-anchor" href="#_3-1-2、实例运行" aria-label="Permalink to &quot;3.1.2、实例运行&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">python3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Users</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PyCharmProjects</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yuque</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">md</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">main.py RabbitMQ</span></span></code></pre></div><h3 id="_3-1-3、效果展示" tabindex="-1">3.1.3、效果展示 <a class="header-anchor" href="#_3-1-3、效果展示" aria-label="Permalink to &quot;3.1.3、效果展示&quot;">​</a></h3><ul><li>运行效果展示 <ul><li><img src="'+t+'" alt="image.png"></li><li><img src="'+l+'" alt="image.png"></li></ul></li><li>使用前后对比 <ul><li>从语雀官网导出的md: <ul><li><img src="'+n+'" alt="image.png"></li></ul></li><li>处理后的md: <ul><li><img src="'+h+'" alt="image.png"></li></ul></li><li>图片: <ul><li><img src="'+o+'" alt="image.png"></li></ul></li></ul></li></ul>',16),d=[r];function c(k,_,m,u,g,b){return s(),i("div",null,d)}const f=a(p,[["render",c]]);export{E as __pageData,f as default};
