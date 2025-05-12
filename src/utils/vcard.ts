// Import the logo for the contact photo
import logoSvg from '../assets/images/LOGO_AZAV (INV).svg';

/**
 * Utility function to generate a vCard for contact information
 */

export interface VCardOptions {
  name: string;
  organization?: string;
  email?: string;
  phone?: string;
  website?: string;
  photoUrl?: string;
  note?: string;
}

/**
 * Generate a vCard string from contact information
 */
export const generateVCard = (options: VCardOptions): string => {
  const {
    name,
    organization,
    email,
    phone,
    website,
    photoUrl,
    note
  } = options;

  let vcard = 'BEGIN:VCARD\n';
  vcard += 'VERSION:3.0\n';
  vcard += `FN:${name}\n`;
  
  if (organization) {
    vcard += `ORG:${organization}\n`;
  }
  
  if (email) {
    vcard += `EMAIL;TYPE=INTERNET:${email}\n`;
  }
  
  if (phone) {
    // Format phone number without special characters for vCard
    const formattedPhone = phone.replace(/[^\d+]/g, '');
    vcard += `TEL;TYPE=CELL:${formattedPhone}\n`;
  }
  
  if (website) {
    vcard += `URL:${website}\n`;
  }
  
  if (photoUrl) {
    vcard += `PHOTO;VALUE=URI:${photoUrl}\n`;
  }
  
  if (note) {
    vcard += `NOTE:${note}\n`;
  }
  
  vcard += 'END:VCARD';
  
  return vcard;
};

/**
 * Create a downloadable vCard link
 */
export const createVCardDownloadLink = (options: VCardOptions): string => {
  const vcard = generateVCard(options);
  const blob = new Blob([vcard], { type: 'text/vcard' });
  return URL.createObjectURL(blob);
};



/**
 * Get the absolute URL for the logo
 */
const getLogoUrl = (): string => {
  // For client-side usage, create a full URL to the logo
  // This ensures the logo is accessible when the vCard is downloaded
  const baseUrl = window.location.origin;
  
  // Use the imported SVG path and convert it to a full URL
  // For SVG files in production build, they're usually hashed and placed in static/media
  // We'll use a fallback to the deployed site's logo if needed
  try {
    // For development, we can use the imported path
    return `${baseUrl}${logoSvg}`;
  } catch (e) {
    // Fallback to the deployed site's logo
    return 'https://azaudiovisualohio.com/logo.svg';
  }
};

/**
 * A-Z Audiovisual contact information
 */
export const azAudiovisualContact: VCardOptions = {
  name: 'A-Z Audiovisual',
  organization: 'A-Z Audiovisual',
  email: 'azaudiovisualohio@gmail.com',
  phone: '+13304194411',
  website: 'https://azaudiovisualohio.com',
  // Add the logo as the photo URL (will be set when the vCard is generated)
  photoUrl: typeof window !== 'undefined' ? getLogoUrl() : undefined,
  note: 'Professional audiovisual services for events and installations.'
};
