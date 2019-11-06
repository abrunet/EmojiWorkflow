(this["webpackJsonpemoji-workflow"]=this["webpackJsonpemoji-workflow"]||[]).push([[0],{12:function(e,t,r){e.exports=r.p+"static/media/blank_eyes.6585e257.png"},26:function(e,t,r){e.exports=r.p+"static/media/nice_blank_eyes.3c4c32b9.png"},38:function(e,t,r){e.exports=r(68)},43:function(e,t,r){},44:function(e,t,r){},68:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(24),o=r.n(i),c=(r(43),r(6)),s=r(7),u=r(9),l=r(8),f=r(10),m=(r(44),r(11)),h=r.n(m),E=r(29);r(46);function g(e){var t=function(e,t,r){var a=R(e,e.VERTEX_SHADER,t),n=R(e,e.FRAGMENT_SHADER,r),i=e.createProgram();if(e.attachShader(i,a),e.attachShader(i,n),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS))return alert("Unable to initialize the shader program: "+e.getProgramInfoLog(i)),null;return i}(e,"\n  attribute vec4 aVertexPosition;\n  attribute vec2 aTextureCoord;\n\n  uniform mat4 uModelViewMatrix;\n  uniform mat4 uProjectionMatrix;\n\n  varying highp vec2 vTextureCoord;\n\n  void main(void) {\n    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n    vTextureCoord = aTextureCoord;\n  }\n  ","\n    precision highp float;\n\n    varying highp vec2 vTextureCoord;\n\n    uniform sampler2D uSampler;\n\n    void main(void) {\n      gl_FragColor = texture2D(uSampler, vTextureCoord);\n      gl_FragColor.rgb *= gl_FragColor.a;\n    }\n  ");return{program:t,attribLocations:{vertexPosition:e.getAttribLocation(t,"aVertexPosition"),textureCoord:e.getAttribLocation(t,"aTextureCoord")},uniformLocations:{projectionMatrix:e.getUniformLocation(t,"uProjectionMatrix"),modelViewMatrix:e.getUniformLocation(t,"uModelViewMatrix"),uSampler:e.getUniformLocation(t,"uSampler")}}}function d(e,t){var r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);var a=e.RGBA,n=e.RGBA,i=e.UNSIGNED_BYTE,o=new Uint8Array([0,0,255,255]);e.texImage2D(e.TEXTURE_2D,0,a,1,1,0,n,i,o);var c=new Image;return c.onload=function(){e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,a,n,i,c),p(c.width)&&p(c.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR))},c.src=t,r}function p(e){return 0==(e&e-1)}function x(e,t,r,a,n,i,o){var c=E.a,s=c.create(),u=c.create();c.translate(u,u,i),c.scale(u,u,n),c.rotateZ(u,u,o);var l=e.FLOAT;e.bindBuffer(e.ARRAY_BUFFER,r.position),e.vertexAttribPointer(t.attribLocations.vertexPosition,2,l,!1,0,0),e.enableVertexAttribArray(t.attribLocations.vertexPosition);var f=e.FLOAT;e.bindBuffer(e.ARRAY_BUFFER,r.textureCoord),e.vertexAttribPointer(t.attribLocations.textureCoord,2,f,!1,0,0),e.enableVertexAttribArray(t.attribLocations.textureCoord),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r.indices),e.useProgram(t.program),e.uniformMatrix4fv(t.uniformLocations.projectionMatrix,!1,s),e.uniformMatrix4fv(t.uniformLocations.modelViewMatrix,!1,u),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,a),e.uniform1i(t.uniformLocations.uSampler,0);var m=e.UNSIGNED_SHORT;e.drawElements(e.TRIANGLES,6,m,0)}function R(e,t,r){var a=e.createShader(t);return e.shaderSource(a,r),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS)?a:(alert("An error occurred compiling the shaders: "+e.getShaderInfoLog(a)),e.deleteShader(a),null)}r(63);var T=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(r=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={},r}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#glcanvas").getContext("webgl",{premultipliedAlpha:!1});e?(this.rafHandle=h()(this.renderGlScene.bind(this,e)),this.programInfo=g(e),this.buffers=function(e){var t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([1,1,-1,1,-1,-1,1,-1]),e.STATIC_DRAW);var r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([1,0,0,0,0,1,1,1]),e.STATIC_DRAW);var a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([1,0,0,0,0,1,1,1]),e.DYNAMIC_DRAW);var n=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,2,3,0]),e.STATIC_DRAW),{position:t,textureCoord:r,tintTextureCoord:a,indices:n}}(e),this.bgTexture=d(e,this.props.backgroundImage),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA)):alert("Unable to initialize WebGL. Your browser or machine may not support it.")}},{key:"componentDidUpdate",value:function(e){e.eyeSrc!=this.props.eyeSrc&&this.updateEyeTexture(),e.backgroundImage!=this.props.backgroundImage&&this.updateBackgroundTexture()}},{key:"updateBackgroundTexture",value:function(){var e=document.querySelector("#glcanvas").getContext("webgl");this.bgTexture=d(e,this.props.backgroundImage)}},{key:"updateEyeTexture",value:function(){var e=this.props.eyeSrc;if(null!=e){var t=document.querySelector("#glcanvas").getContext("webgl");this.eyeTexture=d(t,e,t.LINEAR)}else this.eyeTexture=null}},{key:"renderGlScene",value:function(e,t){if(function(e){e.clearColor(0,0,0,0),e.clearDepth(1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}(e),x(e,this.programInfo,this.buffers,this.bgTexture,[1,1,1],[0,0,0],0),this.eyeTexture){var r=this.props.eyeXOffset,a=this.props.eyeYOffset,n=this.props.eyeScaleFactor,i=this.props.eyeScaleFactor;this.props.eyeSrcAspectRatio<1?n=this.props.eyeSrcAspectRatio:this.props.eyeSrcAspectRatio>1&&(i=1/this.props.eyeSrcAspectRatio);var o=this.props.mirrorLeftEye?-n:n,c=this.props.mirrorRightEye?-n:n,s=this.props.eyeRotation;x(e,this.programInfo,this.buffers,this.eyeTexture,[o,i,1],[-r,a,0],-s),x(e,this.programInfo,this.buffers,this.eyeTexture,[c,i,1],[r,a,0],s)}this.rafHandle=h()(this.renderGlScene.bind(this,e,t))}},{key:"render",value:function(){return n.a.createElement("canvas",{id:"glcanvas",width:"160",height:"160"})}}]),t}(a.Component),b=r(3),v=r(25),y=r.n(v),A=(r(67),r(12)),S=r.n(A),_=r(26),F=r.n(_),L=[S.a,F.a],U=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(r=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={src:null,backgroundImage:S.a,aspectRatio:1,yOffset:0,xOffset:0,scaleFactor:100,rotation:0,mirrorRightEye:!1,mirrorLeftEye:!1},r.onSelectFile=function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",(function(){var e=new Image;e.src=t.result,e.onload=function(){r.setState({src:t.result,aspectRatio:e.width/e.height})}}),!1),t.readAsDataURL(e.target.files[0])}},r.onMirrorRightEyeToggle=function(e){},r}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{classname:"Top"},n.a.createElement("div",{className:"App"},n.a.createElement("div",null,"Emoji Workflow",n.a.createElement("br",null),n.a.createElement(T,{backgroundImage:this.state.backgroundImage,eyeSrc:this.state.src,eyeSrcAspectRatio:this.state.aspectRatio,eyeXOffset:this.state.xOffset/100,eyeYOffset:this.state.yOffset/100,eyeScaleFactor:this.state.scaleFactor/100,eyeRotation:this.state.rotation*Math.PI/180,mirrorRightEye:this.state.mirrorRightEye,mirrorLeftEye:this.state.mirrorLeftEye})),n.a.createElement("div",{style:{}},n.a.createElement("input",{type:"file",onChange:this.onSelectFile,style:{alignSelf:"top"}}),n.a.createElement("div",null,n.a.createElement("img",{src:this.state.src,style:{maxHeight:100}}))),n.a.createElement("div",{className:"ImageSettings"},"X Offset: ",this.state.xOffset,"%",n.a.createElement("br",null),n.a.createElement(b.a,{axis:"x",x:this.state.xOffset,xmin:0,xmax:100,onChange:function(t){var r=t.x;return e.setState({xOffset:r})}}),n.a.createElement("br",null),"Y Offset: ",this.state.yOffset,"%",n.a.createElement("br",null),n.a.createElement(b.a,{axis:"x",x:this.state.yOffset,xmin:-100,xmax:100,onChange:function(t){var r=t.x;return e.setState({yOffset:r})}}),n.a.createElement("br",null),"Scale Factor: ",this.state.scaleFactor,"%",n.a.createElement("br",null),n.a.createElement(b.a,{axis:"x",x:this.state.scaleFactor,xmin:0,xmax:100,onChange:function(t){var r=t.x;return e.setState({scaleFactor:r})}}),n.a.createElement("br",null),"Rotation:  ",this.state.rotation,"\xb0",n.a.createElement("br",null),n.a.createElement(b.a,{axis:"x",x:this.state.rotation,xmin:-45,xmax:45,onChange:function(t){var r=t.x;return e.setState({rotation:r})}}),n.a.createElement("br",null),"Mirror Right Eye: ",n.a.createElement("input",{type:"checkbox",onChange:function(t){return e.setState({mirrorRightEye:t.target.checked})}}),n.a.createElement("br",null),"Mirror Left Eye: ",n.a.createElement("input",{type:"checkbox",onChange:function(t){return e.setState({mirrorLeftEye:t.target.checked})}}),n.a.createElement("br",null))),n.a.createElement("div",null,n.a.createElement(y.a,{images:L.map((function(e,t){return{src:e,value:t}})),onPick:function(t){e.setState({backgroundImage:t.src})}})))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.7292dc20.chunk.js.map