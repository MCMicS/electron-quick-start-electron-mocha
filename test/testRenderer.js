var assert = require('assert');
const electron = require("electron")
const app = electron.app || electron.remote.app;

describe('Simple Test', function() {
  describe('say Hello from Renderer', function() {
    it('should success', function() {
      console.log('App-data: ' + app.getPath('appData'))
      assert.deepStrictEqual(true ,true);
    });
  });
});
