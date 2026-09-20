(function(){
"use strict";

var TABS=[
  ["p1","Tổng quan"],
  ["p2","Kế hoạch triển khai"],
  ["p3","Nội dung thống nhất"]
];

var ST=["Chưa bắt đầu","Đang làm","Hoàn thành","Vướng mắc"];

// Listbox Cột 1 (Bên trái): Đơn vị phụ trách / Nhân sự chủ trì
var SIDES=[
  "BP QTTS",
  "QTTS - Văn Bé",
  "QTTS - Vân Sinh",
  "QTTS - Quang Trí",
  "QTTS - Anh Vân",
  "TP HCQT/PP HCQT",
  "Phòng Kế Toán",
  "Khối CNTT",
  "BLĐ",
  "Đối tác"
];

// Listbox Cột 2 (Bên phải): Phòng ban phối hợp liên quan
var DEPTS=[
  "—",
  "Phòng HCQT",
  "BP QTTS",
  "Phòng Kế Toán",
  "CNTT",
  "Phòng PLTT",
  "BLĐ",
  "Đối tác"
];

var PHASES=[
  "Chuẩn bị",
  "Đang tiến hành",
  "TP/PP Thống nhất",
  "Đang trình ký BLĐ",
  "Đã Phê duyệt",
  "Golive & hỗ trợ"
];

var PHASE_MAP = {
  "Tiến hành": "Đang tiến hành",
  "Demo & thống nhất": "TP/PP Thống nhất",
  "Ký kết & đào tạo": "Đang trình ký BLĐ",
  "Go-live & hỗ trợ": "Golive & hỗ trợ"
};

var SIDE_MAP = {
  "Hai bên": "BP QTTS",
  "Đơn vị phối hợp": "Đối tác"
};

var DEPT_MAP = {
  "Hành chính": "Phòng HCQT",
  "Nhân sự": "BP QTTS",
  "Kế toán": "Phòng Kế Toán",
  "Tài chính": "Phòng Kế Toán",
  "Pháp chế": "Phòng PLTT",
  "Ban lãnh đạo": "BLĐ"
};

var SEED=[
  ["Chuẩn bị","Họp khởi động: thống nhất phạm vi và kế hoạch triển khai","TP HCQT/PP HCQT","Phòng HCQT",1,
   "2026-09-16","2026-09-16","Hoàn thành","Hình thức: họp trực tiếp"],
  ["Đang tiến hành","Gửi biên bản kết luận sau buổi họp","QTTS - Văn Bé","—",0,
   "2026-09-17","2026-09-17","Hoàn thành","Đã gửi các bên liên quan"],
  ["Đang tiến hành","Rà soát dữ liệu cấu hình và danh mục tài sản/người dùng","QTTS - Vân Sinh","BP QTTS",1,
   "2026-09-18","2026-09-20","Đang làm","Rà soát theo mẫu biểu chuẩn"],
  ["Đang tiến hành","Cấu hình và kiểm thử hệ thống phần mềm","QTTS - Quang Trí","CNTT",1,
   "2026-09-21","2026-09-24","Chưa bắt đầu","Thực hiện trên môi trường thử nghiệm"],
  ["TP/PP Thống nhất","Họp rà soát và thống nhất phương án cấp Trưởng/Phó phòng","TP HCQT/PP HCQT","Phòng HCQT",1,
   "2026-09-25","2026-09-26","Chưa bắt đầu","TP/PP các đơn vị tham gia rà soát"],
  ["TP/PP Thống nhất","Hoàn thiện các nội dung thống nhất và biên bản làm việc","QTTS - Anh Vân","Phòng Kế Toán",0,
   "2026-09-26","2026-09-27","Chưa bắt đầu","Chốt các phương án xử lý phát sinh"],
  ["Đang trình ký BLĐ","Lập tờ trình và gửi hồ sơ trình ký Ban Lãnh Đạo","BP QTTS","BLĐ",1,
   "2026-09-27","2026-09-28","Chưa bắt đầu","Trình phê duyệt kế hoạch triển khai"],
  ["Đã Phê duyệt","Tiếp nhận phê duyệt của BLĐ và thông báo các đơn vị","BP QTTS","Phòng PLTT",1,
   "2026-09-28","2026-09-29","Chưa bắt đầu","BLĐ phê duyệt chính thức"],
  ["Golive & hỗ trợ","Đưa hệ thống vào vận hành chính thức","BP QTTS","Đối tác",1,
   "2026-09-30","2026-09-30","Chưa bắt đầu","Mốc vận hành chính thức"],
  ["Golive & hỗ trợ","Hỗ trợ kỹ thuật và theo dõi vận hành sau Go-live","QTTS - Quang Trí","CNTT",0,
   "2026-09-30","2026-10-15","Chưa bắt đầu","Theo dõi định kỳ hàng tuần","from"]
];

var DOW=["T2","T3","T4","T5","T6","T7","CN"];
var MON=["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6",
"Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"];

var tasks=[],uid=0,calRef=new Date(),filt="",searchKeyword="";

function el(t,a,x){var e=document.createElement(t);if(a)for(var k in a)e.setAttribute(k,a[k]);if(x!=null)e.textContent=x;return e}
function $(s){return document.querySelector(s)}
function iso(d){return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2)}
function parse(s){if(!s)return null;var p=s.split("-");return new Date(+p[0],+p[1]-1,+p[2])}
function today(){var d=new Date();d.setHours(0,0,0,0);return d}
function dmy(s){var d=parse(s);return d?("0"+d.getDate()).slice(-2)+"/"+("0"+(d.getMonth()+1)).slice(-2):"—"}

function sideCls(s){
  if(!s) return "p-xp";
  if(s.indexOf("QTTS")>=0 || s.indexOf("HCQT")>=0) return "p-xp";
  if(s==="Đối tác") return "p-cl";
  return "p-bo";
}

var KW=["kế hoạch triển khai","biên bản kết luận",
"chính sách công tác","cost center","phê duyệt",
"người dùng","phạm vi","chính sách","khởi tạo","cấu hình",
"hợp đồng","Go-live","Golive","đào tạo","truyền thông","bảng kê",
"đối soát","demo","timeline","chủ trương","vận hành","bàn giao"];
KW.sort(function(a,b){return b.length-a.length});
function esc(t){return String(t).replace(/[&<>"]/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function kw(t){
  var out=esc(t);
  KW.forEach(function(k){
    var re=new RegExp("(?![^<]*>)("+k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");
    out=out.replace(re,"\u0001$1\u0002");
  });
  return out.replace(/\u0001/g,"<b>").replace(/\u0002/g,"</b>");
}

/* ---------- client input update ---------- */
var clientInput=$('[data-k="client"]');
function updateClientTitle(){
  var name=(clientInput&&clientInput.value.trim())||"Đối tác";
  var t=$("#stClTitle");if(t)t.textContent="Chờ "+name+" xử lý";
}
if(clientInput){
  clientInput.addEventListener("input",function(){
    updateClientTitle();
    autoSave();
  });
}

/* ---------- tabs ---------- */
var tabsBox=$("#tabs");
TABS.forEach(function(t,i){
  var b=el("button",{class:"tab",type:"button"},t[1]);
  b.setAttribute("aria-current",i===0?"true":"false");
  b.onclick=function(){
    TABS.forEach(function(x,j){
      var panel=document.getElementById(x[0]);
      if(panel)panel.classList.toggle("on",j===i);
      if(tabsBox.children[j])tabsBox.children[j].setAttribute("aria-current",j===i?"true":"false");
    });
    window.scrollTo(0,0);
    if(i===0)renderOverview();
  };
  tabsBox.appendChild(b);
});

/* ---------- tasks model ---------- */
function seed(){
  tasks=SEED.map(function(s){
    return {id:++uid,ph:s[0],n:s[1],side:s[2],dept:s[3],ms:!!s[4],pic:"",
            st:s[5]||"",due:s[6]||"",stt:s[7]||ST[0],note:s[8]||"",open:s[9]||""};
  });
}
function isLate(t){
  if(t.stt==="Hoàn thành"||!t.due)return false;
  var d=parse(t.due);return d&&d<today();
}

/* ---------- task card render ---------- */
function taskCard(t,compact){
  var c=el("div",{class:"tk"+(t.stt==="Hoàn thành"?" done":"")+(isLate(t)?" late":"")+(t.ms?" ms-row":"")});
  c.dataset.id=t.id;
  if(!compact){
    c.draggable=true;
    c.appendChild(el("div",{class:"tk-h",title:"Kéo để đổi thứ tự"},"⠿"));
  }
  var b=el("div",{class:"tk-b"});

  // Row 1: Step #, Phase, Name, Side (Cột 1), Dept (Cột 2), Delete
  var r1=el("div",{class:"tk-r1"});
  if(compact){
    r1.appendChild(el("span",{class:"pill p-ph"},t.ph));
  }else{
    r1.appendChild(el("span",{class:"tk-no",title:"Bước "+(tasks.indexOf(t)+1)},t.stt==="Hoàn thành"?"✓":String(tasks.indexOf(t)+1)));
    r1.appendChild(pillSel(PHASES,t.ph,"p-ph",function(v){t.ph=v;refresh()}));
  }
  var nm=el("div",{class:"tk-name"});
  if(compact){
    var sp=el("div",{style:"font-size:14.5px;font-weight:500;padding:4px 2px;color:var(--gray-500)"});
    sp.innerHTML=kw(t.n||"(chưa đặt tên)");
    nm.appendChild(sp);
  }else{
    var ni=el("input");ni.type="text";ni.value=t.n;ni.placeholder="Nội dung công việc";
    ni.oninput=function(){t.n=ni.value;autoSave()};
    ni.onchange=function(){refresh()};
    nm.appendChild(ni);
  }
  r1.appendChild(nm);
  if(compact){
    r1.appendChild(el("span",{class:"pill "+sideCls(t.side)},t.side));
    if(t.dept&&t.dept!=="—")r1.appendChild(el("span",{class:"pill p-bo"},t.dept));
  }else{
    r1.appendChild(pillSel(SIDES,t.side,sideCls(t.side),function(v){t.side=v;refresh()}));
    r1.appendChild(pillSel(DEPTS,t.dept,"p-bo",function(v){t.dept=v;refresh()}));
  }
  b.appendChild(r1);

  // Row 2: Date range, PIC, Milestone, Status
  var r2=el("div",{class:"tk-r2"});
  if(compact){
    r2.appendChild(el("span",{class:"fld"},isOpen(t)?whenText(t):"Hạn "+dmy(t.due)));
    if(t.pic)r2.appendChild(el("span",{class:"fld"},"· "+t.pic));
    if(isLate(t))r2.appendChild(el("span",{class:"pill",style:"background:var(--red-bg);color:var(--red)"},"Quá hạn"));
    r2.appendChild(stTag(t));
  }else{
    var dwrap=el("div",{class:"date-range"});
    var di1=el("input");di1.type="date";di1.value=t.st||"";di1.title="Ngày bắt đầu";
    di1.onchange=function(){t.st=di1.value;refresh()};
    var di2=el("input");di2.type="date";di2.value=t.due||"";di2.title="Hạn hoàn thành";
    di2.onchange=function(){t.due=di2.value;refresh()};
    dwrap.appendChild(di1);
    dwrap.appendChild(el("span",{class:"sep"},"→"));
    dwrap.appendChild(di2);
    r2.appendChild(dwrap);

    var pi=el("input",{class:"tk-pic"});pi.type="text";pi.value=t.pic||"";pi.placeholder="PIC...";
    pi.oninput=function(){t.pic=pi.value;autoSave()};
    r2.appendChild(pi);

    var msb=el("button",{class:"btn-star"+(t.ms?" on":""),type:"button",title:"Đánh dấu mốc quan trọng"});
    msb.textContent=t.ms?"★ Mốc":"☆ Mốc";
    msb.onclick=function(){t.ms=!t.ms;refresh()};
    r2.appendChild(msb);

    r2.appendChild(stSel(t));
  }
  b.appendChild(r2);

  // Row 3: Note input (rendered in edit mode)
  if(!compact){
    var nt=el("div",{class:"tk-note"});
    var nti=el("input");nti.type="text";nti.value=t.note||"";nti.placeholder="Ghi chú thêm (hình thức, địa điểm, yêu cầu...)...";
    nti.oninput=function(){t.note=nti.value;autoSave()};
    nt.appendChild(nti);
    b.appendChild(nt);
  }
  c.appendChild(b);

  if(!compact){
    var del=el("button",{class:"tk-x",type:"button",title:"Xoá công việc"},"×");
    del.onclick=function(){
      if(confirm("Xoá hạng mục này?")){
        tasks=tasks.filter(function(x){return x.id!==t.id});
        refresh();
      }
    };
    c.appendChild(del);
  }
  return c;
}

function pillSel(opts,cur,cls,cb){
  var s=el("select",{class:"pill "+cls});
  opts.forEach(function(o){var p=el("option",null,o);p.value=o;s.appendChild(p)});
  s.value=cur;
  s.onchange=function(){cb(s.value)};
  return s;
}

function stSel(t){
  var s=el("select",{class:"stt "+stClass(t.stt)});
  ST.forEach(function(o){var p=el("option",null,o);p.value=o;s.appendChild(p)});
  s.value=t.stt;
  s.onchange=function(){t.stt=s.value;refresh()};
  return s;
}

function stTag(t){
  var sp=el("span",{class:"stt "+stClass(t.stt)});
  sp.textContent=t.stt;
  return sp;
}

function stClass(s){
  if(s==="Hoàn thành")return "st-d";
  if(s==="Đang làm")return "st-w";
  if(s==="Vướng mắc")return "st-b";
  return "st-p";
}

/* ---------- drag & drop reorder ---------- */
var dragId=null;
document.addEventListener("dragstart",function(e){
  var c=e.target.closest(".tk");
  if(!c||!c.dataset.id)return;
  dragId=+c.dataset.id;
  c.classList.add("dragging");
  e.dataTransfer.effectAllowed="move";
  e.dataTransfer.setData("text/plain",c.dataset.id);
});
document.addEventListener("dragend",function(e){
  var c=e.target.closest(".tk");
  if(c)c.classList.remove("dragging");
  document.querySelectorAll(".tk.over").forEach(function(x){x.classList.remove("over")});
  dragId=null;
});
document.addEventListener("dragover",function(e){
  var c=e.target.closest(".tk");
  if(!c||!c.dataset.id||+c.dataset.id===dragId)return;
  e.preventDefault();
  e.dataTransfer.dropEffect="move";
  document.querySelectorAll(".tk.over").forEach(function(x){if(x!==c)x.classList.remove("over")});
  c.classList.add("over");
});
document.addEventListener("dragleave",function(e){
  var c=e.target.closest(".tk");
  if(c)c.classList.remove("over");
});
document.addEventListener("drop",function(e){
  var c=e.target.closest(".tk");
  if(!c||!c.dataset.id||+c.dataset.id===dragId)return;
  e.preventDefault();
  c.classList.remove("over");
  var over=+c.dataset.id;
  var from=tasks.findIndex(function(t){return t.id===dragId});
  var to=tasks.findIndex(function(t){return t.id===over});
  if(from<0||to<0)return;
  var r=c.getBoundingClientRect();
  var after=(e.clientY-r.top)/r.height>.5;
  var moved=tasks.splice(from,1)[0];
  var idx=tasks.findIndex(function(t){return t.id===over});
  tasks.splice(after?idx+1:idx,0,moved);
  renderPlan();
  var nc=document.querySelector('.tk[data-id="'+dragId+'"]');
  if(nc)nc.classList.add("dragging");
});

/* ---------- Notes Data Extraction & Counter ---------- */
function getNotesData(){
  var noteRows = document.querySelectorAll('#notes tbody tr');
  var list = [];
  noteRows.forEach(function(tr, idx){
    var ta = tr.querySelector('textarea');
    var textInputs = tr.querySelectorAll('input[type="text"]');
    var byInput = textInputs[0];
    var picInput = textInputs[1];
    var dateInput = tr.querySelector('input[type="date"]');
    var sel = tr.querySelector('select');
    var content = ta ? ta.value.trim() : "";
    var by = byInput ? byInput.value.trim() : "";
    var pic = picInput ? picInput.value.trim() : "";
    var due = dateInput ? dateInput.value : "";
    var stt = sel ? sel.value : "Chưa bắt đầu";
    if(content || by || pic){
      list.push({
        idx: idx + 1,
        content: content || "(Chưa có nội dung)",
        by: by || "—",
        pic: pic || "—",
        due: due,
        stt: stt
      });
    }
  });
  return list;
}

function updateUnconfirmedCount(){
  var notesList = getNotesData();
  var count = 0;
  notesList.forEach(function(n){
    if(n.stt !== "Hoàn thành") count++;
  });
  var stC = $("#stCore");
  if(stC) stC.textContent = count;
}

/* ---------- overview ---------- */
function renderOverview(){
  updateClientTitle();
  var done=tasks.filter(function(t){return t.stt==="Hoàn thành"}).length;
  var pct=tasks.length?Math.round(done/tasks.length*100):0;
  var pctEl=$("#ovPct");if(pctEl)pctEl.textContent=pct+"%";
  var cntEl=$("#ovCnt");if(cntEl)cntEl.textContent=done+" / "+tasks.length+" việc";
  var r=33,cir=2*Math.PI*r,fg=$("#ringFg");
  if(fg){fg.style.strokeDasharray=cir;fg.style.strokeDashoffset=cir*(1-pct/100);}

  var late=tasks.filter(isLate);
  var lateEl=$("#stLate");if(lateEl)lateEl.textContent=late.length;
  var cl=tasks.filter(function(t){return t.stt!=="Hoàn thành"&&(t.side==="Đối tác"||(t.dept&&t.dept!=="—"))});
  var clEl=$("#stCl");if(clEl)clEl.textContent=cl.length;
  var dl={};cl.forEach(function(t){if(t.dept&&t.dept!=="—")dl[t.dept]=(dl[t.dept]||0)+1});
  var dk=Object.keys(dl).sort(function(a,b){return dl[b]-dl[a]});
  var deptEl=$("#stClDept");if(deptEl)deptEl.textContent=dk.length?dk.slice(0,2).join(", "):"—";

  // unconfirmed notes items
  updateUnconfirmedCount();

  // status line
  var gvIn=$("#gvInput");
  var gv=gvIn?gvIn.value:"";
  var line;
  if(!gv){line="Vui lòng xác nhận ngày vận hành chính thức mục tiêu để bắt đầu theo dõi tiến độ.";}
  else{
    var d=Math.ceil((parse(gv)-today())/86400000);
    var cur=null;
    for(var i=0;i<PHASES.length;i++){
      var ps=tasks.filter(function(t){return t.ph===PHASES[i]});
      if(ps.length&&ps.some(function(t){return t.stt!=="Hoàn thành"})){cur=PHASES[i];break}
    }
    line="Dự án đang ở giai đoạn <b>"+(cur||"hoàn tất")+"</b>. "+
      (d>0?"Còn <b>"+d+" ngày</b> đến ngày vận hành chính thức.":d===0?"<b>Hôm nay là ngày vận hành chính thức.</b>":"Đã quá ngày vận hành chính thức <b>"+(-d)+" ngày</b>.")+
      (late.length?" Hiện có <b>"+late.length+" hạng mục quá hạn</b> cần xử lý.":"");
  }
  var sLine=$("#statusLine");if(sLine)sLine.innerHTML=line;

  // go-live chip + date
  var gvDate=$("#gvDate"),gvCount=$("#gvCount"),chipLive=$("#chipLive");
  if(gv){
    var g=parse(gv);
    if(gvDate)gvDate.textContent=("0"+g.getDate()).slice(-2)+"/"+("0"+(g.getMonth()+1)).slice(-2)+"/"+g.getFullYear();
    var dd=Math.ceil((g-today())/86400000);
    if(gvCount)gvCount.innerHTML=dd>0?"còn <b>"+dd+" ngày</b>":dd===0?"<b>hôm nay</b>":"đã qua <b>"+(-dd)+" ngày</b>";
    if(chipLive)chipLive.textContent="Go-live "+("0"+g.getDate()).slice(-2)+"/"+("0"+(g.getMonth()+1)).slice(-2);
  }else{
    if(gvDate)gvDate.textContent="Chưa đặt";if(gvCount)gvCount.textContent="—";if(chipLive)chipLive.textContent="Go-live —";
  }

  // phases progress
  var pb=$("#phases");
  if(pb){
    pb.innerHTML="";
    PHASES.forEach(function(p){
      var ps=tasks.filter(function(t){return t.ph===p});
      var d=ps.filter(function(t){return t.stt==="Hoàn thành"}).length;
      var pc=ps.length?Math.round(d/ps.length*100):0;
      var row=el("div",{class:"phrow"});
      row.appendChild(el("div",{class:"nm"},p));
      var tr=el("div",{class:"tr"}),bar=el("div",{class:"pbar"}),f=el("i");
      f.style.width=pc+"%";bar.appendChild(f);tr.appendChild(bar);row.appendChild(tr);
      row.appendChild(el("div",{class:"pc"},ps.length?pc+"%":"—"));
      pb.appendChild(row);
    });
  }

  // waiting on whom
  var bd=$("#byDept");
  if(bd){
    bd.innerHTML="";
    var groups={};
    tasks.filter(function(t){return t.stt!=="Hoàn thành"}).forEach(function(t){
      var k = (t.side && (t.side.indexOf("QTTS")>=0 || t.side.indexOf("HCQT")>=0)) ? "BP QTTS" :
              (t.side==="BLĐ" ? "BLĐ" :
              (t.dept && t.dept!=="—" ? t.dept : (t.side || "Khác")));
      (groups[k]=groups[k]||[]).push(t);
    });
    var keys=Object.keys(groups).sort(function(a,b){
      var la=groups[a].filter(isLate).length,lb=groups[b].filter(isLate).length;
      if(la!==lb)return lb-la;
      var da=groups[a].filter(function(t){return t.due})[0];
      var db=groups[b].filter(function(t){return t.due})[0];
      return (da&&da.due||"9")<(db&&db.due||"9")?-1:1;
    });
    if(!keys.length)bd.appendChild(el("div",{class:"empty",style:"padding:14px"},"Không còn hạng mục tồn đọng."));
    keys.forEach(function(k){
      var g=groups[k].slice().sort(function(a,b){return (a.due||"9")<(b.due||"9")?-1:1});
      var wrap=el("div",{style:"padding:10px 0;border-bottom:1px solid var(--gray-100)"});
      var hd=el("div",{style:"display:flex;align-items:center;gap:8px;margin-bottom:6px"});
      var pillCls = (k==="BP QTTS"||k.indexOf("QTTS")>=0||k.indexOf("HCQT")>=0) ? "p-xp" : (k==="BLĐ" ? "p-bo" : "p-cl");
      hd.appendChild(el("span",{class:"pill "+pillCls},k));
      hd.appendChild(el("span",{style:"font-size:12px;color:var(--gray-500)"},g.length+" việc"));
      wrap.appendChild(hd);
      g.slice(0,3).forEach(function(t){
        var r=el("div",{style:"display:flex;align-items:center;gap:8px;font-size:13px;padding:3px 0"});
        r.appendChild(el("span",{style:"color:var(--gray-400)"},"·"));
        var nm=el("span",{style:"flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"},t.n);
        r.appendChild(nm);
        if(t.due)r.appendChild(el("span",{style:"color:"+(isLate(t)?"var(--red)":"var(--gray-400)")+";font-size:11.5px"},dmy(t.due)));
        wrap.appendChild(r);
      });
      bd.appendChild(wrap);
    });
  }

  // next up
  var nu=$("#nextUp");
  if(nu){
    nu.innerHTML="";
    var sorted=tasks.filter(function(t){return t.stt!=="Hoàn thành"}).sort(function(a,b){
      var la=isLate(a),lb=isLate(b);
      if(la!==lb)return la?-1:1;
      if(a.ms!==b.ms)return a.ms?-1:1;
      return (a.due||"9")<(b.due||"9")?-1:1;
    });
    if(!sorted.length)nu.appendChild(el("div",{class:"empty"},"Tất cả các hạng mục đã hoàn thành!"));
    sorted.slice(0,5).forEach(function(t){nu.appendChild(taskCard(t,true))});
  }

  renderCal();
}

/* ---------- calendar ---------- */
function renderCal(){
  var y=calRef.getFullYear(),m=calRef.getMonth();
  var cTit=$("#calTitle");if(cTit)cTit.textContent=MON[m]+" "+y;
  var g=$("#calGrid");if(!g)return;g.innerHTML="";
  DOW.forEach(function(d){g.appendChild(el("div",{class:"cal-dh"},d))});
  var first=new Date(y,m,1);
  var fDay=(first.getDay()+6)%7;
  var daysIn=new Date(y,m+1,0).getDate();
  var prevDays=new Date(y,m,0).getDate();
  for(var p=fDay-1;p>=0;p--){
    var c=el("div",{class:"cal-d other"});
    c.appendChild(el("div",{class:"n"},String(prevDays-p)));
    g.appendChild(c);
  }

  var gv=$("#gvInput")?$("#gvInput").value:"";
  var tdStr=iso(today());

  for(var day=1;day<=daysIn;day++){
    var cur=new Date(y,m,day);
    var ds=iso(cur);
    var cell=el("div",{class:"cal-d"});
    if(ds===tdStr)cell.classList.add("today");
    cell.appendChild(el("div",{class:"n"},String(day)));

    var onThisDay=[];
    if(gv&&ds===gv)onThisDay.push({live:true,txt:"Go-live"});
    tasks.forEach(function(t){
      if(t.stt==="Hoàn thành")return;
      if(t.due===ds||(!t.due&&t.st===ds)||t.open==="from"&&t.st<=ds){
        onThisDay.push(t);
      }
    });

    onThisDay.slice(0,3).forEach(function(x){
      var pill;
      if(x.live){
        pill=el("div",{class:"cal-pill live"},"★ Go-live");
      }else{
        var cls="cal-pill "+calClass(x);
        pill=el("div",{class:cls},x.n||"(chưa đặt tên)");
        pill.title=(x.ms?"[Mốc] ":"")+(x.n||"")+" ("+x.side+")";
        pill.onclick=(function(task){return function(e){e.stopPropagation();goTask(task.id)}})(x);
      }
      cell.appendChild(pill);
    });
    if(onThisDay.length>3){
      cell.appendChild(el("div",{class:"cal-more"},"+"+(onThisDay.length-3)));
    }
    g.appendChild(cell);
  }

  var totalCells=fDay+daysIn;
  var nextCells=(7-(totalCells%7))%7;
  for(var n1=1;n1<=nextCells;n1++){
    var c2=el("div",{class:"cal-d other"});
    c2.appendChild(el("div",{class:"n"},String(n1)));
    g.appendChild(c2);
  }
}

function calClass(x){
  if(isLate(x))return "late";
  if(x.ms)return "ms";
  if(x.side && (x.side.indexOf("QTTS")>=0 || x.side.indexOf("HCQT")>=0))return "ch-xp";
  if(x.side==="Đối tác")return "ch-cl";
  return "ch-bo";
}

var calPrev=$("#calPrev");if(calPrev)calPrev.onclick=function(){calRef=new Date(calRef.getFullYear(),calRef.getMonth()-1,1);renderCal()};
var calNext=$("#calNext");if(calNext)calNext.onclick=function(){calRef=new Date(calRef.getFullYear(),calRef.getMonth()+1,1);renderCal()};
var calToday=$("#calToday");if(calToday)calToday.onclick=function(){calRef=new Date();renderCal()};

/* ---------- flow diagram (swimlane) ---------- */
var flowFocus="";
function laneOf(t){
  var d=(t.dept&&t.dept!=="—")?t.dept:"";
  if(t.side && (t.side.indexOf("QTTS")>=0 || t.side.indexOf("HCQT")>=0)) return "xp";
  if(t.side==="BLĐ") return "bo";
  if(t.side==="Đối tác") return d ? "cl:"+d : "cl:Đối tác";
  return d ? "cl:"+d : "cl:"+(t.side||"Khác");
}
function laneKeys(){
  var has={};tasks.forEach(function(t){has[laneOf(t)]=1});
  var out=[];
  DEPTS.forEach(function(d){if(d!=="—"&&has["cl:"+d])out.push("cl:"+d)});
  Object.keys(has).forEach(function(k){if(k.indexOf("cl:")===0&&k!=="cl:—"&&out.indexOf(k)<0)out.push(k)});
  if(has["cl:—"])out.push("cl:—");
  if(has["bo"])out.push("bo");
  out.push("xp");
  return out;
}
function laneMeta(k){
  if(k==="xp")return {c:"xp",pt:"Đơn vị chủ trì",nm:"BP QTTS"};
  if(k==="bo")return {c:"bo",pt:"Chỉ đạo & Phê duyệt",nm:"BLĐ"};
  var d=k.slice(3);
  return d==="—"?{c:"cl",pt:"Đơn vị phối hợp",nm:"Chưa phân đơn vị"}:{c:"cl",pt:"Đơn vị phối hợp",nm:d};
}
function isPair(t){return !!(t.dept&&t.dept!=="—")}
function stNo(t){return tasks.indexOf(t)+1}
function span(a,b){
  if(!a&&!b)return "Chưa có thời hạn";
  if(!a||a===b)return dmy(b||a);
  if(!b)return "Từ "+dmy(a);
  return dmy(a)+" → "+dmy(b);
}
function isOpen(t){return !!(t.st&&!t.due)}
function whenText(t){
  if(t.open==="from")return "Từ "+dmy(t.st)+" (liên tục)";
  if(t.open==="after")return "Sau Go-live ("+dmy(t.st)+")";
  return span(t.st,t.due);
}

function renderFlow(){
  var grid=$("#flGrid");if(!grid)return;
  grid.innerHTML="";
  var keys=laneKeys();
  grid.style.gridTemplateColumns="190px repeat("+PHASES.length+",minmax(190px,1fr))";
  grid.style.minWidth="calc(190px + 190px * "+PHASES.length+")";

  grid.appendChild(el("div",{class:"fl-col-hd",style:"border-right:1px solid var(--bd)"},"Đơn vị phụ trách"));
  PHASES.forEach(function(p){grid.appendChild(el("div",{class:"fl-col-hd"},p))});

  keys.forEach(function(k){
    var m=laneMeta(k);
    var rh=el("div",{class:"fl-rh "+m.c});
    rh.appendChild(el("div",{class:"pt"},m.pt));
    rh.appendChild(el("div",{class:"nm"},m.nm));
    grid.appendChild(rh);

    PHASES.forEach(function(p){
      var cell=el("div",{class:"fl-cell"});
      var inPhase=tasks.filter(function(t){return t.ph===p&&laneOf(t)===k});
      inPhase.forEach(function(t){cell.appendChild(flowNode(t))});
      grid.appendChild(cell);
    });
  });

  // units filter chips
  var units=$("#flUnits");if(!units)return;
  units.innerHTML="";
  function chip(k,label,cls,cnt){
    var b=el("button",{class:"fl-uchip "+cls+(flowFocus===k?" on":""),type:"button"});
    b.textContent=label+" ("+cnt+")";
    b.onclick=function(){flowFocus=(flowFocus===k?"":k);renderFlow()};
    units.appendChild(b);
  }
  chip("","Tất cả đơn vị","",tasks.length);
  var clk=keys.filter(function(k){return k.indexOf("cl:")===0});
  var clTitle="Đơn vị phối hợp";
  if(clk.length){
    units.appendChild(el("span",{class:"gl"},clTitle));
    clk.forEach(function(k){chip(k,laneMeta(k).nm,"cl",tasks.filter(function(t){return laneOf(t)===k}).length)});
    units.appendChild(el("span",{class:"sep"}));
  }
  if(keys.indexOf("bo")>=0) chip("bo","BLĐ","bo",tasks.filter(function(t){return laneOf(t)==="bo"}).length);
  chip("xp","BP QTTS","xp",tasks.filter(function(t){return laneOf(t)==="xp"}).length);

  // focused to-do list
  var td=$("#flTodo");if(!td)return;
  td.innerHTML="";
  if(!flowFocus){td.hidden=true;return}
  td.hidden=false;
  var items=tasks.filter(function(t){return laneOf(t)===flowFocus||(flowFocus==="xp"&&isPair(t))});
  var left=items.filter(function(t){return t.stt!=="Hoàn thành"}).length;
  var fm=laneMeta(flowFocus);
  td.appendChild(el("h4",null,"Phần việc của "+(fm.c==="cl"?fm.nm:fm.nm)));
  td.appendChild(el("div",{class:"sm"},items.length?(left+" trên "+items.length+" hạng mục chưa hoàn thành, sắp theo trình tự thực hiện."):"Chưa có hạng mục."));
  items.forEach(function(t){
    var done=t.stt==="Hoàn thành";
    var r=el("div",{class:"fl-row"+(done?" done":""),tabindex:"0",role:"button"});
    var n=el("span",{class:"fl-n"},done?"✓":String(stNo(t)));
    if(t.ms&&!done)n.style.background="var(--gradient)";
    r.appendChild(n);
    r.appendChild(el("span",{class:"dt"},whenText(t)));
    r.appendChild(el("span",{class:"nm"},t.n||"(chưa đặt tên)"));
    var tg=el("span",{class:"tg"});
    if(isPair(t))tg.appendChild(el("span",{class:"fl-tag "+(flowFocus==="xp"?"with2":"with")},"Phối hợp: "+t.dept));
    tg.appendChild(stTag(t));
    r.appendChild(tg);
    r.onclick=function(){goTask(t.id)};
    r.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();goTask(t.id)}};
    td.appendChild(r);
  });
}

function flowNode(t){
  var done=t.stt==="Hoàn thành";
  var late=isLate(t);
  var pair=isPair(t);
  var nd=el("div",{class:"fl-node"+(done?" done":"")+(late?" late":"")+(pair?" pair":"")+(t.ms?" ms":""),tabindex:"0",role:"button"});
  var top=el("div",{class:"fl-top"});
  var n=el("span",{class:"fl-n"},done?"✓":String(stNo(t)));
  if(t.ms&&!done)n.style.background="var(--gradient)";
  top.appendChild(n);
  top.appendChild(el("span",{class:"fl-dt"},whenText(t)));
  nd.appendChild(top);

  var tx=el("div",{class:"fl-tx"});
  tx.innerHTML=kw(t.n||"(chưa đặt tên)");
  nd.appendChild(tx);

  var ft=el("div",{class:"fl-ft"});
  if(t.pic)ft.appendChild(el("span",{class:"fl-pic"},t.pic));
  if(isPair(t))ft.appendChild(el("span",{class:"fl-tag with"},"Phối hợp: "+t.dept));
  ft.appendChild(stTag(t));
  nd.appendChild(ft);

  nd.onclick=function(){goTask(t.id)};
  nd.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();goTask(t.id)}};
  return nd;
}

function goTask(id){
  TABS.forEach(function(x,j){
    var panel=document.getElementById(x[0]);
    if(panel)panel.classList.toggle("on",x[0]==="p2");
    if(tabsBox.children[j])tabsBox.children[j].setAttribute("aria-current",x[0]==="p2"?"true":"false");
  });
  window.scrollTo(0,0);
  filt="";
  var f=$("#filt");if(f)f.value="";
  searchKeyword="";
  var s=$("#taskSearch");if(s)s.value="";
  renderPlan();
  setTimeout(function(){
    var target=document.querySelector('.tk[data-id="'+id+'"]');
    if(target){
      target.scrollIntoView({behavior:"smooth",block:"center"});
      target.style.transition="box-shadow .4s, transform .4s";
      target.style.boxShadow="0 0 0 4px var(--purple)";
      target.style.transform="scale(1.02)";
      setTimeout(function(){
        target.style.boxShadow="";
        target.style.transform="";
      },1600);
    }
  },150);
}

/* ---------- plan render ---------- */
function renderPlan(){
  var c=$("#plan");if(!c)return;
  c.innerHTML="";
  var list=tasks.slice();
  if(filt)list=list.filter(function(t){return t.ph===filt});
  if(searchKeyword){
    var kwLower=searchKeyword.toLowerCase();
    list=list.filter(function(t){
      return (t.n&&t.n.toLowerCase().indexOf(kwLower)>=0)||
             (t.pic&&t.pic.toLowerCase().indexOf(kwLower)>=0)||
             (t.dept&&t.dept.toLowerCase().indexOf(kwLower)>=0)||
             (t.side&&t.side.toLowerCase().indexOf(kwLower)>=0)||
             (t.note&&t.note.toLowerCase().indexOf(kwLower)>=0);
    });
  }
  if(!list.length){
    c.appendChild(el("div",{class:"empty"},"Không có hạng mục nào phù hợp bộ lọc."));
    return;
  }
  list.forEach(function(t){c.appendChild(taskCard(t,false))});
}

function refresh(){
  renderPlan();
  renderFlow();
  renderOverview();
  autoSave();
}

/* ---------- filter & search ---------- */
(function(){
  var f=$("#filt");
  if(f){
    f.innerHTML="";
    var allOpt=el("option",null,"Tất cả giai đoạn");
    allOpt.value="";
    f.appendChild(allOpt);
    PHASES.forEach(function(p){var o=el("option",null,p);o.value=p;f.appendChild(o)});
    f.onchange=function(){filt=f.value;renderPlan()};
  }

  var s=$("#taskSearch");
  if(s){
    s.oninput=function(){
      searchKeyword=s.value.trim();
      renderPlan();
    };
  }
})();

var addBtn=$("#addTask");
if(addBtn){
  addBtn.onclick=function(){
    var todayStr = iso(today());
    var newTask = {
      id: ++uid,
      ph: filt || PHASES[0],
      n: "",
      side: SIDES[0],
      dept: DEPTS[0],
      ms: false,
      pic: "",
      st: todayStr,
      due: todayStr,
      stt: ST[0],
      note: ""
    };
    tasks.push(newTask);
    refresh();
    setTimeout(function(){
      var card = document.querySelector('.tk[data-id="'+newTask.id+'"]');
      if(card){
        card.scrollIntoView({behavior:"smooth", block:"center"});
        var ni = card.querySelector(".tk-name input");
        if(ni) ni.focus();
      }
    }, 120);
  };
}
var resetBtn=$("#resetTask");
if(resetBtn){
  resetBtn.onclick=function(){
    if(confirm("Khôi phục danh mục gốc? Toàn bộ nội dung công việc sẽ được thiết lập lại về ban đầu.")) {
      uid=0;
      seed();
      refresh();
    }
  };
}

/* ---------- add-row tables ---------- */
function mkTable(sel,btnId,cols){
  var b=document.querySelector(sel+" tbody");
  if(!b) return {add:function(){},count:function(){return 0}};
  var n=0,pfx=sel.replace(/\W/g,"");
  function renum(){Array.prototype.forEach.call(b.rows,function(r,i){r.cells[0].textContent=String(i+1)})}
  function row(){
    var id=pfx+(++n),tr=el("tr");
    tr.appendChild(el("td",{class:"mid"},""));
    cols.forEach(function(c){
      var cell=el("td");
      var x;
      if(c.t==="sel"){
        x=el("select");c.o.forEach(function(o){var p=el("option",null,o);p.value=o;x.appendChild(p)});
        x.onchange=function(){autoSave();updateUnconfirmedCount()};
      }
      else if(c.t==="ta"){x=el("textarea");x.rows=1;x.oninput=function(){autoSave();updateUnconfirmedCount()}}
      else{x=el("input");x.type=c.t;x.oninput=autoSave}
      x.setAttribute("data-k",id+c.k);if(c.p)x.placeholder=c.p;
      cell.appendChild(x);tr.appendChild(cell);
    });
    var cx=el("td",{class:"mid"});
    var bt=el("button",{class:"tk-x",type:"button",title:"Xoá"},"×");
    bt.onclick=function(){tr.remove();renum();autoSave();updateUnconfirmedCount()};
    cx.appendChild(bt);tr.appendChild(cx);
    return tr;
  }
  var btn=document.getElementById(btnId);
  if(btn) btn.onclick=function(){b.appendChild(row());renum();autoSave();updateUnconfirmedCount()};
  return {add:function(){b.appendChild(row());renum()},count:function(){return b.rows.length}};
}
var noteT=mkTable("#notes","addNote",[
  {t:"ta",k:"-n",p:"Nội dung thống nhất / ghi nhận"},{t:"text",k:"-by",p:"Người nêu"},
  {t:"text",k:"-pic",p:"Phụ trách"},{t:"date",k:"-d"},{t:"sel",k:"-st",o:ST}]);
for(var k=0;k<3;k++)noteT.add();

/* ---------- Host Data & URL Helpers ---------- */
var HOST_DOMAIN = "https://quanlyts.com";
var isInitializing = true;
var saveTimeout = null;

function getApiBase(){
  if (window.location.protocol === "http:" || window.location.protocol === "https:") {
    return window.location.origin;
  }
  return HOST_DOMAIN;
}

function getHostReportUrl(fileName) {
  // Đường link khi xuất ra file HTML luôn phát ra từ host quanlyts.com
  var base = HOST_DOMAIN;
  if (window.location.protocol === "http:" || window.location.protocol === "https:") {
    if (window.location.hostname.includes("quanlyts.com")) {
      base = window.location.origin;
    }
  }
  return base + "/" + encodeURI(fileName);
}

async function saveStateToServer(state) {
  var base = getApiBase();
  try {
    var resp = await fetch(base + '/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    });
    if (resp.ok) return true;
  } catch (err) {}

  if (base !== HOST_DOMAIN) {
    try {
      var resp2 = await fetch(HOST_DOMAIN + '/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
      });
      return resp2.ok;
    } catch (e2) {}
  }
  return false;
}

async function loadServerState() {
  var base = getApiBase();
  try {
    var resp = await fetch(base + '/api/data?t=' + Date.now(), { cache: 'no-cache' });
    if (resp.ok) {
      var data = await resp.json();
      if (data && data.tasks && data.tasks.length > 0) return data;
    }
  } catch (err) {}

  if (base !== HOST_DOMAIN) {
    try {
      var resp2 = await fetch(HOST_DOMAIN + '/api/data?t=' + Date.now(), { cache: 'no-cache' });
      if (resp2.ok) {
        var data2 = await resp2.json();
        if (data2 && data2.tasks && data2.tasks.length > 0) return data2;
      }
    } catch (e2) {}
  }
  return null;
}

async function saveReportToServer(fileName, htmlContent) {
  var base = getApiBase();
  try {
    var resp = await fetch(base + '/api/save-report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileName: fileName, htmlContent: htmlContent })
    });
    if (resp.ok) return true;
  } catch (err) {}

  if (base !== HOST_DOMAIN) {
    try {
      var resp2 = await fetch(HOST_DOMAIN + '/api/save-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName: fileName, htmlContent: htmlContent })
      });
      return resp2.ok;
    } catch (e2) {}
  }
  return false;
}

/* ---------- Auto-Save to Host Server & LocalStorage ---------- */
function autoSave(){
  if (isInitializing) return;
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async function(){
    var state = buildState();
    // 1. Lưu dự phòng LocalStorage
    try {
      localStorage.setItem("xperise_onboarding_state", JSON.stringify(state));
    } catch(err){
      console.warn("LocalStorage save notice:", err);
    }

    var badge = $("#saveBadge");
    if(badge){
      badge.textContent = "⏳ Đang lưu...";
      badge.style.opacity = "1";
    }

    // 2. Lưu trực tiếp lên máy chủ Host
    var ok = await saveStateToServer(state);
    if(badge){
      var now = new Date();
      var timeStr = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2);
      if(ok){
        badge.textContent = "✓ Đã lưu máy chủ lúc " + timeStr;
      } else {
        badge.textContent = "✓ Đã lưu nội bộ lúc " + timeStr;
      }
      badge.style.opacity = "1";
    }
    updateUnconfirmedCount();
  }, 400);
}

function buildState(){
  var o={_v:7,_at:new Date().toISOString(),tasks:tasks,uid:uid,f:{},
    rows:{notes:noteT.count()}};
  document.querySelectorAll("[data-k]").forEach(function(n){
    o.f[n.getAttribute("data-k")]=(n.type==="checkbox")?n.checked:n.value;
  });
  return o;
}

function applyState(o){
  if(o.tasks){
    tasks=o.tasks.map(function(t){
      if(PHASE_MAP[t.ph]) t.ph = PHASE_MAP[t.ph];
      if(SIDE_MAP[t.side]) t.side = SIDE_MAP[t.side];
      if(DEPT_MAP[t.dept]) t.dept = DEPT_MAP[t.dept];
      if(SIDES.indexOf(t.side) < 0) t.side = SIDES[0];
      if(DEPTS.indexOf(t.dept) < 0) t.dept = DEPTS[0];
      return t;
    });
    uid=o.uid||tasks.length;
  }
  var r=o.rows||{};
  while(noteT.count()<(r.notes||0))noteT.add();
  if(o.f)Object.keys(o.f).forEach(function(k){
    var n=document.querySelector('[data-k="'+k.replace(/"/g,'\\"')+'"]');
    if(!n)return;
    if(n.type==="checkbox")n.checked=!!o.f[k];else n.value=o.f[k];
    if(n.tagName==="SELECT")n.dispatchEvent(new Event("change"));
  });
  var gv=$("#gvInput")?$("#gvInput").value:"";
  if(gv)calRef=parse(gv);
  updateClientTitle();
  refresh();
}

/* ---------- Stat Card 4 Click Handler (Chưa thống nhất -> Tab 3) ---------- */
var statCoreEl = $("#stCore");
var statCoreCard = statCoreEl ? (statCoreEl.closest ? statCoreEl.closest(".stat") : statCoreEl.parentElement) : null;
if(statCoreCard){
  statCoreCard.style.cursor = "pointer";
  statCoreCard.title = "Nhấp để mở Tab Nội dung thống nhất";
  statCoreCard.onclick = function(){
    TABS.forEach(function(x, j){
      var panel = document.getElementById(x[0]);
      if(panel) panel.classList.toggle("on", x[0] === "p3");
      if(tabsBox.children[j]) tabsBox.children[j].setAttribute("aria-current", x[0] === "p3" ? "true" : "false");
    });
    window.scrollTo(0,0);
  };
}

/* ---------- Chip Live Click Handler ---------- */
var chipLive = $("#chipLive");
if(chipLive){
  chipLive.onclick = function(){
    TABS.forEach(function(x, j){
      var panel = document.getElementById(x[0]);
      if(panel) panel.classList.toggle("on", j === 0);
      if(tabsBox.children[j]) tabsBox.children[j].setAttribute("aria-current", j === 0 ? "true" : "false");
    });
    window.scrollTo(0,0);
    renderOverview();
    var gvIn = $("#gvInput");
    if(gvIn){
      gvIn.scrollIntoView({behavior: "smooth", block: "center"});
      gvIn.focus();
    }
  };
}

/* ==========================================================================
   BÁO CÁO TỔNG THỂ DỰ ÁN (EXECUTIVE PROJECT REPORT HTML BUILDER)
   ========================================================================== */
function buildProjectReportHtml(state) {
  var clientName = (state.f && state.f["client"]) || (($('[data-k="client"]')&&$('[data-k="client"]').value) || "Bộ Phận QTTS").trim();
  var goliveDate = (state.f && state.f["golive"]) || ($("#gvInput")?$("#gvInput").value:"2026-09-30");
  var now = new Date();
  var dateStr = ("0"+now.getDate()).slice(-2)+"/"+("0"+(now.getMonth()+1)).slice(-2)+"/"+now.getFullYear();
  var timeStr = ("0"+now.getHours()).slice(-2)+":"+("0"+now.getMinutes()).slice(-2);
  
  var gDate = parse(goliveDate);
  var gvFormatted = gDate ? ("0"+gDate.getDate()).slice(-2)+"/"+("0"+(gDate.getMonth()+1)).slice(-2)+"/"+gDate.getFullYear() : "30/09/2026";
  var daysToLive = gDate ? Math.ceil((gDate - today())/86400000) : 0;
  var liveStatusText = daysToLive > 0 ? ("còn " + daysToLive + " ngày đến mốc Go-live") : (daysToLive === 0 ? "hôm nay là ngày Go-live" : ("đã quá " + (-daysToLive) + " ngày"));

  var taskList = (state.tasks && state.tasks.length) ? state.tasks : tasks;
  var totalTasks = taskList.length;
  var doneTasks = taskList.filter(function(t){ return t.stt === "Hoàn thành"; }).length;
  var inProgTasks = taskList.filter(function(t){ return t.stt === "Đang làm"; }).length;
  var lateTasks = taskList.filter(isLate).length;
  var pct = totalTasks ? Math.round(doneTasks / totalTasks * 100) : 0;

  var notesList = getNotesData();
  var unconfirmedNotes = notesList.filter(function(n){ return n.stt !== "Hoàn thành"; }).length;

  // Phase progress summary
  var phaseCardsHtml = "";
  PHASES.forEach(function(p){
    var ps = taskList.filter(function(t){ return t.ph === p; });
    var pd = ps.filter(function(t){ return t.stt === "Hoàn thành"; }).length;
    var ppc = ps.length ? Math.round(pd / ps.length * 100) : 0;
    phaseCardsHtml += '<div class="phase-card">' +
      '<div class="phase-card-top">' +
        '<span class="phase-name">' + esc(p) + '</span>' +
        '<span class="phase-pct">' + pd + '/' + ps.length + ' (' + ppc + '%)</span>' +
      '</div>' +
      '<div class="p-bar"><div class="p-bar-fill" style="width:' + ppc + '%"></div></div>' +
    '</div>';
  });

  // Task rows HTML
  var taskRowsHtml = "";
  taskList.forEach(function(t, i){
    var isDone = t.stt === "Hoàn thành";
    var late = isLate(t);
    var rowCls = (isDone ? "done-row " : "") + (t.ms ? "ms-row " : "");
    var stBadgeCls = late ? "st-late" : (t.stt === "Hoàn thành" ? "st-done" : (t.stt === "Đang làm" ? "st-doing" : (t.stt === "Vướng mắc" ? "st-block" : "st-todo")));
    var stLabel = late ? "Quá hạn" : t.stt;
    var sideBadgeCls = sideCls(t.side);
    var dateDisplay = (t.st && t.due) ? (dmy(t.st) + " → " + dmy(t.due)) : (t.due ? ("Hạn " + dmy(t.due)) : (t.st ? ("Từ " + dmy(t.st)) : "—"));
    
    taskRowsHtml += '<tr class="' + rowCls + '">' +
      '<td style="text-align:center;font-weight:600;color:var(--gray-500)">' + (isDone ? "✓" : (i + 1)) + '</td>' +
      '<td><span class="pill p-ph">' + esc(t.ph) + '</span></td>' +
      '<td>' +
        (t.ms ? '<span class="pill p-ms">★ Mốc</span> ' : '') +
        '<span style="font-weight:' + (t.ms ? '600' : '500') + '">' + esc(t.n || "(Chưa đặt tên)") + '</span>' +
      '</td>' +
      '<td><span class="pill ' + sideBadgeCls + '">' + esc(t.side || "—") + '</span></td>' +
      '<td>' + (t.dept && t.dept !== "—" ? ('<span class="pill p-bo">' + esc(t.dept) + '</span>') : '<span style="color:var(--gray-400)">—</span>') + '</td>' +
      '<td>' + (t.pic ? ('<span style="font-size:12px;font-weight:500">' + esc(t.pic) + '</span>') : '<span style="color:var(--gray-400)">—</span>') + '</td>' +
      '<td style="text-align:center;font-size:12px;white-space:nowrap">' + dateDisplay + '</td>' +
      '<td style="text-align:center"><span class="st-badge ' + stBadgeCls + '">' + esc(stLabel) + '</span></td>' +
      '<td style="font-size:12px;color:var(--gray-600)">' + esc(t.note || "—") + '</td>' +
    '</tr>';
  });

  // Notes rows HTML
  var noteRowsHtml = "";
  if(notesList.length === 0){
    noteRowsHtml = '<tr><td colspan="6" style="text-align:center;padding:16px;color:var(--gray-400)">Chưa có nội dung ghi nhận bổ sung.</td></tr>';
  } else {
    notesList.forEach(function(n, i){
      var nBadgeCls = n.stt === "Hoàn thành" ? "st-done" : (n.stt === "Đang làm" ? "st-doing" : (n.stt === "Vướng mắc" ? "st-block" : "st-todo"));
      noteRowsHtml += '<tr>' +
        '<td style="text-align:center;font-weight:600;color:var(--gray-500)">' + (i + 1) + '</td>' +
        '<td style="font-weight:500">' + esc(n.content) + '</td>' +
        '<td>' + esc(n.by) + '</td>' +
        '<td>' + esc(n.pic) + '</td>' +
        '<td style="text-align:center;font-size:12px">' + (n.due ? dmy(n.due) : "—") + '</td>' +
        '<td style="text-align:center"><span class="st-badge ' + nBadgeCls + '">' + esc(n.stt) + '</span></td>' +
      '</tr>';
    });
  }

  var stateJson = JSON.stringify(state, null, 2);

  var html = '<!DOCTYPE html>\n' +
'<html lang="vi">\n' +
'<head>\n' +
'<meta charset="utf-8">\n' +
'<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
'<title>Báo Cáo Tổng Thể Kế Hoạch Triển Khai — ' + esc(clientName) + '</title>\n' +
'<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">\n' +
'<style>\n' +
':root {\n' +
'  --purple: #B041FF; --purple-dark: #7A1FBF;\n' +
'  --green: #00A693; --green-dark: #006B5E;\n' +
'  --blue: #0078A0; --blue-light: #E1F4F9;\n' +
'  --ink: #142814; --soft-white: #F8F9FA; --white: #ffffff;\n' +
'  --gray-600: #4B5563; --gray-500: #6B7280; --gray-400: #9CA3AF; --gray-200: #E5E7EB; --gray-100: #F3F4F6;\n' +
'  --amber: #B26B00; --amber-bg: #FFF4DC; --red: #C2401F; --red-bg: #FCEBE6;\n' +
'  --gradient: linear-gradient(135deg, #B041FF 0%, #00A693 100%);\n' +
'  --font-b: "Inter", system-ui, -apple-system, sans-serif;\n' +
'  --font-d: "Merriweather", Georgia, serif;\n' +
'}\n' +
'* { margin:0; padding:0; box-sizing:border-box; }\n' +
'body { font-family: var(--font-b); color: var(--ink); background: #f0f2f5; line-height: 1.5; font-size: 13.5px; }\n' +
'.report-toolbar {\n' +
'  position: sticky; top: 0; z-index: 100;\n' +
'  background: #ffffff; border-bottom: 1px solid var(--gray-200);\n' +
'  box-shadow: 0 2px 10px rgba(0,0,0,0.06);\n' +
'  padding: 10px 24px; display: flex; justify-content: space-between; align-items: center; gap: 16px;\n' +
'}\n' +
'.tb-title-group { display: flex; align-items: center; gap: 10px; }\n' +
'.tb-badge {\n' +
'  background: var(--gradient); color: #fff; font-size: 11px; font-weight: 700;\n' +
'  padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.5px;\n' +
'}\n' +
'.tb-name { font-weight: 600; font-size: 14px; color: var(--ink); }\n' +
'.tb-actions { display: flex; gap: 10px; }\n' +
'.tb-btn {\n' +
'  display: inline-flex; align-items: center; gap: 6px;\n' +
'  padding: 7px 16px; border-radius: 9999px; font-size: 13px; font-weight: 600;\n' +
'  cursor: pointer; transition: all .2s; border: none; font-family: inherit;\n' +
'}\n' +
'.tb-btn-p { background: var(--gradient); color: #fff; box-shadow: 0 4px 14px rgba(176,65,255,0.25); }\n' +
'.tb-btn-p:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(176,65,255,0.35); }\n' +
'.tb-btn-o { background: #fff; border: 1.5px solid var(--gray-200); color: var(--ink); }\n' +
'.tb-btn-o:hover { border-color: var(--green); color: var(--green); }\n' +
'.report-paper {\n' +
'  max-width: 1200px; margin: 24px auto 60px; background: #fff;\n' +
'  border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.06);\n' +
'  padding: 40px 48px; border: 1px solid var(--gray-200);\n' +
'}\n' +
'.rep-header {\n' +
'  border-bottom: 2px solid var(--gray-200);\n' +
'  padding-bottom: 22px; margin-bottom: 26px;\n' +
'}\n' +
'.rep-top-row {\n' +
'  display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;\n' +
'}\n' +
'.rep-org-info { font-size: 12.5px; font-weight: 700; color: var(--green-dark); letter-spacing: 0.5px; text-transform: uppercase; }\n' +
'.rep-sub-org { font-size: 11.5px; color: var(--gray-500); font-weight: 600; margin-top: 2px; }\n' +
'.rep-date-info { text-align: right; font-size: 12px; color: var(--gray-500); }\n' +
'.rep-main-title {\n' +
'  text-align: center; margin: 10px 0 6px;\n' +
'  font-family: var(--font-d); font-size: 24px; font-weight: 700; color: var(--ink);\n' +
'  letter-spacing: -0.3px;\n' +
'}\n' +
'.rep-project-subtitle {\n' +
'  text-align: center; font-size: 14.5px; color: var(--gray-600); margin-bottom: 20px;\n' +
'}\n' +
'.rep-meta-bar {\n' +
'  display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;\n' +
'  background: var(--soft-white); border-radius: 10px; padding: 14px 18px; border: 1px solid var(--gray-200);\n' +
'}\n' +
'.meta-box .lbl { font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--gray-500); letter-spacing: 0.5px; }\n' +
'.meta-box .val { font-size: 18px; font-weight: 700; margin-top: 2px; }\n' +
'.meta-box .sub { font-size: 11.5px; color: var(--gray-500); }\n' +
'.rep-sec { margin-bottom: 32px; }\n' +
'.sec-title {\n' +
'  font-family: var(--font-d); font-size: 16px; font-weight: 700;\n' +
'  color: var(--ink); margin-bottom: 14px; display: flex; align-items: center; gap: 8px;\n' +
'  border-left: 4px solid var(--green); padding-left: 10px;\n' +
'}\n' +
'.phase-grid {\n' +
'  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px;\n' +
'}\n' +
'.phase-card {\n' +
'  border: 1px solid var(--gray-200); border-radius: 8px; padding: 10px 14px; background: #fff;\n' +
'}\n' +
'.phase-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }\n' +
'.phase-name { font-weight: 600; font-size: 12.5px; }\n' +
'.phase-pct { font-weight: 700; font-size: 12px; color: var(--green-dark); }\n' +
'.p-bar { height: 6px; background: var(--gray-100); border-radius: 9999px; overflow: hidden; }\n' +
'.p-bar-fill { height: 100%; background: var(--gradient); border-radius: 9999px; }\n' +
'.rep-table-wrap {\n' +
'  border: 1px solid var(--gray-200); border-radius: 8px; overflow: hidden; margin-bottom: 12px;\n' +
'}\n' +
'table.rep-tbl {\n' +
'  width: 100%; border-collapse: collapse; font-size: 12.5px; text-align: left;\n' +
'}\n' +
'table.rep-tbl th {\n' +
'  background: #f8fafc; font-weight: 700; color: var(--gray-600);\n' +
'  font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.4px;\n' +
'  padding: 9px 12px; border-bottom: 1.5px solid var(--gray-200);\n' +
'}\n' +
'table.rep-tbl td {\n' +
'  padding: 8px 12px; border-bottom: 1px solid var(--gray-200); vertical-align: middle;\n' +
'}\n' +
'table.rep-tbl tr:last-child td { border-bottom: none; }\n' +
'table.rep-tbl tr:nth-child(even) td { background: #fafafa; }\n' +
'table.rep-tbl tr.ms-row td { background: rgba(176,65,255,0.03); }\n' +
'.pill {\n' +
'  display: inline-block; padding: 3px 9px; border-radius: 9999px;\n' +
'  font-size: 11px; font-weight: 600; white-space: nowrap;\n' +
'}\n' +
'.p-ph { background: rgba(0,120,160,0.1); color: var(--blue); }\n' +
'.p-xp { background: rgba(0,166,147,0.12); color: var(--green-dark); }\n' +
'.p-cl { background: rgba(176,65,255,0.12); color: var(--purple-dark); }\n' +
'.p-bo { background: var(--gray-100); color: var(--gray-600); }\n' +
'.p-ms { background: rgba(176,65,255,0.15); color: var(--purple-dark); font-weight: 700; margin-right: 4px; }\n' +
'.st-badge {\n' +
'  display: inline-block; padding: 3px 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; text-align: center; white-space: nowrap;\n' +
'}\n' +
'.st-done { background: rgba(0,166,147,0.14); color: var(--green-dark); }\n' +
'.st-doing { background: var(--amber-bg); color: var(--amber); }\n' +
'.st-todo { background: var(--gray-100); color: var(--gray-500); }\n' +
'.st-block { background: var(--red-bg); color: var(--red); }\n' +
'.st-late { background: var(--red-bg); color: var(--red); font-weight: 700; border: 1px solid rgba(194,64,31,0.2); }\n' +
'.sign-grid {\n' +
'  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;\n' +
'  margin-top: 36px; padding-top: 16px; page-break-inside: avoid;\n' +
'}\n' +
'.sign-box { text-align: center; }\n' +
'.sign-box .role { font-weight: 700; font-size: 13px; text-transform: uppercase; color: var(--ink); }\n' +
'.sign-box .sub { font-size: 11.5px; color: var(--gray-400); font-style: italic; margin-top: 2px; }\n' +
'.sign-box .space { height: 75px; }\n' +
'.sign-box .name { font-weight: 600; font-size: 13px; color: var(--gray-600); }\n' +
'@media print {\n' +
'  body { background: #fff !important; }\n' +
'  .no-print { display: none !important; }\n' +
'  .report-paper {\n' +
'    max-width: 100% !important; margin: 0 !important; padding: 10mm !important;\n' +
'    border: none !important; box-shadow: none !important;\n' +
'  }\n' +
'  table.rep-tbl { font-size: 11.5px !important; }\n' +
'  table.rep-tbl th, table.rep-tbl td { padding: 6px 8px !important; }\n' +
'  tr { page-break-inside: avoid !important; }\n' +
'  .rep-sec { page-break-inside: auto; }\n' +
'  .sign-grid { page-break-inside: avoid !important; margin-top: 28px !important; }\n' +
'  thead { display: table-header-group; }\n' +
'  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }\n' +
'}\n' +
'</style>\n' +
'</head>\n' +
'<body>\n' +
'\n' +
'<!-- TOOLBAR (NO PRINT) -->\n' +
'<div class="report-toolbar no-print">\n' +
'  <div class="tb-title-group">\n' +
'    <span class="tb-badge">BÁO CÁO TỔNG THỂ DỰ ÁN</span>\n' +
'    <span class="tb-name">' + esc(clientName) + ' — Xuất ngày ' + dateStr + ' lúc ' + timeStr + '</span>\n' +
'  </div>\n' +
'  <div class="tb-actions">\n' +
'    <button onclick="window.print()" class="tb-btn tb-btn-p">🖨️ In Báo Cáo / Lưu PDF</button>\n' +
'  </div>\n' +
'</div>\n' +
'\n' +
'<!-- REPORT PAPER -->\n' +
'<div class="report-paper">\n' +
'  <!-- HEADER -->\n' +
'  <header class="rep-header">\n' +
'    <div class="rep-top-row">\n' +
'      <div>\n' +
'        <div class="rep-org-info">BỘ PHẬN QUẢN TRỊ TÀI SẢN (BP QTTS)</div>\n' +
'        <div class="rep-sub-org">Hệ Thống Theo Dõi Kế Hoạch & Tiến Độ Triển Khai</div>\n' +
'      </div>\n' +
'      <div class="rep-date-info">\n' +
'        <div>Thời điểm lập: <strong>' + dateStr + ' ' + timeStr + '</strong></div>\n' +
'        <div>Mục tiêu Go-live: <strong>' + gvFormatted + '</strong></div>\n' +
'      </div>\n' +
'    </div>\n' +
'    <h1 class="rep-main-title">BÁO CÁO TỔNG THỂ KẾ HOẠCH TRIỂN KHAI DỰ ÁN</h1>\n' +
'    <div class="rep-project-subtitle">Đơn vị / Dự án: <strong>' + esc(clientName) + '</strong> | Trạng thái: <em>' + liveStatusText + '</em></div>\n' +
'    \n' +
'    <div class="rep-meta-bar">\n' +
'      <div class="meta-box">\n' +
'        <div class="lbl">Tiến độ tổng thể</div>\n' +
'        <div class="val" style="color:var(--green-dark)">' + pct + '%</div>\n' +
'        <div class="sub">Đã xong ' + doneTasks + ' / ' + totalTasks + ' việc</div>\n' +
'      </div>\n' +
'      <div class="meta-box">\n' +
'        <div class="lbl">Đang tiến hành</div>\n' +
'        <div class="val" style="color:var(--amber)">' + inProgTasks + ' việc</div>\n' +
'        <div class="sub">Đang trong tiến trình</div>\n' +
'      </div>\n' +
'      <div class="meta-box">\n' +
'        <div class="lbl">Hạng mục quá hạn</div>\n' +
'        <div class="val" style="color:' + (lateTasks > 0 ? "var(--red)" : "var(--green-dark)") + '">' + lateTasks + ' việc</div>\n' +
'        <div class="sub">' + (lateTasks > 0 ? "Cần tập trung xử lý" : "Đúng tiến độ") + '</div>\n' +
'      </div>\n' +
'      <div class="meta-box">\n' +
'        <div class="lbl">Nội dung thống nhất</div>\n' +
'        <div class="val" style="color:var(--purple-dark)">' + unconfirmedNotes + ' việc</div>\n' +
'        <div class="sub">Cần chốt phương án</div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </header>\n' +
'\n' +
'  <!-- PHẦN 1: TIẾN ĐỘ THEO GIAI ĐOẠN -->\n' +
'  <section class="rep-sec">\n' +
'    <h2 class="sec-title">I. TIẾN ĐỘ THỰC HIỆN THEO GIAI ĐOẠN</h2>\n' +
'    <div class="phase-grid">\n' + phaseCardsHtml + '</div>\n' +
'  </section>\n' +
'\n' +
'  <!-- PHẦN 2: BẢNG KẾ HOẠCH CHI TIẾT -->\n' +
'  <section class="rep-sec">\n' +
'    <h2 class="sec-title">II. DANH MỤC CÔNG VIỆC VÀ KẾ HOẠCH TRIỂN KHAI CHI TIẾT</h2>\n' +
'    <div class="rep-table-wrap">\n' +
'      <table class="rep-tbl">\n' +
'        <thead>\n' +
'          <tr>\n' +
'            <th style="width:36px;text-align:center">#</th>\n' +
'            <th style="width:130px">Giai đoạn</th>\n' +
'            <th>Nội dung công việc</th>\n' +
'            <th style="width:140px">Đơn vị chủ trì</th>\n' +
'            <th style="width:130px">Đơn vị phối hợp</th>\n' +
'            <th style="width:100px">PIC</th>\n' +
'            <th style="width:145px;text-align:center">Thời hạn</th>\n' +
'            <th style="width:115px;text-align:center">Trạng thái</th>\n' +
'            <th style="width:160px">Ghi chú</th>\n' +
'          </tr>\n' +
'        </thead>\n' +
'        <tbody>\n' + taskRowsHtml + '</tbody>\n' +
'      </table>\n' +
'    </div>\n' +
'  </section>\n' +
'\n' +
'  <!-- PHẦN 3: NỘI DUNG THỐNG NHẤT -->\n' +
'  <section class="rep-sec">\n' +
'    <h2 class="sec-title">III. DANH MỤC NỘI DUNG THỐNG NHẤT & GHI NHẬN CUỘC HỌP</h2>\n' +
'    <div class="rep-table-wrap">\n' +
'      <table class="rep-tbl">\n' +
'        <thead>\n' +
'          <tr>\n' +
'            <th style="width:36px;text-align:center">#</th>\n' +
'            <th>Nội dung thống nhất / ghi nhận</th>\n' +
'            <th style="width:140px">Người nêu</th>\n' +
'            <th style="width:140px">Phụ trách</th>\n' +
'            <th style="width:120px;text-align:center">Hạn</th>\n' +
'            <th style="width:120px;text-align:center">Trạng thái</th>\n' +
'          </tr>\n' +
'        </thead>\n' +
'        <tbody>\n' + noteRowsHtml + '</tbody>\n' +
'      </table>\n' +
'    </div>\n' +
'  </section>\n' +
'\n' +
'  <!-- PHẦN 4: KÝ DUYỆT & XÁC NHẬN -->\n' +
'  <section class="rep-sec">\n' +
'    <h2 class="sec-title">IV. PHÊ DUYỆT VÀ XÁC NHẬN</h2>\n' +
'    <div class="sign-grid">\n' +
'      <div class="sign-box">\n' +
'        <div class="role">NGƯỜI LẬP BÁO CÁO</div>\n' +
'        <div class="sub">(Ký và ghi rõ họ tên)</div>\n' +
'        <div class="space"></div>\n' +
'        <div class="name">Bộ Phận QTTS</div>\n' +
'      </div>\n' +
'      <div class="sign-box">\n' +
'        <div class="role">TRƯỞNG BỘ PHẬN QTTS</div>\n' +
'        <div class="sub">(Ký và ghi rõ họ tên)</div>\n' +
'        <div class="space"></div>\n' +
'        <div class="name">TP HCQT / PP HCQT</div>\n' +
'      </div>\n' +
'      <div class="sign-box">\n' +
'        <div class="role">BAN LÃNH ĐẠO PHÊ DUYỆT</div>\n' +
'        <div class="sub">(Ký và ghi rõ họ tên)</div>\n' +
'        <div class="space"></div>\n' +
'        <div class="name">Ban Lãnh Đạo</div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </section>\n' +
'</div>\n' +
'\n' +
'<script id="SAVED_APP_STATE" type="application/json">\n' + stateJson + '\n<\/script>\n' +
'</body>\n' +
'</html>';

  return html;
}

function downloadBlob(content, filename){
  var b = new Blob([content], { type: "text/html;charset=utf-8" });
  var a = el("a");
  a.href = URL.createObjectURL(b);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function() {
    URL.revokeObjectURL(a.href);
    a.remove();
  }, 200);
}

/* ---------- Save HTML Button (Xuất file HTML Báo cáo tổng thể dự án) ---------- */
var saveBtn = $("#save");
if(saveBtn){
  saveBtn.onclick = async function() {
    var state = buildState();
    var reportHtml = buildProjectReportHtml(state);
    var clientRaw = (($('[data-k="client"]')&&$('[data-k="client"]').value) || "BP_QTTS").trim();
    var clientSlug = clientRaw.replace(/[\/\\:*?"<>|]/g, "_").replace(/\s+/g, "_");
    var now = new Date();
    var dateStr = ("0" + now.getDate()).slice(-2) + ("0" + (now.getMonth() + 1)).slice(-2) + now.getFullYear();
    var timeStr = ("0" + now.getHours()).slice(-2) + ("0" + now.getMinutes()).slice(-2);
    var fileName = "Bao_Cao_Tong_The_Du_An_" + clientSlug + "_" + dateStr + "_" + timeStr + ".html";

    // 1. Tải file về máy
    downloadBlob(reportHtml, fileName);

    // 2. Lưu file báo cáo lên máy chủ host
    await saveReportToServer(fileName, reportHtml);

    // 3. Đồng thời lưu trạng thái dữ liệu dự án lên máy chủ host
    await saveStateToServer(state);

    var reportUrl = getHostReportUrl(fileName);

    var badge = $("#saveBadge");
    if(badge){
      badge.textContent = "✓ Đã xuất Báo Cáo & Lưu Máy Chủ!";
      badge.style.opacity = "1";
    }

    // 4. Hiển thị thông báo kèm link phát ra từ host quanlyts.com
    showSaveSuccessModal(fileName, reportUrl);
  };
}

/* ---------- Save Success Modal Dialog ---------- */
function showSaveSuccessModal(fileName, reportUrl){
  var existing = document.getElementById("saveSuccessModal");
  if(existing) existing.remove();

  var overlay = el("div", {class: "modal-overlay", id: "saveSuccessModal"});
  var card = el("div", {class: "modal-card"});

  // Header
  var hd = el("div", {class: "modal-hd"});
  hd.appendChild(el("h3", null, "💾 Xuất Bản & Lưu Trữ Báo Cáo Thành Công"));
  var closeX = el("button", {class: "tk-x", type: "button", style: "font-size:20px;line-height:1"}, "×");
  closeX.onclick = function(){ overlay.classList.remove("on"); setTimeout(function(){ overlay.remove(); }, 250); };
  hd.appendChild(closeX);
  card.appendChild(hd);

  // Body
  var body = el("div", {class: "modal-body"});

  var notice = el("div", {style: "background:rgba(0,166,147,.1);color:var(--green-dark);padding:12px 16px;border-radius:8px;margin-bottom:14px;font-weight:500;font-size:13px;line-height:1.6"});
  notice.innerHTML = "✓ File báo cáo <b>" + esc(fileName) + "</b> đã được tải về máy tính và lưu trữ an toàn trên máy chủ.<br>" +
    "🔗 Đường link xem báo cáo trực tuyến phát từ host:<br>" +
    "<a href=\"" + esc(reportUrl) + "\" target=\"_blank\" style=\"color:var(--purple-dark);font-weight:600;text-decoration:underline;word-break:break-all\">" + esc(reportUrl) + "</a>";
  body.appendChild(notice);

  var tip = el("div", {style: "font-size:12.5px;color:var(--gray-600);margin-bottom:14px;line-height:1.5"});
  tip.textContent = "Toàn bộ dữ liệu dự án và file báo cáo đã được lưu trữ trên host quanlyts.com. Quý Anh/Chị có thể sao chép đường link này để gửi cho các bên liên quan xem trực tiếp.";
  body.appendChild(tip);

  card.appendChild(body);

  // Footer
  var ft = el("div", {class: "modal-ft"});
  var copyLinkBtn = el("button", {class: "btn btn-p btn-s", type: "button"}, "🔗 Sao chép link");
  copyLinkBtn.onclick = function(){
    navigator.clipboard.writeText(reportUrl).then(function(){
      copyLinkBtn.textContent = "✓ Đã chép link!";
      setTimeout(function(){ copyLinkBtn.textContent = "🔗 Sao chép link"; }, 2000);
    });
  };
  ft.appendChild(copyLinkBtn);

  var openBtn = el("a", {class: "btn btn-o btn-s", href: reportUrl, target: "_blank", style: "text-decoration:none;display:inline-flex;align-items:center"}, "🌐 Mở báo cáo");
  ft.appendChild(openBtn);

  var closeBtn = el("button", {class: "btn btn-o btn-s", type: "button"}, "Đóng");
  closeBtn.onclick = function(){ overlay.classList.remove("on"); setTimeout(function(){ overlay.remove(); }, 250); };
  ft.appendChild(closeBtn);

  card.appendChild(ft);
  overlay.appendChild(card);
  document.body.appendChild(overlay);

  setTimeout(function(){ overlay.classList.add("on"); }, 20);
  overlay.onclick = function(e){
    if(e.target === overlay){
      overlay.classList.remove("on");
      setTimeout(function(){ overlay.remove(); }, 250);
    }
  };
}

/* ---------- Export HTML to Send Email ---------- */
var exportEmailBtn = $("#exportEmailBtn");
if(exportEmailBtn){
  exportEmailBtn.onclick = async function() {
    var state = buildState();
    var reportHtml = buildProjectReportHtml(state);

    var clientRaw = (($('[data-k="client"]')&&$('[data-k="client"]').value) || "BP_QTTS").trim();
    var clientSlug = clientRaw.replace(/[\/\\:*?"<>|]/g, "_").replace(/\s+/g, "_");
    var now = new Date();
    var dateStr = ("0" + now.getDate()).slice(-2) + ("0" + (now.getMonth() + 1)).slice(-2) + now.getFullYear();
    var timeStr = ("0" + now.getHours()).slice(-2) + ("0" + now.getMinutes()).slice(-2);
    var fileName = "Bao_Cao_Tong_The_Du_An_" + clientSlug + "_" + dateStr + "_" + timeStr + ".html";

    // 1. Tải file về máy tính
    downloadBlob(reportHtml, fileName);

    // 2. Lưu file báo cáo lên máy chủ host
    await saveReportToServer(fileName, reportHtml);

    // 3. Đồng thời lưu trạng thái dữ liệu dự án lên máy chủ host
    await saveStateToServer(state);

    var reportUrl = getHostReportUrl(fileName);

    // 4. Hiển thị hộp thoại gửi email với link phát từ host quanlyts.com
    showEmailModal(fileName, clientRaw, reportUrl);
  };
}

/* ---------- Email Modal Dialog ---------- */
function showEmailModal(fileName, clientName, reportUrl){
  var existing = document.getElementById("emailModal");
  if(existing) existing.remove();

  var overlay = el("div", {class: "modal-overlay", id: "emailModal"});
  var card = el("div", {class: "modal-card"});

  // Header
  var hd = el("div", {class: "modal-hd"});
  hd.appendChild(el("h3", null, "✉️ Xuất File Báo Cáo HTML Gửi Email Thành Công"));
  var closeX = el("button", {class: "tk-x", type: "button", style: "font-size:20px;line-height:1"}, "×");
  closeX.onclick = function(){ overlay.classList.remove("on"); setTimeout(function(){ overlay.remove(); }, 250); };
  hd.appendChild(closeX);
  card.appendChild(hd);

  // Body
  var body = el("div", {class: "modal-body"});

  var notice = el("div", {style: "background:rgba(0,166,147,.1);color:var(--green-dark);padding:10px 14px;border-radius:8px;margin-bottom:14px;font-weight:500;font-size:13px;line-height:1.6"});
  notice.innerHTML = "✓ File Báo cáo tổng thể <b>" + esc(fileName) + "</b> đã được tải xuống máy tính.<br>" +
    "🔗 Link xem báo cáo trực tuyến: <a href=\"" + esc(reportUrl) + "\" target=\"_blank\" style=\"color:var(--purple-dark);font-weight:600;text-decoration:underline;word-break:break-all\">" + esc(reportUrl) + "</a>";
  body.appendChild(notice);

  var now = new Date();
  var todayDmy = ("0" + now.getDate()).slice(-2) + "/" + ("0" + (now.getMonth() + 1)).slice(-2) + "/" + now.getFullYear();
  var gvDate = ($("#gvDate") ? $("#gvDate").textContent : "30/09/2026");
  var pctVal = ($("#ovPct") ? $("#ovPct").textContent : "0%");

  var emailSubject = "[Báo Cáo Kế Hoạch] Kế hoạch triển khai dự án — " + clientName + " (Ngày " + todayDmy + ")";
  var emailBody = "Kính gửi Quý Đơn vị / Các Bộ phận liên quan,\n\n" +
    "Bộ phận Quản trị tài sản (BP QTTS) xin gửi đính kèm file Báo cáo tổng thể kế hoạch triển khai cho dự án: " + clientName + ".\n\n" +
    "- Ngày Go-live mục tiêu: " + gvDate + "\n" +
    "- Tiến độ tổng thể: " + pctVal + "\n\n" +
    "Quý Anh/Chị có thể mở trực tiếp file HTML đính kèm bằng bất kỳ trình duyệt web nào (Chrome, Edge, Cốc Cốc, Safari...) để xem đầy đủ báo cáo, bảng tiến độ và in ấn/lưu file PDF khi cần.\n\n" +
    "Đường link xem báo cáo trực tuyến:\n" + reportUrl + "\n\n" +
    "Trân trọng cảm ơn,\nBP QTTS";

  body.appendChild(el("div", {style: "font-weight:600;font-size:13px;margin-bottom:4px;color:var(--gray-500)"}, "Tiêu đề email gợi ý:"));
  var subInput = el("input", {type: "text", readonly: "true", style: "width:100%;font-family:var(--font-b);font-size:13px;padding:7px 10px;border:1px solid var(--bd);background:var(--soft-white);border-radius:6px;margin-bottom:12px"});
  subInput.value = emailSubject;
  body.appendChild(subInput);

  body.appendChild(el("div", {style: "font-weight:600;font-size:13px;margin-bottom:4px;color:var(--gray-500)"}, "Nội dung email mẫu:"));
  var bodyTextarea = el("textarea", {readonly: "true", rows: 7, style: "width:100%;font-family:var(--font-b);font-size:12.5px;padding:8px 10px;border:1px solid var(--bd);background:var(--soft-white);border-radius:6px;line-height:1.5;resize:vertical"});
  bodyTextarea.value = emailBody;
  body.appendChild(bodyTextarea);

  card.appendChild(body);

  // Footer
  var ft = el("div", {class: "modal-ft"});
  var copyBtn = el("button", {class: "btn btn-o btn-s", type: "button"}, "📋 Sao chép nội dung");
  copyBtn.onclick = function(){
    navigator.clipboard.writeText("Tiêu đề: " + emailSubject + "\n\n" + emailBody).then(function(){
      copyBtn.textContent = "✓ Đã sao chép!";
      setTimeout(function(){ copyBtn.textContent = "📋 Sao chép nội dung"; }, 2000);
    });
  };
  ft.appendChild(copyBtn);

  var copyLinkBtn = el("button", {class: "btn btn-o btn-s", type: "button"}, "🔗 Sao chép link");
  copyLinkBtn.onclick = function(){
    navigator.clipboard.writeText(reportUrl).then(function(){
      copyLinkBtn.textContent = "✓ Đã chép link!";
      setTimeout(function(){ copyLinkBtn.textContent = "🔗 Sao chép link"; }, 2000);
    });
  };
  ft.appendChild(copyLinkBtn);

  var mailtoBtn = el("button", {class: "btn btn-p btn-s", type: "button"}, "✉️ Mở ứng dụng Email");
  mailtoBtn.onclick = function(){
    var mailtoUrl = "mailto:?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(emailBody);
    window.location.href = mailtoUrl;
  };
  ft.appendChild(mailtoBtn);

  var closeBtn = el("button", {class: "btn btn-o btn-s", type: "button"}, "Đóng");
  closeBtn.onclick = function(){ overlay.classList.remove("on"); setTimeout(function(){ overlay.remove(); }, 250); };
  ft.appendChild(closeBtn);

  card.appendChild(ft);
  overlay.appendChild(card);
  document.body.appendChild(overlay);

  setTimeout(function(){ overlay.classList.add("on"); }, 20);
  overlay.onclick = function(e){
    if(e.target === overlay){
      overlay.classList.remove("on");
      setTimeout(function(){ overlay.remove(); }, 250);
    }
  };
}

/* ---------- Init & Restore ---------- */
seed();

async function initApp() {
  var serverData = null;
  var embeddedLoaded = false;

  var embeddedStateTag = document.getElementById("SAVED_APP_STATE");
  if (embeddedStateTag && embeddedStateTag.textContent && embeddedStateTag.textContent.trim()) {
    try {
      var embeddedState = JSON.parse(embeddedStateTag.textContent);
      applyState(embeddedState);
      embeddedLoaded = true;
    } catch (e) {
      console.error("Error loading embedded state:", e);
    }
  }

  if (!embeddedLoaded) {
    // 1. Tải dữ liệu lưu trên máy chủ Host trước tiên
    try {
      serverData = await loadServerState();
    } catch (e) {
      console.warn("Notice: could not load from host server:", e);
    }

    if (serverData) {
      applyState(serverData);
      try {
        localStorage.setItem("xperise_onboarding_state", JSON.stringify(serverData));
      } catch(e){}
      var badge = $("#saveBadge");
      if (badge) {
        badge.textContent = "✓ Đã đồng bộ từ máy chủ";
        badge.style.opacity = "1";
      }
    } else {
      // 2. Nếu máy chủ chưa có dữ liệu, dùng LocalStorage
      var savedLocal = null;
      try {
        savedLocal = localStorage.getItem("xperise_onboarding_state");
      } catch (e) {}

      if (savedLocal) {
        try {
          var parsed = JSON.parse(savedLocal);
          applyState(parsed);
          // Đồng bộ luôn lên máy chủ Host
          saveStateToServer(parsed);
        } catch (e) {
          var _gv = $("#gvInput")?$("#gvInput").value:"";
          if (_gv) calRef = parse(_gv);
          refresh();
        }
      } else {
        var _gv2 = $("#gvInput")?$("#gvInput").value:"";
        if (_gv2) calRef = parse(_gv2);
        refresh();
        // Lưu dữ liệu khởi tạo ban đầu lên máy chủ Host
        var initState = buildState();
        saveStateToServer(initState);
      }
    }
  }

  isInitializing = false;
}

initApp();

document.addEventListener("input", function(e) {
  if (e.target.hasAttribute("data-k")) autoSave();
});
document.addEventListener("change", function(e) {
  if (e.target.hasAttribute("data-k")) autoSave();
});

})();
