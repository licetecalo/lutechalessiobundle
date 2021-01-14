(window["webpackJsonpconference-alessio-bundle-form-widget"]=window["webpackJsonpconference-alessio-bundle-form-widget"]||[]).push([[0],{172:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"ConferenceAlessioBundle successfully saved","dataDeleted":"ConferenceAlessioBundle successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"conferenceAlessioBundle":{"deleteDialog":{"title":"Delete conferenceAlessioBundle","description":"Are you sure?"},"notFound":"ConferenceAlessioBundle not found","deleted":"ConferenceAlessioBundle deleted","id":"ID","name":"entities.conferenceAlessioBundle.name","location":"entities.conferenceAlessioBundle.location"}}}')},173:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Errore durante la connessione al server"},"common":{"save":"Salva","dataSaved":"ConferenceAlessioBundle salvato/a con successo","dataDeleted":"ConferenceAlessioBundle eliminato/a con successo","notAuthenticated":"L\'utente non \xe8 autenticato.","selectFile":"Carica nuovo file","selectImageFile":"Carica nuova immagine","download":"Scarica","cancel":"Annulla","delete":"Elimina","yes":"Si","no":"No"},"validation":{"required":"{{field}} \xe8 obbligatorio"},"entities":{"conferenceAlessioBundle":{"deleteDialog":{"title":"Elimina conferenceAlessioBundle","description":"Sei sicuro/a?"},"notFound":"ConferenceAlessioBundle non trovato/a","deleted":"ConferenceAlessioBundle eliminato/a","id":"ID","name":"entit\xe0.conferenceAlessioBundle.name","location":"entit\xe0.conferenceAlessioBundle.location"}}}')},197:function(e,t,n){e.exports=n(345)},345:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(25),i=n(27),o=n(20),c=n(26),s=n(185),l=n(41),u=n(0),d=n.n(u),f=n(8),h=n.n(f),p=n(165),b=n.n(p),m=n(394),v=n(398),O=n(392),y=n(184),g=n(14),k=d.a.createContext(null),E=n(61),j=n(113),w=n(40),C={en:n(172),it:n(173)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var A=Object.keys(C).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",C[t])))}),{}),D=j.a.t,P=function(e){!function(e,t){j.a.use(w.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:A,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.conferenceAlessioBundle.".concat(n))})}}};E.setLocale(t)}(D)},B=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},x={tableAdd:"conferenceAlessioBundle.table.add",tableSelect:"conferenceAlessioBundle.table.select"},F={create:"conferenceAlessioBundle.form.create",update:"conferenceAlessioBundle.form.update",errorCreate:"conferenceAlessioBundle.form.errorCreate",errorUpdate:"conferenceAlessioBundle.form.errorUpdate"},N=n(11),U=n.n(N),R=n(23),T=n(18),M=n(3),L=n.n(M),z=(L.a.shape({initialized:L.a.bool,authenticated:L.a.bool}),n(186));L.a.oneOfType([L.a.func,L.a.shape({current:L.a.elementType}),L.a.shape(null)]);function I(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(r=Object(i.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,i=Object(z.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},i,{ref:a,keycloak:t}))},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(k.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var H=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},J=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},q=function(){var e=Object(R.a)(U.a.mark((function e(t,n){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G="conference-alessio-bundles",Y=function(){var e=Object(R.a)(U.a.mark((function e(t,n){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G,"/").concat(n),r=V({},J(),{method:"GET"}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(R.a)(U.a.mark((function e(t,n){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G),r=V({},J(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(R.a)(U.a.mark((function e(t,n){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G),r=V({},J(),{method:"PUT",body:n?JSON.stringify(n):null}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(R.a)(U.a.mark((function e(t,n){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G,"/").concat(n),r=V({},J(),{method:"DELETE"}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=n(4),_=n(397),ee=n(384),te=n(380),ne=n(5),ae=n(385),re=n(175),ie=n.n(re),oe=n(176),ce=n.n(oe),se=n(174),le=n.n(se),ue=n(177),de=n.n(ue),fe={success:le.a,error:ie.a,info:ce.a},he={success:3e3,error:null,info:5e3},pe=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,s=r||e.INFO,l=fe[s],u=he[s],f=d.a.createElement("span",{className:a.message},d.a.createElement(l,{className:Object($.a)(a.icon,a.iconStatus)}),i);return d.a.createElement(_.a,{open:c,onClose:o,autoHideDuration:u},d.a.createElement(ee.a,{className:Object($.a)(a[s],n),message:f,action:[d.a.createElement(ae.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(de.a,{className:a.icon}))]}))};pe.SUCCESS="success",pe.ERROR="error",pe.defaultProps={message:null,className:"",status:pe.INFO="info",onClose:function(){}};var be=Object(ne.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:te.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(pe),me=(L.a.shape({id:L.a.number,name:L.a.string,location:L.a.string}),L.a.shape({name:L.a.string,location:L.a.string}),L.a.shape({name:L.a.oneOfType([L.a.bool,L.a.shape()]),location:L.a.oneOfType([L.a.bool,L.a.shape()])}),L.a.shape({name:L.a.oneOfType([L.a.string,L.a.shape()]),location:L.a.oneOfType([L.a.string,L.a.shape()])}),n(183)),ve=n(187),Oe=n(390),ye=n(391),ge=n(393),ke=n(396),Ee=n(389),je=n(387),we=n(388),Ce=n(386),Se=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(T.a)(n)),n.discard=n.discard.bind(Object(T.a)(n)),n.confirm=n.confirm.bind(Object(T.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,r=n.description,i=n.confirmLabel,o=n.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(ke.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(Ce.a,{id:"confirmation-dialog-title"},a),d.a.createElement(je.a,null,d.a.createElement(we.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(Ee.a,null,d.a.createElement(Oe.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(Oe.a,{onClick:this.confirm,color:"primary"},i))))}}]),t}(u.PureComponent);Se.CONFIRM="CONFIRM",Se.DISCARD="DISCARD";var Ae=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(T.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Se.CONFIRM:n(a)}}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.values,a=e.touched,r=e.errors,i=e.handleChange,o=e.handleBlur,c=e.handleSubmit,s=e.onDelete,l=e.onCancelEditing,u=e.isSubmitting,f=e.t,h=function(e){return r[e]&&a[e]?r[e]:""};return d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),c(e)},className:t.root,"data-testid":"conferenceAlessioBundle-form"},d.a.createElement(ye.a,{container:!0,spacing:2},d.a.createElement(ye.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"conferenceAlessioBundle-name",error:r.name&&a.name,helperText:h("name"),className:t.textField,onChange:i,onBlur:o,value:n.name,name:"name",label:f("entities.conferenceAlessioBundle.name")})),d.a.createElement(ye.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"conferenceAlessioBundle-location",error:r.location&&a.location,helperText:h("location"),className:t.textField,onChange:i,onBlur:o,value:n.location,name:"location",label:f("entities.conferenceAlessioBundle.location")})),s&&d.a.createElement(Se,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:f("entities.conferenceAlessioBundle.deleteDialog.title"),description:f("entities.conferenceAlessioBundle.deleteDialog.description"),confirmLabel:f("common.yes"),discardLabel:f("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(Oe.a,{onClick:t,disabled:u},f("common.delete"))}}),d.a.createElement(Oe.a,{onClick:l,disabled:u,"data-testid":"cancel-btn"},f("common.cancel")),d.a.createElement(Oe.a,{type:"submit",color:"primary",disabled:u,"data-testid":"submit-btn"},f("common.save"))))}}]),t}(u.PureComponent);Ae.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var De={name:"",location:""},Pe={mapPropsToValues:function(e){return e.conferenceAlessioBundle||De},enableReinitialize:!0,validationSchema:E.object().shape({name:E.string(),location:E.string()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"ConferenceAlessioBundleForm"},Be=Object(ve.a)(Object(ne.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(w.b)(),Object(me.a)(Pe))(Ae),xe=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(T.a)(n)),n.handleDelete=n.handleDelete.bind(Object(T.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(T.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,i=e.keycloak.authenticated!==r,o=a&&a!==e.id;r&&(o||i)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(R.a)(U.a.mark((function e(){var t,n,a,r,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,Y(r,a);case 6:i=e.sent,this.setState((function(){return{conferenceAlessioBundle:i}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(R.a)(U.a.mark((function e(t){var n,a,r,i,o,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onUpdate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,X(o,t);case 6:c=e.sent,r(c),this.setState({conferenceAlessioBundle:c,notificationMessage:a("common.dataSaved"),notificationStatus:be.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(R.a)(U.a.mark((function e(t){var n,a,r,i,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onDelete,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=13;break}return e.prev=3,e.next=6,Z(o,t.id);case 6:r(t),this.setState({conferenceAlessioBundle:null,notificationMessage:a("common.dataDeleted"),notificationStatus:be.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:be.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,r=t.t,i=this.state,o=i.notificationMessage,c=i.notificationStatus,s=i.conferenceAlessioBundle;return e="undefined"===typeof s?r("entities.conferenceAlessioBundle.notFound"):null===s?r("entities.conferenceAlessioBundle.deleted"):d.a.createElement(Be,{conferenceAlessioBundle:s,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(W,{keycloak:n},r("common.notAuthenticated")),d.a.createElement(H,{keycloak:n},e),d.a.createElement(be,{status:c,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);xe.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Fe=I(Object(w.b)()(xe)),Ne=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(T.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(T.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(R.a)(U.a.mark((function e(t){var n,a,r,i,o,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onCreate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(o,t);case 6:c=e.sent,r(c),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:be.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:be.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,r=this.state,i=r.notificationMessage,o=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(W,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(H,{keycloak:t},d.a.createElement(Be,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(be,{status:o,message:i,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ne.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var Ue=I(Object(w.b)()(Ne));function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Me=function(){return window&&window.entando&&window.entando.keycloak&&Te({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},Le={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},ze=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).keycloak=Me(),n.onCreate=B(F.create),n.onCancelEditing=B(F.cancelEditing),n.onDelete=B(F.delete),n.onUpdate=B(F.update),n.onErrorCreate=B(F.errorCreate),n.onErrorUpdate=B(F.errorUpdate),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(Le).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===Le.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(g.b)(Te({},Object(m.a)(),{insertionPoint:this.container})),this.muiTheme=Object(y.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=Te({},Me(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Te({},Me(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),b()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=x.tableAdd,a=x.cancelEditing,r=x.create,i=x.edit,o=x.delete,c=x.tableSelect,s=x.update,l=Le.id;switch(t.type){case n:e.setAttribute(l,"");break;case i:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case r:case a:case s:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(l,"");break;case c:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(Le.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(x),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(Le.serviceUrl)||"";if("true"===this.getAttribute(Le.hidden))h.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(Le.locale);P(t);var n=this.getAttribute(Le.id),a=n?d.a.createElement(Fe,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(Ue,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);h.a.render(d.a.createElement(k.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(O.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(Le)}}]),t}(Object(s.a)(HTMLElement));customElements.define("conference-alessio-bundle-form",ze)}},[[197,1,2]]]);
//# sourceMappingURL=main.527c012a.chunk.js.map