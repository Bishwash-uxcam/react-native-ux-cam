import React from 'react';
import type { View } from 'react-native';
import composeRefs from '@seznam/compose-react-refs';
import useUXCamSensitiveRef from './useUXCamSensitiveRef';

export interface UXCamSensitiveViewProps {
	children: React.ComponentPropsWithRef<any>;
	isSensitive?: boolean;
}

const UXCamSensitiveView = React.forwardRef<View, UXCamSensitiveViewProps>(
	({ children, isSensitive = true, ...otherProps }: UXCamSensitiveViewProps, forwardedRef) => {
		const sensitiveRef = useUXCamSensitiveRef<typeof children>(isSensitive);
		const ref = composeRefs(sensitiveRef, forwardedRef);

		const onlyChild = React.Children.only(children);

		return React.cloneElement(onlyChild, { ref, collapsable: false, ...otherProps });
	},
);

UXCamSensitiveView.displayName = 'UXCamSensitiveView';

export default UXCamSensitiveView;