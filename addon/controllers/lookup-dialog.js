import ListFormPageController from '../controllers/list-form-page';

export default ListFormPageController.extend({
  _currentRow: undefined,

  title: undefined,
  modalWindowHeight: undefined,
  modalWindowWidth: undefined,

  actions: {

    // Save the currentRow on rowClicked.
    rowClick: function(record) {
      this.set('_currentRow', record);
    },

    saveLookupDialog: function() {
      var saveTo = this.get('saveTo');
      if (!saveTo) {
        throw new Error('Don\'t know where to save - no saveTo data defined.');
      }

      saveTo.model.set(saveTo.propName, this.get('_currentRow'));

      // Manually set isDirty flag, because its not working now
      // when change relation props.
      // No check for 'old' and 'new' lookup data equality, because ember
      // will do it automatically after bug fix.
      saveTo.model.send('becomeDirty');
    }
  },

  clear: function() {
    this.set('_currentRow', undefined);
    this.set('saveTo', undefined);
    this.set('modelProjection', undefined);
    return this;
  },

  setCurrentRow: function() {
    var saveTo = this.get('saveTo');
    var currentRowVal = saveTo.model.get(saveTo.propName);
    this.set('_currentRow', currentRowVal);
    return this;
  }
});
