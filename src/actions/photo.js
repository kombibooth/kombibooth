export const PHOTO_CAPTURED = 'PHOTO_CAPTURED';

export function captured (photo) {
  return {
    type: PHOTO_CAPTURED,
    photo: photo,
  };
}
