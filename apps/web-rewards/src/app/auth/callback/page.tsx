import { useSessionStore } from '@/auth/store/session.store';
import { getTwitchParams } from '@/auth/utils/twitch-params';
import { CardEmbee } from '@/shared/components/card-embee/card-embee';
import { Typography } from '@embeeorg/ui-kit';
import { Navigate, useLocation } from 'react-router';

export default function CallbackPage() {
  const location = useLocation();
  const setSession = useSessionStore((state) => state.setSession);
  const { error, errorDescription, accessToken } = getTwitchParams(
    location.hash,
  );

  if (accessToken) {
    setSession(accessToken);
    return <Navigate to="/" />;
  }

  return (
    <CardEmbee>
      <Typography
        variant="h1"
        family="primary"
        color="primary"
        size="3xl"
        weight="extrabold"
      >
        Twitch Error: {error}
      </Typography>
      <Typography
        variant="p"
        family="secondary"
        color="primary"
        size="lg"
        weight="regular"
      >
        Descripción: {errorDescription}
      </Typography>
    </CardEmbee>
  );
}
