(this["webpackJsonpdrukhary-api-front-end"]=this["webpackJsonpdrukhary-api-front-end"]||[]).push([[0],{24:function(t,e,s){},25:function(t,e,s){},31:function(t,e,s){},32:function(t,e,s){},33:function(t,e,s){"use strict";s.r(e);var i=s(0),n=s.n(i),a=s(17),o=s.n(a),r=s(7),l=s(14),c=s(3),h=function t(){Object(c.a)(this,t),this.owner_id=0,this.friends_only=0,this.from_group=0,this.message=0,this.signed=0,this.publish_date=0},u=function t(){Object(c.a)(this,t),this.getGroups=function(){return[{name:"vectorianstvo"},{name:"solarrider"},{name:"sectanstvo"},{name:"what a hell is happening"},{name:"drukhary"},{name:"warhammer40K"}]},this.getTimers=function(){var t=new Date;return["".concat(t.getHours(),":").concat(t.getMinutes())]},this.getPosts=function(){var t=new h;t.friends_only=0,t.owner_id=0,t.message="post1",t.publish_date=0,t.images=[{original:"https://picsum.photos/id/1018/1000/600/",thumbnail:"https://picsum.photos/id/1018/250/150/"}];var e=Object(l.a)({},t);e.message="post2";var s=Object(l.a)({},t);return s.images=[],e.images=[{original:"https://picsum.photos/id/1018/1000/600/",thumbnail:"https://picsum.photos/id/1018/250/150/"},{original:"https://picsum.photos/id/1015/1000/600/",thumbnail:"https://picsum.photos/id/1015/250/150/"},{original:"https://picsum.photos/id/1019/1000/600/",thumbnail:"https://picsum.photos/id/1019/250/150/"}],[e,s,t]},this.getImages=function(){return[{original:"https://picsum.photos/id/1018/1000/600/",thumbnail:"https://picsum.photos/id/1018/250/150/"},{original:"https://picsum.photos/id/1015/1000/600/",thumbnail:"https://picsum.photos/id/1015/250/150/"},{original:"https://picsum.photos/id/1019/1000/600/",thumbnail:"https://picsum.photos/id/1019/250/150/"}]}},d=(s(24),s(5)),m=(s(25),s(1)),p=n.a.createContext(new u),b=p.Provider,g=(p.Consumer,s(31),s(6)),j=s(9),f=s(8),w=s(19),y=s.n(w),v=(s(32),"https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/"),O=function(t){Object(j.a)(s,t);var e=Object(f.a)(s);function s(t){var i;return Object(c.a)(this,s),(i=e.call(this,t)).state={showIndex:!0,showBullets:!0,infinite:!0,showThumbnails:!0,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!0,showGalleryPlayButton:!0,showNav:!0,isRTL:!1,slideDuration:450,slideInterval:2e3,slideOnThumbnailOver:!1,thumbnailPosition:"top",showVideo:{},useWindowKeyDown:!0},i.images=i.props.images,i}return Object(g.a)(s,[{key:"_onImageClick",value:function(t){console.debug("clicked on image",t.target,"at index",this._imageGallery.getCurrentIndex())}},{key:"_onImageLoad",value:function(t){console.debug("loaded image",t.target.src)}},{key:"_onSlide",value:function(t){this._resetVideo(),console.debug("slid to index",t)}},{key:"_onPause",value:function(t){console.debug("paused on index",t)}},{key:"_onScreenChange",value:function(t){console.debug("isFullScreen?",!!t)}},{key:"_onPlay",value:function(t){console.debug("playing from index",t)}},{key:"_getStaticImages",value:function(){for(var t=[],e=2;e<12;e++)t.push({original:"".concat(v).concat(e,".jpg"),thumbnail:"".concat(v).concat(e,"t.jpg")});return t}},{key:"_resetVideo",value:function(){this.setState({showVideo:{}}),this.state.showPlayButton&&this.setState({showGalleryPlayButton:!0}),this.state.showFullscreenButton&&this.setState({showGalleryFullscreenButton:!0})}},{key:"_toggleShowVideo",value:function(t){this.state.showVideo[t]=!Boolean(this.state.showVideo[t]),this.setState({showVideo:this.state.showVideo}),this.state.showVideo[t]&&(this.state.showPlayButton&&this.setState({showGalleryPlayButton:!1}),this.state.showFullscreenButton&&this.setState({showGalleryFullscreenButton:!1}))}},{key:"_renderVideo",value:function(t){return Object(m.jsx)("div",{children:this.state.showVideo[t.embedUrl]?Object(m.jsxs)("div",{className:"video-wrapper",children:[Object(m.jsx)("a",{className:"close-video",onClick:this._toggleShowVideo.bind(this,t.embedUrl)}),Object(m.jsx)("iframe",{title:t.title,width:"560",height:"315",src:t.embedUrl,frameBorder:"0",allowFullScreen:!0})]}):Object(m.jsxs)("a",{onClick:this._toggleShowVideo.bind(this,t.embedUrl),children:[Object(m.jsx)("div",{className:"play-button"}),Object(m.jsx)("img",{className:"image-gallery-image",src:t.original,alt:"I'm sorry"}),t.description&&Object(m.jsx)("span",{className:"image-gallery-description",style:{right:"0",left:"initial"},children:t.description})]})})}},{key:"render",value:function(){var t=this;return Object(m.jsx)("section",{className:"app",children:Object(m.jsx)(y.a,{ref:function(e){return t._imageGallery=e},items:this.images,onClick:this._onImageClick.bind(this),onImageLoad:this._onImageLoad,onSlide:this._onSlide.bind(this),onPause:this._onPause.bind(this),onScreenChange:this._onScreenChange.bind(this),onPlay:this._onPlay.bind(this),infinite:this.state.infinite,showBullets:this.state.showBullets,showFullscreenButton:this.state.showFullscreenButton&&this.state.showGalleryFullscreenButton,showThumbnails:this.state.showThumbnails,showIndex:this.state.showIndex,showNav:this.state.showNav,isRTL:this.state.isRTL,thumbnailPosition:this.state.thumbnailPosition,slideDuration:parseInt(this.state.slideDuration),slideInterval:parseInt(this.state.slideInterval),slideOnThumbnailOver:this.state.slideOnThumbnailOver,additionalClass:"app-image-gallery",useWindowKeyDown:this.state.useWindowKeyDown})})}}]),s}(i.Component),x=function(t){var e=t.title,s=t.description,i=t.images,n=t.dateCreated,a=t.keywords;return Object(m.jsxs)("div",{className:"justify-content-center",children:[Object(m.jsx)("div",{className:"d-flex w-100"}),Object(m.jsx)("h5",{className:"mb-1",children:e}),Object(m.jsxs)("small",{className:"text-muted",children:["keywords: ",a.join(" ")]}),Object(m.jsx)("p",{className:"mb-1",children:s}),i?Object(m.jsx)(O,{images:i}):null,Object(m.jsx)("small",{className:"text-muted",children:n})]})},_=function(t){var e=t.posts.map((function(t,e){var s=t.data,i=s.title,n=s.description,a=s.date_created,o=s.keywords,r=t.image;return Object(m.jsx)("li",{id:e,className:"list-group-item list-group-item-action flex-column align-items-start",children:Object(m.jsx)(x,{title:i,images:[r],description:n,dateCreated:a,keywords:o})})}));return Object(m.jsx)("div",{className:"justify-content-center row",children:Object(m.jsx)("ul",{className:"post-list list-group col-md-8",children:Array.isArray(e)&&e.length?e:null})})},k=(i.Component,function t(){var e=this;Object(c.a)(this,t),this._baseApi="https://images-api.nasa.gov/",this.getSearch=function(t){var s=e._baseApi;return fetch("".concat(s,"search?q=").concat(t,"&page=1&media_type=image")).then((function(t){return t.json()})).then((function(t){var e=t.collection;return Promise.all(e.items.map((function(t){return(null===t||void 0===t?void 0:t.href)?fetch(t.href).then((function(t){return t.json()})).then((function(t){return t.slice(1,-1)})).then((function(e){return{data:t.data[0],image:{original:e[0],thumbnail:e[e.length-1]}}})):new Promise((function(t){return t("no image")}))})))})).catch((function(t){return t}))}}),S=function(t){var e=Object(i.useState)(""),s=Object(d.a)(e,2),n=s[0],a=s[1];return Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{className:"col-form-label mt-4",htmlFor:"inputDefault",children:"Default input"}),Object(m.jsx)("input",{type:"text",className:"form-control",placeholder:"Default input",id:"inputDefault","data-dashlane-rid":"e6ebd68441b8e168","data-form-type":"other",value:n,onChange:function(t){return a(t.target.value)},onKeyPress:function(e){"Enter"===e.key&&t.setSearch(n)}})]})},N=function(){var t=Object(i.useState)([]),e=Object(d.a)(t,2),s=e[0],n=e[1],a=Object(i.useState)(""),o=Object(d.a)(a,2),r=o[0],l=o[1];return Object(i.useEffect)((function(){return(new k).getSearch(r).then((function(t){n(t.slice(0,6))})),function(){return n([])}}),[r]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(S,{setSearch:l}),Object(m.jsx)(_,{posts:s})]})};o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(b,{value:new u,children:Object(m.jsx)(r.a,{children:Object(m.jsx)(N,{})})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ae1d50ec.chunk.js.map