/*
 *
 * Quiz actions
 *
 */

import {
  ADD_AFFILIATE,
} from './constants';

export function addAffiliate(code) {
  return {
    type: ADD_AFFILIATE,
    code
  };
}
