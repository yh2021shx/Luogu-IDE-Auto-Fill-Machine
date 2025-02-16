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
    function LightMode() {
        const styleSheet = document.createElement('style');
        styleSheet.setAttribute('id', 'Lightmode-Style');
        document.head.appendChild(styleSheet);
        styleSheet.sheet.insertRule('.ͼ5 { color: #7C4EFF; font-style: italic; }', 0); // 关键字
        styleSheet.sheet.insertRule('.ͼb { color: #7C4EFF; font-style: italic; }', 0); // 关键字
        styleSheet.sheet.insertRule('.ͼd { color: #F76D47; }', 0); // 数字
        styleSheet.sheet.insertRule('.ͼe { color: #91B878; }', 0); // 字符串
        styleSheet.sheet.insertRule('.ͼm { color: #CCD7DA; }', 0); // 注释
        styleSheet.sheet.insertRule('.ͼg { color: #80CBC4; }', 0); // 函数名
        styleSheet.sheet.insertRule('.ͼi { color: #7C4EFF; font-style: italic; }', 0); // 关键字
        styleSheet.sheet.insertRule('.ͼf { color: #91B859; }', 0); // 头文件
        styleSheet.sheet.insertRule('.cm-editor { color: #6182B8; }', 0); // 普通字符
    }
    function DarkMode() {
        let ret = localStorage.getItem('DE_aemmprty_darkmode') ;
        if (ret == '0') {
            LightMode();
            return ;
        } else if (ret == null) {
            ret = 1;
        }
        darkmode = 1;
        const styleSheet = document.createElement('style');
        styleSheet.setAttribute('id', 'Darkmode-Style');
        document.head.appendChild(styleSheet);
        styleSheet.sheet.insertRule('.top-bar { background: black !important;}', 0);
        styleSheet.sheet.insertRule('.svg-inline--fa { color: white !important;} ', 0);
        styleSheet.sheet.insertRule('.top-bar .breadcrumb>* { color: white !important;}', 0);
        styleSheet.sheet.insertRule('.lside.bar { background: #22272E !important;}', 0);
        styleSheet.sheet.insertRule('nav.sidebar:not(:hover) li .title { color: white !important;}', 0);
        styleSheet.sheet.insertRule('.ide-container .problem { background: #2D333B !important;}', 0);
        styleSheet.sheet.insertRule('.lfe-h1, .lfe-h2, .lfe-h3, .lfe-h4, .lfe-h5, .lfe-h6 { color: white !important;} ', 0);
        styleSheet.sheet.insertRule('.lfe-marked-wrap { color: white; } ', 0);
        styleSheet.sheet.insertRule('.lfe-marked pre, .lfe-marked pre>code { background: #22272E; color: white; } ', 0);
        styleSheet.sheet.insertRule('.ide-toolbar { background: #22272E; }', 0);
        styleSheet.sheet.insertRule('.ide-toolbar .title>.text { color: white; } ', 0);
        styleSheet.sheet.insertRule('label { color: white; } ', 0);
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
        styleSheet.sheet.insertRule('input, textarea.ide-textarea.lfe-code, .refined-input { border: 1px solid #22272E }', 0);
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
        styleSheet.sheet.insertRule('.ͼ5 { color: #C792EA; font-style: italic; }', 0); // 关键字
        styleSheet.sheet.insertRule('.ͼb { color: #C792EA; font-style: italic; }', 0); // 关键字
        styleSheet.sheet.insertRule('.ͼd { color: #F78A68; }', 0); // 数字
        styleSheet.sheet.insertRule('.ͼe { color: #C3E88D; }', 0); // 字符串
        styleSheet.sheet.insertRule('.ͼm { color: #4A4A4A; }', 0); // 注释
        styleSheet.sheet.insertRule('.ͼg { color: #7BAAFF; }', 0); // 函数名
        styleSheet.sheet.insertRule('.ͼi { color: #C792EA; font-style: italic; }', 0); // 关键字
        styleSheet.sheet.insertRule('.ͼf { color: #C3D365; }', 0); // 头文件
        styleSheet.sheet.insertRule('.cm-editor { color: #EEFFFF; }', 0); // 普通字符
        styleSheet.sheet.insertRule('body { caret-color: yellow !important; }', 0); // 光标
        styleSheet.sheet.insertRule('.ͼ4 .cm-line { caret-color: yellow !important; }', 0); // 光标
        styleSheet.sheet.insertRule('.ͼ4 .cm-line ::selection, .ͼ4 .cm-line::selection { background-color: #353535 !important; }', 0); // 选择颜色
        console.log("DarkMode is opened");
    }
    function Public() {
        const styleSheet = document.createElement('style');
        styleSheet.setAttribute('id', 'Public-Style');
        document.head.appendChild(styleSheet);
        styleSheet.sheet.insertRule('#IDE-Setting:hover { box-shadow: 0 0 7px 1px cornflowerblue }', 0);
        styleSheet.sheet.insertRule('.ͼq .cm-content { font-family: Fira Code !important; font-size: 15px;}');
        styleSheet.sheet.insertRule('.ide-container { height: calc(100vh - 3.5rem) }');
    }
    function Open() {
        var it = document.getElementsByClassName('user-nav');
        return it.length > 0;
    }
    function AddSettingButton() {
        var it = document.getElementsByClassName('user-nav')[0];
        var nw = document.createElement('div');
        nw.setAttribute('id', 'IDE-Setting');
        nw.style.margin = '10px';
        nw.style.display = 'inline-block';
        nw.style.color = 'white';
        nw.style.background = 'cornflowerblue';
        nw.style.padding = '8px 10px 8px 10px';
        nw.style.transition = 'box-shadow 0.3s';
        nw.style['border-radius'] = '5px';
        //nw.style['box-shadow'] = '0 0 7px 1px white';
        nw.style['font-family'] = 'Fira Code, Fira Mono, Consolas';
        nw.style['font-size'] = '15px';
        nw.innerHTML = 'Setting';
        it.insertBefore(nw, it.firstElementChild);
        init();
        document.getElementById('IDE-Setting').addEventListener('click', OpenTheWindow);
    }
    function init() {
        var body = document.body;
        var overlay = document.createElement('div');
        overlay.setAttribute('id', 'overlay');
        overlay.classList.add('overlay');
        body.appendChild(overlay);
        var modal = document.createElement('div');
        modal.setAttribute('id', 'SettingModal');
        modal.classList.add('SettingModal');
        var close = document.createElement('span');
        close.classList.add('setting-close');
        close.innerHTML = '&times;';
        modal.appendChild(close);
        modal.innerHTML += '<h2>设置窗口</h2>';
        var theme = document.createElement('button');
        theme.innerHTML = '切换主题';
        theme.classList.add('setting-button');
        modal.append(theme);
        body.appendChild(modal);
        const styleSheet = document.createElement('style');
        styleSheet.setAttribute('id', 'Setting-Style');
        document.head.appendChild(styleSheet);
        styleSheet.sheet.insertRule('.overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 1000; }', 0);
        styleSheet.sheet.insertRule('.SettingModal { display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); z-index: 1001; }', 0);
        styleSheet.sheet.insertRule('.setting-close { position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 20px; font-weight: bold; color: red; }', 0);
    }
    function switchThemeMode() {
        let ret = localStorage.getItem('DE_aemmprty_darkmode');
        if (ret == 0) {
            localStorage.setItem('DE_aemmprty_darkmode', 1);
            var it = document.getElementById('Lightmode-Style');
            it.remove();
            DarkMode();
        } else {
            localStorage.setItem('DE_aemmprty_darkmode', 0);
            it = document.getElementById('Darkmode-Style');
            it.remove();
            LightMode();
        }
    }
    function closeModal() {
        console.log('close Modal!');
        const overlay = document.getElementById('overlay');
        const modal = document.getElementById('SettingModal');
        overlay.style.display = 'none';
        modal.style.display = 'none';
        //location.reload(true);
    }
    function OpenTheWindow() {
        console.log('open the window');
        const overlay = document.getElementById('overlay');
        const modal = document.getElementById('SettingModal');
        const closeButton = document.getElementsByClassName('setting-close')[0];
        const theme = document.getElementsByClassName('setting-button')[0];
        overlay.style.display = 'block';
        modal.style.display = 'block';
        console.log(closeButton.innerHTML);
        closeButton.addEventListener('click', closeModal);
        theme.addEventListener('click', switchThemeMode);
    }
    template = localStorage.getItem("DE_aemmprty_template");
    console.log(template);
    if (template == null || template == 'null') {
        var res = prompt("检测到您是第一次使用该插件。如果您是 Windows 系统，请输入您的代码模板（直接从编译器中复制过来即可）：");
        template = res;
        localStorage.setItem("DE_aemmprty_template", res);
    }
    template = dealStyleProblem(template);
    const intervalId = setInterval(() => {
        if (condition()) {
            myFunction();
            clearInterval(intervalId);
        }
    }, 100);
    DarkMode();
    Public();
    const intervalOpen = setInterval(() => {
        if (Open()) {
            AddSettingButton();
            clearInterval(intervalOpen);
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
