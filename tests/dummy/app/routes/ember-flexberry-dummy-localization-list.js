import ListFormRoute from 'ember-flexberry/routes/list-form';

export default ListFormRoute.extend({
  /**
   * Name of model projection to be used as record's properties limitation.
   *
   * @property modelProjection
   * @type String
   * @default 'LocalizationL'
   */
  modelProjection: 'LocalizationL',

  /**
   * Name of model to be used as list's records types.
   *
   * @property modelName
   * @type String
   * @default 'ember-flexberry-dummy-localization'
   */
  modelName: 'ember-flexberry-dummy-localization'
});
