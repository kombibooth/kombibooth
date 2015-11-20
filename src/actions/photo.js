export const PHOTO_CAPTURED = 'PHOTO_CAPTURED';
export const PHOTO_ALL_CAPTURED = 'PHOTO_ALL_CAPTURED';

export function photoCaptured (photo) {
  return {
    type: PHOTO_CAPTURED,
    photo: photo,
  };
}

export function lastPhotoCaptured (photo) {
  return {
    type: PHOTO_ALL_CAPTURED,
    photo: photo,
  };
}
