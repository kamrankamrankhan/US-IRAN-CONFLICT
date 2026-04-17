'use client';

import { Twitter, Facebook, Linkedin, Link2, Check, Share2 } from 'lucide-react';
import { useState } from 'react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  hashtags?: string[];
}

const SocialShare = ({ url, title, description, hashtags = ['IranConflict', 'MiddleEastCrisis'] }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedHashtags = hashtags.map(h => encodeURIComponent(h)).join(',');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${encodedHashtags}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description || title,
          url: url,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500 font-medium">Share:</span>
        
        {/* Desktop Share Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={handleCopyLink}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-700 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Copy link"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Share Button */}
        <button
          onClick={handleNativeShare}
          className="sm:hidden w-9 h-9 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
          aria-label="Share article"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Share Menu */}
      {showShareMenu && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50 sm:hidden">
          <div className="flex flex-col gap-2">
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              {copied ? <Check className="w-5 h-5 text-green-600" /> : <Link2 className="w-5 h-5" />}
              <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialShare;
