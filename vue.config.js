module.exports = {
  pages: {
    'popup/popup': {
      entry: 'src/popup/popup.js',
      template: 'src/popup/popup.html',
      title: 'Popup'
    },
    'options/options': {
      entry: 'src/options/options.js',
      template: 'src/options/options.html',
      title: 'Options'
    },
    'standalone/standalone': {
      entry: 'src/standalone/standalone.js',
      template: 'src/standalone/standalone.html',
      filename: 'app.html',
      title: 'test3'
    }
  },
  pluginOptions: {
    browserExtension: {
      registry: undefined,
      components: {
        background: true,
        popup: true,
        options: true,
        contentScripts: true,
        standalone: true
      },
      api: 'browser',
      usePolyfill: true,
      autoImportPolyfill: true,
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        contentScripts: {
          entries: {
            'content_scripts/content-script': [
              'src/content_scripts/content-script.js'
            ]
          }
        }
      }
    }
  }
}
