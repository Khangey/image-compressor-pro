import imageCompression from 'browser-image-compression';
import { CompressionConfig } from '../App';

export interface CompressionProgress {
  stage: 'preparing' | 'compressing' | 'optimizing' | 'complete';
  progress: number;
  message: string;
}

export const compressImage = async (
  file: File,
  config: CompressionConfig,
  onProgress?: (progress: CompressionProgress) => void
): Promise<File> => {
  try {
    onProgress?.({
      stage: 'preparing',
      progress: 10,
      message: '准备压缩...'
    });

    const options: any = {
      maxSizeMB: config.targetSizeKB ? config.targetSizeKB / 1024 : undefined,
      maxWidthOrHeight: Math.max(config.maxWidth || 1920, config.maxHeight || 1920),
      useWebWorker: true,
      fileType: `image/${config.outputFormat}`,
      initialQuality: config.quality,
      onProgress: (progress: number) => {
        onProgress?.({
          stage: 'compressing',
          progress: 10 + (progress * 0.8),
          message: `压缩中... ${Math.round(progress)}%`
        });
      }
    };

    // If target size is specified, use iterative compression
    if (config.targetSizeKB) {
      onProgress?.({
        stage: 'optimizing',
        progress: 50,
        message: '优化文件大小...'
      });
      
      const compressedFile = await compressToTargetSize(
        file,
        config.targetSizeKB * 1024, // Convert to bytes
        config,
        (progress) => {
          onProgress?.({
            stage: 'optimizing',
            progress: 50 + (progress * 0.4),
            message: '精确控制文件大小...'
          });
        }
      );
      
      onProgress?.({
        stage: 'complete',
        progress: 100,
        message: '压缩完成'
      });
      
      return compressedFile;
    } else {
      const compressedFile = await imageCompression(file, options);
      
      onProgress?.({
        stage: 'complete',
        progress: 100,
        message: '压缩完成'
      });
      
      return compressedFile;
    }
  } catch (error) {
    console.error('Compression error:', error);
    throw new Error('图片压缩失败，请重试');
  }
};

const compressToTargetSize = async (
  file: File,
  targetSizeBytes: number,
  config: CompressionConfig,
  onProgress?: (progress: number) => void
): Promise<File> => {
  let quality = config.quality;
  let compressedFile = file;
  let attempts = 0;
  const maxAttempts = 10;
  
  while (attempts < maxAttempts) {
    onProgress?.((attempts / maxAttempts) * 100);
    
    const options = {
      maxWidthOrHeight: Math.max(config.maxWidth || 1920, config.maxHeight || 1920),
      useWebWorker: true,
      fileType: `image/${config.outputFormat}`,
      initialQuality: quality
    };
    
    compressedFile = await imageCompression(file, options);
    
    // Check if we're within 5% of target size
    const sizeDifference = Math.abs(compressedFile.size - targetSizeBytes);
    const tolerance = targetSizeBytes * 0.05;
    
    if (sizeDifference <= tolerance || compressedFile.size <= targetSizeBytes) {
      break;
    }
    
    // Adjust quality based on file size
    if (compressedFile.size > targetSizeBytes) {
      quality *= 0.8; // Reduce quality more aggressively
    } else {
      quality *= 1.1; // Increase quality slightly
    }
    
    // Ensure quality stays within bounds
    quality = Math.max(0.1, Math.min(1, quality));
    attempts++;
  }
  
  onProgress?.(100);
  return compressedFile;
};

export const createImageUrl = (file: File): string => {
  return URL.createObjectURL(file);
};

export const revokeImageUrl = (url: string): void => {
  URL.revokeObjectURL(url);
};