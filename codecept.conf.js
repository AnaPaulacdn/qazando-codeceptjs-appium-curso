exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'iOS',
      app: '/Users/anaprado/Desktop/app_automation/appsqazando /qazandoapp.app',
      desiredCapabilities: {
        deviceName: 'iPhone 11 Pro Max',
        platformVersion: '13.7'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js',
  },
  mocha: {},
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './steps/*_test.js',
  name: 'app_automation'
}