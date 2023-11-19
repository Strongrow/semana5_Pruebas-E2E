const compareImages = require("resemblejs/compareImages")
const config = require("../../../config.json");
const fs = require('fs');
const path = require("path");

const { Selector } = require('testcafe');
const { viewportHeight, viewportWidth, browsers, options } = config;

// Selectors
function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}

const id_post_draft_5_73="6545db8b64420c0a1c9a51e0";

exports.ghost = {
    url_4_44: function () {
        return 'http://localhost:3002/ghost';
    },
    url_5_73: function () {
        return 'http://localhost:2368/ghost';
    },

    loginUsername: function () {
        return select('[name="identification"]');
    },

    loginPassword: function () {
        return select('[name="password"]');

    },

    loginUsername_version2: function () {
        //return select('input#identification');
        return select('[name="identification"]');
    },

    loginPassword_version2: function () {
        return select('input#password');

    },

    cajaBusqueda: function () {
        return select('.gh-nav-btn-search');
    },

    loginButton: function () {
        //return select('[data-test-button="sign-in"]');
        return select('[type="submit"]');
    },
    loginButton_version2: function () {
        return select('[data-test-button="sign-in"]');

    },

    menuTags: function () {

        return select('[href="#/tags/"]');

    },

    topicDeveloper: function () {

        return select('[href="#/explore/developers"]');
    },

    menuExplore: function () {
        return select('[data-test-nav="explore"]');
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
        return select('[name="accent-color"]');
        //return select('[placeholder="abcdef"]');

    },

    newTag_tag_description: function () {
        //return select('[data-test-input="tag-description"]');
        return select('[name="description"]');

    },

    buttonSaveNewTag: function () {
        //return select('[data-test-button="save"]');
        return select('button').withText("Save");

    },

    lista_tags_name: function () {
        //const x ="[href='#/tags/"+""+tag_name+"/']";
        //console.log("++++++++++++ "+x);
        return select('[href="#/tags/nuevo-tag-100/"]');
    },

    lista_tags_name_create: function () {
        //const x ="[href='#/tags/"+""+tag_name+"/']";
        //console.log("++++++++++++ "+x);
        return select('[href="#/tags/nuevo-tag-100/"]');
    },

    boton_delete_tag: function () {

        return select('[data-test-button="delete-tag"]');
    },
    boton_delete_tag_version2: function () {

        return select('.gh-btn');
    },
    

    boton_delete_tag_confirmar: function () {

        return select('[data-test-button="confirm"]');
    },

    boton_delete_tag_confirmar_version2: function () {

        return select('.gh-btn gh-btn-red gh-btn-icon ember-view');
    },

    boton_delete_tag_cancelar: function () {

        return select('[data-test-button="cancel"]');
    },


    boton_editar_post_draft: function () {

        var x="[data-test-post-id='"+id_post_draft_5_73+"']";
        return select(x);
    },

    text_area_titulo_post_draft: function () {
        return select('[placeholder="Post title"]');
    },
    
    div_area_titulo_post_draft: function () {
        return select('[href="#/posts/?type=draft"]');
    },
    

    boton_editar_post_published: function () {
        //href="#/editor/post/65591b4664f4310001318de2/
        return select('[href="#/editor/post/65594dd3158d0e0001a570bd/"]');
    },

    
    boton_menu_publicar: function () {
        //href="#/editor/post/65591b4664f4310001318de2/
        
        return select('span').withText("Update");
        return select('.gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view')
    },

    boton_menu_update_publicar: function () {
      
        return select('button').withText("Update");
    },

    text_area_titulo_post_published: function () {
        return select('[placeholder="Post title"]');
    },

    boton_update_post_published: function () {
        return select('[data-test-button="publish-save"]');
    },

    mensaje_error_usuario_password: function () {
        return select('.main-error');
    },

    lista_existe_al_buscar: function () {
        return select('.ais-InfiniteHits-item');
    },

    comparador: async function comparacionTest(nombreFeature, nombreImagenBefore, nombreImagenAfter, paso) {
        if (browsers.length === 0) {
            return;
        }
        let resultInfo = {}
        let datetime = new Date().toISOString().replace(/:/g, ".");
        var rutaBase = path.resolve();
        var ruta = path.resolve() + "\\reports\\screenshots\\" + nombreFeature;
        //console.log(ruta+"--------------------- datatime= "+datetime);
        for (b of browsers) {
            if (!b in ['chromium', 'webkit', 'firefox']) {
                return;
            }
            const data = await compareImages(
                fs.readFileSync(ruta + "\\" + nombreImagenBefore),
                fs.readFileSync(ruta + "\\" + nombreImagenAfter),
                options
            );
            resultInfo[b] = {
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime,
                texto: "<ul><li>isSameDimensions: " + data.isSameDimensions + "</li>" +
                    "<li>dimensionDifference: " + JSON.stringify(data.dimensionDifference) + "</li>" +
                    "<li>rawMisMatchPercentage: " + data.rawMisMatchPercentage + "</li>" +
                    "<li>misMatchPercentage: " + data.misMatchPercentage + "</li>" +
                    "<li>diffBounds: " + JSON.stringify(data.diffBounds) + "</li>" +
                    "<li>analysisTime: " + data.analysisTime + "</li></ul>"
            }



            fs.writeFileSync(ruta + "\\compare-" + paso + "-" + b + ".png", data.getBuffer());

        }
        fs.writeFileSync(ruta + "\\report" + paso + ".html", createReport(datetime, resultInfo, nombreImagenBefore, nombreImagenAfter, paso));
        fs.copyFileSync(rutaBase + '\\index.css', ruta + "\\index.css");
        console.log('------------------------------------------------------------------------------------');
        console.log("Execution finished. Check the report under the reports folder");
        return resultInfo;
    }

};




function browser(b, info, nombreImagenBefore, nombreImagenAfter, paso) {
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info.texto)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="${nombreImagenBefore}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="${nombreImagenAfter}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="compare-${paso}-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo, nombreImagenBefore, nombreImagenAfter, paso) {
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a> vs 
                 <a href="${config.url_2}"> ${config.url_2}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.browsers.map(b => browser(b, resInfo[b], nombreImagenBefore, nombreImagenAfter, paso))}
            </div>
        </body>
    </html>`
}