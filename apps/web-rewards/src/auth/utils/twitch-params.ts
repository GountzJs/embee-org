export function getTwitchParams(hash: string) {
  const params = new URLSearchParams(hash.replace('#', ''));

  const error = params.get('error');
  const error_description = params.get('error_description');

  if (error || error_description) {
    return {
      error,
      errorDescription: error_description,
      accessToken: null,
    };
  }

  return {
    error: null,
    errorDescription: null,
    accessToken: params.get('access_token'),
  };
}
