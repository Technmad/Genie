"use strict";(()=>{var e={};e.id=700,e.ids=[700],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},72254:e=>{e.exports=require("node:buffer")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},88849:e=>{e.exports=require("node:http")},22286:e=>{e.exports=require("node:https")},87503:e=>{e.exports=require("node:net")},49411:e=>{e.exports=require("node:path")},97742:e=>{e.exports=require("node:process")},84492:e=>{e.exports=require("node:stream")},72477:e=>{e.exports=require("node:stream/web")},41041:e=>{e.exports=require("node:url")},47261:e=>{e.exports=require("node:util")},65628:e=>{e.exports=require("node:zlib")},77282:e=>{e.exports=require("process")},71267:e=>{e.exports=require("worker_threads")},46222:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>v,originalPathname:()=>h,requestAsyncStorage:()=>l,routeModule:()=>x,serverHooks:()=>m,staticGenerationAsyncStorage:()=>q,staticGenerationBailout:()=>_});var o={};t.r(o),t.d(o,{POST:()=>POST}),t(95655);var s=t(83323),i=t(54647),n=t(98620),a=t(66886),u=t(87773),p=t.n(u);let d=new(p())({auth:process.env.REPLICATE_API_TOKEN});async function POST(e){try{let{userId:r}=(0,n.I8)(),t=await e.json(),{prompt:o}=t;if(!r)return new a.Z("Unauthorized",{status:401});if(!o)return new a.Z("Prompt is required",{status:400});let s=await d.run("anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",{input:{prompt:o}});return a.Z.json(s)}catch(e){return console.log("[VIDEO_ERROR]",e),new a.Z("internal error",{status:500})}}let c=s.AppRouteRouteModule,x=new c({definition:{kind:i.x.APP_ROUTE,page:"/api/video/route",pathname:"/api/video",filename:"route",bundlePath:"app/api/video/route"},resolvedPagePath:"/home/adii/Bird-AI/bird-ai/app/api/video/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:l,staticGenerationAsyncStorage:q,serverHooks:m,headerHooks:v,staticGenerationBailout:_}=x,h="/api/video/route"}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[651,727,773],()=>__webpack_exec__(46222));module.exports=t})();