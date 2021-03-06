const Configuration = {
    recognitionParams: {
      type: 'MATH',
      protocol: 'WEBSOCKET',
      apiVersion: 'V4',
      server: {
        scheme: 'https',
        host: 'cloud.myscript.com',
        applicationKey: '760fb5da-6cca-40f1-9af5-f6914fc19d58',
        hmacKey: '93eabaa5-0b99-4fad-9a9d-c2fac59d08a0',
        useWindowLocation: false,
        websocket: {
          pingEnabled: true,
          pingDelay: 30000,
          maxPingLostCount: 10,
          autoReconnect: true,
          maxRetryCount: 2,
          fileChunkSize: 300000
        }
      },
      v4: {
        alwaysConnected: true,
        lang: 'en_US',
        export: {
          'image-resolution': 300,
          jiix: {
            'bounding-box': true,
            strokes: true,
            text: {
              chars: false,
              words: true
            }
          }
        },
        renderer: {
          debug: {
            'draw-text-boxes': true,
            'draw-image-boxes': true
          }
        },
        math: {
          customGrammar: 'multi',
          mimeTypes: ['application/x-latex', 'application/vnd.myscript.jiix'],
          solver: {
            enable: false,
            'fractional-part-digits': 3,
            'decimal-separator': '.',
            'rounding-mode': 'half up',
            'angle-unit': 'deg'
          },
          margin: {
            bottom: 10,
            left: 15,
            right: 15,
            top: 10
          }
        },
        text: {
          guides: {
            enable: true
          },
          smartGuide: true,
          smartGuideFadeOut: {
            enable: false,
            duration: 10000
          },
          mimeTypes: ['text/plain', 'application/vnd.myscript.jiix'],
          margin: {
            top: 20,
            left: 10,
            right: 10
          }
        },
        diagram: {
          mimeTypes: ['application/vnd.myscript.jiix'],
          margin: {
            bottom: 10,
            left: 15,
            right: 15,
            top: 10
          }
        },
        'raw-content': {
          recognition: {
            text: false,
            shape: false
          }
        }
      },
      /*v3: {
        mathParameter: {
          resultTypes: ['LATEX', 'MATHML'],
          columnarOperation: false,
          userResources: [],
          scratchOutDetectionSensitivity: 1,
        },
        textParameter: {
          language: 'en_US',
          textInputMode: 'CURSIVE',
          resultDetail: 'TEXT',
          contentTypes: [],
          subsetKnowledges: [],
          userLkWords: [],
          userResources: [],
          textProperties: {
            textCandidateListSize: 1,
            wordCandidateListSize: undefined,
            wordPredictionListSize: 0,
            wordCompletionListSize: 0,
            characterCandidateListSize: undefined,
            enableOutOfLexicon: false,
            discardCaseVariations: false,
            discardAccentuationVariations: false,
            glyphDistortion: undefined,
            enableTagger: false,
            spellingDistortion: undefined
          }
        },
        shapeParameter: {
          userResources: undefined,
          rejectDetectionSensitivity: 1,
          doBeautification: true
        },
        musicParameter: {
          divisions: 480,
          resultTypes: ['MUSICXML', 'SCORETREE'],
          userResources: [],
          staff: {
            top: 100,
            count: 5,
            gap: 20
          },
          clef: {
            symbol: 'G',
            octave: 0,
            line: 2
          },
          scratchOutDetectionSensitivity: 1
        },
        analyzerParameter: {
          textParameter: {
            textProperties: {},
            language: 'en_US',
            textInputMode: 'CURSIVE'
          },
          coordinateResolution: undefined
        }
      }*/
    },
    // @see generated documentation on top
    listenerOptions: {
      capture: false,
      passive: true
    },
    undoRedoMaxStackSize: 20,
    xyFloatPrecision: 0,
    timestampFloatPrecision: 0,
    triggerDelay: 2000,
    processDelay: 0,
    resizeTriggerDelay: 200,
    // Configure when the action is triggered.
    // POINTER_UP : Action is triggered on every PenUP. This is the recommended mode for CDK V3 WebSocket recognitions.
    // QUIET_PERIOD : Action is triggered after a quiet period in milli-seconds on every pointer up. I value is set to 2000 for example the recognition will be fired  when user stop writing 2 seconds. This is the recommended mode for all REST recognitions.
    triggers: {
      exportContent: 'DEMAND',
      addStrokes: 'POINTER_UP'
    },
    restConversionState: '',
    renderingParams: {
      stroker: 'quadratic',
      minHeight: 100,
      minWidth: 100
    }
  };