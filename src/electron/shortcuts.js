export function goBack ({ window }) {
  return {
    accelerator: 'Ctrl+Backspace',
    handler: () => window.webContents.goBack(),
  };
}
