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
        styleSheet.sheet.insertRule('.ͼ5 { color: #7C4EFF; font-style: italic; }', 0); // 关键字
        styleSheet.sheet.insertRule('.ͼb { color: #7C4EFF; font-style: italic; }', 0); // 关键字
        styleSheet.sheet.insertRule('.ͼd { color: #F76D47; }', 0); // 数字
        styleSheet.sheet.insertRule('.ͼe { color: #91B878; }', 0); // 字符串
        styleSheet.sheet.insertRule('.ͼm { color: #CCD7DA; }', 0); // 注释
        styleSheet.sheet.insertRule('.ͼg { color: #80CBC4; }', 0); // 函数名
        styleSheet.sheet.insertRule('.ͼi { color: #7C4EFF; font-style: italic; }', 0); // 关键字
        styleSheet.sheet.insertRule('.ͼf { color: #91B859; }', 0); // 头文件
        styleSheet.sheet.insertRule('.cm-editor { color: #6182B8; }', 0); // 普通字符
        styleSheet.sheet.insertRule('.ͼq .cm-content { font-family: Fira Code !important; font-size: 15px;}');
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
