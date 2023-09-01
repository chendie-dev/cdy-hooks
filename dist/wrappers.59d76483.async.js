(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{MZF8:function(e,t,n){"use strict";var o=n("ogwx");n.d(t,"a",(function(){return o["b"]}));n("VCU9")},OYlG:function(e,t,n){"use strict";n.r(t);var o=n("mn0l"),r=n("ahKI"),u=n.n(r),s=n("RGYn"),c=n("DBVu"),i=n("GAyR"),a=n("7JWa"),l="import React from 'react'\nimport { useBoolean } from 'cdy-hooks';\n\nexport default ()=>{\n    const [bool,{toggle,setTrue,setFalse}]=useBoolean();\n\n    return (\n        <div>\n            <p>\u5f53\u524d\u503c\u4e3a{`${bool}`}</p>\n            <p>\n                <button onClick={toggle}>toggle</button>\n                <button onClick={setTrue}>setTrue</button>\n                <button onClick={setFalse}>setFalse</button>\n            </p>\n        </div>\n    )\n};",d="import React, {  useState } from 'react'\nimport {useDebounce} from 'cdy-hooks';\n\n\nexport default () => {\n    const [count, setCount] = useState('');\n    const debounceValue=useDebounce(count,{wait:2000})\n    return (\n        <div>\n            <input\n                value={count}\n                onChange={(e)=>setCount(e.target.value)}\n                placeholder='\u8f93\u5165\u503c'\n            />\n            <p>value:{debounceValue}</p>\n        </div>\n    )\n}",p="import { useDebounceFn } from 'cdy-hooks';\nimport React, { useState } from 'react';\n\nexport default () => {\n  const [value, setValue] = useState(0);\n  const { run } = useDebounceFn(\n    () => {\n      setValue(value + 1);\n    },\n    {\n      wait: 500,\n    },\n  );\n\n  return (\n    <div>\n      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>\n      <button type=\"button\" onClick={run}>\n        Click fast!\n      </button>\n    </div>\n  );\n};",m="import React, { useState, useEffect } from 'react';\nimport { useLatest } from 'cdy-hooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n\n  const latestCountRef = useLatest(count);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setCount(latestCountRef.current + 1);\n    }, 1000);\n    return () => clearInterval(interval);\n  }, []);\n\n  return (\n    <>\n      <p>count: {count}</p>\n    </>\n  );\n};",f="import React,{useState,useCallback} from 'react'\nimport {useMemoried} from 'cdy-hooks'\nimport { message } from 'antd';\n\nexport default()=>{\n    const [count,setCount]=useState(0);\n    const memoried=useMemoried(()=>{\n        message.info(`current count:${count}`)\n    })\n    const callback=useCallback(()=>{\n        message.info(`current count:${count}`)\n    },[count])\n    return (\n        <div>\n            <p>count:{count}</p>\n            <button style={{marginRight:10}} onClick={()=>setCount(c=>c+1)}>add count</button>\n            <button style={{marginRight:10}} onClick={memoried}>call memoried</button>\n            <button onClick={callback}>call callback</button>\n        </div>\n    )\n}",h="import React, { useState, useCallback, useRef } from 'react'\nimport {useMemoried} from 'cdy-hooks'\nimport { message } from 'antd';\n\nexport default () => {\n    const [count, setCount] = useState(0);\n    const callback = useCallback(() => {\n        message.info(`current count:${count}`)\n    }, [count])\n    const memoried = useMemoried(() => {\n        message.info(`current count:${count}`)\n    })\n    return (\n        <div>\n            <p>count:{count}</p>\n            <button style={{ marginRight: 10 }} onClick={() => setCount(c => c + 1)}>add count</button>\n            <h3>\u4f7f\u7528useCallback\u52a0\u8f7d\u5b50\u7ec4\u4ef6</h3>\n            <ExpensiveTree showCount={callback} />\n            <h3>\u4f7f\u7528useMemoried\u52a0\u8f7d\u5b50\u7ec4\u4ef6</h3>\n            <ExpensiveTree showCount={memoried} />\n        </div>\n    )\n}\n\nconst ExpensiveTree = React.memo(({ showCount }) => {\n    const renderCount = useRef(0);\n    renderCount.current += 1\n    return (\n        <>\n            <p>count:{renderCount.current}</p>\n            <button onClick={showCount}>show parent count</button>\n        </>\n    )\n})",b="import React,{useState} from 'react'\nimport {useThrottle} from 'cdy-hooks'\n\nexport default()=>{\n    const [value,setValue]=useState<string>('');\n    const throttle=useThrottle(value,{wait:3000})\n    return(\n        <div>\n            <input type=\"text\" value={value} onChange={(e)=>setValue(e.target.value)} />\n            <p>throttle:{throttle}</p>\n        </div>\n    )\n}",v="import React,{useState} from 'react'\nimport {useThrottleFn} from 'cdy-hooks'\n\nexport default ()=>{\n    const [count,setCount]=useState(0);\n    const {run}=useThrottleFn(()=>{\n        setCount(count+1);\n    },{wait:2000})\n\n    return(\n        <div>\n            <p>count:{count}</p>\n            <button onClick={run}>click quik!</button>\n        </div>\n    )\n}",k="import React from 'react';\nimport { useTitle } from 'cdy-hooks';\n\nexport default () => {\n  useTitle('Page Title');\n\n  return (\n    <div>\n      <p>Set title of the page.</p>\n    </div>\n  );\n};",g="import React from 'react'\nimport { useToggle } from 'cdy-hooks'\n\nexport default ()=>{\n    const [state, { toggle, setLeft, setRight }] = useToggle('hello');\n    return (\n        <div>\n            <p>\u5f53\u524d\u503c\u4e3a{`${state}`}</p>\n            <p>\n                <button onClick={toggle}>toggle \u5207\u6362</button>\n                <button onClick={setLeft}>setLeft \u5207\u6362</button>\n                <button onClick={setRight}>setRight \u5207\u6362</button>\n            </p>\n        </div>\n    )\n}",w="import React from 'react'\nimport { useToggle } from 'cdy-hooks'\n\nexport default()=>{\n    const [state, { toggle, setLeft, setRight,set }] = useToggle(\"cdy\",\"dc\");\n    return (\n        <div>\n            <p>\u5f53\u524d\u503c\u4e3a{`${state}`}</p>\n            <p>\n                <button onClick={toggle}>toggle \u5207\u6362</button>\n                <button onClick={setLeft}>setLeft \u5207\u6362</button>\n                <button onClick={setRight}>setRight \u5207\u6362</button>\n                <button onClick={()=>set('cdy')}>set:cdy</button>\n                <button onClick={()=>set('dc')}>set:dc</button>\n            </p>\n        </div>\n    )\n}",y="import React from 'react'\nimport {message} from 'antd'\nimport {useBoolean, useUnmount} from 'cdy-hooks'\n\nconst MyComponent=()=>{\n    useUnmount(()=>{\n        message.info(\"unmount\")\n    })\n    return(\n        <div>\n            hello world!\n        </div>\n    )\n}\n\nexport default ()=>{\n    const [state,{toggle}]=useBoolean();\n\n    return(\n        <div>\n            <button onClick={toggle}>{state?'unmount':'mount'}</button>\n            {state&&<MyComponent/>}\n        </div>\n    )\n}",C="import React,{useEffect} from 'react';\nimport {useToggle, useUnmountedRef} from 'cdy-hooks';\nimport { message } from 'antd';\n\nfunction MyComponent(){\n    const unmountRef=useUnmountedRef();\n    useEffect(()=>{\n        setTimeout(()=>{\n            if(!unmountRef.current){\n                message.info('component is alive!')\n            }\n        },1000)\n    },[])\n    return(\n        <div>\n            hello world!\n        </div>\n    )\n}\nexport default()=>{\n    const [state,{toggle}]=useToggle();\n    return(\n        <div>\n            <button onClick={toggle}>{state?'unmount':'mount'}</button>\n            {state&&<MyComponent/>}\n        </div>\n    )\n}",x="import React from 'react'\nimport {useUpdate} from 'cdy-hooks'\nexport default ()=>{\n    const update=useUpdate();\n    return (\n        <div>\n            <p>Time:{Date.now()}</p>\n            <button onClick={update}>update</button>\n        </div>\n    )\n}",O="import React,{useState,useEffect} from 'react'\nimport {useUpdateEffect} from 'cdy-hooks';\n\nexport default ()=>{\n    const [count,setCount]=useState(0);\n    const [effectCount,setEffectCount]=useState(0);\n    const [updateEffectCount,setUpdateEffectCount]=useState(0)\n    useEffect(()=>{\n        setEffectCount(c=>c+1)\n    },[count])\n    useUpdateEffect(()=>{\n        setUpdateEffectCount(c=>c+1)\n    },[count])\n    return(\n        <div>\n            <p>effectCount:{effectCount}</p>\n            <p>updateEffectCount:{updateEffectCount}</p>\n            <button onClick={()=>setCount(c=>c+1)}>reRender</button>\n        </div>\n    )\n}",j={"useboolean-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"yoie"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{version:"0.0.2"}},title:"\u57fa\u7840\u7528\u6cd5",description:'<div class="markdown"><p>\u5207\u6362 boolean\uff0c\u53ef\u4ee5\u63a5\u6536\u9ed8\u8ba4\u503c\u3002</p></div>',identifier:"useboolean-demo1"}},"usedebounce-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"eWij"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{version:"0.0.2"}},hideActions:["CSB"],identifier:"usedebounce-demo1"}},"usedebouncefn-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"tHpm"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{"cdy-hooks":{version:"0.0.2"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u9891\u7e41\u8c03\u7528 run\uff0c\u4f46\u53ea\u4f1a\u5728\u6240\u6709\u70b9\u51fb\u5b8c\u6210 500ms \u540e\u6267\u884c\u4e00\u6b21\u76f8\u5173\u51fd\u6570</p></div>',identifier:"usedebouncefn-demo1"}},"uselatest-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"OCTU"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{version:"0.0.2"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>useLatest \u8fd4\u56de\u7684\u6c38\u8fdc\u662f\u6700\u65b0\u503c</p></div>',identifier:"uselatest-demo1"}},"usememoried-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"GsNi"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f}},dependencies:{react:{version:">=16.9.0"},"cdy-hooks":{version:"0.0.2"},antd:{version:"5.2.1"},"react-dom":{version:">=16.9.0"}},hideActions:["CSB"],identifier:"usememoried-demo1"}},"usememoried-demo2":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"BpAw"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:h}},dependencies:{react:{version:">=16.9.0"},"cdy-hooks":{version:"0.0.2"},antd:{version:"5.2.1"},"react-dom":{version:">=16.9.0"}},title:"useMemoizedFn \u51fd\u6570\u5730\u5740\u4e0d\u4f1a\u53d8\u5316\uff0c\u53ef\u4ee5\u7528\u4e8e\u6027\u80fd\u4f18\u5316",hideActions:["CSB"],description:'<div class="markdown"><p>\u793a\u4f8b\u4e2d <code>memoizedFn</code> \u662f\u4e0d\u4f1a\u53d8\u5316\u7684\uff0c<code>callbackFn</code> \u5728 count \u53d8\u5316\u65f6\u53d8\u5316\u3002</p></div>',identifier:"usememoried-demo2"}},"usethrottle-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"aFWa"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{version:"0.0.2"}},hideActions:["CSB"],identifier:"usethrottle-demo1"}},"usethrottlefn-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"rXjo"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:v}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{version:"0.0.2"}},hideActions:["CSB"],identifier:"usethrottlefn-demo1"}},"usetitle-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"dA01"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:k}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{version:"0.0.2"}},hideActions:["CSB"],identifier:"usetitle-demo1"}},"usetoggle-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{version:"0.0.2"}},hideActions:["CSB"],identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"Dr+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:w}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{version:"0.0.2"}},hideActions:["CSB"],identifier:"usetoggle-demo2"}},"useunmount-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"y7Gi"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:y}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.2.1"},"cdy-hooks":{version:"0.0.2"},"react-dom":{version:">=16.9.0"}},hideActions:["CSB"],identifier:"useunmount-demo1"}},"useunmountedref-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"gT5F"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:C}},dependencies:{react:{version:">=16.9.0"},"cdy-hooks":{version:"0.0.2"},antd:{version:"5.2.1"},"react-dom":{version:">=16.9.0"}},hideActions:["CSB"],identifier:"useunmountedref-demo1"}},"useupdate-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"INwW"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:x}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{version:"0.0.2"}},identifier:"useupdate-demo1"}},"useupdateeffect-demo1":{component:Object(a["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(21),n.e(3)]).then(n.bind(null,"vcr8"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:O}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{version:"0.0.2"}},hideActions:["CSB"],identifier:"useupdateeffect-demo1"}}},R=n("Zs1V"),S=n("HvXX"),P=n.n(S);t["default"]=e=>u.a.createElement(P.a,Object(o["a"])({},e,{config:s,demos:j,apis:R}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"/hooks":[{"title":"\u751f\u547d\u5468\u671f","children":[{"path":"/hooks/use-unmount","title":"useUnmount"},{"path":"/hooks/use-unmounted-ref","title":"useUnmountedRef"}]},{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"},{"path":"/hooks/use-boolean","title":"useBoolean"},{"path":"/hooks/use-debounce","title":"useDebounce"},{"path":"/hooks/use-throttle","title":"useThrottle"}]},{"title":"Effect","children":[{"path":"/hooks/use-debounce-fn","title":"useDebounceFn"},{"path":"/hooks/use-throttle-fn","title":"useThrottleFn"},{"path":"/hooks/use-update","title":"useUpdate"},{"path":"/hooks/use-update-effect","title":"useUpdateEffect"}]},{"title":"DOM","children":[{"path":"/hooks/use-title","title":"useTitle"}]},{"title":"\u8fdb\u9636","children":[{"path":"/hooks/use-latest","title":"useLatest"},{"path":"/hooks/use-memoried","title":"useMemoizedFn"}]}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"},{"title":"GitHub","path":"https://github.com/cdy-studio-fe/cdy-hooks"}]},"title":"\u5370\u5ba2\u5b66\u9662 cdy hooks","logo":"/cdy-hooks/avatar.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);