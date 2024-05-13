import Image from 'next/image';
import { Metadata } from 'next';
import ogImage from '../app/assets/og.png';

// either Static metadata

const template = `Description (what do you wanna built out? Being specific & detailed about your requirements will help get better reponses)

@basedbuildersbot `;

let CAST_URL = `https://warpcast.com/~/compose?text=${encodeURIComponent(
  template
)}`;

let OG_IMAGE = ogImage.src;

//replace with env for HOST
let CLIENT_URL = 'https://basedbuilders.vercel.app';
export const metadata = {
  title: 'Basedbuilderbot',
  openGraph: {
    images: [OG_IMAGE],
  },
  other: {
    'fc:frame:image': `${CLIENT_URL}/${OG_IMAGE}`,
    'fc:frame': 'vNext',
    'fc:frame:button:1': 'Cast Query',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': CAST_URL,
    'fc:frame:button:2': 'FAQ',
    'fc:frame:button:2:action': 'link',
    'fc:frame:button:2:target': `${CLIENT_URL}/faq`,
  },
};

// This page hits - useEffect to fetch data from the server
// read api from mongodb
// Context/state management
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Casts from mongodb presented as cards
    </main>
  );
}
