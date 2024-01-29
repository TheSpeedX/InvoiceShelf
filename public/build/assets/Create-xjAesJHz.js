import{L as ue,e as se,u as me,a8 as ie,ae as ce,E as de,F as ye,aq as pe,G as ve,a5 as _e,v as fe,f as w,H as Pe,k as I,j as ge,an as be,aD as $e,r as s,o as C,c as Be,a as r,w as l,b as $,l as t,m as q,J as G,K as N,p as M,t as P,q as he,N as Ie,g as B,h as k,aL as Ce,ag as Ve,X as Se}from"./main-WMXHPsTs.js";import{_ as we}from"./ExchangeRateConverter-G19_Li5d.js";import{u as qe}from"./payment-41Om6QZO.js";import{_ as Me}from"./SelectNotePopup-wzqC6aO8.js";import{_ as ke}from"./CreateCustomFields--vFU38k2.js";import{_ as Ne}from"./PaymentModeModal-VST8lRV4.js";import"./exchange-rate-dmwjabGR.js";import"./NoteModal-jScVrYU1.js";import"./dynamic-import-helper-0gtGTknh.js";const Ue={class:"absolute left-3.5"},De={class:"relative w-full"},Ae={class:"relative mt-6"},Ee={class:"z-20 float-right text-sm font-semibold leading-5 text-primary-400"},Fe={class:"mb-4 text-sm font-medium text-gray-800"},x="newEstimate",Xe={__name:"Create",setup(Ge){const i=ue(),L=se(),e=qe();me();const V=ie();ce(),de();const j=ye(),U=pe();ve();const D=_e("utils"),{t:y}=fe.useI18n();let g=w(!1),S=w(!1),p=w([]);const v=w(null),H=Pe(["customer","company","customerCustom","payment","paymentCustom"]),h=I({get:()=>e.currentPayment.amount/100,set:a=>{e.currentPayment.amount=Math.round(a*100)}}),u=I(()=>e.isFetchingInitialData),c=I(()=>i.name==="payments.edit"),A=I(()=>c.value?y("payments.edit_payment"):y("payments.new_payment")),R=I(()=>({currentPayment:{customer_id:{required:B.withMessage(y("validation.required"),k)},payment_date:{required:B.withMessage(y("validation.required"),k)},amount:{required:B.withMessage(y("validation.required"),k),between:B.withMessage(y("validation.payment_greater_than_due_amount"),Ce(0,e.currentPayment.maxPayableAmount))},exchange_rate:{required:Ve(function(){return B.withMessage(y("validation.required"),k),e.showExchangeRate}),decimal:B.withMessage(y("validation.valid_exchange_rate"),Se)}}})),m=ge(R,e,{$scope:x});be(()=>{e.currentPayment.customer_id&&X(e.currentPayment.customer_id),i.query.customer&&(e.currentPayment.customer_id=i.query.customer)}),e.resetCurrentPayment(),i.query.customer&&(e.currentPayment.customer_id=i.query.customer),e.fetchPaymentInitialData(c.value),i.params.id&&!c.value&&J();async function z(){j.openModal({title:y("settings.payment_modes.add_payment_mode"),componentName:"PaymentModeModal"})}function T(a){e.currentPayment.notes=""+a.notes}async function J(){var n;let a=await U.fetchInvoice((n=i==null?void 0:i.params)==null?void 0:n.id);e.currentPayment.customer_id=a.data.data.customer.id,e.currentPayment.invoice_id=a.data.data.id}async function K(a){a&&(v.value=p.value.find(n=>n.id===a),h.value=v.value.due_amount/100,e.currentPayment.maxPayableAmount=v.value.due_amount)}function X(a){if(a){let n={customer_id:a,status:"DUE",limit:"all"};c.value&&(n.status=""),S.value=!0,Promise.all([U.fetchInvoices(n),V.fetchCustomer(a)]).then(async([d,_])=>{d&&(p.value=[...d.data.data]),_&&_.data&&(e.currentPayment.selectedCustomer=_.data.data,e.currentPayment.customer=_.data.data,e.currentPayment.currency=_.data.data.currency,c.value&&!V.editCustomer&&e.currentPayment.customer_id&&(V.editCustomer=_.data.data)),e.currentPayment.invoice_id&&(v.value=p.value.find(f=>f.id===e.currentPayment.invoice_id),e.currentPayment.maxPayableAmount=v.value.due_amount+e.currentPayment.amount,h.value===0&&(h.value=v.value.due_amount/100)),c.value&&(p.value=p.value.filter(f=>f.due_amount>0||f.id==e.currentPayment.invoice_id)),S.value=!1}).catch(d=>{S.value=!1,console.error(d,"error")})}}$e(()=>{e.resetCurrentPayment(),p.value=[],V.editCustomer=null});async function O(){if(m.value.$touch(),m.value.$invalid)return!1;g.value=!0;let a={...e.currentPayment},n=null;try{n=await(c.value?e.updatePayment:e.addPayment)(a),L.push(`/admin/payments/${n.data.data.id}/view`)}catch{g.value=!1}}function Q(a){let n={userId:a};i.params.id&&(n.model_id=i.params.id),e.currentPayment.invoice_id=v.value=null,e.currentPayment.amount=0,p.value=[],e.getNextNumber(n,!0)}return(a,n)=>{const d=s("BaseBreadcrumbItem"),_=s("BaseBreadcrumb"),f=s("BaseIcon"),E=s("BaseButton"),W=s("BasePageHeader"),Y=s("BaseDatePicker"),b=s("BaseInputGroup"),Z=s("BaseInput"),ee=s("BaseCustomerSelectInput"),F=s("BaseMultiselect"),te=s("BaseMoney"),ae=s("BaseSelectAction"),ne=s("BaseInputGrid"),oe=s("BaseCustomInput"),re=s("BaseCard"),le=s("BasePage");return C(),Be(Ie,null,[r(Ne),r(le,{class:"relative payment-create"},{default:l(()=>[$("form",{action:"",onSubmit:he(O,["prevent"])},[r(W,{title:A.value,class:"mb-5"},{actions:l(()=>[r(E,{loading:t(g),disabled:t(g),variant:"primary",type:"submit",class:"hidden sm:flex"},{left:l(o=>[t(g)?N("",!0):(C(),q(f,{key:0,name:"SaveIcon",class:G(o.class)},null,8,["class"]))]),default:l(()=>[M(" "+P(c.value?a.$t("payments.update_payment"):a.$t("payments.save_payment")),1)]),_:1},8,["loading","disabled"])]),default:l(()=>[r(_,null,{default:l(()=>[r(d,{title:a.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),r(d,{title:a.$t("payments.payment",2),to:"/admin/payments"},null,8,["title"]),r(d,{title:A.value,to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),r(re,null,{default:l(()=>[r(ne,null,{default:l(()=>[r(b,{label:a.$t("payments.date"),"content-loading":u.value,required:"",error:t(m).currentPayment.payment_date.$error&&t(m).currentPayment.payment_date.$errors[0].$message},{default:l(()=>[r(Y,{modelValue:t(e).currentPayment.payment_date,"onUpdate:modelValue":[n[0]||(n[0]=o=>t(e).currentPayment.payment_date=o),n[1]||(n[1]=o=>t(m).currentPayment.payment_date.$touch())],"content-loading":u.value,"calendar-button":!0,"calendar-button-icon":"calendar",invalid:t(m).currentPayment.payment_date.$error},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","error"]),r(b,{label:a.$t("payments.payment_number"),"content-loading":u.value,required:""},{default:l(()=>[r(Z,{modelValue:t(e).currentPayment.payment_number,"onUpdate:modelValue":n[2]||(n[2]=o=>t(e).currentPayment.payment_number=o),"content-loading":u.value},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),r(b,{label:a.$t("payments.customer"),error:t(m).currentPayment.customer_id.$error&&t(m).currentPayment.customer_id.$errors[0].$message,"content-loading":u.value,required:""},{default:l(()=>[u.value?N("",!0):(C(),q(ee,{key:0,modelValue:t(e).currentPayment.customer_id,"onUpdate:modelValue":[n[3]||(n[3]=o=>t(e).currentPayment.customer_id=o),n[4]||(n[4]=o=>Q(t(e).currentPayment.customer_id))],"content-loading":u.value,invalid:t(m).currentPayment.customer_id.$error,placeholder:a.$t("customers.select_a_customer"),"show-action":""},null,8,["modelValue","content-loading","invalid","placeholder"]))]),_:1},8,["label","error","content-loading"]),r(b,{"content-loading":u.value,label:a.$t("payments.invoice"),"help-text":v.value?`Due Amount: ${t(e).currentPayment.maxPayableAmount/100}`:""},{default:l(()=>[r(F,{modelValue:t(e).currentPayment.invoice_id,"onUpdate:modelValue":n[5]||(n[5]=o=>t(e).currentPayment.invoice_id=o),"content-loading":u.value,"value-prop":"id","track-by":"invoice_number",label:"invoice_number",options:t(p),loading:t(S),placeholder:a.$t("invoices.select_invoice"),onSelect:K},{singlelabel:l(({value:o})=>[$("div",Ue,P(o.invoice_number)+" ("+P(t(D).formatMoney(o.total,o.customer.currency))+") ",1)]),option:l(({option:o})=>[M(P(o.invoice_number)+" ("+P(t(D).formatMoney(o.total,o.customer.currency))+") ",1)]),_:1},8,["modelValue","content-loading","options","loading","placeholder"])]),_:1},8,["content-loading","label","help-text"]),r(b,{label:a.$t("payments.amount"),"content-loading":u.value,error:t(m).currentPayment.amount.$error&&t(m).currentPayment.amount.$errors[0].$message,required:""},{default:l(()=>[$("div",De,[(C(),q(te,{key:t(e).currentPayment.currency,modelValue:h.value,"onUpdate:modelValue":[n[6]||(n[6]=o=>h.value=o),n[7]||(n[7]=o=>t(m).currentPayment.amount.$touch())],currency:t(e).currentPayment.currency,"content-loading":u.value,invalid:t(m).currentPayment.amount.$error},null,8,["modelValue","currency","content-loading","invalid"]))])]),_:1},8,["label","content-loading","error"]),r(b,{"content-loading":u.value,label:a.$t("payments.payment_mode")},{default:l(()=>[r(F,{modelValue:t(e).currentPayment.payment_method_id,"onUpdate:modelValue":n[8]||(n[8]=o=>t(e).currentPayment.payment_method_id=o),"content-loading":u.value,label:"name","value-prop":"id","track-by":"name",options:t(e).paymentModes,placeholder:a.$t("payments.select_payment_mode"),searchable:""},{action:l(()=>[r(ae,{onClick:z},{default:l(()=>[r(f,{name:"PlusIcon",class:"h-4 mr-2 -ml-2 text-center text-primary-400"}),M(" "+P(a.$t("settings.payment_modes.add_payment_mode")),1)]),_:1})]),_:1},8,["modelValue","content-loading","options","placeholder"])]),_:1},8,["content-loading","label"]),r(we,{store:t(e),"store-prop":"currentPayment",v:t(m).currentPayment,"is-loading":u.value,"is-edit":c.value,"customer-currency":t(e).currentPayment.currency_id},null,8,["store","v","is-loading","is-edit","customer-currency"])]),_:1}),r(ke,{type:"Payment","is-edit":c.value,"is-loading":u.value,store:t(e),"store-prop":"currentPayment","custom-field-scope":x,class:"mt-6"},null,8,["is-edit","is-loading","store"]),$("div",Ae,[$("div",Ee,[r(Me,{type:"Payment",onSelect:T})]),$("label",Fe,P(a.$t("estimates.notes")),1),r(oe,{modelValue:t(e).currentPayment.notes,"onUpdate:modelValue":n[9]||(n[9]=o=>t(e).currentPayment.notes=o),"content-loading":u.value,fields:H,class:"mt-1"},null,8,["modelValue","content-loading","fields"])]),r(E,{loading:t(g),"content-loading":u.value,variant:"primary",type:"submit",class:"flex justify-center w-full mt-4 sm:hidden md:hidden"},{left:l(o=>[t(g)?N("",!0):(C(),q(f,{key:0,name:"SaveIcon",class:G(o.class)},null,8,["class"]))]),default:l(()=>[M(" "+P(c.value?a.$t("payments.update_payment"):a.$t("payments.save_payment")),1)]),_:1},8,["loading","content-loading"])]),_:1})],32)]),_:1})],64)}}};export{Xe as default};