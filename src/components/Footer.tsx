import React from 'react';
import { Heart, Code } from 'lucide-react';
import { tibetan } from '../locales/tibetan';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 text-center text-gray-500">
      <div className="max-w-4xl mx-auto">
        <div className="border-t border-gray-200 pt-8 mb-6">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">བྱེད་ནུས་ངོ་སྤྲོད།</h3>
              <ul className="text-sm space-y-2">
                <li>པར་རིས་ཆུང་བསྒྱུར།</li>
                <li>སྤུས་ལེགས་བརྫིས་བཟོ།</li>
                <li>རྣམ་གཞག་མང་པོ་རྒྱབ་སྐྱོར།</li>
                <li>མྱུར་ཚད་མགྱོགས་པོ།</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">སྟབས་བདེ་བའི་ཆ།</h3>
              <ul className="text-sm space-y-2">
                <li>དྲ་ལམ་བེད་སྤྱོད།</li>
                <li>སྒྲིག་འཇུག་སྟབས་བདེ།།</li>
                <li>བཀོལ་སྤྱོད་ཚད་མེད།</li>
                <li>ཐོ་འགོད་བྱེད་མི་དགོས།</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">རྒྱབ་སྐྱོར་ཐོབ་པའི་རྣམ་གཞག</h3>
              <ul className="text-sm space-y-2">
                <li>JPG</li>
                <li>PNG</li>
                <li>WebP</li>
                <li>ད་དུང་གཞན།</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-sm">
          <Code className="w-4 h-4" />
          <span>པར་རིས་བརྫིས་བཟོ་ལག་ཆ་འདི་ཉིད་ནི</span>
          <Heart className="w-4 h-4 text-red-500" />
          <span>བོད་ཀྱི་ཆ་འཕྲིན་ལག་རྩལ་པ་ཁྱུང་བོ་གངས་རྒྱན་གྱིས་བཟོས།</span>
        </div>
        
        <p className="text-xs mt-2 opacity-70">
          © 2025 {tibetan.title}. དཔལ་ཡོན་གསར་གཏོད་དངོས་བཤེར་ཁང་།
        </p>
      </div>
    </footer>
  );
};