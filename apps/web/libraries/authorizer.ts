export const onStateChangeCallback = async ({ token }) => {
  await fetch('/api/auth/session', {
    method: 'POST',
    body: JSON.stringify(token),
  });
};
