/**
 * Instagram data fetching service
 * 
 * NOTE: This file contains a blueprint for how to implement the backend API
 * that would scrape Instagram data. In a real implementation, this would be
 * a Node.js service with Puppeteer running on the server-side.
 */

// Sample response structure
export interface InstagramAnalysisResponse {
  username: string;
  profilePicture: string;
  followers: number;
  followersStatus: string;
  engagement: number;
  engagementStatus: string;
  postsCount: number;
  postsStatus: string;
  audit: {
    [key: string]: {
      status: string;
      title: string;
      description: string;
      icon: string;
    }
  };
  recentPosts: Array<{
    imageUrl: string;
    engagement: string;
    caption: string;
    postedBy: string;
  }>;
}

/**
 * Server-side implementation would look like this:
 * 
 * async function fetchInstagramData(username: string): Promise<InstagramAnalysisResponse> {
 *   const browser = await puppeteer.launch({ headless: true });
 *   const page = await browser.newPage();
 *   
 *   try {
 *     // Visit Instagram profile page
 *     await page.goto(`https://www.instagram.com/${username}/`, { waitUntil: 'networkidle2' });
 *     
 *     // Scrape follower count
 *     const followers = await page.evaluate(() => {
 *       const metaItems = document.querySelectorAll('meta[property="og:description"]');
 *       for (const item of metaItems) {
 *         const content = item.getAttribute('content');
 *         if (content) {
 *           const match = content.match(/(\d+).*?followers/);
 *           if (match && match[1]) return parseInt(match[1].replace(/,/g, ''));
 *         }
 *       }
 *       return 0;
 *     });
 *     
 *     // Scrape post count
 *     const postsCount = await page.evaluate(() => {
 *       const metaItems = document.querySelectorAll('meta[property="og:description"]');
 *       for (const item of metaItems) {
 *         const content = item.getAttribute('content');
 *         if (content) {
 *           const match = content.match(/(\d+).*?posts/);
 *           if (match && match[1]) return parseInt(match[1].replace(/,/g, ''));
 *         }
 *       }
 *       return 0;
 *     });
 *     
 *     // Scrape profile picture
 *     const profilePicture = await page.evaluate(() => {
 *       const img = document.querySelector('img[alt*="profile picture"]');
 *       return img ? img.getAttribute('src') : '';
 *     });
 *     
 *     // Scrape recent posts
 *     const recentPosts = await page.evaluate(() => {
 *       const posts = [];
 *       const articles = document.querySelectorAll('article');
 *       
 *       for (const article of articles.slice(0, 3)) {
 *         const imgElement = article.querySelector('img');
 *         const captionElement = article.querySelector('[role="link"] > span');
 *         
 *         posts.push({
 *           imageUrl: imgElement ? imgElement.getAttribute('src') : '',
 *           engagement: 'Low <0.1% Engagement', // This requires more complex calculation
 *           caption: captionElement ? captionElement.textContent : '',
 *           postedBy: username,
 *         });
 *       }
 *       
 *       return posts;
 *     });
 *     
 *     // Calculate metrics and audit
 *     const followersStatus = followers > 1000 ? 'Good' : 'Needs Improvement';
 *     const engagementRate = 0.09; // In a real implementation, calculate based on likes/comments
 *     const engagementStatus = engagementRate > 0.03 ? 'Good' : 'Low';
 *     const postsStatus = postsCount > 12 ? 'Good' : 'Needs Improvement';
 *     
 *     // Create audit data
 *     const audit = {
 *       // ... audit items based on the actual data ...
 *     };
 *     
 *     return {
 *       username,
 *       profilePicture,
 *       followers,
 *       followersStatus,
 *       engagement: engagementRate,
 *       engagementStatus,
 *       postsCount,
 *       postsStatus,
 *       audit,
 *       recentPosts
 *     };
 *   } finally {
 *     await browser.close();
 *   }
 * }
 */

// Helper function to check if an image exists (in a real implementation)
const imageExists = async (url: string): Promise<boolean> => {
  // In a browser environment, we can't reliably check if an image exists
  // before displaying it without CORS issues. In a real implementation,
  // this would be handled differently.
  return true;
};

// Fallback image URLs if real images aren't available
const FALLBACK_PROFILE_IMAGE = 'https://originui.com/avatar-80-09.jpg';
const FALLBACK_POST_IMAGES = [
  'https://placehold.co/800x800/e2e8f0/a3a3a3?text=Instagram+Post+1',
  'https://placehold.co/800x800/e2e8f0/a3a3a3?text=Instagram+Post+2',
  'https://placehold.co/800x800/e2e8f0/a3a3a3?text=Instagram+Post+3',
];

// CLIENT-SIDE MOCK IMPLEMENTATION
export async function fetchInstagramAnalysis(username: string): Promise<InstagramAnalysisResponse> {
  // In a real implementation, this would be a fetch call to your backend API
  // return fetch(`/api/instagram-analysis?username=${encodeURIComponent(username)}`)
  //   .then(response => response.json());
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Try to use local images first, fall back to placeholders
  const postImageUrls = [
    '/instagram-posts/post1.svg',
    '/instagram-posts/post2.svg',
    '/instagram-posts/post3.svg'
  ];
  
  // Demo data for the UI
  return {
    username,
    profilePicture: 'https://originui.com/avatar-80-09.jpg', // Placeholder for demo
    followers: 5049,
    followersStatus: 'Good',
    engagement: 0.09,
    engagementStatus: 'Low',
    postsCount: 148,
    postsStatus: 'Good',
    audit: {
      biography: {
        status: 'warning',
        title: 'Biography',
        description: 'Your bio is short, which means you are less likely to convert your visitors to followers.',
        icon: 'x-circle'
      },
      posts: {
        status: 'success',
        title: '12 Posts',
        description: 'Awesome, you\'ve got 12 posts up already. Accounts with 12+ posts grow 287% faster on average.',
        icon: 'check-circle'
      },
      followers: {
        status: 'success',
        title: '1000+ Followers',
        description: 'Excellent! You\'ve already started growing your audience and reached your first 1000 followers.',
        icon: 'check-circle'
      },
      profileSetup: {
        status: 'success',
        title: 'Profile Setup',
        description: 'Perfect! If you are attempting to attract new followers, it\'s best to keep your account public.',
        icon: 'check-circle'
      },
      businessPage: {
        status: 'warning',
        title: 'Business Page',
        description: 'Business profiles allow you to take advantage of improved analytics Instagram provide.',
        icon: 'x-circle'
      },
      followerRatio: {
        status: 'success',
        title: 'Follower/Following Proportion',
        description: 'Your Follower/Following proportion is great, this helps Instagram see you as a trusted profile.',
        icon: 'check-circle'
      },
      recentActivity: {
        status: 'warning',
        title: 'Recent Activity',
        description: 'You haven\'t posted recently. Posting regularly will increase your growth, and follower conversion rate.',
        icon: 'x-circle'
      },
      verified: {
        status: 'warning',
        title: 'Verified',
        description: 'Not being verified isn\'t a big deal but we have seen that it helps with trust and follow back rate.',
        icon: 'x-circle'
      }
    },
    recentPosts: [
      {
        imageUrl: postImageUrls[0],
        engagement: 'Low <0.1% Engagement',
        caption: 'Things are heating up as Nick Van Wilder has joined the crew! 🔥 🎶 Cause it\'s Friday night, and we feel alright! 🎶 #melbournernb #rnbsoul #thesocial #rnbbeats #rnblovers #urbanmusic #rnbmusic #rnbfridays #urbanparty #urbannight #rnb #rnbnight #melbourne #aeclubnights #throwback #aeclub #rnbflashback #rnbtakeover #rnbfridays',
        postedBy: username
      },
      {
        imageUrl: postImageUrls[1],
        engagement: 'Low <0.1% Engagement',
        caption: 'Imagine hating me, or thinking I\'m a complete douche (which I wouldn\'t be surprised or offended if most people do lol) and then having to see my face around town like this ... Would suck to be you. All jokes (and cockiness) aside, I\'m so fkn grateful to still be getting booked to gig at the level I am! The guys who book me are the real rockstars (and the people who put up with me). Bring on the new year!!!',
        postedBy: username
      },
      {
        imageUrl: postImageUrls[2],
        engagement: 'Low <0.1% Engagement',
        caption: 'Helping create hangovers and hanxiety on New Years Day for thousands of clubbers her another year in a row. @nyeh2omelbourne',
        postedBy: username
      }
    ]
  };
} 