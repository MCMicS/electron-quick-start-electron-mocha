var assert = require('assert');
const electron = require("electron")
const ipcRenderer = electron.ipcRenderer

describe('Simple Test', function() {
  describe('say Hello from Renderer', function() {
    it('should success', function() {
      assert.deepStrictEqual(true ,true);
    });
  });
});
