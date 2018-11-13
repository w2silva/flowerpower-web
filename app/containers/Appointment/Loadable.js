/**
 *
 * Asynchronously loads the component for Appointment
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
