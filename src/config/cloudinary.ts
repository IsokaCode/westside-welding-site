// Cloudinary Configuration
// ===========================================
// 
// INSTRUCTIONS FOR CLIENT SETUP:
// 1. Go to https://cloudinary.com and create a free account
// 2. After signing up, find your "Cloud Name" in the dashboard
// 3. Create a folder called "westside-welding-gallery" in your Media Library
// 4. Replace the values below with your actual credentials
// 5. Upload images to the "westside-welding-gallery" folder
// 6. Images will automatically appear on the website gallery
//
// ===========================================

export const CLOUDINARY_CONFIG = {
  // Replace with your client's cloud name (found in Cloudinary dashboard)
  CLOUD_NAME: 'your-cloud-name-here',
  
  // Folder name in Cloudinary where images will be stored
  FOLDER_NAME: 'westside-welding-gallery',
  
  // Image transformation settings
  TRANSFORMATIONS: {
    THUMBNAIL: 'w_400,h_300,c_fill,q_auto',
    GALLERY: 'w_800,h_600,c_fill,q_auto',
    MODAL: 'w_1200,h_800,c_fill,q_auto',
    OPTIMIZED: 'f_auto,q_auto'
  }
};

// Helper function to check if Cloudinary is properly configured
export const isCloudinaryConfigured = (): boolean => {
  return CLOUDINARY_CONFIG.CLOUD_NAME !== 'your-cloud-name-here';
};

// Helper function to get Cloudinary URL with transformations
export const getCloudinaryUrl = (publicId: string, transformation: string = ''): string => {
  if (!isCloudinaryConfigured()) {
    throw new Error('Cloudinary is not configured. Please update the CLOUD_NAME in cloudinary.ts');
  }
  
  const baseUrl = `https://res.cloudinary.com/${CLOUDINARY_CONFIG.CLOUD_NAME}/image/upload`;
  return transformation 
    ? `${baseUrl}/${transformation}/${publicId}`
    : `${baseUrl}/${publicId}`;
};

// Helper function to get folder listing URL
export const getFolderListingUrl = (): string => {
  if (!isCloudinaryConfigured()) {
    throw new Error('Cloudinary is not configured. Please update the CLOUD_NAME in cloudinary.ts');
  }
  
  return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.CLOUD_NAME}/image/list/${CLOUDINARY_CONFIG.FOLDER_NAME}.json`;
};

// ===========================================
// CLIENT INSTRUCTIONS (copy and send to client):
// ===========================================
/*
SETUP INSTRUCTIONS FOR WESTside Welding Gallery:

1. CREATE CLOUDINARY ACCOUNT:
   - Go to: https://cloudinary.com
   - Click "Sign Up" (free account)
   - Enter your email and create a password
   - Verify your email address

2. GET YOUR CLOUD NAME:
   - Log into your Cloudinary dashboard
   - Look for "Cloud Name" in the top section
   - It will look like: "d123456789" or "mycompany"

3. CREATE GALLERY FOLDER:
   - In your dashboard, go to "Media Library"
   - Click "Create Folder"
   - Name it exactly: "westside-welding-gallery"
   - Click "Create"

4. UPLOAD IMAGES:
   - Click "Upload" button
   - Drag and drop your project images
   - Or click to browse and select files
   - Images will automatically be optimized

5. SHARE YOUR CLOUD NAME:
   - Send your Cloud Name to your web developer
   - They will update the website to display your images

6. FUTURE UPLOADS:
   - Simply upload new images to the "westside-welding-gallery" folder
   - They will automatically appear on your website
   - No technical knowledge required!

MOBILE APP:
- Download "Cloudinary" app from App Store/Google Play
- Log in with your account
- Upload images directly from your phone while on-site

NEED HELP?
- Cloudinary has excellent support: https://support.cloudinary.com
- Or contact your web developer for assistance
*/ 