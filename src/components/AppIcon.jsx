import React from 'react';
import * as LucideIcons from 'lucide-react';
import { HelpCircle } from 'lucide-react';

// Import your custom icon
import CustomTikTokIcon from './CustomTikTokIcon'; 

function Icon({
    name,
    size = 24,
    color = "currentColor",
    className = "",
    strokeWidth = 2,
    ...props
}) {
    // Special check for 'TikTok'
    if (name === 'TikTok') {
        return (
            <CustomTikTokIcon
                size={size}
                color={color}
                className={className}
                {...props}
            />
        );
    }

    const IconComponent = LucideIcons[name];

    if (!IconComponent) {
        return <HelpCircle size={size} color="gray" strokeWidth={strokeWidth} className={className} {...props} />;
    }

    return <IconComponent
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        className={className}
        {...props}
    />;
}
export default Icon;