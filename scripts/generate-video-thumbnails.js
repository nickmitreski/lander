import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Videos and corresponding timestamps (in seconds) to extract frames from
// The timestamps are selected to get good frames from each video
const VIDEOS = [
  {
    videoName: 'Testimonial_Actress',
    timestamp: '00:00:05', // 5 seconds into the video
  },
  {
    videoName: 'Testimonial_Business_Owner',
    timestamp: '00:00:04', // 4 seconds into the video
  },
  {
    videoName: 'Testimonial_Influencer',
    timestamp: '00:00:03', // 3 seconds into the video
  },
  {
    videoName: 'Testimonial_Personal_Trainer',
    timestamp: '00:00:04', // 4 seconds into the video
  },
];

async function generateThumbnails() {
  const publicDir = path.join(__dirname, '../public');

  for (const { videoName, timestamp } of VIDEOS) {
    const videoPath = path.join(publicDir, `${videoName}.mp4`);
    const outputPath = path.join(publicDir, `${videoName}_thumb.jpg`);
    
    // Check if the video exists
    if (!fs.existsSync(videoPath)) {
      console.warn(`Video file not found: ${videoPath}`);
      continue;
    }

    try {
      // Generate high-quality thumbnail at specified timestamp
      // -ss: seek to position
      // -vframes 1: extract only one frame
      // -q:v 2: high quality (range 2-31, lower is better)
      // -vf scale=-1:720: maintain aspect ratio and scale to 720p height
      const cmd = `ffmpeg -y -ss ${timestamp} -i "${videoPath}" -vframes 1 -q:v 2 -vf scale=-1:720 "${outputPath}"`;
      console.log(`Generating thumbnail for ${videoName}...`);
      await execAsync(cmd);
      console.log(`Successfully created thumbnail: ${outputPath}`);
    } catch (error) {
      console.error(`Error generating thumbnail for ${videoName}:`, error.message);
    }
  }
}

// Run the script
generateThumbnails()
  .then(() => console.log('Thumbnail generation complete!'))
  .catch(err => console.error('Error generating thumbnails:', err)); 