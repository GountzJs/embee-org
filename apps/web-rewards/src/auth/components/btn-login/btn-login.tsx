import { twitchAuthUrl, twitchClientId } from '@/core/settings';
import { BtnPrimary, TwitchSvg } from '@embeeorg/ui-kit';
import styles from './btn-login.module.css';

export function BtnLogin() {
  const handlerOnLogin = () => {
    const url = new URL(twitchAuthUrl);
    url.searchParams.append('client_id', twitchClientId);
    url.searchParams.append(
      'redirect_uri',
      'http://localhost:3000/auth/callback',
    );
    url.searchParams.append('scope', 'user:read:email');
    url.searchParams.append('response_type', 'token');
    window.location.href = url.toString();
  };

  return (
    <BtnPrimary className={styles.container} onClick={handlerOnLogin}>
      <TwitchSvg color="#fff" size={24} />
      Ingresar
    </BtnPrimary>
  );
}
