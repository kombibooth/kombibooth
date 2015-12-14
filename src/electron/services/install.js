import * as settings from 'kombibooth-settings';

export async function ensureIsInstalled () {
  const hasSettingsFile = await settings.exists();

  if (hasSettingsFile) {
    return;
  }

  await settings.install();
}
