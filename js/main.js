function writeCode(prefix, code, fn) {
    let n = 0
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let timer = setInterval(function() {
        if (n >= code.length) {
            window.clearInterval(timer)
            fn()
        }
        n++
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css')
        styleTag.innerHTML = prefix + code.substring(0, n)
            // domCode.scrollTop = 10000
        domCode.scrollTop = domCode.scrollHeight
    }, 10)

}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0

    let timer = setInterval(function() {
        n++
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(timer)
            fn()
        }
    }, 10)
}


let result =
    `
/* 面试官你好，我是李文瀚
我将以动画的形式来介绍我自己

只用文字介绍太单调了
我就用代码来介绍吧

首先准备一些样式 */

* {
    transition: all 0.5s;
}

html {
    background: pink;
    font-size: 16px;
}

#code {
    border: 1px solid red;
    padding: 16px;
}


/* 我来加一些代码高亮吧 */

.token.selector {
    color: #690;
}

.token.property {
    color: #905;
}

.token.function {
    color: #DD4A68;
}


/* 加点3D效果 */

#code {
    transform: rotate(360deg);
}


/* 下面我需要一张白纸，介绍一下我自己 */
#code {
    position: fixed;
    width: 50%;
    left: 0;
    height: 100%;
}

#paper {
    position: fixed;
    width: 50%;
    right: 0;
    height: 100%;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

#paper>.content {
    background: white;
    height: 100%;
    width: 100%;
}

`

var result2 = `
// #paper {
//     width: 100px;
//     height: 100px;
//     background: red;
// }

`

var md = `
#自我介绍

我叫李文瀚
2019年毕业于郑州大学
学习前端
希望应聘前端开发岗位

#技能介绍
熟悉js，css

项目介绍

1.apple轮播
2.简历
3.画板

#联系方式
QQ 327838938
Email: liwehansj@163.com
phone: 13838012039
`
writeCode('', result, () => {
    console.log('异步你结束了')
    createPaper(() => {
        writeCode(result, result2, () => {
            writeMarkdown(md)
        })
    })
})

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    document.body.appendChild(paper)
    paper.appendChild(content)
    fn()
}

function fn3(preResult) {
    var result = `
    #paper {
        width: 100px;
        height: 100px;
        background: red;
    }

    `

    var n = 0
    var id = setInterval(() => {
        n++

        code.innerHTML = preResult + result.substring(0, n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
        styleTag.innerHTML = preResult + result.substring(0, n)
        if (n >= result.length) {
            window.clearInterval(id)
        }
    }, 40)
}