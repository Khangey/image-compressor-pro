import React from 'react';
import { TrendingDown, FileText, Zap } from 'lucide-react';
import { formatFileSize, formatSavings } from '../utils/formatters';
import { CompressedImageData } from '../App';
import { tibetan } from '../locales/tibetan';

interface CompressionStatsProps {
  data: CompressedImageData;
  className?: string;
}

export const CompressionStats: React.FC<CompressionStatsProps> = ({
  data,
  className = ''
}) => {
  const { originalSize, compressedSize, compressionRatio } = data;
  const savings = originalSize - compressedSize;
  const savingsPercentage = (savings / originalSize) * 100;
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {/* Compression Ratio */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <TrendingDown className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-gray-800">{tibetan.compressionRatio}</span>
        </div>
        <div className="text-2xl font-bold text-blue-600">
          {(compressionRatio * 100).toFixed(1)}%
        </div>
        <div className="text-sm text-gray-600">ཐོག་མའི་ཆེ་ཆུང་གི་ {(compressionRatio * 100).toFixed(1)}%</div>
      </div>
      
      {/* Size Reduction */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-gray-800">བརྫིས་བཟོ།</span>
        </div>
        <div className="text-2xl font-bold text-green-600">
          {formatFileSize(savings)}
        </div>
        <div className="text-sm text-gray-600">བརྫིས་བཟོ་བསྡུར་ཚད་ {savingsPercentage.toFixed(1)}%</div>
      </div>
      
      {/* Final Size */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-gray-800">མཐར་མཇུག་ཆེ་ཆུང་།</span>
        </div>
        <div className="text-2xl font-bold text-purple-600">
          {formatFileSize(compressedSize)}
        </div>
        <div className="text-sm text-gray-600">བརྫིས་བཟོ་རྗེས་ཀྱི་ཡིག་ཆའི་ཆེ་ཆུང་།</div>
      </div>
    </div>
  );
};