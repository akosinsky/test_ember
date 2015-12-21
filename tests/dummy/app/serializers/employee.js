import DS from 'ember-data';
import ApplicationSerializer from '../serializers/application';

// TODO: ODataSerializer.extend
export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    employee1: { serialize: 'records', deserialize: 'records' },
    orders: { serialize: 'records', deserialize: 'records' }
  },

  // Раньше можно было определить primaryKey как функцию, и задать один алгоритм для всех сериализаторов.
  // Щас либо по отдельности для каждого задавать это свойство, либо переопределять функции,
  // в которых задействован primaryKey (нужно иметь ввиду, что Ember Data в бете).
  primaryKey: 'EmployeeID'
});
