/* function getAjax() {
    $.post("quiz.vtt",
        { action: "registar_resposta",
         quizId: "vissimo",
          codMaquina: 53, 
          codProjeto: 19,
           codMaquinaConfig: 0, 
           resposta: { a: 1, b: 2 } }
    )
        .done(function (msg) { console.log(JSON.stringify(msg)) })
        .fail(function (err) { console.log(JSON.stringify(err)) })
}
 */
function postAjax(url, obj) {
    $.post(url, obj)
        .done(function (msg) { if (msg != "OK") { ensureFailModal(msg); } })
        .fail(function (err) { console.log(JSON.stringify(err)) })
};


function ensureFailModal(msg) {
    const modal = $(DOM.FAIL_MODAL);
    if (modal.length > 0) {
        modal.html(msg);
    } else {
        builFailModal(msg);
    }

}

function builFailModal(msg) {
    const modal = $(DOM.MODALS);
    let node = $(modal);

    node.html(TEMPLATE.FAIL_MODAL);

    const msg_node = $(DOM.FAIL_MODAL_MSG);
    msg_node.text(msg);
} 