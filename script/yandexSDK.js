export let ysdk = null

export async function initSDK() {
  ysdk = await YaGames.init()
  ysdk.features.LoadingAPI?.ready()
  const lang = ysdk.environment.i18n.lang;
}

export async function getPlayer() {
  const player = await ysdk.getPlayer();

}

function showRewardedVideo(
  {
    onOpen,
    onRewarded,
    onClose,
    onError
  }) {
  ysdk.adv.showRewardedVideo({
    callbacks: {
      onOpen: onOpen,
      onRewarded: onRewarded,
      onClose: onClose,
      onError: onError,
    }
  })
}

/**
 * Получает информацию об игроке (имя и аватар).
 * Сначала пытается авторизовать игрока, если он еще не авторизован.
 * @returns {Promise<{name: string, avatar: string}|null>} Промис, который разрешается с объектом игрока или null.
 */
export async function getPlayerInfo() {
  if (!ysdk) {
    console.warn('YSDK not initialized, cannot get player info.');
    return null;
  }

  try {
    // Запрашиваем у SDK авторизацию игрока. Если он уже авторизован, диалог не покажется.
    await ysdk.auth.openAuthDialog();
    const player = await ysdk.getPlayer();

    if (player.getMode() === 'lite') {
      // Игрок не авторизован (гостевой режим)
      console.log('Player is not authenticated (lite mode).');
      return null;
    }

    return {
      name: player.getName(),
      avatar: player.getPhoto("medium"), // "small", "medium", "large"
    };
  } catch (error) {
    console.error('Failed to get player info:', error);
    return null;
  }
}
