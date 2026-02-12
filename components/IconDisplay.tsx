import React from 'react';
import { 
  Globe, Car, Calendar, MapPin, Phone, 
  Instagram, Facebook, Send, Linkedin, ExternalLink 
} from 'lucide-react';

interface IconDisplayProps {
  name: string;
  className?: string;
}

const IconDisplay: React.FC<IconDisplayProps> = ({ name, className }) => {
  const props = { className: className || "w-5 h-5" };

  switch (name) {
    case 'Globe': return <Globe {...props} />;
    case 'Car': return <Car {...props} />;
    case 'Calendar': return <Calendar {...props} />;
    case 'MapPin': return <MapPin {...props} />;
    case 'Phone': return <Phone {...props} />;
    case 'Instagram': return <Instagram {...props} />;
    case 'Facebook': return <Facebook {...props} />;
    case 'Send': return <Send {...props} />; // Telegram alternative
    case 'Linkedin': return <Linkedin {...props} />;
    default: return <ExternalLink {...props} />;
  }
};

export default IconDisplay;
