'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Globe, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Language } from '@/data/translations';

const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'th', label: 'ภาษาไทย' },
    { code: 'vi', label: 'Tiếng Việt' },
];

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                className="flex items-center gap-1.5 text-gray-700 hover:text-primary transition-colors p-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Globe className="w-5 h-5" />
                <span className="uppercase font-semibold text-sm">{language}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`group flex w-full items-center justify-between px-4 py-2 text-sm ${language === lang.code ? 'bg-blue-50 text-primary' : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {lang.label}
                                {language === lang.code && <Check className="w-4 h-4 text-primary" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
