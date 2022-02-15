import React, { useEffect, useRef } from 'react';
import RNUxcam from 'react-native-ux-cam';

function useUXCamSensitiveRef<T>(isSensitive = true): React.MutableRefObject<T | null> {
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
            RNUxcam.occludeSensitiveView(ref.current)
		}
	}, [isSensitive, ref]);

	return ref;
}

export default useUXCamSensitiveRef;