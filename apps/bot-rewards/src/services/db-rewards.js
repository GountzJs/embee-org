import { borderSpecial } from '../core/settings.js';
import {
  addBorderSpecial,
  getRandomBorder,
  userAlreadyHaveBorderSpecial,
} from '../queries/borders.js';
import { createUserBorder } from '../queries/user-borders.js';
import { createUser, getIdUserByTwitchRef } from '../queries/users.js';
import { TwitchApi } from './twitch-api.js';

export const addRandomBorder = async ({ login }) => {
  const { data } = await TwitchApi.getUser({ login });
  const user = data[0];
  if (!user) throw new Error('CODE:404');
  let userId;
  try {
    const { id: idRes } = await getIdUserByTwitchRef({ twitchRef: user.id });
    userId = idRes;
  } catch (err) {
    if (err.message !== 'CODE:404') {
      throw new Error('CODE:9901');
    }
  }

  try {
    if (!userId) {
      const { id: idRes } = await createUser({
        id: user.id,
        login: user.login,
        displayName: user['display_name'],
        profileImageUrl: user['profile_image_url'],
      });
      userId = idRes;
    }

    const { id: borderId } = await getRandomBorder();

    await createUserBorder({ userId, borderId });
  } catch {
    throw new Error('CODE9902');
  }
};

export const addSpecialBorder = async ({ login }) => {
  const { data } = await TwitchApi.getUser({ login });
  const user = data[0];
  if (!user) throw new Error('CODE:404');
  let userId;
  try {
    const { id: idRes } = await getIdUserByTwitchRef({ twitchRef: user.id });
    userId = idRes;
  } catch (err) {
    if (err.message !== 'CODE:404') {
      throw new Error('CODE:9901');
    }
  }
  try {
    if (!userId) {
      const { id: idRes } = await createUser({
        id: user.id,
        login: user.login,
        displayName: user['display_name'],
        profileImageUrl: user['profile_image_url'],
      });
      userId = idRes;
    }
    const borderId = borderSpecial;

    await userAlreadyHaveBorderSpecial({ userId, borderId });
    await addBorderSpecial({ userId, borderId });
  } catch (err) {
    if (err.message === 'CODE:401') throw new Error('CODE:401');
    throw new Error('CODE9900');
  }
};
