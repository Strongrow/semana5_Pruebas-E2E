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
    
    botonNewTag: function () {
        return select('[href="#/tags/new/"]');
    },

    newTag_tag_name: function () {
        return select('input#tag-name');
    },

    newTag_data_test_input:function () {
        return select('[data-test-input="accentColor"]');
    },

    newTag_tag_description:function () {
        return select('[data-test-input="tag-description"]');
    },

    buttonSaveNewTag: function () {
        return select('[data-test-button="save"]');
    },
    
    lista_tags_name:function (tag_name) {
        const x ="[href='#/tags/"+""+tag_name+"/']";
        //console.log("++++++++++++ "+x);
        return select('[href="#/tags/nuevo-tag-14/"]');
    },

    


};
