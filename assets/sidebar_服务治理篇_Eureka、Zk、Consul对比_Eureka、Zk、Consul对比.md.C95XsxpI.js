import{_ as e,c as a,o,a4 as l}from"./chunks/framework.IpiIUH1b.js";const r="/assets/1659947878932-c3e8f9a6-b141-451a-8799-4b3c1e6a7375.B_nZL0Lx.png",t="/assets/1659949012546-2934c40c-d781-4399-9fe8-7088c0dc9a38.KhpGKq-Y.png",P=JSON.parse('{"title":"* Eureka、Zookeeper、Consul对比","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/服务治理篇/Eureka、Zk、Consul对比/Eureka、Zk、Consul对比.md","filePath":"sidebar/服务治理篇/Eureka、Zk、Consul对比/Eureka、Zk、Consul对比.md","lastUpdated":null}'),s={name:"sidebar/服务治理篇/Eureka、Zk、Consul对比/Eureka、Zk、Consul对比.md"},i=l('<h1 id="eureka、zookeeper、consul对比" tabindex="-1">* Eureka、Zookeeper、Consul对比 <a class="header-anchor" href="#eureka、zookeeper、consul对比" aria-label="Permalink to &quot;* Eureka、Zookeeper、Consul对比&quot;">​</a></h1><h2 id="_1、cap" tabindex="-1">1、CAP <a class="header-anchor" href="#_1、cap" aria-label="Permalink to &quot;1、CAP&quot;">​</a></h2><ul><li>C：Consistency（强一致性）</li><li>A：Availability（可用性）</li><li>P：Partition tolerance（分区容错性）a</li></ul><blockquote><p>CAP理论关注粒度是数据，而不是整体系统设计的策略</p></blockquote><h2 id="_2、经典cap图" tabindex="-1">2、经典CAP图 <a class="header-anchor" href="#_2、经典cap图" aria-label="Permalink to &quot;2、经典CAP图&quot;">​</a></h2><ul><li>AP（Eureka） <ol><li>AP架构 当网络分区出现后，为了保证可用性，系统B 可以返回旧值 ，保证系统的可用性。 结论：违背了一致性C的要求，只满足可用性和分区容错，即AP <img src="'+r+'" alt="image-20220418210323832.png"></li></ol></li><li>CP（Zookeper、Consul） <ol><li>CP架构 当网络分区出现后，为了保证一致性，就必须拒接请求，否则无法保证一致性 结论：违背了可用性A的要求，只满足一致性和分区容错，即CP <img src="'+t+'" alt="image-20220418210421854.png"></li></ol></li></ul><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1>',7),n=[i];function c(u,_,k,d,p,h){return o(),a("div",null,n)}const m=e(s,[["render",c]]);export{P as __pageData,m as default};
