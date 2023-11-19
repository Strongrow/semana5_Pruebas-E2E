report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Ghost_Homepage_0_document_0_default.png",
        "test": "..\\bitmaps_test\\20231119-020129\\backstop_default_Ghost_Homepage_0_document_0_default.png",
        "selector": "document",
        "fileName": "backstop_default_Ghost_Homepage_0_document_0_default.png",
        "label": "Ghost Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3002/ghost/",
        "referenceUrl": "http://localhost:2368/ghost/",
        "expect": 0,
        "viewportLabel": "default",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 8.171875,
          "misMatchPercentage": "8.17",
          "analysisTime": 67
        },
        "diffImage": "..\\bitmaps_test\\20231119-020129\\failed_diff_backstop_default_Ghost_Homepage_0_document_0_default.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Ghost_Homepage_0_document_1_phone.png",
        "test": "..\\bitmaps_test\\20231119-020129\\backstop_default_Ghost_Homepage_0_document_1_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Ghost_Homepage_0_document_1_phone.png",
        "label": "Ghost Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3002/ghost/",
        "referenceUrl": "http://localhost:2368/ghost/",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 5.533203125,
          "misMatchPercentage": "5.53",
          "analysisTime": 31
        },
        "diffImage": "..\\bitmaps_test\\20231119-020129\\failed_diff_backstop_default_Ghost_Homepage_0_document_1_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Ghost_Homepage_0_document_2_tablet.png",
        "test": "..\\bitmaps_test\\20231119-020129\\backstop_default_Ghost_Homepage_0_document_2_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Ghost_Homepage_0_document_2_tablet.png",
        "label": "Ghost Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3002/ghost/",
        "referenceUrl": "http://localhost:2368/ghost/",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 5.091349283854166,
          "misMatchPercentage": "5.09",
          "analysisTime": 81
        },
        "diffImage": "..\\bitmaps_test\\20231119-020129\\failed_diff_backstop_default_Ghost_Homepage_0_document_2_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});