import EditFormRoute from 'ember-flexberry/routes/edit-form';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default EditFormRoute.extend(AuthenticatedRouteMixin, {
  modelProjection: 'EmployeeE',
  modelName: 'employee'
});
