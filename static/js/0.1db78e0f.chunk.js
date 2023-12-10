(this["webpackJsonpall-in-one"]=this["webpackJsonpall-in-one"]||[]).push([[0],{1120:function(e,t,n){"use strict";n.r(t);var r=n(6),i=n(7),s=n(1072),a=n.n(s),o=n(373),c=n(8),u=n(33),d=n(162),l=function(e){var t=f((e/=1e3)/3600),n=f((e-=3600*t)/60),r=f(e-=60*n);return"PT".concat(t,"H").concat(n,"M").concat(r,"S")},f=function(e){return parseInt(e,10)},p=function(e){return new a.a.Activity({id:Object(d.e)(e.id),definition:new a.a.ActivityDefinition({type:o.a.objective,name:{"en-US":e.title}})})},v=function(e){var t=e.score,n=e.omitScore,r=void 0!==n&&n,i=e.response,s=e.duration;return new a.a.Result(Object(c.a)({},!r&&{score:new a.a.Score({scaled:t/100})},{},i&&{response:i},{},s&&{duration:l(s)}))},h=new(function(){function e(){Object(r.a)(this,e),this.courseId=void 0,this.sessionId=void 0,this.course=void 0,this.actor=void 0,this.lrs=void 0,this.nps=void 0}return Object(i.a)(e,[{key:"initialize",value:function(e){var t=e.course,n=e.actor;this.courseId=t.id,this.sessionId=t.attemptId,this.course=t,this.actor=n}},{key:"initializeLrs",value:function(e,t){this.lrs=new a.a,this.initializeInstance(this.lrs,this.getLrsRecordStore(e,t))}},{key:"initializeNps",value:function(e){this.nps=new a.a,this.initializeInstance(this.nps,this.getNpsRecordStore(e))}},{key:"initializeInstance",value:function(e,t){var n;e.addRecordStore(t),e.actor=this.getActor(this.actor),e.activity=(n=this.course.title,new a.a.Activity({id:Object(u.e)(),definition:new a.a.ActivityDefinition({type:o.a.course,name:{"en-US":n}})})),e.context=this.getDefaultContext()}},{key:"getLrsRecordStore",value:function(e,t){var n=e.lrs.uri;return this.isDefaultLrs(e)&&(n="".concat(t,"/xApi")),new a.a.LRS({endpoint:n,version:e.version,username:e.lrs.credentials.username,password:e.lrs.credentials.password,allowFail:!1})}},{key:"getNpsRecordStore",value:function(e){return new a.a.LRS({endpoint:"".concat(e,"/xApi"),username:"",password:"",allowFail:!1})}},{key:"getActor",value:function(e){var t=e.username,n=e.email,r=e.account;return r?new a.a.Agent({name:t||r.name,account:r}):new a.a.Agent({name:t,mbox:"mailto:".concat(n)})}},{key:"getDefaultContext",value:function(){return this.extendContext(new a.a.Context({contextActivities:new a.a.ContextActivities({})}))}},{key:"extendContext",value:function(e){return e.extensions=e.extensions||{},e.extensions[o.c.courseId]=this.courseId,e.registration=this.sessionId,e}},{key:"isDefaultLrs",value:function(e){return e.selectedLrs===o.b}}]),e}()),m=n(13),b=n(10),y=n(14),j=n(15),S=n(3),O=n.n(S),x=n(164),w=n(75),g=n(53),E=n(32),A=n(41),k=n(18),R=n(122),C=function(e){var t=e.section,n=e.xapiStatus;return{verb:Object(R.b)(n)?o.f.progressed:o.f.mastered,object:p(t),result:v({score:t.score})}},P=function(e){return{response:e.answers.filter((function(t){return e.response.indexOf(t.id)>=0})).map((function(e){return e.id})).join(o.e.comma),correctResponsesPattern:e.type===k.j?e.correctAnswerId:e.answers.filter((function(e){return e.isCorrect})).map((function(e){return e.id})).join(o.e.comma),interactionType:o.d.choice,extraActivityDefinition:{choices:e.answers.map((function(t){return{id:t.id,description:{"en-US":e.type===k.j?t.image:t.text}}}))}}},N=function(e,t){var n=e.response,r=e.answerGroups,i=n.data,s=void 0===i?function(e){return e.reduce((function(e,t){var n=t.id;return Object(c.a)(Object(E.a)({},n,""),e)}),{})}(r):i,a=Object.keys(s).map((function(e){return"".concat(s[e]).concat(o.e.dot).concat(e)})).join(o.e.comma),u=r.map((function(e){return e.answers.filter((function(e){return e.isCorrect})).map((function(t){return"".concat(t.text).concat(o.e.dot).concat(e.id)})).join(o.e.comma)})).join(o.e.comma),d=Object(g.a)(t,1)[0],l=void 0===d?{value:""}:d;return{response:a,correctResponsesPattern:u,interactionType:o.d.fillIn,extensions:Object(E.a)({},o.c.content,l.value)}},T=function(e){return{response:e.response.answeredText,omitScore:!0,interactionType:o.d.other}},L=function(e){return{response:e.response.map((function(e){return"".concat(e.id).concat(o.e.dot).concat(e.isCorrect)})).join(o.e.comma),correctResponsesPattern:e.answers.map((function(e){return"".concat(e.id).concat(o.e.dot).concat(e.isCorrect)})).join(o.e.comma),interactionType:o.d.choice,extraActivityDefinition:{choices:e.answers.map((function(e){return{id:e.id,description:{"en-US":e.text}}}))}}},U=function(e){return{response:e.response.map((function(e){return e.text})).join(o.e.comma),correctResponsesPattern:e.answers.map((function(e){return e.text})).join(o.e.comma),interactionType:o.d.choice,extraActivityDefinition:{choices:e.answers.map((function(e){return{id:e.text,description:{"en-US":e.text}}}))}}},I=function(e){var t=function(e){return e.map((function(e,t){return{id:t.toString(),description:{"en-US":e}}}))},n=e.answers.map((function(e){return e.key})),r=e.answers.map((function(e){return e.value})).filter((function(e,t,n){return n.indexOf(e)===t})),i=e.answers.map((function(e){return"".concat(n.indexOf(e.key)).concat(o.e.dot).concat(r.indexOf(e.value))})).join(o.e.comma);return{response:n.map((function(t,n){var i=e.response.find((function(e){return e.key===t})),s="";return i&&i.shownSelectedValue&&(s=r.indexOf(i.shownSelectedValue)),"".concat(n).concat(o.e.dot).concat(s)})).join(o.e.comma),correctResponsesPattern:i,interactionType:o.d.matching,extraActivityDefinition:{source:t(n),target:t(r)}}},H=function(){return{interactionType:o.d.other}},D=function(e){var t,n=e.dropspots.map((function(e){return e.text})).join(o.e.comma),r=e.dropspots.map((function(e){return"(".concat(e.x,",").concat(e.y,")")})).join(o.e.comma);return{response:e.dropspots.map((function(t){var n=e.response.find((function(e){return e.id===t.id}));if(!n)return"(-1,-1)";var r=n.items.length&&n.items[0];if(!r)return"(-1,-1)";var i=e.dropspots.find((function(e){return e.id===r.id}));return"(".concat(i.x,",").concat(i.y,")")})).join(o.e.comma),correctResponsesPattern:r,interactionType:o.d.other,extensions:(t={},Object(E.a)(t,o.c.imageUrl,e.background),Object(E.a)(t,o.c.answerTexts,n),t)}},z=function(e){return{response:e.response.map((function(e){return"(".concat(e.x,",").concat(e.y,")")})).join(o.e.comma),correctResponsesPattern:e.spots.map((function(e){return e.map((function(e){return"(".concat(e.x,",").concat(e.y,")")})).join(o.e.dot)})).join(o.e.comma),interactionType:o.d.other,extensions:Object(E.a)({},o.c.imageUrl,e.background)}},_=function(e){var t=Object(g.a)(e,3),n=t[0],r=t[1],i=t[2];return F(n,r,function(e){switch(e.type){case k.i:case k.e:case k.j:return P;case k.b:return N;case k.f:return T;case k.k:return L;case k.g:return U;case k.l:return I;case k.h:return H;case k.a:return D;case k.c:return z;default:throw new Error("Question type ".concat(e.type," is not supported"))}}(n)(n,i))};function F(e,t,n){var r=n.response,i=n.correctResponsesPattern,s=n.interactionType,u=n.extraActivityDefinition,l=n.omitScore,f=n.extensions,m=n.verb,b=function(e,t){var n;return h.extendContext(new a.a.Context({contextActivities:new a.a.ContextActivities({parent:[p(t)]}),extensions:(n={},Object(E.a)(n,o.c.surveyMode,e.hasOwnProperty("isSurvey")&&e.isSurvey),Object(E.a)(n,o.c.questionType,e.type),n)}))}(e,t);b.extensions=Object.assign(b.extensions,f);var y=Object(c.a)({name:{"en-US":e.title},type:o.a.interaction,interactionType:s},i&&{correctResponsesPattern:e.isSurvey?[]:[i]});return y=Object.assign(y,u),{context:b,verb:m||o.f.answered,object:new a.a.Activity({id:Object(d.c)(t.id,e.id),definition:new a.a.ActivityDefinition(y)}),result:v({score:e.score,omitScore:l,response:r})}}var V,q=function(e){var t=Object(g.a)(e,2);return F(t[0],t[1],{interactionType:o.d.other,verb:o.f.experienced})},M=(V={},Object(E.a)(V,A.b.PASSED,o.f.passed),Object(E.a)(V,A.b.FAILED,o.f.failed),Object(E.a)(V,A.b.IN_PROGRESS,o.f.progressed),V),G=function(e){return(Object(g.a)(e,1)[0].type===k.d?q:_)(e)},J=function(){return{verb:o.f.started}},Q=function(e){var t=e.course,n=e.timeSpent,r=e.xapiStatus;return{verb:M[r],result:v({score:t.score,duration:n})}},B=function(e){var t=e.statementsData,n=e.isSubmitOnce;if(!(void 0!==n&&n))return t.map((function(e){var t=e.section,n=e.questionData,r=e.course;return[t?C(t):[],n?G(n):[],Q(r)]})).flat(2);var r=Object(g.a)(t,3),i=r[0],s=r[1],a=r[2],o=i.map((function(e){return G(e)})),c=s.map((function(e){return C(e)})),u=Q(a);return[].concat(Object(w.a)(o),Object(w.a)(c),[u])},W=function(e){var t=e.score,n=e.response;return{verb:o.f.evaluated,result:v({score:t,response:n})}},X=new function e(){var t=this;Object(r.a)(this,e),this.courseStarted=void 0,this.overallCourseProgressed=void 0,this.courseEvaluated=void 0,this.questionAnswered=void 0,this.informationContentExperienced=void 0,this.listStatement=void 0,this.listStatement=[{name:"courseStarted",instance:J},{name:"overallCourseProgressed",instance:B},{name:"courseEvaluated",instance:W},{name:"questionAnswered",instance:_},{name:"informationContentExperienced",instance:q}],this.listStatement.forEach((function(e){t[e.name]=function(){var t=[e.instance.apply(e,arguments)].flat();return t.map((function(e){return new a.a.Statement(e)}))}}))},K=function(e){console.error("xApi error: [ ".concat(Y(e)," ]"))};function Y(e){return e?e.code&&e.mesg?"code: ".concat(e.code,", message: ").concat(e.mesg):e.toString():"undefined error"}var Z=function(e){function t(e){var n,i=e.sendStatement,s=e.shouldHandlerErrors;return Object(r.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this))).handlers=void 0,n.sendStatement=void 0,n.shouldHandlerErrors=void 0,n.handlers=[],n.sendStatement=i,n.shouldHandlerErrors=s,n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"createHandler",value:function(e){var t=this;return function(n){return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,O.a.awrap(t.handle(e,n));case 2:case"end":return r.stop()}}))}}},{key:"handle",value:function(e,t){var n;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=X[e](t),r.next=4,O.a.awrap(this.sendStatement(n));case 4:r.next=13;break;case 6:if(r.prev=6,r.t0=r.catch(0),!this.shouldHandlerErrors){r.next=12;break}K(r.t0),r.next=13;break;case 12:throw r.t0;case 13:case"end":return r.stop()}}),null,this,[[0,6]])}}]),t}(x.a),$=n(72),ee=n(515),te=n.n(ee),ne=new(function(){function e(){Object(r.a)(this,e),this.statements=void 0,this.statements=[]}return Object(i.a)(e,[{key:"push",value:function(e){var t;(t=this.statements).push.apply(t,Object(w.a)([e].flat()))}},{key:"shift",value:function(){var e=this.statements;return this.statements=[],e}}]),e}()),re=!0,ie=new(function(){function e(){Object(r.a)(this,e),this.settings=void 0,this.promises=void 0}return Object(i.a)(e,[{key:"initialize",value:function(e){this.settings=e,this.promises=[]}},{key:"sendLrsStatements",value:function(e){var t=e;return h.isDefaultLrs(this.settings)||(t=this.getAllowedStatements(e)).length?(ne.push(t),this.sendStorageStatements(),Promise.all(this.promises)):null}},{key:"sendNpsStatement",value:function(e){this.doSend(h.nps.sendStatements.bind(h.nps),e)}},{key:"getAllowedStatements",value:function(e){var t=this;return e.filter((function(e){return t.settings.allowedVerbs.indexOf(e.verb.display["en-US"])>=0}))}},{key:"sendStorageStatements",value:function(){var e=this,t=ne.shift();if(0!==t.length){var n=te()(t,10).map((function(t){return e.doSend(h.lrs.sendStatements.bind(h.lrs),t)}));this.promises.push(n)}}},{key:"doSend",value:function(e,t){var n=this;return new Promise((function(n,r){e(t,(function(e){if(e){var t=e.find((function(e){return null!==e.err}));t?r(t.err):(!re&&j.a.emit(j.b.APP_ONLINE),re=!0,n())}}))})).catch((function(){setTimeout((function(){re&&j.a.emit(j.b.APP_OFFLINE_OR_SERVER_ERROR),re=!1,n.doSend(e,t)}),$.a)}))}}]),e}()),se=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(b.a)(t).call(this,{sendStatement:ie.sendLrsStatements.bind(ie),shouldHandlerErrors:!0}))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"initialize",value:function(e){var t=e.isScoringOfContentPagesAllowed;this.handlers=[{event:j.b.COURSE_SUBMIT,instance:this.createHandler("overallCourseProgressed")},{event:j.b.COURSE_STARTED,instance:this.createHandler("courseStarted")},{event:j.b.QUESTION_ANSWERED,instance:this.createHandler("overallCourseProgressed")}],t&&this.handlers.push({event:j.b.INFORMATION_CONTENT_EXPERIENCED,instance:this.createHandler("overallCourseProgressed")})}}]),t}(Z),ae=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(b.a)(t).call(this,{sendStatement:ie.sendNpsStatement.bind(ie)}))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"initialize",value:function(){this.handlers=[{event:j.b.COURSE_EVALUATED,instance:this.createHandler("courseEvaluated")}]}}]),t}(Z),oe=function(){function e(){Object(r.a)(this,e),this.lrsEventHandler=void 0,this.npsEventHandler=void 0,this.settings=void 0,this.defaultLrsUrl=void 0,this.defaultNpsUrl=void 0,this.lrsEventHandler=new se,this.npsEventHandler=new ae}return Object(i.a)(e,[{key:"subscribeLrs",value:function(){try{h.initializeLrs(this.settings.xApi,this.defaultLrsUrl)}catch(e){this.unsubscribeLrs(),K(e)}this.lrsEventHandler.on()}},{key:"subscribeNps",value:function(){try{h.initializeNps(this.defaultNpsUrl)}catch(e){this.unsubscribeNps(),function(e){console.error("xApi error: [ ".concat(Y(e)," ]"))}(e)}this.npsEventHandler.on()}},{key:"unsubscribeLrs",value:function(){this.lrsEventHandler.off()}},{key:"unsubscribeNps",value:function(){this.npsEventHandler.off()}},{key:"unsubscribeAll",value:function(){this.unsubscribeLrs(),this.unsubscribeNps()}},{key:"initialize",value:function(e){var t=e.settings,n=e.defaultLrsUrl,r=e.defaultNpsUrl,i=e.course,s=e.actor;this.settings=t,this.defaultLrsUrl=n,this.defaultNpsUrl=r,this.lrsEventHandler.initialize(t),this.npsEventHandler.initialize(),h.initialize({course:i,actor:s}),ie.initialize(t.xApi)}}]),e}();t.default=new oe}}]);
//# sourceMappingURL=0.1db78e0f.chunk.js.map