import React, { useEffect } from 'react';
import { CheckCircle, Download, RotateCcw, Eye } from 'lucide-react';
import { CompressedImageData } from '../App';
import { ProgressBar } from './ProgressBar';
import { CompressionStats } from './CompressionStats';
import { ImagePreview } from './ImagePreview';
import { DownloadButton } from './DownloadButton';
import { tibetan } from '../locales/tibetan';

interface CompressionResultProps {
  compressedData: CompressedImageData | null;
  isCompressing: boolean;
  progress: number;
}

export const CompressionResult: React.FC<CompressionResultProps> = ({
  compressedData,
  isCompressing,
  progress
}) => {
  // Clean up object URLs when component unmounts
  useEffect(() => {
    return () => {
      if (compressedData) {
        URL.revokeObjectURL(compressedData.originalUrl);
        URL.revokeObjectURL(compressedData.compressedUrl);
      }
    };
  }, [compressedData]);
  
  if (!isCompressing && !compressedData) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
          <Eye className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">བརྫིས་བཟོ་རིམ་པ།</h3>
        <p className="text-gray-500">སྒྲིག་འགོད་བྱས་རྗེས་བརྫིས་བཟོ་མགོ་བརྩམས་རྒྱུ།</p>
      </div>
    );
  }
  
  if (isCompressing) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-[1.5]">{tibetan.compressing}</h2>
          <p className="text-gray-600">ཏོག་ཙམ་སྒུག་ཨ། བརྫིས་བཟོ་བྱེད་སྒང་ཡིན།</p>
        </div>
        
        <ProgressBar
          progress={progress}
          isComplete={false}
          message="བརྫིས་བཟོ་བྱེད་བཞིན་པ།"
        />
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-2xl flex items-center justify-center animate-pulse-soft">
            <RotateCcw className="w-8 h-8 text-white animate-spin-slow" />
          </div>
          <p className="text-blue-700 font-medium">བརྫིས་བཟོ་བྱེད་བཞིན་པ།</p>
        </div>
      </div>
    );
  }
  
  if (!compressedData) return null;
  
  return (
    <div className="space-y-6 animate-slide-in-up">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <h2 className="text-2xl font-bold text-gray-800 leading-[1.5]">བརྫིས་བཟོ་བྱས་ཚར།</h2>
        </div>
        <p className="text-gray-600">བརྫིས་བཟོ་ལེགས་གྲུབ་བྱུང་། གྲུབ་འབྲས་ཉར་ཚགས།</p>
      </div>
      
      {/* Compression Statistics */}
      <CompressionStats data={compressedData} className="mb-6" />
      
      {/* Image Comparison */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center leading-[1.5]">བསྡུར་ཚད།</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Original */}
          <ImagePreview
            imageUrl={compressedData.originalUrl}
            fileName={compressedData.originalFile.name}
            fileSize={compressedData.originalSize}
            format={compressedData.originalFile.type.split('/')[1]}
            title="ཐོག་མའི་པར་རིས།"
          />
          
          {/* Compressed */}
          <ImagePreview
            imageUrl={compressedData.compressedUrl}
            fileName={compressedData.compressedFile.name}
            fileSize={compressedData.compressedSize}
            format={compressedData.compressedFile.type.split('/')[1]}
            title="བརྫིས་བཟོ་པར་རིས།"
          />
        </div>
      </div>
      
      {/* Download Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-[1.5]">ཕབ་ལེན།</h3>
          <p className="text-gray-600 text-sm">
            བརྗིས་བཟོའི་ཡིག་ཆ {((compressedData.originalSize - compressedData.compressedSize) / compressedData.originalSize * 100).toFixed(1)}% ཉར་ཚགས།
          </p>
        </div>
        
        <DownloadButton
          file={compressedData.compressedFile}
          originalFileName={compressedData.originalFile.name}
          className="w-full"
        />
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            ཡིག་ཆའི་མིང་རྗེས་སུ་"_compressed"རང་བཞིན་གྱིས་ཁ་སྣོན་བྱེད་པ།
          </p>
        </div>
      </div>
    </div>
  );
};