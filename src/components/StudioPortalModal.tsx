import React, { useState, useEffect } from 'react';
import { X, Mail, CheckCircle2, Clock, Filter, LogOut, LogIn, ExternalLink, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext.tsx';
import { subscribeToEnquiries, updateEnquiryStatus, StoredEnquiry } from '../services/enquiries.ts';

interface StudioPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudioPortalModal: React.FC<StudioPortalModalProps> = ({ isOpen, onClose }) => {
  const { user, profile, isAdmin, signInWithGoogle, signOutUser, loading } = useAuth();
  const [enquiries, setEnquiries] = useState<StoredEnquiry[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  useEffect(() => {
    if (!isOpen) return;

    const unsubscribe = subscribeToEnquiries((data) => {
      setEnquiries(data);
    }, user?.uid, isAdmin);

    return () => unsubscribe();
  }, [isOpen, user?.uid, isAdmin]);

  if (!isOpen) return null;

  const filtered = enquiries.filter(item => {
    if (filterStatus === 'all') return true;
    return item.status === filterStatus;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#faf9f5] text-[#1e241b] border border-[#dce3d5] shadow-2xl p-6 md:p-8 max-h-[92vh] overflow-y-auto rounded-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#dce3d5]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-editorial text-lg font-bold tracking-tight text-[#1c201a]">
                IB DESIGN
              </span>
              <span className="text-[#a4a99d]">·</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#47543c] font-semibold">
                Studio Enquiries Portal
              </span>
              {isAdmin && (
                <span className="px-2 py-0.5 bg-[#47543c] text-[#faf9f5] text-[9px] font-mono uppercase tracking-wider rounded-xs">
                  Principal Admin
                </span>
              )}
            </div>
            <p className="text-xs font-mono text-[#5f6c54] mt-1">
              Connected destination: <strong>ib.designsph@gmail.com</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2 text-xs font-mono text-[#38432f]">
                <span className="hidden sm:inline">{user.email}</span>
                <button
                  onClick={signOutUser}
                  className="p-1.5 hover:text-red-700 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#47543c] text-[#faf9f5] text-xs font-mono uppercase tracking-wider hover:bg-[#38432f] transition-colors rounded-xs cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Google Sign-In</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-[#555a4d] hover:text-[#242921] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auth prompt if not logged in */}
        {!user && (
          <div className="my-6 p-4 bg-[#f2f5ee] border border-[#d5ded0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#1c201a]">
                Sign in with Google to view submitted consultation dossiers
              </p>
              <p className="text-xs text-[#5f6c54] mt-0.5">
                Studio principals and clients can track submitted briefs in real-time.
              </p>
            </div>
            <button
              onClick={signInWithGoogle}
              className="px-4 py-2 bg-[#47543c] hover:bg-[#38432f] text-[#faf9f5] text-xs font-mono uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
            >
              Sign In with Google
            </button>
          </div>
        )}

        {/* Controls & Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-[#e5ebd0]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#64715a]">
              Status Filter:
            </span>
            <div className="flex gap-1">
              {['all', 'pending', 'in_review', 'consulted'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer rounded-xs ${
                    filterStatus === status 
                      ? 'bg-[#47543c] text-[#faf9f5]' 
                      : 'bg-[#edf1e7] text-[#47543c] hover:bg-[#e0e7d8]'
                  }`}
                >
                  {status.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>

          <span className="text-xs font-mono text-[#64715a]">
            {filtered.length} {filtered.length === 1 ? 'Record' : 'Records'}
          </span>
        </div>

        {/* Enquiries List */}
        <div className="py-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-xs font-mono text-[#78856e] space-y-2">
              <Clock className="w-6 h-6 mx-auto stroke-[1.5] text-[#a0ad97]" />
              <p>No enquiries found for this filter.</p>
              <p className="text-[11px] text-[#8e9c85]">
                Incoming consultation forms automatically appear here in real-time.
              </p>
            </div>
          ) : (
            filtered.map((enq) => (
              <div 
                key={enq.id}
                className="p-5 bg-[#f5f7f2] border border-[#dce3d5] space-y-3 rounded-xs"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-editorial text-lg font-bold text-[#1c201a]">
                      {enq.name}
                    </h3>
                    <div className="text-xs font-mono text-[#47543c] flex flex-wrap items-center gap-2 mt-0.5">
                      <span>{enq.email}</span>
                      {enq.organization && <span>· {enq.organization}</span>}
                      <span>· {enq.iloiloLocation}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs font-semibold ${
                      enq.status === 'consulted'
                        ? 'bg-emerald-800 text-emerald-100'
                        : enq.status === 'in_review'
                        ? 'bg-amber-800 text-amber-100'
                        : 'bg-[#47543c] text-[#faf9f5]'
                    }`}>
                      {enq.status.replace('_', ' ')}
                    </span>

                    {/* Admin status switcher */}
                    {isAdmin && (
                      <select
                        value={enq.status}
                        onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                        className="text-[11px] font-mono bg-[#faf9f5] border border-[#cbd5c3] px-2 py-1 text-[#242921]"
                      >
                        <option value="pending">Pending</option>
                        <option value="in_review">In Review</option>
                        <option value="consulted">Consulted</option>
                        <option value="archived">Archived</option>
                      </select>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono pt-1 text-[#55614d]">
                  <div>
                    <span className="text-[#84927b]">Typology: </span>
                    <strong className="text-[#1c201a]">{enq.typology}</strong>
                  </div>
                  <div>
                    <span className="text-[#84927b]">Target Investment: </span>
                    <strong className="text-[#1c201a]">{enq.budget}</strong>
                  </div>
                </div>

                {enq.notes && (
                  <p className="text-xs text-[#414b3a] bg-[#eaeee4] p-3 rounded-xs font-light leading-relaxed">
                    "{enq.notes}"
                  </p>
                )}

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#74826b] border-t border-[#d8e0d1]">
                  <span>Received: {new Date(enq.createdAt).toLocaleDateString()}</span>
                  <a
                    href={`mailto:${enq.email}?subject=Re: IB Design Consultation (${enq.typology})&body=Dear ${enq.name},%0D%0A%0D%0AThank you for reaching out to IB Design Studio regarding your project in ${enq.iloiloLocation}.`}
                    className="inline-flex items-center gap-1 text-[#47543c] font-semibold hover:underline"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Reply via Email</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
