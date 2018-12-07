import {
    Player,
    MediaStates
} from 'react-native-audio-toolkit';

export async function play(remoteURL) {
    player = new Player(remoteURL, {
            continuesToPlayInBackground: true
        });

    return new Promise((resolve) => {
        player.play(() => {
            // now duration is available, so I resolve promise
            resolve(player);
        });
    });
}