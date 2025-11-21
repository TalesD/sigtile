// Hero Section Assets
export const heroAssetPath = {
	heroBackground: "/assets/hero/flooring-hero-background.jpg",
	logoMain: "/assets/hero/sigtile-logo_dark.png",
	logoFavicon: "/assets/hero/sigtile-favicon2.ico",
	heroVideo: "/assets/hero/hero_video.mp4"
} as const;

// Services Section Assets
export const servicesAssetPath = {
	tileInstallation: "/assets/services/tile-installation.jpg",
	laminateFlooring: "/assets/services/laminate-flooring.jpg",
	vinylPlank: "/assets/services/vinyl-plank-flooring.jpg",
	hardwoodFlooring: "/assets/services/hardwood-flooring.jpg",
	iconTile: "/assets/services/icon-tile.webp",
	iconLaminate: "/assets/services/icon-laminate.webp",
	iconVinyl: "/assets/services/icon-vinyl.webp",
	iconHardwood: "/assets/services/icon-hardwood.webp"
} as const;

// Projects Gallery Assets
export const galleryAssetPath = {
	project01: {
		thumbnail: "/assets/gallery/tile-bathroom-01.jpg",
		before: "/assets/gallery/before-after/bathroom-before.jpg",
		after: "/assets/gallery/before-after/bathroom-after.jpg",
		title: "Bathroom Tile Renovation",
		description: "Professional tile installation that turned this dated bathroom into a spa-like retreat."
	},
	project02: {
		thumbnail: "/assets/gallery/vinyl-plank-living-room-01.jpg",
		before: "/assets/gallery/before-after/living-room-before.jpg",
		after: "/assets/gallery/before-after/living-room-after.jpg",
		title: "Living Room Vinyl Plank Installation",
		description: "From worn carpet to beautiful luxury vinyl plank flooring - a dramatic upgrade that modernized the entire space."
	},
	project03: {
		thumbnail: "/assets/gallery/hardwood-bedroom-01.jpg",
		before: "/assets/gallery/before-after/bedroom-before.jpg",
		after: "/assets/gallery/before-after/bedroom-after.jpg",
		title: "Hardwood Floor Refinishing",
		description: "Our hardwood floor refinishing service brought these old floors back to life with stunning results."
	},
	project04: {
		thumbnail: "/assets/gallery/laminate-office-01.jpg",
		before: "/assets/gallery/before-after/kitchen-before.jpg",
		after: "/assets/gallery/before-after/kitchen-after.jpg",
		title: "Kitchen Tile Transformation",
		description: "See how our expert tile installation completely transformed this outdated kitchen into a modern, stunning space."
	},
	project05: {
		thumbnail: "/assets/gallery/tile-bathroom-01.jpg",
		before: "/assets/gallery/before-after/bathroom-before.jpg",
		after: "/assets/gallery/before-after/bathroom-after.jpg",
		title: "Master Bathroom Upgrade",
		description: "Elegant tile work that elevated this bathroom to luxury status."
	},
	project06: {
		thumbnail: "/assets/gallery/hardwood-bedroom-01.jpg",
		before: "/assets/gallery/before-after/bedroom-before.jpg",
		after: "/assets/gallery/before-after/bedroom-after.jpg",
		title: "Bedroom Hardwood Restoration",
		description: "Classic hardwood floors restored to their original beauty with expert refinishing."
	}
} as const;

// Reviews Section Assets
export const reviewsAssetPath = {
	customerAvatar01: "/assets/reviews/avatar-01.jpg",
	customerAvatar02: "/assets/reviews/avatar-02.jpg",
	customerAvatar03: "/assets/reviews/avatar-03.jpg",
	googleReviewsBadge: "/assets/reviews/google-reviews-badge.png"
} as const;

// Why Choose Us Section Assets
export const featuresAssetPath = {
	licensedInsured: "/assets/features/licensed-insured.jpg",
	freeEstimates: "/assets/features/free-estimates.jpg",
	fastInstallation: "/assets/features/fast-installation.jpg",
	warrantyIncluded: "/assets/features/warranty-included.jpg"
} as const;

// Type exports for TypeScript
export type HeroAssetKey = keyof typeof heroAssetPath;
export type ServicesAssetKey = keyof typeof servicesAssetPath;
export type GalleryAssetKey = keyof typeof galleryAssetPath;
export type ReviewsAssetKey = keyof typeof reviewsAssetPath;
export type FeaturesAssetKey = keyof typeof featuresAssetPath;
