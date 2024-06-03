
function dispTerm(corpoId) {


  const termUrl = `https://termhub.jp/terms/CRP0000003/TRM0001988.json`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", termUrl);
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = function () {
    callTerm = xhr.response;
    writeTerm(callTerm);
  }

  function writeTerm(callTerm) {
    const term = document.querySelector("#js-term");

    term.innerHTML = callTerm.result.body;
  }



}





//返り値
// {
//   "result" : {
//     "term_set_id" : "TMS0000023",
//     "version" : "6",
//     "term_list" : [ {
//       "title" : "サービス共通プライバシーポリシー",
//       "version" : "4",
//       "term_id" : "TRM0000011",
//       "term_url" : null
//     }, {
//       "title" : "全社共通利用規約",
//       "version" : "1",
//       "term_id" : "TRM0000032",
//       "term_url" : null
//     } ]
//   }
// }
