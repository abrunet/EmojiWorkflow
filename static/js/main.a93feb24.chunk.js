(this["webpackJsonpemoji-workflow"]=this["webpackJsonpemoji-workflow"]||[]).push([[0],{12:function(e,t,r){e.exports=r.p+"static/media/blank_eyes.6585e257.png"},24:function(e,t,r){e.exports=r.p+"static/media/at_reaction.4dac6faf.png"},37:function(e,t,r){e.exports=r(69)},42:function(e,t,r){},43:function(e,t,r){},65:function(e,t,r){var a={"./blank_eyes.png":12,"./blank_joy.png":66,"./lasagna_face.png":67,"./nice_blank_eyes.png":68};function n(e){var t=i(e);return r(t)}function i(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id=65},66:function(e,t,r){e.exports=r.p+"static/media/blank_joy.d7309f23.png"},67:function(e,t,r){e.exports=r.p+"static/media/lasagna_face.1b36eb6a.png"},68:function(e,t,r){e.exports=r.p+"static/media/nice_blank_eyes.3c4c32b9.png"},69:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(22),o=r.n(i),s=(r(42),r(23)),c=r(2),l=r(3),u=r(5),f=r(4),g=r(6),p=(r(43),r(7)),m=r.n(p),h=r(28);r(45);function y(e){var t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t);e.bufferData(e.ARRAY_BUFFER,new Float32Array([1,1,-1,1,-1,-1,1,-1]),e.STATIC_DRAW);var r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);e.bufferData(e.ARRAY_BUFFER,new Float32Array([1,0,0,0,0,1,1,1]),e.STATIC_DRAW);var a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a);e.bufferData(e.ARRAY_BUFFER,new Float32Array([1,0,0,0,0,1,1,1]),e.DYNAMIC_DRAW);var n=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n);return e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,2,3,0]),e.STATIC_DRAW),{position:t,textureCoord:r,tintTextureCoord:a,indices:n}}function d(e){var t=function(e,t,r){var a=x(e,e.VERTEX_SHADER,t),n=x(e,e.FRAGMENT_SHADER,r),i=e.createProgram();if(e.attachShader(i,a),e.attachShader(i,n),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS))return alert("Unable to initialize the shader program: "+e.getProgramInfoLog(i)),null;return i}(e,"\n  attribute vec4 aVertexPosition;\n  attribute vec2 aTextureCoord;\n\n  uniform mat4 uModelViewMatrix;\n  uniform mat4 uProjectionMatrix;\n\n  varying highp vec2 vTextureCoord;\n\n  void main(void) {\n    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n    vTextureCoord = aTextureCoord;\n  }\n  ","\n    precision highp float;\n\n    varying highp vec2 vTextureCoord;\n\n    uniform sampler2D uSampler;\n\n    void main(void) {\n      gl_FragColor = texture2D(uSampler, vTextureCoord);\n      gl_FragColor.rgb *= gl_FragColor.a;\n    }\n  ");return{program:t,attribLocations:{vertexPosition:e.getAttribLocation(t,"aVertexPosition"),textureCoord:e.getAttribLocation(t,"aTextureCoord")},uniformLocations:{projectionMatrix:e.getUniformLocation(t,"uProjectionMatrix"),modelViewMatrix:e.getUniformLocation(t,"uModelViewMatrix"),uSampler:e.getUniformLocation(t,"uSampler")}}}function E(e,t){var r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);var a=e.RGBA,n=e.RGBA,i=e.UNSIGNED_BYTE,o=new Uint8Array([0,0,255,255]);e.texImage2D(e.TEXTURE_2D,0,a,1,1,0,n,i,o);var s=new Image;return s.onload=function(){e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,a,n,i,s),b(s.width)&&b(s.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR))},s.crossOrigin="",s.src=t,r}function b(e){return 0==(e&e-1)}function S(e){e.clearColor(0,0,0,0),e.clearDepth(1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}function v(e,t,r,a,n,i,o){var s=h.a,c=s.create(),l=s.create();s.translate(l,l,i),s.scale(l,l,n),s.rotateZ(l,l,o);var u=e.FLOAT;e.bindBuffer(e.ARRAY_BUFFER,r.position),e.vertexAttribPointer(t.attribLocations.vertexPosition,2,u,!1,0,0),e.enableVertexAttribArray(t.attribLocations.vertexPosition);var f=e.FLOAT;e.bindBuffer(e.ARRAY_BUFFER,r.textureCoord),e.vertexAttribPointer(t.attribLocations.textureCoord,2,f,!1,0,0),e.enableVertexAttribArray(t.attribLocations.textureCoord),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r.indices),e.useProgram(t.program),e.uniformMatrix4fv(t.uniformLocations.projectionMatrix,!1,c),e.uniformMatrix4fv(t.uniformLocations.modelViewMatrix,!1,l),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,a),e.uniform1i(t.uniformLocations.uSampler,0);var g=e.UNSIGNED_SHORT;e.drawElements(e.TRIANGLES,6,g,0)}function x(e,t,r){var a=e.createShader(t);return e.shaderSource(a,r),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS)?a:(alert("An error occurred compiling the shaders: "+e.getShaderInfoLog(a)),e.deleteShader(a),null)}var R=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(r=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={},r}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#glcanvas").getContext("webgl",{premultipliedAlpha:!1});e?(this.rafHandle=m()(this.renderGlScene.bind(this,e)),this.programInfo=d(e),this.buffers=y(e),this.bgTexture=E(e,this.props.backgroundImage),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA)):alert("Unable to initialize WebGL. Your browser or machine may not support it.")}},{key:"componentDidUpdate",value:function(e){e.eyeSrc!=this.props.eyeSrc&&this.updateEyeTexture(),e.backgroundImage!=this.props.backgroundImage&&this.updateBackgroundTexture()}},{key:"updateBackgroundTexture",value:function(){var e=document.querySelector("#glcanvas").getContext("webgl");this.bgTexture=E(e,this.props.backgroundImage)}},{key:"updateEyeTexture",value:function(){var e=this.props.eyeSrc;if(null!=e){var t=document.querySelector("#glcanvas").getContext("webgl");this.eyeTexture=E(t,e,t.LINEAR)}else this.eyeTexture=null}},{key:"renderGlScene",value:function(e,t){if(S(e),v(e,this.programInfo,this.buffers,this.bgTexture,[1,1,1],[0,0,0],0),this.eyeTexture){var r=this.props.eyeXOffset,a=this.props.eyeYOffset,n=this.props.eyeScaleFactor,i=this.props.eyeScaleFactor;this.props.eyeSrcAspectRatio<1?n*=this.props.eyeSrcAspectRatio:this.props.eyeSrcAspectRatio>1&&(i=1*i/this.props.eyeSrcAspectRatio);var o=this.props.mirrorLeftEye?-n:n,s=this.props.mirrorRightEye?-n:n,c=this.props.mirrorLeftEye?this.props.eyeRotation:-this.props.eyeRotation,l=this.props.mirrorRightEye?-this.props.eyeRotation:this.props.eyeRotation;v(e,this.programInfo,this.buffers,this.eyeTexture,[o,i,1],[-r,a,0],c),v(e,this.programInfo,this.buffers,this.eyeTexture,[s,i,1],[r,a,0],l)}this.rafHandle=m()(this.renderGlScene.bind(this,e,t))}},{key:"render",value:function(){return n.a.createElement("canvas",{id:"glcanvas",width:"160",height:"160"})}}]),t}(a.Component),T=r(24),A=r.n(T),_=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(r=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={},r}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#glcanvas-atreaction").getContext("webgl",{premultipliedAlpha:!1});e?(this.rafHandle=m()(this.renderGlScene.bind(this,e)),this.programInfo=d(e),this.buffers=y(e),this.atReactionTexture=E(e,A.a),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA)):alert("Unable to initialize WebGL. Your browser or machine may not support it.")}},{key:"componentDidUpdate",value:function(e){e.eyeSrc!=this.props.eyeSrc&&this.updateEyeTexture(),e.backgroundImage!=this.props.backgroundImage&&this.updateBackgroundTexture()}},{key:"updateBackgroundTexture",value:function(){var e=document.querySelector("#glcanvas-atreaction").getContext("webgl");this.bgTexture=E(e,this.props.backgroundImage)}},{key:"updateEyeTexture",value:function(){var e=this.props.eyeSrc;if(null!=e){var t=document.querySelector("#glcanvas-atreaction").getContext("webgl");this.eyeTexture=E(t,e,t.LINEAR)}else this.eyeTexture=null}},{key:"renderGlScene",value:function(e,t){if(S(e),null!=this.bgTexture){var r=1,a=1;this.props.aspectRatio<1?r*=this.props.aspectRatio:this.props.aspectRatio>1&&(a=1*a/this.props.aspectRatio),v(e,this.programInfo,this.buffers,this.bgTexture,[r,a,1],[0,0,0],0)}v(e,this.programInfo,this.buffers,this.atReactionTexture,[.5,.5,1],[-.5,-.6,0],0),this.rafHandle=m()(this.renderGlScene.bind(this,e,t))}},{key:"render",value:function(){return n.a.createElement("canvas",{id:"glcanvas-atreaction",width:"160",height:"160"})}}]),t}(a.Component),O=r(9),k=r(25),F=r.n(k),I=(r(64),r(12)),w=r.n(I);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=[],D=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(r=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={eyesSrc:null,backgroundImage:w.a,aspectRatio:1,atReactionSrc:null,atReactionAspectRatio:1,eyesSettings:{yOffset:0,xOffset:0,scaleFactor:100,rotation:0,mirrorRightEye:!1,mirrorLeftEye:!1},imageSourceType:"file"},r.onImageSourceAvailable=function(e,t){var a=new Image;a.crossOrigin="",a.src=e,a.onload=function(){var n={aspectRatio:a.width/a.height};n[t]=e,console.log(t),r.setState(n)}},r.onSelectImage=function(e,t){if("file"==r.state.imageSourceType){if(t.target.files&&t.target.files.length>0){var a=new FileReader;a.addEventListener("load",(function(){r.onImageSourceAvailable(a.result,e)}),!1),a.readAsDataURL(t.target.files[0])}}else r.onImageSourceAvailable(t.target.value,e)},r.onSelectBGFile=function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",(function(){var e=new Image;e.src=t.result,e.onload=function(){r.setState({backgroundImage:t.result})}}),!1),t.readAsDataURL(e.target.files[0])}},r}return Object(g.a)(t,e),Object(l.a)(t,[{key:"importAll",value:function(e){return e.keys().map(e)}},{key:"componentWillMount",value:function(){C=this.importAll(r(65))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{classname:"Top"},n.a.createElement("div",{className:"App"},n.a.createElement("div",null,"Emoji Workflow",n.a.createElement("br",null),n.a.createElement(R,{backgroundImage:this.state.backgroundImage,eyeSrc:this.state.eyesSrc,eyeSrcAspectRatio:this.state.aspectRatio,eyeXOffset:this.state.eyesSettings.xOffset/100,eyeYOffset:this.state.eyesSettings.yOffset/100,eyeScaleFactor:this.state.eyesSettings.scaleFactor/100,eyeRotation:this.state.eyesSettings.rotation*Math.PI/180,mirrorRightEye:this.state.eyesSettings.mirrorRightEye,mirrorLeftEye:this.state.eyesSettings.mirrorLeftEye})),n.a.createElement("div",{style:{}},n.a.createElement("ul",{style:{listStyleType:"none"}},n.a.createElement("li",null,n.a.createElement("input",{type:this.state.imageSourceType,onChange:this.onSelectImage.bind(this,"eyesSrc")})),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){e.setState({imageSourceType:"file"})}},"File"),"\xa0",n.a.createElement("button",{onClick:function(){e.setState({imageSourceType:"url"})}},"Url"))),n.a.createElement("div",null,n.a.createElement("img",{src:this.state.eyesSrc,style:{maxHeight:100}}))),n.a.createElement("div",{style:{padding:"50px"}},"X Offset: ",this.state.eyesSettings.xOffset,"%",n.a.createElement("br",null),n.a.createElement(O.a,{axis:"x",x:this.state.eyesSettings.xOffset,xmin:0,xmax:100,onChange:function(t){var r=t.x;return e.setState((function(e){return{eyesSettings:U({},e.eyesSettings,{xOffset:r})}}))}}),n.a.createElement("br",null),"Y Offset: ",this.state.eyesSettings.yOffset,"%",n.a.createElement("br",null),n.a.createElement(O.a,{axis:"x",x:this.state.eyesSettings.yOffset,xmin:-100,xmax:100,onChange:function(t){var r=t.x;return e.setState((function(e){return{eyesSettings:U({},e.eyesSettings,{yOffset:r})}}))}}),n.a.createElement("br",null),"Scale Factor: ",this.state.eyesSettings.scaleFactor,"%",n.a.createElement("br",null),n.a.createElement(O.a,{axis:"x",x:this.state.eyesSettings.scaleFactor,xmin:0,xmax:100,onChange:function(t){var r=t.x;return e.setState((function(e){return{eyesSettings:U({},e.eyesSettings,{scaleFactor:r})}}))}}),n.a.createElement("br",null),"Rotation:  ",this.state.eyesSettings.rotation,"\xb0",n.a.createElement("br",null),n.a.createElement(O.a,{axis:"x",x:this.state.eyesSettings.rotation,xmin:-45,xmax:45,onChange:function(t){var r=t.x;return e.setState((function(e){return{eyesSettings:U({},e.eyesSettings,{rotation:r})}}))}}),n.a.createElement("br",null),"Mirror Right Eye: ",n.a.createElement("input",{type:"checkbox",onChange:function(t){var r=t.target;e.setState((function(e){return{eyesSettings:U({},e.eyesSettings,{mirrorRightEye:r.checked})}}))}}),n.a.createElement("br",null),"Mirror Left Eye: ",n.a.createElement("input",{type:"checkbox",onChange:function(t){var r=t.target;e.setState((function(e){return{eyesSettings:U({},e.eyesSettings,{mirrorLeftEye:r.checked})}}))}}),n.a.createElement("br",null))),n.a.createElement("div",null,"Choose a background image:",n.a.createElement("br",null),n.a.createElement(F.a,{images:C.map((function(e,t){return{src:e,value:t}})),onPick:function(t){e.setState({backgroundImage:t.src})}})),n.a.createElement("div",null,"Or choose a custom image:",n.a.createElement("input",{type:"file",onChange:this.onSelectBGFile,style:{alignSelf:"top"}})),n.a.createElement("div",{class:"App"},n.a.createElement("div",null,"At Reaction Workflow",n.a.createElement("br",null),n.a.createElement(_,{backgroundImage:this.state.atReactionSrc,aspectRatio:this.state.atReactionAspectRatio})),n.a.createElement("input",{type:this.state.imageSourceType,onChange:this.onSelectImage.bind(this,"atReactionSrc"),style:{alignSelf:"top"}})))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.a93feb24.chunk.js.map