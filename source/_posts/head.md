---
title: HEAD标签详解
date: 2017-10-17 00:06:03
categories:
- WEB前端
tags: 
- HTML
comments: true
---

> **head**区指首页HTML代码的`<head>`和`</head>`之间的内容。可用在 **head**部分中的标签：`<base>`、`<link>`、`<meta>`、`<script>`、`<style>`以及`<title>`。 

<!-- more -->

## 一.mate详解

**META标签主要包含：HTTP-EQUIV与NAME两种属性**

> HTTP-EQUIV：HTTP头部协议等价物，它回应给浏览器一些有用的信息，以帮助正确和精确地显示网页内容。常用的HTTP-EQUIV类型有：

### 1.Content-Type和Content-Language (显示字符集的设定)

**说明：**设定页面使用的字符集，用以说明主页制作所使用的文字已经语言，浏览器会根据此来调用相应的字符集显示page内容。    

**用法：**
`<Meta http-equiv="Content-Type" Content="text/html; Charset=gb2312">`
`<Meta http-equiv="Content-Language" Content="zh-CN">`    

**注意：**该META标签定义了HTML页面所使用的字符集为GB2132，就是国标汉字码。如果将其中的“charset=GB2312”替换成“BIG5”，则该页面所用的字符集就是繁体中文Big5码。当你浏览一些国外的站点时，IE浏览器会提示你要正确显示该页面需要下载xx语支持。这个功能就是通过读取HTML页面META标签的Content-Type属性而得知需要使用哪种字符集显示该页面的。如果系统里没有装相应的字符集，则IE就提示下载。其他的语言也对应不同的charset，比如日文的字符集是“iso-2022-jp ”，韩文的是“ks_c_5601”。   

**分类：**

* `Content-Type`的`Content`还可以是：`text/xml`等文档类型；   

* `Charset`选项：`ISO-8859-1(英文)、BIG5、UTF-8、SHIFT-Jis、Euc、Koi8-2、us-ascii, x-mac-roman, iso-8859-2, x-mac-ce, iso-2022-jp, x-sjis, x-euc-jp,euc-kr, iso-2022-kr, gb2312, gb_2312-80, x-euc-tw, x-cns11643-1,x-cns11643-2`等字符集；

* `Content-Language`的`Content`还可以是：`EN、FR`等语言代码。

### 2.Refresh (刷新)  

**说明：**让网页多长时间（秒）刷新自己，或在多长时间后让网页自动链接到其它网页。   

**用法：**
`<Meta http-equiv="Refresh" Content="30">`
`<Meta http-equiv="Refresh" Content="5; Url=http://www.duqiupu.com">`              

**注意：**其中的5是指停留5秒钟后自动刷新到URL网址。

### 3.Expires (期限)

**说明：**指定网页在缓存中的过期时间，一旦网页过期，必须到服务器上重新调阅。   

**用法：**
`<Meta http-equiv="Expires" Content="0">`   
`<Meta http-equiv="Expires" Content="Wed, 26 Feb 1997 08:21:57 GMT">`   

**注意：**必须使用GMT的时间格式，或直接设为0(数字表示多少时间后过期)。    

### 4.Pragma (cach模式)    

**说明：**禁止浏览器从本地机的缓存中调阅页面内容。   

**用法：**
`<Meta http-equiv="Pragma" Content="No-cach">`   

**注意：**网页不保存在缓存中，每次访问刷新页面。这样设定，访问者将无法脱机浏览。    

### 5.Set-Cookie (cookie设定)    

**说明：**浏览器访问某个页面时会将它存在缓存中，下次再次访问时就可从缓存中读取，以提高速度。当你希望访问者每次都刷新你广告的图标，或每次都刷新你的计数器，就要禁用缓存了。通常HTML文件没有必要禁用缓存，对于ASP等页面，就可以使用禁用缓存，因为每次看到的页面都是在服务器动态生成的，缓存就失去意义。如果网页过期，那么存盘的cookie将被删除。   

**用法：**
`<Meta http-equiv="Set-Cookie" Content="cookievalue=xxx; expires=Wednesday,21-Oct-98 16:14:21 GMT; path=/">`   

**注意：**必须使用GMT的时间格式。    
    
> NAME变量 ：name是描述网页的，对应于Content（网页内容），以便于搜索引擎机器人查找、分类（目前几乎所有搜索引擎都使用网上机器人自动查找meta值来给网页分类）。   

*name的value值（name=""）指定所提供信息的类型。有些值是已经定义好的。例如description(说明)、keyword(关键字)、refresh(刷新)等。还可以指定其他任意值，如：creationdate(创建日期) 、document ID(文档编号)和level(等级)等。*
     
### 1.Keywords (关键字)   

**说明：**为搜索引擎提供的关键字列表   

**用法：**
`<Meta name="Keywords" Content="关键词1,关键词2，关键词3,关键词4,……">`   

**注意：**各关键词间用英文逗号“,”隔开。META的通常用处是指定搜索引擎用来提高搜索质量的关键词。当数个META元素提供文档语言从属信息时，搜索引擎会使用lang特性来过滤并通过用户的语言优先参照来显示搜索结果。例如：   
`<Meta name="Kyewords" Lang="EN" Content="vacation,greece,sunshine">`
`<Meta name="Kyewords" Lang="FR" Content="vacances,grè:ce,soleil">`

### 2.Description (简介)   

**说明：**Description用来告诉搜索引擎你的网站主要内容。   

**用法：**
`<Meta name="Description" Content="你网页的简述">`

### 3.Robots (机器人向导)   

**说明：**Robots用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。Content的参数有`all、none、index、noindex、follow、nofollow`。默认是all。   

**用法：**
`<Meta name="Robots" Content="All|None|Index|Noindex|Follow|Nofollow">`   

**注意：**许多搜索引擎都通过放出robot/spider搜索来登录网站，这些robot/spider就要用到meta元素的一些特性来决定怎样登录。    

**分类：**
* `all`：文件将被检索，且页面上的链接可以被查询；   
* `none`：文件将不被检索，且页面上的链接不可以被查询；(和 "noindex, nofollow" 起相同作用)   
* `index`：文件将被检索；（让robot/spider登录）   
* `follow`：页面上的链接可以被查询；   
* `noindex`：文件将不被检索，但页面上的链接可以被查询；(不让robot/spider登录)   
* `nofollow`：文件将不被检索，页面上的链接可以被查询。(不让robot/spider顺着此页的连接往下探找)    

### 4.Author (作者)   
**说明：**标注网页的作者或制作组   

**用法：**<Meta name="Author" Content="张三，abc@sina.com">   

**注意：**Content可以是：你或你的制作组的名字,或Email    

### 5.Copyright (版权)   

**说明：**标注版权   

**用法：**
`<Meta name="Copyright" Content="本页归Zerospace所有。All Rights Reserved">`

## 二.link和base

> `<LINK>`用来将目前文件与其它 URL 作连结，但不会有连结按钮，用於`<HEAD>`标记间。

**用法：**
`<Link href="soim.ico" rel="Shortcut Icon">`

**注意：**很多网站如果你把她保存在收件夹中后，会发现它连带着一个小图标，如果再次点击进入之后还会发现地址栏中也有个小图标。现在只要在你的页头加上这段话，就能轻松实现这一功能。
     
> `Base` (基链接)用于插入网页基链接属性   

**用法：**
`<Base href="http://www.duqiupu.com/" target="_blank">`   

**注意：**你网页上的所有相对路径在链接时都将在前面加上http://www.duqiupu.com/。其中`target="_blank"`是链接文件在新的窗口中打开，你可以做其他设置。将`_blank`改为`_parent`是链接文件将在当前窗口的父级窗口中打开；改为`_self`链接文件在当前窗口（帧）中打开；改为`_top`链接文件全屏显示。

## 三.常用标签

### 1.公司版权注释

`<!--- The site is designed bywebjx.com 06/2006 --->`

### 2.网页显示字符集    

* 简体中文： 
`<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=gb2312">`    

* 繁体中文：
`<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=BIG5">`

* 英 语：
`<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1">`    

### 3.网页制作者信息    

`<META name="author" content="Evance">`

### 4.网站简介

 `<META NAME="DESCRIPTION" CONTENT="xxxxxxxxxxxxxxxxxxxxxxxxx`

### 5.搜索关键字    
 
 `<META NAME="keywords" CONTENT="xxxx,xxxx,xxx,xxxxx,xxxx,">`

### 6.网页标题
  
`<title>xxxxxxxxxxxxxxxxxx</title>`

### 7.内部样式表

`<style type=text/css>此处为style</style>`

### 8.外部样式表

`<link rel=”stylesheet”  type=”text/css”  href=”myStyle.css”/>`

### 9.内部脚本

`<script></script>`

### 10.外部脚本

`<script type=”text/javascript” src=”myscript.js”></script>`

### 11.关于浏览器内核控制

> 关于浏览器历史的世纪之战，请准备好瓜子移步[这里](abc.com)听我娓娓道来。

* 模拟某个IE版本内核：
`<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7"/>`

* 使用谷歌内嵌浏览器框架GCF[^GCF]——非微软官方做法：
`<meta http-equiv="X-UA-Compatible" content="chrome=1"/>`

* 如果安装了gcf则使用，未安装则使用最高版本IE：
`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>`

* 360安全浏览器切换急速模式和兼容模式的方法，并致力于推动国内浏览器厂商共同协定：
`<meta name="renderer" content="webkit|ie-comp|ie-stand">`

### 12.设定网页的到期时间。一旦网页过期，必须到服务器上重新调阅。    
 `<META HTTP-EQUIV="expires" CONTENT="Wed, 26 Feb 2006 08:21:57 GMT">`

### 13.禁止浏览器从本地机的缓存中调阅页面内容。      
`<META HTTP-EQUIV="Pragma" CONTENT="no-cache">`

### 14.用来防止别人在框架里调用你的页面。    
`<META HTTP-EQUIV="Window-target" CONTENT="_top">`

### 15.自动跳转——时间停留5秒。   
`<META HTTP-EQUIV="Refresh" CONTENT="5;URL=http://www.webjx.com">`

### 16.网页搜索机器人向导.用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。    
`<META NAME="robots" CONTENT="none">`
CONTENT的参数有all,none,index,noindex,follow,nofollow。默认是all。    

### 17.收藏夹图标    
 `<link rel = "Shortcut Icon" href="favicon.ico">`

[^GCF]: 谷歌内嵌浏览器框架（微软官方做法）。下载地址：http://code.google.com/intl/zh-CN/chrome/chromeframe//。GCF的使用有两种方式：第一种是在该页面地址前加上 gcf: 即可，例如：gcf:http://cooleep.com；第二种是在开发时指定页面默认首先使用gcf渲染，通过上文中的meta标签来实现。