/**
 *
 * Asynchronously loads the component for Benefits
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
