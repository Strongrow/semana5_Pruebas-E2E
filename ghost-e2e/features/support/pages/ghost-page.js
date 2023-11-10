const { Selector } = require('testcafe');

// Selectors
function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}


exports.ghost = {
    url: function () {
        return 'http://localhost:2368/ghost';
    },

    loginUsername: function () {
        return select('input#identification');
    },

    loginPassword: function () {
        return select('input#password');
    },

    loginButton: function () {
        return select('[data-test-button="sign-in"]');
    },

    menuTags: function () {
        return select('[href="#/tags/"]');
    },

    menuPost: function () {
        return select('[href="#/posts/"]');
    },

    botonNewTag: function () {
        return select('[href="#/tags/new/"]');
    },

    newTag_tag_name: function () {
        return select('input#tag-name');
    },

    newTag_data_test_input: function () {
        return select('[data-test-input="accentColor"]');
    },

    newTag_tag_description: function () {
        return select('[data-test-input="tag-description"]');
    },

    buttonSaveNewTag: function () {
        return select('[data-test-button="save"]');
    },

    lista_tags_name: function () {
        //const x ="[href='#/tags/"+""+tag_name+"/']";
        //console.log("++++++++++++ "+x);
        return select('[href="#/tags/nuevo-tag-13-3/"]');
    },

    boton_delete_tag: function () {

        return select('[data-test-button="delete-tag"]');
    },

    boton_delete_tag_confirmar: function () {

        return select('[data-test-button="confirm"]');
    },

    boton_delete_tag_cancelar: function () {

        return select('[data-test-button="cancel"]');
    },


    boton_editar_post_draft: function () {

        return select('[data-test-post-id="6545db8b64420c0a1c9a51e0"]');
    },

    text_area_titulo_post_draft: function () {
        return select('[placeholder="Post title"]');
    },

    boton_editar_post_published: function () {

        return select('[data-test-post-id="65284a5d735c9e3984aa0685"]');
    },

    text_area_titulo_post_published: function () {
        return select('[placeholder="Post title"]');
    },

    boton_update_post_published: function () {
        return select('[data-test-button="publish-save"]');
    },

};
