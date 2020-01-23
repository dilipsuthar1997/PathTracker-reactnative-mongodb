import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (isFocused, callback) => {
    const[err, setErr] = useState(null);
    const[subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            const sub = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                callback
            );
            setSubscriber(sub);
        } catch (err) {
            setErr(err);
        }
    }

    useEffect(() => {
        if (isFocused) {
            startWatching();
        } else {
            if (subscriber !== null) {
                subscriber.remove();
                setSubscriber(null);
            }
        }
    }, [isFocused]);

    return [err];
}