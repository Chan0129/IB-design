import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, Mail, MapPin, Copy, ExternalLink, Send, ShieldCheck, User as UserIcon } from 'lucide-react';
import { BriefConfiguration } from './BriefConfigurator.tsx';
import { useAuth } from '../context/AuthContext.tsx';
import { saveEnquiryToFirestore } from '../services/enquiries.ts';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBrief?: BriefConfiguration | null;
}

const STUDIO_EMAIL = 'ib.designsph@gmail.com';

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, initialBrief }) => {
  const { user, signInWithGoogle } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    iloiloLocation: 'Jaro, Iloilo',
    typology: 'Residential Architecture',
    budget: '₱5M – ₱15M (Bespoke Residence / Villa)',
    notes: ''
  });

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: prev.name || user.displayName || '',
        email: prev.email || user.email || ''
      }));
    }
  }, [user]);

  useEffect(() => {
    if (initialBrief) {
      setFormData(prev => ({
        ...prev,
        typology: initialBrief.typology,
        notes: `Selected Scope: ${initialBrief.scope} | Material Tier: ${initialBrief.materialTier}`
      }));
    }
  }, [initialBrief]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(`[IB Design Inquiry] ${formData.typology} — ${formData.iloiloLocation}`);
    const body = encodeURIComponent(
      `Dear Ar. Rosie Joy Teves & IDr. Christian Delima,\n\n` +
      `I would like to inquire about a project with IB Design Studio.\n\n` +
      `--- CLIENT DOSSIER ---\n` +
      `Client Name: ${formData.name}\n` +
      `Client Email: ${formData.email}\n` +
      `Organization / Family: ${formData.organization || 'Private Patron'}\n` +
      `Project Location: ${formData.iloiloLocation}\n` +
      `Project Typology: ${formData.typology}\n` +
      `Estimated Budget: ${formData.budget}\n\n` +
      `--- BRIEF NOTES ---\n` +
      `${formData.notes || 'Looking forward to scheduling an initial consultation.'}\n\n` +
      `Best regards,\n${formData.name}`
    );
    return `mailto:${STUDIO_EMAIL}?subject=${subject}&body=${body}`;
  };

  const getDossierText = () => {
    return (
      `IB DESIGN COMMISSION ENQUIRY\n` +
      `Recipient: ${STUDIO_EMAIL}\n\n` +
      `Client Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization: ${formData.organization || 'Private Patron'}\n` +
      `Location: ${formData.iloiloLocation}\n` +
      `Typology: ${formData.typology}\n` +
      `Budget: ${formData.budget}\n\n` +
      `Notes: ${formData.notes || 'None provided.'}`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await saveEnquiryToFirestore({
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        iloiloLocation: formData.iloiloLocation,
        typology: formData.typology,
        budget: formData.budget,
        notes: formData.notes,
      }, user?.uid);
    } catch (err) {
      console.warn('Firestore enquiry save warning, proceeding to mail dispatch:', err);
    }

    setSubmitting(false);
    setSubmitted(true);

    // Open default email client connected to ib.designsph@gmail.com
    try {
      const mailtoUrl = constructMailtoUrl();
      window.location.href = mailtoUrl;
    } catch {
      // Ignore if popup blocked
    }
  };

  const handleCopyDossier = () => {
    navigator.clipboard.writeText(getDossierText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#faf9f5] text-[#242921] border border-[#dce3d5] shadow-2xl p-6 md:p-10 max-h-[92vh] overflow-y-auto rounded-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 text-[#555a4d] hover:text-[#242921] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="font-editorial text-base font-bold tracking-tight text-[#1c201a]">
                  IB DESIGN
                </span>
                <span className="text-[#a4a99d]">·</span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#47543c] font-semibold">
                  Commission Enquiry
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-editorial font-normal text-[#1c201a]">
                Have a place in mind?
              </h2>
              <div className="mt-2 text-xs font-mono text-[#525d49] flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#47543c]" />
                <span>Connected Email: </span>
                <a 
                  href={`mailto:${STUDIO_EMAIL}`}
                  className="text-[#47543c] font-semibold underline hover:text-[#2a3424] transition-colors"
                >
                  {STUDIO_EMAIL}
                </a>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] font-mono bg-[#f0f3eb] p-2.5 border border-[#dce3d5] rounded-xs">
                {user ? (
                  <div className="flex items-center gap-2 text-[#47543c]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Signed in as <strong>{user.email}</strong> (Dossier saved to Firestore & account)</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[#687560]">Want to save and track your brief?</span>
                    <button
                      type="button"
                      onClick={() => signInWithGoogle()}
                      className="text-[#47543c] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <UserIcon className="w-3 h-3" />
                      <span>Sign in with Google</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#525d49] block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maria Locsin"
                    className="w-full bg-[#f2f5ee] border border-[#d5ded0] px-3.5 py-2.5 text-sm text-[#1e241b] placeholder-[#8c9183] focus:outline-hidden focus:border-[#47543c] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#525d49] block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maria@domain.ph"
                    className="w-full bg-[#f2f5ee] border border-[#d5ded0] px-3.5 py-2.5 text-sm text-[#1e241b] placeholder-[#8c9183] focus:outline-hidden focus:border-[#47543c] transition-colors"
                  />
                </div>
              </div>

              {/* Where in Iloilo is your project located? */}
              <div className="p-4 bg-[#f2f5ee] border border-[#d5ded0]">
                <label className="text-[11px] font-mono uppercase text-[#3f4735] font-semibold block mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#47543c]" />
                  <span>Where in Iloilo is the project located? *</span>
                </label>
                <select
                  required
                  value={formData.iloiloLocation}
                  onChange={(e) => setFormData({ ...formData, iloiloLocation: e.target.value })}
                  className="w-full bg-[#faf9f5] border border-[#d5ded0] px-3.5 py-2.5 text-sm text-[#1e241b] focus:outline-hidden focus:border-[#47543c] transition-colors"
                >
                  <optgroup label="Iloilo City Districts">
                    <option value="Jaro, Iloilo">Jaro, Iloilo</option>
                    <option value="Iloilo City Proper">Iloilo City Proper (Calle Real / Downtown)</option>
                    <option value="Mandurriao, Iloilo">Mandurriao, Iloilo (Iloilo Business Park)</option>
                    <option value="Molo, Iloilo">Molo, Iloilo</option>
                    <option value="La Paz, Iloilo">La Paz, Iloilo</option>
                    <option value="Arevalo (Villa), Iloilo">Villa Arevalo, Iloilo</option>
                    <option value="Lapuz, Iloilo">Lapuz, Iloilo</option>
                  </optgroup>
                  <optgroup label="Iloilo Province Municipalities">
                    <option value="Pavia, Iloilo">Pavia, Iloilo</option>
                    <option value="Oton, Iloilo">Oton, Iloilo</option>
                    <option value="Santa Barbara, Iloilo">Santa Barbara, Iloilo</option>
                    <option value="Leganes, Iloilo">Leganes, Iloilo</option>
                    <option value="San Miguel, Iloilo">San Miguel, Iloilo</option>
                    <option value="Guimbal, Iloilo">Guimbal, Iloilo</option>
                    <option value="Tigbauan, Iloilo">Tigbauan, Iloilo</option>
                    <option value="Miagao, Iloilo">Miagao, Iloilo</option>
                    <option value="Passi City, Iloilo">Passi City, Iloilo</option>
                    <option value="Other Iloilo Province">Other location in Iloilo Province</option>
                  </optgroup>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#525d49] block mb-1.5">
                    Project Typology
                  </label>
                  <select
                    value={formData.typology}
                    onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                    className="w-full bg-[#f2f5ee] border border-[#d5ded0] px-3.5 py-2.5 text-sm text-[#1e241b] focus:outline-hidden focus:border-[#47543c] transition-colors"
                  >
                    <option value="Residential Architecture">Residential Architecture</option>
                    <option value="Interior Environments & Millwork">Interior Environments & Millwork</option>
                    <option value="Design-Build Full Scope">Design-Build Full Scope (Architecture + Interiors)</option>
                    <option value="Commercial / Boutique Hospitality">Commercial / Boutique Hospitality</option>
                    <option value="Heritage Restoration">Heritage Restoration (Calle Real / Jaro Ancestral)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#525d49] block mb-1.5">
                    Target Investment Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#f2f5ee] border border-[#d5ded0] px-3.5 py-2.5 text-sm text-[#1e241b] focus:outline-hidden focus:border-[#47543c] transition-colors"
                  >
                    <option value="₱3M – ₱5M (Interior / Renovation)">₱3M – ₱5M (Interior / Renovation)</option>
                    <option value="₱5M – ₱15M (Bespoke Residence / Villa)">₱5M – ₱15M (Bespoke Residence / Villa)</option>
                    <option value="₱15M – ₱30M (High-End Architecture & Interiors)">₱15M – ₱30M (High-End Architecture & Interiors)</option>
                    <option value="₱30M+ (Boutique Commercial / Estate)">₱30M+ (Boutique Commercial / Estate)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#525d49] block mb-1.5">
                  Project Notes & Briefing Details
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Outline site location, lot size, target timeline, or architectural aspirations..."
                  className="w-full bg-[#f2f5ee] border border-[#d5ded0] px-3.5 py-2.5 text-sm text-[#1e241b] placeholder-[#8c9183] focus:outline-hidden focus:border-[#47543c] transition-colors"
                />
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-widest text-[#faf9f5] bg-[#47543c] hover:bg-[#38432f] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry to {STUDIO_EMAIL}</span>
                </button>
                <p className="text-[11px] text-[#5c6853] text-center font-mono">
                  Enquiries route directly to <strong>{STUDIO_EMAIL}</strong>. Responses are sent within 24 business hours.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="w-14 h-14 bg-[#47543c] text-[#faf9f5] flex items-center justify-center mx-auto rounded-full shadow-sm">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#47543c] font-semibold block mb-1">
                ENQUIRY DISPATCHED TO {STUDIO_EMAIL}
              </span>
              <h2 className="text-3xl font-editorial font-normal text-[#1c201a]">
                Salamat, {formData.name || 'Patron'}.
              </h2>
              <p className="text-sm text-[#525d49] max-w-md mx-auto mt-2 leading-relaxed">
                Your brief for <strong className="text-[#1c201a]">{formData.typology}</strong> in <strong className="text-[#47543c]">{formData.iloiloLocation}</strong> is connected directly to our studio inbox at <strong className="text-[#1c201a]">{STUDIO_EMAIL}</strong>.
              </p>
            </div>

            <div className="max-w-md mx-auto p-4 bg-[#f2f5ee] border border-[#d5ded0] text-left text-xs font-mono space-y-2 text-[#47543c]">
              <div className="flex justify-between">
                <span>Direct Studio Email:</span>
                <strong className="text-[#1c201a]">{STUDIO_EMAIL}</strong>
              </div>
              <div className="flex justify-between">
                <span>Site Location:</span>
                <span className="text-[#1c201a] font-semibold">{formData.iloiloLocation}</span>
              </div>
              <div className="flex justify-between">
                <span>Client Contact:</span>
                <span className="text-[#1c201a]">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span>Principals:</span>
                <span className="text-[#1c201a]">Ar. Rosie Joy Teves & IDr. Christian Delima</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={constructMailtoUrl()}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#faf9f5] bg-[#47543c] hover:bg-[#38432f] transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Email App</span>
              </a>

              <button
                onClick={handleCopyDossier}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#47543c] border border-[#47543c] hover:bg-[#47543c] hover:text-[#faf9f5] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied Brief!' : 'Copy Brief Details'}</span>
              </button>

              <button
                onClick={handleReset}
                className="px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-[#525d49] hover:text-[#1c201a] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
