// ==UserScript==
// @name         Luogu IDE Auto Fill Machine
// @namespace    http://tampermonkey.net/
// @version      2025-02-11
// @description  none
// @author       DE_aemmprty
// @match        https://www.luogu.com.cn/problem/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=luogu.com.cn
// @grant        none
// ==/UserScript==

var template;
var darkmode = 0;

(function() {
    var removeLine = function() {
        var it = document.getElementsByClassName("cm-activeLine cm-line");
        if (it.length == 0) {
            return ;
        }
        it[0].remove();
    }
    var getCodeLine = function(flg, s) {
        var it = document.createElement('div');
        if (flg == 1) {
            it.classList.add('cm-activeLine');
        }
        it.classList.add('cm-line');
        it.innerHTML = s;
        return it;
    }
    function myFunction() {
        var mamba = document.getElementsByClassName("cm-activeLine cm-line");
        const styleSheet = document.createElement('style');
        document.head.appendChild(styleSheet);
        // 添加新的样式规则
        if (darkmode == 0) {
            styleSheet.sheet.insertRule('.ͼ5 { color: #7C4EFF; font-style: italic; }', 0); // 关键字
            styleSheet.sheet.insertRule('.ͼb { color: #7C4EFF; font-style: italic; }', 0); // 关键字
            styleSheet.sheet.insertRule('.ͼd { color: #F76D47; }', 0); // 数字
            styleSheet.sheet.insertRule('.ͼe { color: #91B878; }', 0); // 字符串
            styleSheet.sheet.insertRule('.ͼm { color: #CCD7DA; }', 0); // 注释
            styleSheet.sheet.insertRule('.ͼg { color: #80CBC4; }', 0); // 函数名
            styleSheet.sheet.insertRule('.ͼi { color: #7C4EFF; font-style: italic; }', 0); // 关键字
            styleSheet.sheet.insertRule('.ͼf { color: #91B859; }', 0); // 头文件
            styleSheet.sheet.insertRule('.cm-editor { color: #6182B8; }', 0); // 普通字符
        } else {
            styleSheet.sheet.insertRule('.ͼ5 { color: #C792EA; font-style: italic; }', 0); // 关键字
            styleSheet.sheet.insertRule('.ͼb { color: #C792EA; font-style: italic; }', 0); // 关键字
            styleSheet.sheet.insertRule('.ͼd { color: #F78A68; }', 0); // 数字
            styleSheet.sheet.insertRule('.ͼe { color: #C3E88D; }', 0); // 字符串
            styleSheet.sheet.insertRule('.ͼm { color: #4A4A4A; }', 0); // 注释
            styleSheet.sheet.insertRule('.ͼg { color: #7BAAFF; }', 0); // 函数名
            styleSheet.sheet.insertRule('.ͼi { color: #C792EA; font-style: italic; }', 0); // 关键字
            styleSheet.sheet.insertRule('.ͼf { color: #C3D365; }', 0); // 头文件
            styleSheet.sheet.insertRule('.cm-editor { color: #EEFFFF; }', 0); // 普通字符
            styleSheet.sheet.insertRule('.ͼ4 .cm-line { caret-color: yellow !important; }', 0); // 光标
        }
        styleSheet.sheet.insertRule('.ͼq .cm-content { font-family: Fira Code !important; font-size: 15px;}');
        styleSheet.sheet.insertRule('.ide-container[data-v-6198bd39] { height: calc(100vh - 3.5rem) }');
        var fnfnfn = document.getElementsByClassName("ͼ1");
        fnfnfn[0].style['font-family'] = "Fira Code !important";
        if (mamba[0].innerHTML != '<br>') {
            return ;
        }
        var it = document.getElementsByClassName("cm-content cm-lineWrapping");
        if (it.length > 0) {
            it[0].appendChild(getCodeLine(1, '// Luogu IDE Auto Fill Machine by DE_aemmprty'));
            it[0].appendChild(getCodeLine(0, template));
        }
    }

    function condition() {
        var it = document.getElementsByClassName("cm-activeLine");
        return it.length > 0;
    }
    function dealStyleProblem(s) {
        var t = "";
        for (var i = 0; i < s.length; i ++) {
            if (s[i] == '<') {
                t += '&lt;';
            } else if (s[i] == '>') {
                t += '&gt;';
            } else {
                t += s[i];
            }
        }
        return t;
    }
    function DarkMode() {
        darkmode = 1;
        const styleSheet = document.createElement('style');
        document.head.appendChild(styleSheet);
        styleSheet.sheet.insertRule('.top-bar { background: black !important;}', 0);
        styleSheet.sheet.insertRule('.svg-inline--fa { color: white !important;} ', 0);
        styleSheet.sheet.insertRule('.top-bar .breadcrumb[data-v-4430a926]>* { color: white !important;}', 0);
        styleSheet.sheet.insertRule('.lside.bar[data-v-4430a926] { background: #22272E !important;}', 0);
        styleSheet.sheet.insertRule('nav.sidebar[data-v-06583f34]:not(:hover) li .title { color: white !important;}', 0);
        styleSheet.sheet.insertRule('.ide-container .problem { background: #2D333B !important;}', 0);
        styleSheet.sheet.insertRule('.lfe-h1, .lfe-h2, .lfe-h3, .lfe-h4, .lfe-h5, .lfe-h6 { color: white !important;} ', 0);
        styleSheet.sheet.insertRule('.lfe-marked-wrap { color: white; } ', 0);
        styleSheet.sheet.insertRule('.lfe-marked pre, .lfe-marked pre>code { background: #22272E; color: white; } ', 0);
        styleSheet.sheet.insertRule('.ide-toolbar { background: #22272E; }', 0);
        styleSheet.sheet.insertRule('.ide-toolbar .title>.text { color: white; } ', 0);
        styleSheet.sheet.insertRule('label[data-v-25b6974c] { color: white; } ', 0);
        styleSheet.sheet.insertRule('.ͼ1 .cm-gutter { background: #22272E; }', 0);
        styleSheet.sheet.insertRule('.ͼ1 .cm-content[contenteditable=true] { background: #212121; }', 0);
        styleSheet.sheet.insertRule('::-webkit-scrollbar-track { background: #282828; }', 0);
        styleSheet.sheet.insertRule('::-webkit-scrollbar-thumb { background: #555; }', 0);
        styleSheet.sheet.insertRule('::-webkit-scrollbar-thumb:hover { background: #777; }', 0);
        styleSheet.sheet.insertRule('html { scrollbar-color: #555 #282828; }', 0);
        styleSheet.sheet.insertRule('.panel-layout>.panel-divider[data-v-30296b4c] { background: #22272E; }', 0);
        styleSheet.sheet.insertRule('.ide-container .ide-textarea { background: #2D333B; color: white; }', 0);
        styleSheet.sheet.insertRule('.ͼ2 .cm-activeLineGutter { background: #171717; }', 0);
        styleSheet.sheet.insertRule('.ͼ2 .cm-activeLine { background: #171717; }', 0);
        styleSheet.sheet.insertRule('.ide-toolbar { border: 1px solid #22272E }', 0);
        styleSheet.sheet.insertRule('.ͼ2 .cm-gutters { border: 1px solid #22272E }', 0);
        styleSheet.sheet.insertRule('input[data-v-6d12c5db], textarea[data-v-6d12c5db], .refined-input[data-v-6d12c5db] { border: 1px solid #22272E }', 0);
        styleSheet.sheet.insertRule('.lfe-marked pre, .lfe-marked pre > code { border: 1px solid #22272E }', 0);
        styleSheet.sheet.insertRule('.lfe-code { background: #22272E; }', 0);
        styleSheet.sheet.insertRule('.lfe-code { color: white; }', 0);
        styleSheet.sheet.insertRule('.lfe-code { border: 1px solid #22272E; }', 0);
        styleSheet.sheet.insertRule('.lfe-marked p code, .lfe-marked li code { background: #22272E; }', 0);
        styleSheet.sheet.insertRule('.lfe-marked p code, .lfe-marked li code { border: 1px solid #22272E; }', 0);
        styleSheet.sheet.insertRule('.l-card[data-v-b62e56e7] { background: #2D333B; }', 0);
        styleSheet.sheet.insertRule('main[data-v-f265fec6] { background: #22272E; }', 0);
        styleSheet.sheet.insertRule('.l-flex-info-row>*:last-child { color: white; }', 0);
        styleSheet.sheet.insertRule('.l-flex-info-row>*:first-child { color: white; }', 0);
        styleSheet.sheet.insertRule('.theme-bg[data-v-f265fec6], .theme-fg[data-v-f265fec6] { background: #2D333B; }', 0);
        console.log("DarkMode is opened");
    }
    template = localStorage.getItem("DE_aemmprty_template");
    console.log(template);
    if (template == null || template == 'null') {
        var res = prompt("检测到您是第一次使用该插件。如果您是 Windows 系统，请输入您的代码模板（直接从编译器中复制过来即可）：");
        template = res;
        localStorage.setItem("DE_aemmprty_template", res);
    }
    template = dealStyleProblem(template);
    DarkMode();
    const intervalId = setInterval(() => {
        if (condition()) {
            myFunction();
            clearInterval(intervalId);
        }
    }, 100);

    let ctrlPressed = false;

    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey) {
        ctrlPressed = true;
      } else {
          ctrlPressed = false;
      }

      if (event.key.toLowerCase() === 'd' && ctrlPressed) {
        removeLine();
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.ctrlKey) {
        ctrlPressed = false;
      }
    });
})();
