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


exports.ghost = {
    url_5_69: function () {
        return 'http://localhost:2369/ghost';
    },
    url_5_73: function () {
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

    comparador: async function comparacionTest(nombreFeature,nombreImagenBefore,nombreImagenAfter,paso) {
        if (browsers.length === 0) {
            return;
        }
        let resultInfo = {}
        let datetime = new Date().toISOString().replace(/:/g, ".");
        var rutaBase=path.resolve();
        var ruta = path.resolve()+"\\reports\\screenshots\\"+nombreFeature;
        //var ruta = __dirname.toString().substring(0,__dirname.indexOf("\\support\\pages"));
        console.log(ruta+"--------------------- datatime= "+datetime);
        for (b of browsers) {
            if (!b in ['chromium', 'webkit', 'firefox']) {
                return;
            }
            //if (!fs.existsSync(`../../../results/`+b+`/${datetime}/`+nombreFeature+"/")) {
                //fs.mkdirSync(`../../../results/`+b+`/${datetime}/`+nombreFeature+"/", { recursive: true });
                //var x = __dirname +"/results/"+b+"/"+datetime+"/"+nombreFeature;
                //fs.mkdirSync(__dirname+"/"+b+"/"+datetime+"/"+nombreFeature+"/results");
                //}
            //Launch the current browser context
      /*      const browser = await playwright[b].launch({ headless: true, viewport: { width: viewportWidth, height: viewportHeight } });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto(config.url);
            await page.screenshot({ path: `./results/${datetime}/before-${b}.png` });
            await page.click('#generate');
            await page.screenshot({ path: `./results/${datetime}/after-${b}.png` });
            await browser.close();
    */
            //console.log("------ "+x);
            const data = await compareImages(
                fs.readFileSync(ruta+"\\"+nombreImagenBefore),
                fs.readFileSync(ruta+"\\"+nombreImagenAfter),
                options
            );
            resultInfo[b] = {
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime
            }
            fs.writeFileSync(ruta+"\\compare-"+paso+"-"+b+".png", data.getBuffer());
    
        }
        fs.writeFileSync(ruta+"\\report"+paso+".html", createReport(datetime, resultInfo,nombreImagenBefore,nombreImagenAfter,paso));
        fs.copyFileSync(rutaBase+'\\index.css', ruta+"\\index.css");
        console.log('------------------------------------------------------------------------------------')
        console.log("Execution finished. Check the report under the results folder")
        return resultInfo;
    }
    
};




function browser(b, info,nombreImagenBefore,nombreImagenAfter,paso) {
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
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

function createReport(datetime, resInfo,nombreImagenBefore,nombreImagenAfter,paso) {
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.browsers.map(b => browser(b, resInfo[b],nombreImagenBefore,nombreImagenAfter,paso))}
            </div>
        </body>
    </html>`
}