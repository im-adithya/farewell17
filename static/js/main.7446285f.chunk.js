(this.webpackJsonpfarewell17=this.webpackJsonpfarewell17||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),h=s(9),l=s.n(h),c=(s(14),s(6)),n=s(2),r=s(3),o=s(7),d=s(5),u=s(4),v=(s(15),s(0)),g=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return console.log(this.props.code),Object(v.jsxs)("div",{className:0!==this.props.code?"slide notif":"notif",children:[1===this.props.code&&Object(v.jsx)("p",{children:"Correct Answer \ud83c\udf89\ud83c\udf89\ud83c\udf89"}),2===this.props.code&&Object(v.jsx)("p",{children:"Wrong Answer \ud83d\udca9"})]})}}]),s}(a.a.Component),j=(s(17),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var i;return Object(n.a)(this,s),(i=t.call(this,e)).handleInput=function(e){i.setState(Object(c.a)({},e.target.name,e.target.value))},i.submit=function(){i.props.checkAnswer(i.state.answer),i.setState({answer:""})},i.state={answer:""},i}return Object(r.a)(s,[{key:"render",value:function(){return Object(v.jsx)("div",{className:this.props.ask?"bg-blur":"",children:Object(v.jsxs)("div",{className:this.props.ask?"questionslide question":"question",children:[this.props.ask&&Object(v.jsx)("p",{children:this.props.question}),this.props.ask&&Object(v.jsxs)("div",{className:"qwrap",children:[Object(v.jsx)("input",{name:"answer",className:"qinput",value:this.state.answer,onChange:this.handleInput}),Object(v.jsx)("div",{className:"qgo",onClick:this.submit,children:"GO!"})]})]})})}}]),s}(a.a.Component)),b=(s(18),s.p+"static/media/lock.5590bf7c.png"),m=s.p+"static/media/lockopen.72dae695.png",p=s.p+"static/media/first1.42ea1d34.png",O=s.p+"static/media/second1.2d745b82.png",f=s.p+"static/media/first2.b171b3a1.png",x=s.p+"static/media/second2.c6b004df.png",k=s.p+"static/media/first3.038cca77.png",C=s.p+"static/media/second3.7e89c768.png",q=s.p+"static/media/first4.de358afe.png",N=s.p+"static/media/second4.9d1ee7da.png",w=s.p+"static/media/first5.1c5c3f5f.png",A=s.p+"static/media/second5.64c5e469.png",y=s.p+"static/media/first6.f8ebce02.png",I=s.p+"static/media/second6.c2bb345b.png",W=s.p+"static/media/first7.15a4ae62.png",G=s.p+"static/media/second7.adfad85a.png",S=s.p+"static/media/first8.f703bc12.png",L=s.p+"static/media/second8.efb12a94.png",P=s.p+"static/media/first9.0cde4a9b.png",T=s.p+"static/media/second9.c16765ae.png",B=s.p+"static/media/first10.d5210005.png",R=s.p+"static/media/second10.87d9f206.png",F=s.p+"static/media/first11.a8beca8e.png",H=s.p+"static/media/second11.92249cd3.png",D=s.p+"static/media/first12.b40a4a0d.png",E=s.p+"static/media/second12.0267aef0.png",_=s.p+"static/media/first13.ead00f52.png",J=s.p+"static/media/second13.69f062c3.png",Q=s.p+"static/media/first14.107a8e06.png",Y=s.p+"static/media/second14.58a13e04.png",M=s.p+"static/media/first15.ab61263b.png",U=s.p+"static/media/second15.95d5e789.png",z=s.p+"static/media/first16.4135886d.png",K=s.p+"static/media/second16.0c3df185.png",X=s.p+"static/media/first17.3ae9f3c6.png",V=s.p+"static/media/second17.c1541ee2.png",Z=s.p+"static/media/first18.095c0d3d.png",$=s.p+"static/media/second18.a6710a36.png",ee=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var i;return Object(n.a)(this,s),(i=t.call(this,e)).levelinc=function(){i.setState((function(e){return{level:e.level+1}})),i.sayRight()},i.sayRight=function(){i.setState({code:1}),setTimeout(function(){this.setState({code:0})}.bind(Object(o.a)(i)),1e3)},i.sayWrong=function(){i.setState({code:2}),setTimeout(function(){this.setState({code:0})}.bind(Object(o.a)(i)),1e3)},i.checkAnswer=function(e){i.state.answers[i.state.level-1].includes(e.toLowerCase())?(i.toggleAsk(),i.toggleQuestion(),i.levelinc()):i.sayWrong()},i.checkChar=function(e){i.state.chars[i.state.level-1]===e.toLowerCase()?i.levelinc():i.sayWrong()},i.handleInput=function(e){var t;i.setState((t={},Object(c.a)(t,e.target.name,e.target.value),Object(c.a)(t,"currentchar",e.target.value),t))},i.toggleQuestion=function(){i.setState((function(e){return{levelquestion:!e.levelquestion}}))},i.toggleAsk=function(){i.setState((function(e){return{ask:!e.ask}})),console.log(i.state.ask)},i.submitChar=function(){if(i.state.currentchar.toLowerCase()===i.state.chars[i.state.level-1]){var e=i.state.guessed;e.push(i.state.level),i.setState({guessed:e}),i.toggleQuestion(),i.sayRight()}else i.sayWrong()},i.state={level:1,code:0,currentanswer:"",currentchar:"",levelquestion:!1,ask:!1,guessed:[],questions:["His love in ADP but not a 4 letter word","While chilling on the SAC roof, Laku bhaiya gives him 16 smoked cigarette butts and challenges him to make cigarettes from them so they could have a good time. One cigarette can be made out of 4 butts. He takes the challenge personally. How many cigarettes was he able to make at the end of the night?","She is in love with a number which is the sum of the first four positive factorials","One thing he doesn't give his juniors or batchies","They say girls break hearts while she breaks","Paisa andha but ye lena bahut zaroori hai","Iss best friend ke lie to 'JAAN' bhi de sakte hain (Not really?)","Popeye : Spinach :: Laddu:Bheem :: Aastha Di: ???","For him the colors in \ud83d\uded1 and \ud83d\uded1 are definitely ","You visit SAC hall to inspect the panels. Not to your surprise, it was a total mess. You calmly summon your favorite junior like this: Abey Kutta Randi ?","Achieved everything in his college life except the feat of opening a","A junior who had a big crush on her \ud83e\udd2d","Yelled this in the classroom thinking it isn't a word in Hindi (Gult problems)","Mind in ADP but \u2665 in ","She has a history with this SU post...","____ raat thi, vo mere saath this","Biggest mistake of your college life was liking","He is so much into this that he can listen to it 6 hours straight..."],answers:[["ruchir","ruchi"],["5","five"],["33","thirty three","thirty-three"],["treat","treats"],["macbook","macbooks"],["mcn","merit-cum-need","merit cum need"],["lakshay","laku","lakku"],["milk"],["different"],["sonal"],["window"],["shounak"],["lauda","lavda","lawda","loda"],["embryo"],["gensec","gen-sec"],["chandni"],["ruchir","ruchi"],["star wars podcast","star wars","podcast"]],chars:["moksh","ruchir","jahnavi","shivansh","preeti","kamal","mohit","aastha","pratik","medha","vibhu","riya","harsha","lakshay","samiksha","suraj","krati","praneeth"]},i}return Object(r.a)(s,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"mobiledisc",children:"The website doesn't support mobile devices. Please open in big-screen devices."}),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(g,{code:this.state.code}),Object(v.jsx)(j,{qcode:this.state.level-1,question:this.state.questions[this.state.level-1],ask:this.state.ask,checkAnswer:this.checkAnswer}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"char first "+(this.state.level>0?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(1)?O:p,alt:"first",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"firstchar",placeholder:"Guess Who?",value:this.state.firstchar,onChange:this.handleInput,disabled:1!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>1||this.state.levelquestion&&1===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&1===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char second "+(this.state.level>1?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(2)?x:f,alt:"second",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"secondchar",placeholder:"Guess Who?",value:this.state.secondchar,onChange:this.handleInput,disabled:2!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>2||this.state.levelquestion&&2===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&2===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char third "+(this.state.level>2?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(3)?C:k,alt:"third",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"thirdchar",placeholder:"Guess Who?",value:this.state.thirdchar,onChange:this.handleInput,disabled:3!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>3||this.state.levelquestion&&3===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&3===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char fourth "+(this.state.level>3?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(4)?N:q,alt:"fourth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"fourthchar",placeholder:"Guess Who?",value:this.state.fourthchar,onChange:this.handleInput,disabled:4!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>4||this.state.levelquestion&&4===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&4===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char fifth "+(this.state.level>4?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(5)?A:w,alt:"fifth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"fifthchar",placeholder:"Guess Who?",value:this.state.fifthchar,onChange:this.handleInput,disabled:5!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>5||this.state.levelquestion&&5===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&5===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char sixth "+(this.state.level>5?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(6)?I:y,alt:"sixth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"firstchar",placeholder:"Guess Who?",value:this.state.sixthchar,onChange:this.handleInput,disabled:6!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>6||this.state.levelquestion&&6===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&6===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char seventh "+(this.state.level>6?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(7)?G:W,alt:"seventh",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"seventhchar",placeholder:"Guess Who?",value:this.state.seventhchar,onChange:this.handleInput,disabled:7!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>7||this.state.levelquestion&&7===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&7===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char eighth "+(this.state.level>7?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(8)?L:S,alt:"eighth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"eighthchar",placeholder:"Guess Who?",value:this.state.eighthchar,onChange:this.handleInput,disabled:8!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>8||this.state.levelquestion&&8===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&8===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char ninth "+(this.state.level>8?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(9)?T:P,alt:"ninth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"ninthchar",placeholder:"Guess Who?",value:this.state.ninthchar,onChange:this.handleInput,disabled:9!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>9||this.state.levelquestion&&9===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&9===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char tenth "+(this.state.level>9?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(10)?R:B,alt:"tenth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"tenthchar",placeholder:"Guess Who?",value:this.state.tenthchar,onChange:this.handleInput,disabled:10!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>10||this.state.levelquestion&&10===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&10===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char eleventh "+(this.state.level>10?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(11)?H:F,alt:"eleventh",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"eleventhchar",placeholder:"Guess Who?",value:this.state.eleventhchar,onChange:this.handleInput,disabled:11!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>11||this.state.levelquestion&&11===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&11===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char twelfth "+(this.state.level>11?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(12)?E:D,alt:"twelfth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"twelfthchar",placeholder:"Guess Who?",value:this.state.twelfthchar,onChange:this.handleInput,disabled:12!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>12||this.state.levelquestion&&12===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&12===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char thirteenth "+(this.state.level>12?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(13)?J:_,alt:"thirteenth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"thirteenthchar",placeholder:"Guess Who?",value:this.state.thirteenthchar,onChange:this.handleInput,disabled:13!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>13||this.state.levelquestion&&13===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&13===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char fourteenth "+(this.state.level>13?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(14)?Y:Q,alt:"fourteenth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"fourteenthchar",placeholder:"Guess Who?",value:this.state.fourteenthchar,onChange:this.handleInput,disabled:14!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>14||this.state.levelquestion&&14===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&14===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char fifteenth "+(this.state.level>14?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(15)?U:M,alt:"fifteenth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"fifteenthchar",placeholder:"Guess Who?",value:this.state.fifteenthchar,onChange:this.handleInput,disabled:15!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>15||this.state.levelquestion&&15===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&15===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char sixteenth "+(this.state.level>15?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(16)?K:z,alt:"sixteenth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"sixteenthchar",placeholder:"Guess Who?",value:this.state.sixteenthchar,onChange:this.handleInput,disabled:16!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>16||this.state.levelquestion&&16===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&16===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char seventeenth "+(this.state.level>16?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(17)?V:X,alt:"seventeenth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"seventeenthchar",placeholder:"Guess Who?",value:this.state.seventeenthchar,onChange:this.handleInput,disabled:17!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>17||this.state.levelquestion&&17===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&17===this.state.level?this.toggleAsk:this.submitChar})]})]}),Object(v.jsxs)("div",{className:"char eightteenth "+(this.state.level>17?"":"invisible"),children:[Object(v.jsx)("img",{src:this.state.guessed.includes(18)?$:Z,alt:"eightteenth",height:150}),Object(v.jsxs)("div",{className:"character",children:[Object(v.jsx)("input",{name:"eightteenthchar",placeholder:"Guess Who?",value:this.state.eightteenthchar,onChange:this.handleInput,disabled:18!==this.state.level}),Object(v.jsx)("img",{alt:"lock",src:this.state.level>18||this.state.levelquestion&&18===this.state.level?m:b,height:25,onClick:this.state.levelquestion&&18===this.state.level?this.toggleAsk:this.submitChar})]})]})]}),Object(v.jsx)("div",{className:"final "+(this.state.level>18?"":"invisible"),onClick:function(){return e.state.level>18?window.location.href="https://drive.google.com/file/d/1AlAckBtjBuIXbNg6a6go2dEaa2Gbp5SI/view?usp=sharing":""},children:"TREASURE!"})]})]})}}]),s}(a.a.Component),te=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,h=t.getLCP,l=t.getTTFB;s(e),i(e),a(e),h(e),l(e)}))};l.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(ee,{})}),document.getElementById("root")),te()}},[[19,1,2]]]);
//# sourceMappingURL=main.7446285f.chunk.js.map