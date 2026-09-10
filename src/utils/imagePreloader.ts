// Preloads and caches all slide images to guarantee instant, smooth transitions without loading lag

export const ALL_SAFETY_IMAGES = [
  '/logo.jpg',
  '/Welding_Safety.jpg',
  '/Machine_Safety.jpg',
  '/Forklift_Operator.jpg',
  '/Coater.jpg',
  '/Crane_Operator.jpg',
  '/Electrical_Safety.jpg',
  '/Chemical_Handling.jpg',
  '/Hazardous_Waste.jpg',
  '/3RS.jpg',
];

export const ALL_BIRTHDAY_IMAGES = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
];

// Memory cache of preloaded HTMLImageElements
const preloadedCache = new Map<string, HTMLImageElement>();
const preloadedUrls = new Set<string>();

/**
 * Preloads a single image and decodes it in the background
 */
export function preloadSingleImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    if (preloadedCache.has(url)) {
      const existing = preloadedCache.get(url)!;
      if (existing.complete && existing.naturalWidth > 0) {
        preloadedUrls.add(url);
        resolve(existing);
        return;
      }
    }

    const img = new Image();
    img.crossOrigin = url.startsWith('http') ? 'anonymous' : undefined as any;
    img.decoding = 'async';

    img.onload = () => {
      preloadedCache.set(url, img);
      preloadedUrls.add(url);
      if (typeof img.decode === 'function') {
        img.decode().then(() => resolve(img)).catch(() => resolve(img));
      } else {
        resolve(img);
      }
    };

    img.onerror = (err) => {
      // Retry once after 1 second if network was unstable
      setTimeout(() => {
        const retryImg = new Image();
        retryImg.onload = () => {
          preloadedCache.set(url, retryImg);
          preloadedUrls.add(url);
          resolve(retryImg);
        };
        retryImg.onerror = () => reject(err);
        retryImg.src = url;
      }, 1000);
    };

    img.src = url;
  });
}

/**
 * Immediately warms up and caches all application images in memory
 */
export function preloadAllAppImages(): void {
  // Preload local safety illustrations first (highest priority)
  ALL_SAFETY_IMAGES.forEach((url) => {
    preloadSingleImage(url).catch(() => {
      // non-blocking
    });
  });

  // Preload birthday portrait images
  ALL_BIRTHDAY_IMAGES.forEach((url) => {
    preloadSingleImage(url).catch(() => {
      // non-blocking
    });
  });
}

/**
 * Checks if an image is already preloaded and decoded in memory
 */
export function isImagePreloaded(url: string): boolean {
  if (preloadedUrls.has(url)) return true;
  const cached = preloadedCache.get(url);
  return !!(cached && cached.complete && cached.naturalWidth > 0);
}
