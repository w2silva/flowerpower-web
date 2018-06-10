/**
 *
 * Asynchronously loads the component for Quiz
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
