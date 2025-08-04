import { Project } from '../types';

import IMG_0410 from '../assets/IMG_0410.JPG';
import IMG_0568 from '../assets/IMG_0568.JPG';
import IMG_0661 from '../assets/IMG_0661.JPG';
import IMG_0815 from '../assets/IMG_0815.JPEG';
import IMG_0933 from '../assets/IMG_0933.JPEG';
import IMG_0940 from '../assets/IMG_0940.JPEG';
import IMG_1235 from '../assets/IMG_1235.JPG';
import IMG_1238 from '../assets/IMG_1238.JPG';
import IMG_1439 from '../assets/IMG_1439.JPEG';
import IMG_1464 from '../assets/IMG_1464.JPEG';
import IMG_1466 from '../assets/IMG_1466.JPEG';
import IMG_1633 from '../assets/IMG_1633.JPG';
import IMG_1693 from '../assets/IMG_1693.JPEG';
import IMG_1746 from '../assets/IMG_1746.JPG';
import IMG_1878 from '../assets/IMG_1878.JPG';
import IMG_1930 from '../assets/IMG_1930.JPG';
import IMG_2020 from '../assets/IMG_2020.JPG';

import { CLOUDINARY_CONFIG, isCloudinaryConfigured, getFolderListingUrl, getCloudinaryUrl } from '../config/cloudinary';

// Function to fetch images from Cloudinary
export const fetchCloudinaryImages = async (): Promise<Project[]> => {
  try {
    const response = await fetch(getFolderListingUrl());
    
    if (!response.ok) {
      throw new Error('Failed to fetch Cloudinary images');
    }
    
    const data = await response.json();
    
    return data.resources.map((resource: any, index: number) => ({
      id: `cloudinary-${index}`,
      title: resource.public_id.split('/').pop()?.replace(/_/g, ' ') || `Project ${index + 1}`,
      category: 'Welding & Fabrication',
      location: 'Various Locations',
      description: `Professional welding and fabrication work - ${resource.public_id.split('/').pop()?.replace(/_/g, ' ')}`,
      image: getCloudinaryUrl(resource.public_id, CLOUDINARY_CONFIG.TRANSFORMATIONS.GALLERY),
      cloudinaryId: resource.public_id,
      uploadedAt: resource.created_at
    }));
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return []; // Return empty array if Cloudinary fails, will fall back to local images
  }
};

export const projects: Project[] = [
  {
    id: 'img-0410',
    title: 'New Fabricated Water Tank',
    category: 'General Welding',
    location: 'Hertfordshire',
    description: 'New fabricated water tank.',
    image: IMG_0410
  },
  {
    id: 'img-0568',
    title: 'Mobile Waste Shredder Hard Faced',
    category: 'Plant Repair',
    location: 'Bedfordshire',
    description: 'Mobile waste shredder hard faced.',
    image: IMG_0568
  },
  {
    id: 'img-0661',
    title: 'Excavator Bucket Teeth Fitted',
    category: 'Precision Work',
    location: 'London',
    description: 'New teeth fitted to excavator bucket.',
    image: IMG_0661
  },
  {
    id: 'img-0815',
    title: 'Steel Walls Replaced at Scrap Waste Site',
    category: 'Fabrication',
    location: 'London',
    description: 'New steel walls replaced at scrap waste site.',
    image: IMG_0815
  },
  {
    id: 'img-0933-0940',
    title: 'Structural Steelwork Modifications at Carpark',
    category: 'Structural Welding',
    location: 'London',
    description: 'Modifications to structural steelwork at carpark.',
    image: IMG_0933,
    afterImage: IMG_0940
  },
  {
    id: 'img-123x',
    title: 'Excavator Boom Arm Ram Anchor Pivots',
    category: 'Structural Welding',
    location: 'Essex',
    description: 'Excavator boom arm ram anchor pivots removed and replaced.',
    image: IMG_1238,
    beforeImage: IMG_1235,
    afterImage: IMG_1439
  },
  {
    id: 'img-146x',
    title: 'Steelwork Welded for House Architect',
    category: 'Equipment Upgrade',
    location: 'Buckinghamshire',
    description: 'Steelwork welded for house architect.',
    image: IMG_1464,
    afterImage: IMG_1466
  },
  {
    id: 'img-1633',
    title: 'Excavator Boom Arm Strengthening',
    category: 'Fabrication',
    location: 'North London',
    description: 'Strengthening plate added to excavator boom arm.',
    image: IMG_1633
  },
  {
    id: 'img-1693',
    title: 'Concrete Mixer Drum Repairs',
    category: 'Repair',
    location: 'London',
    description: 'Repairs to concrete mixer drum.',
    image: IMG_1693
  },
  {
    id: 'img-1746',
    title: '4in1 Excavator Bucket Edges Replaced',
    category: 'Emergency Callout',
    location: 'Middlesex',
    description: 'Edges replaced on 4in1 excavator bucket.',
    image: IMG_1746
  },
  {
    id: 'img-1878',
    title: 'New Handrails Installed',
    category: 'Onsite Work',
    location: 'Cambridgeshire',
    description: 'New handrails installed at customer offices.',
    image: IMG_1878
  },
  {
    id: 'img-1930',
    title: 'Loading Shovel Arm Welding Repairs',
    category: 'Assembly',
    location: 'London',
    description: 'Welding repairs to loading shovel arm.',
    image: IMG_1930
  },
  {
    id: 'img-2020',
    title: 'Excavator Boom Arm Modifications',
    category: 'General Welding',
    location: 'Essex',
    description: 'Modifications to excavator boom arm.',
    image: IMG_2020
  }
];