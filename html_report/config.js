report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Armenia_-_Cartelera_viewport_desktop.png",
        "test": "../bitmaps_test/20250617-212531/Armenia_-_Cartelera_viewport_desktop.png",
        "selector": "viewport",
        "fileName": "Armenia_-_Cartelera_viewport_desktop.png",
        "label": "Armenia - Cartelera",
        "requireSameDimensions": true,
        "misMatchThreshold": 0,
        "url": "https://www.cinecolombia.com/armenia",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 81.04921212121212,
          "misMatchPercentage": "81.05",
          "analysisTime": 101
        },
        "diffImage": "../bitmaps_test/20250617-212531/failed_diff_Armenia_-_Cartelera_viewport_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Contactanos_PQRS_document_desktop.png",
        "test": "../bitmaps_test/20250617-212531/Contactanos_PQRS_document_desktop.png",
        "selector": "document",
        "fileName": "Contactanos_PQRS_document_desktop.png",
        "label": "Contactanos PQRS",
        "requireSameDimensions": true,
        "misMatchThreshold": 0,
        "url": "https://www.cinecolombia.com/contactanos-pqrs",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 2.0100109494759892,
          "misMatchPercentage": "2.01",
          "analysisTime": 83
        },
        "diffImage": "../bitmaps_test/20250617-212531/failed_diff_Contactanos_PQRS_document_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Medellin_-_Alternativo_divlanding-page__blockfirst-of-type_desktop.png",
        "test": "../bitmaps_test/20250617-212531/Medellin_-_Alternativo_divlanding-page__blockfirst-of-type_desktop.png",
        "selector": "div.landing-page__block:first-of-type",
        "fileName": "Medellin_-_Alternativo_divlanding-page__blockfirst-of-type_desktop.png",
        "label": "Medellin - Alternativo",
        "requireSameDimensions": true,
        "misMatchThreshold": 0,
        "url": "https://www.cinecolombia.com/medellin/alternativo",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "Cine Colombia"
});