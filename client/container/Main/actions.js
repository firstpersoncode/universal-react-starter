import {
  DEFAULT_ACTION,
  CHECK_VIEWPORT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
    loading: false,
    error: false,
  };
}

export function checkViewport(width) {
  if (width > 1200) {
    return {
      type: CHECK_VIEWPORT,
      isMobile: false,
    };
  } else {
    return {
      type: CHECK_VIEWPORT,
      isMobile: true,
    };
  }
}
