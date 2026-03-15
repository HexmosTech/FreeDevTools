import {
  cancelSubscription,
  getActiveLicence,
  getAvailablePlans,
  getDefaultCurrency,
  getLicences,
  type ActiveLicence,
  type AvailablePlan,
  type LicenceDetails,
  type LicenceDetailsInfo,
  type LicenceRenewal,
  type PurchasesData,
} from '@/lib/api';
import { ArrowRight, Ban, BookmarkPlus, Infinity, Loader2, Puzzle, Search, ShieldCheck, Zap } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ProDashboard from './ProDashboard';

const PURCHASE_URL = 'https://purchase.hexmos.com/freedevtools/subscription';

// Get JWT from localStorage
function getJWT(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('hexmos-one');
}

const ShowPlans: React.FC = () => {
  const [hasJWT, setHasJWT] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('hexmos-one');
  });
  // New state for getLicences API
  const [activeLicence, setActiveLicence] = useState<ActiveLicence | null>(() => {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem('fdt_active_licence');
    if (!stored) return null;
    try { return JSON.parse(stored); } catch { return null; }
  });
  const [purchasesData, setPurchasesData] = useState<PurchasesData | null>(null);
  const [licenceDetails, setLicenceDetails] = useState<LicenceDetailsInfo | null>(null);
  const [licence, setLicence] = useState<LicenceDetails | null>(() => {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem('fdt_active_licence');
    if (!stored) return null;
    try {
      const active: ActiveLicence = JSON.parse(stored);
      const isActive = active.activeStatus === true ||
        active.activeStatus === 'true' ||
        active.activeStatus === 'active';
      return {
        activeStatus: isActive,
        name: active.name,
        licenceId: active.licenceId,
        platform: active.platform,
        expirationDate: active.expirationDate || '',
        expireAt: active.expireAt || '',
        type: 'paid',
        amount: '0',
        noOfDays: 0,
      };
    } catch { return null; }
  });
  const [renewals, setRenewals] = useState<LicenceRenewal[]>([]);
  const [availablePlans, setAvailablePlans] = useState<AvailablePlan[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingPlans, setIsLoadingPlans] = useState<boolean>(true);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [isCurrencyDetected, setIsCurrencyDetected] = useState<boolean>(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState<boolean>(false);
  const currencyDropdownRef = useRef<HTMLDivElement>(null);
  const currencyButtonRef = useRef<HTMLButtonElement>(null);

  // Common currencies
  const currencies = [
    { code: 'USD', name: 'US Dollar ($)' },
    { code: 'INR', name: 'Indian Rupee (₹)' },
  ];

  const handlePurchaseClick = (url: string) => {
    const isVSCode = typeof window !== 'undefined' &&
      (window.location.search.includes('vscode=true') ||
        window.location.hash.includes('vscode=true') ||
        sessionStorage.getItem('isVSCode') === 'true');

    if (isVSCode && window.parent) {
      window.parent.postMessage({ command: 'open-external', url }, '*');
    } else {
      window.location.href = url;
    }
  };

  // Auto-detect currency on mount (similar to Pricing.tsx)
  useEffect(() => {
    (async () => {
      // Auto-detect currency from IP API
      const detectedCurrency = await getDefaultCurrency();
      setSelectedCurrency(detectedCurrency);
      setIsCurrencyDetected(true);
    })();
  }, []);

  // Close currency dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        currencyDropdownRef.current &&
        currencyButtonRef.current &&
        !currencyDropdownRef.current.contains(event.target as Node) &&
        !currencyButtonRef.current.contains(event.target as Node)
      ) {
        setIsCurrencyDropdownOpen(false);
      }
    };

    if (isCurrencyDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isCurrencyDropdownOpen]);

  // Close currency dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isCurrencyDropdownOpen) {
        setIsCurrencyDropdownOpen(false);
      }
    };

    if (isCurrencyDropdownOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isCurrencyDropdownOpen]);

  // Use a ref to store the current currency to avoid recreating the callback
  const currencyRef = useRef(selectedCurrency);
  currencyRef.current = selectedCurrency;

  const fetchAvailablePlans = useCallback(async (currencyCode?: string) => {
    const currency = currencyCode || currencyRef.current;
    console.log('[ShowPlans] fetchAvailablePlans called with currency:', currency);
    setIsLoadingPlans(true);
    try {
      const { success, data } = await getAvailablePlans(currency);
      console.log('[ShowPlans] Available plans response:', { success, data });
      if (success && data) {
        setAvailablePlans(data);
      }
    } catch (error) {
      console.error('[ShowPlans] Error fetching available plans:', error);
    } finally {
      setIsLoadingPlans(false);
    }
  }, []); // No dependencies - use ref instead

  const fetchPlanDetails = useCallback(async (currency?: string) => {
    console.log('[ShowPlans] fetchPlanDetails called with currency:', currency || currencyRef.current);
    setIsLoading(true);
    const currentCurrency = currency || currencyRef.current;
    try {
      // Try getLicences first (same as Purchases.tsx)
      const licencesResult = await getLicences();
      console.log('[ShowPlans] getLicences response:', licencesResult);

      if (licencesResult.success) {
        if (licencesResult.activeLicence) {
          const isActive = licencesResult.activeLicence.activeStatus === true ||
            licencesResult.activeLicence.activeStatus === 'true' ||
            licencesResult.activeLicence.activeStatus === 'active';

          setActiveLicence(licencesResult.activeLicence);
          setLicenceDetails(licencesResult.licenceDetails || null);

          // Map to legacy state format so existing UI works
          const mappedLicence: LicenceDetails = {
            activeStatus: isActive,
            name: licencesResult.activeLicence.name,
            licenceId: licencesResult.activeLicence.licenceId,
            platform: licencesResult.activeLicence.platform,
            expirationDate: licencesResult.activeLicence.expirationDate || '',
            expireAt: licencesResult.activeLicence.expireAt || '',
            type: (licencesResult.licenceDetails?.type as 'paid' | 'trial') || 'paid',
            amount: '0',
            noOfDays: 0,
          };
          setLicence(mappedLicence);
          setRenewals([]);

          // If activeStatus is false, also fetch available plans
          if (!isActive) {
            console.log('[ShowPlans] ActiveStatus is false, fetching available plans');
            fetchAvailablePlans(currentCurrency);
          }

          setIsLoading(false);
          return;
        } else if (licencesResult.purchasesData) {
          setPurchasesData(licencesResult.purchasesData);
          setLicenceDetails(licencesResult.licenceDetails || null);

          // Map to legacy state format so existing UI works
          if (licencesResult.purchasesData.lastPurchasedLicence) {
            const last = licencesResult.purchasesData.lastPurchasedLicence;
            const isActive = (last.activeStatus as any) === true ||
              last.activeStatus === 'true' ||
              last.activeStatus === 'active';

            setLicence({
              activeStatus: isActive,
              name: last.name,
              licenceId: last.licenceId,
              platform: last.platform,
              expirationDate: last.expirationDate || '',
              expireAt: last.expireAt || '',
              type: (last.type as 'paid' | 'trial') || 'paid',
              amount: last.amount || '0',
              noOfDays: last.noOfDays || 0,
            });

            if (licencesResult.purchasesData.licenceHistory) {
              setRenewals(licencesResult.purchasesData.licenceHistory);
            }
          }
          setIsLoading(false);
          return;
        }
      }

      // If getLicences returns success:false (no active licence), fetch available plans
      if (!licencesResult.success && licencesResult.error) {
        console.log('[ShowPlans] No active licence, fetching available plans');
        fetchAvailablePlans(currentCurrency);
      }
    } catch (error) {
      console.error('[ShowPlans] Error fetching plan details:', error);
      // Fetch available plans on error too
      fetchAvailablePlans(currentCurrency);
    } finally {
      setIsLoading(false);
    }
  }, [fetchAvailablePlans]);

  // Use a ref to track if we've already fetched to prevent duplicate calls
  const hasFetchedRef = useRef(false);
  const hasFetchedPlansRef = useRef(false);

  useEffect(() => {
    // Wait for currency detection to complete before fetching plans
    if (!isCurrencyDetected) return;

    const jwt = getJWT();
    const jwtExists = !!jwt;

    setHasJWT(jwtExists);

    // Check for active licence in localStorage first
    const storedLicence = getActiveLicence();
    if (storedLicence) {
      setActiveLicence(storedLicence);
      // Map to legacy state format so existing UI works on reload
      const isActive = storedLicence.activeStatus === true ||
        storedLicence.activeStatus === 'true' ||
        storedLicence.activeStatus === 'active';

      setLicence({
        activeStatus: isActive,
        name: storedLicence.name,
        licenceId: storedLicence.licenceId,
        platform: storedLicence.platform,
        expirationDate: storedLicence.expirationDate || '',
        expireAt: storedLicence.expireAt || '',
        type: 'paid', // Default to paid for stored licences
        amount: '0',
        noOfDays: 0,
      });
    }

    if (jwtExists) {
      // Only fetch plan details once
      if (!hasFetchedRef.current) {
        hasFetchedRef.current = true;
        fetchPlanDetails(selectedCurrency);
      }
    } else {
      setIsLoading(false);
      // Clear all state
      setLicence(null);
      setRenewals([]);
      setActiveLicence(null);
      setPurchasesData(null);
      setLicenceDetails(null);
      // Fetch available plans when no JWT - use the detected currency
      // Only fetch once, but make sure we use the correct currency
      if (!hasFetchedPlansRef.current) {
        hasFetchedPlansRef.current = true;
        fetchAvailablePlans(selectedCurrency);
      }
    }
  }, [isCurrencyDetected, fetchPlanDetails, fetchAvailablePlans, selectedCurrency]);

  useEffect(() => {
    const handleJWTChange = () => {
      const jwt = getJWT();
      const jwtExists = !!jwt;

      setHasJWT(jwtExists);

      // Only fetch if JWT status actually changed and we haven't already fetched
      if (jwtExists && !hasFetchedRef.current) {
        hasFetchedRef.current = true;
        fetchPlanDetails();
      } else if (!jwtExists) {
        setIsLoading(false);
        // Clear all state
        setLicence(null);
        setRenewals([]);
        setActiveLicence(null);
        setPurchasesData(null);
        setLicenceDetails(null);
        if (!hasFetchedRef.current) {
          hasFetchedRef.current = true;
          fetchAvailablePlans();
        }
      }
    };

    const handleActiveLicenceChange = () => {
      const storedLicence = getActiveLicence();
      if (storedLicence) {
        setActiveLicence(storedLicence);
      } else {
        setActiveLicence(null);
      }
    };

    // Listen for custom event (dispatched from Signin component)
    window.addEventListener('jwt-changed', handleJWTChange);

    // Listen for active licence changes
    window.addEventListener('active-licence-changed', handleActiveLicenceChange);

    // Also listen for storage event (for cross-tab sync)
    window.addEventListener('storage', (e) => {
      if (e.key === 'hexmos-one') {
        handleJWTChange();
      } else if (e.key === 'fdt_active_licence') {
        handleActiveLicenceChange();
      }
    });

    return () => {
      window.removeEventListener('jwt-changed', handleJWTChange);
      window.removeEventListener('active-licence-changed', handleActiveLicenceChange);
      window.removeEventListener('storage', handleJWTChange);
    };
  }, [fetchPlanDetails, fetchAvailablePlans]);

  const handleCancelSubscription = async () => {
    if (!licence) return;

    try {
      const cancellationPayload = {
        licenceId: licence.licenceId,
        provider: licence.platform,
      };
      const { success } = await cancelSubscription(cancellationPayload);
      if (success) {
        alert('Subscription cancelled successfully');
        await fetchPlanDetails();
      } else {
        throw new Error('Failed to cancel subscription');
      }
    } catch (error) {
      console.error('Error cancelling subscription:', error);
      alert('Failed to cancel subscription. Please try again.');
    }
  };

  // Show loader while fetching initial details if user is potentially logged in
  if (isLoading && hasJWT) {
    return (
      <div className="flex items-center justify-center p-20 w-full min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-muted-foreground animate-pulse">Checking license status...</p>
        </div>
      </div>
    );
  }

  // If no JWT or no licence, show plans
  if (!hasJWT || !licence) {
    // Find the primary plan (first one, or lifetime)
    const primaryPlan = availablePlans.length > 0 ? availablePlans[0] : null;

    return (
      <div className="w-full max-w-3xl mx-auto pb-16">
        {/* Inline keyframe styles for animations */}
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.92); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 0 0 hsl(var(--primary) / 0.3); }
            50% { box-shadow: 0 0 20px 4px hsl(var(--primary) / 0.15); }
          }
          .animate-fade-in-up { animation: fadeInUp 0.6s ease-out both; }
          .animate-fade-in-up-1 { animation: fadeInUp 0.6s ease-out 0.1s both; }
          .animate-fade-in-up-2 { animation: fadeInUp 0.6s ease-out 0.2s both; }
          .animate-fade-in-up-3 { animation: fadeInUp 0.6s ease-out 0.3s both; }
          .animate-fade-in-up-4 { animation: fadeInUp 0.6s ease-out 0.4s both; }
          .animate-fade-in-up-5 { animation: fadeInUp 0.6s ease-out 0.5s both; }
          .animate-fade-in-up-6 { animation: fadeInUp 0.6s ease-out 0.6s both; }
          .animate-fade-in-up-7 { animation: fadeInUp 0.6s ease-out 0.7s both; }
          .animate-fade-in-scale { animation: fadeInScale 0.5s ease-out both; }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
          .gif-placeholder {
            background: linear-gradient(
              110deg,
              hsl(var(--primary) / 0.05) 0%,
              hsl(var(--primary) / 0.12) 40%,
              hsl(var(--primary) / 0.05) 60%,
              hsl(var(--primary) / 0.12) 100%
            );
            background-size: 200% 100%;
            animation: shimmer 3s ease-in-out infinite;
          }
          .benefit-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .benefit-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px -12px hsl(var(--primary) / 0.25);
          }
          @keyframes shineSweep {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>

        {/* ═══════════════════ HERO SECTION ═══════════════════ */}
        <div className="pt-8 pb-8 px-4 animate-fade-in-up">
          <img
            src="/freedevtools/public/freedevtools-logo_32.webp"
            alt="Free DevTools Logo"
            className="w-8 h-8 mb-4"
          />
          <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 leading-tight" role="heading" aria-level={1}>
            FREE DEVTOOLS <span className="text-primary">LIFETIME</span>
          </div>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-lg">
            Unlock the full power of Free DevTools — once, forever.
          </p>
        </div>

        {/* ═══════════════════ FEATURES GRID ═══════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 px-4 animate-fade-in-up-1">
          {[
            { icon: <Ban className="w-5 h-5 text-primary flex-shrink-0" />, title: 'No Ads', desc: 'Explore all resources without distractions — zero ads, pop-ups, or banners' },
            { icon: <Puzzle className="w-5 h-5 text-primary flex-shrink-0" />, title: 'Extensions & Plugins', desc: 'Search, download, and explore resources right within your VS Code editor and more.' },
            { icon: <BookmarkPlus className="w-5 h-5 text-primary flex-shrink-0" />, title: 'Unlimited Bookmarks', desc: 'Save and easily access your favorite resources for future reference — no limits' },
            { icon: <Search className="w-5 h-5 text-primary flex-shrink-0" />, title: 'Unlimited Search', desc: 'Instant, unlimited search across 350K+ resources' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="mt-0.5">{item.icon}</div>
              <div>
                <p className="text-base font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════════════ PRICE + CTA ═══════════════════ */}
        <div className="px-4 mb-12 animate-fade-in-up-2">
          {!primaryPlan && isLoadingPlans ? (
            <div className="flex py-6">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          ) : primaryPlan ? (
            <div className="space-y-4">
              {/* Currency Toggle */}
              <div className="flex items-center rounded-full border border-border bg-card p-0.5 w-fit">
                {currencies.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => {
                      setSelectedCurrency(currency.code);
                      fetchAvailablePlans(currency.code);
                    }}
                    className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${selectedCurrency === currency.code
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    {currency.code === 'INR' ? '₹ INR' : '$ USD'}
                  </button>
                ))}
              </div>

              {/* Price display - fixed min-height to prevent layout shift */}
              <div className="min-h-[3.5rem] flex items-center">
                <div
                  className="transition-all duration-300 ease-in-out"
                  style={{ opacity: isLoadingPlans ? 0.3 : 1, transform: isLoadingPlans ? 'scale(0.97)' : 'scale(1)' }}
                >
                  {primaryPlan.actualAmount && primaryPlan.discountedAmount && primaryPlan.actualAmount !== primaryPlan.discountedAmount && (
                    <span className="line-through text-muted-foreground text-lg mr-2">
                      {primaryPlan.currencySymbol || (primaryPlan.currency === 'INR' ? '₹' : '$')}{primaryPlan.actualAmount}
                    </span>
                  )}
                  <span className="text-4xl md:text-5xl font-extrabold text-foreground">
                    <span className="text-2xl md:text-3xl">{primaryPlan.currencySymbol || (primaryPlan.currency === 'INR' ? '₹' : '$')}</span>
                    {primaryPlan.discountedAmount || primaryPlan.actualAmount}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={() => {
                    const purchaseUrl = primaryPlan.objectId
                      ? `https://purchase.hexmos.com/freedevtools/subscription/${primaryPlan.objectId}`
                      : PURCHASE_URL;
                    handlePurchaseClick(purchaseUrl);
                  }}
                  className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-16 py-3.5 text-lg font-semibold rounded-xl bg-primary text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98] animate-pulse-glow cursor-pointer"
                >
                  {/* Glossy shine sweep - continuous */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    style={{ animation: 'shineSweep 3s ease-in-out infinite' }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Get Premium
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </button>
                <p className="mt-3 text-base text-muted-foreground">
                  One-time investment, forever.
                </p>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground py-4">No plans available at the moment.</p>
          )}
        </div>

        {/* ═══════════════════ WHY UPGRADE ═══════════════════ */}
        <div className="px-4">

          {/* Section: Title */}
          <div className="pt-8 pb-10 border-t border-border animate-fade-in-up-3">
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground" role="heading" aria-level={2}>
              Why upgrade?
            </div>
          </div>

          {/* ────── 1. No Disturbing Ads ────── */}
          <div className="mb-14 animate-fade-in-up-3">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              <ShieldCheck className="w-5 h-5 inline-block mr-2 text-primary align-text-bottom" />
              No Disturbing Ads
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              Enjoy a completely clean, distraction-free interface. No banners, no pop-ups — just your resources.
            </p>
            {/* No Ads Video */}
            <div className="benefit-card rounded-2xl border border-border overflow-hidden">
              <video
                className="w-full h-auto"
                src="/freedevtools/public/videos/no-ads.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          {/* ────── 2. Unlimited Usage ────── */}
          <div className="mb-14 animate-fade-in-up-4">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              <Infinity className="w-5 h-5 inline-block mr-2 text-primary align-text-bottom" />
              Unlimited Usage
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              No caps, no limits. Bookmark, download, and search as much as you want.
            </p>

            {/* Two GIFs side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-8">
              <div className="space-y-6 sm:space-y-3">
                <div className="gif-placeholder benefit-card rounded-2xl border border-border h-36 md:h-48 flex items-center justify-center">
                  <div className="benefit-card rounded-2xl border border-border overflow-hidden">
                    <video
                      className="w-full h-auto"
                      src="/freedevtools/public/videos/bookmark.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-foreground">Unlimited Bookmarks</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Save any resource to your bookmarks and pull it up whenever you need it.</p>
                </div>
              </div>
              <div className="space-y-6 sm:space-y-3">
                <div className="gif-placeholder benefit-card rounded-2xl border border-border h-36 md:h-48 flex items-center justify-center">
                  <div className="benefit-card rounded-2xl border border-border overflow-hidden">
                    <video
                      className="w-full h-auto"
                      src="/freedevtools/public/videos/downloads.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-foreground">Unlimited Downloads</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Download any icon in different sizes and formats — save SVG or PNG instantly.</p>
                </div>
              </div>
            </div>

            {/* Full-width GIF */}
            <div className="space-y-6 sm:space-y-3">
              <div className="benefit-card rounded-2xl border border-border overflow-hidden">
                <img
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '14rem' }}
                  src="/freedevtools/public/videos/search.gif"
                  alt="Unlimited Search Demo"
                />
              </div>
              <div>
                <p className="text-sm md:text-base font-semibold text-foreground">Unlimited Search</p>
                <p className="text-sm text-muted-foreground mt-0.5">Unlimited instant search across 350K+ resources — icons, man pages, cheatsheets, MCPs, and more.</p>
              </div>
            </div>
          </div>

          {/* ────── 3. Extensions & Plugins ────── */}
          <div className="mb-14 animate-fade-in-up-5">
            <div className="text-xl md:text-2xl font-semibold text-foreground mb-2" role="heading" aria-level={3}>
              <Puzzle className="w-5 h-5 inline-block mr-2 text-primary align-text-bottom" />
              Extensions & Plugins
            </div>
            <p className="text-base text-muted-foreground mb-6">
              Use Free DevTools right inside your favorite editor or plugin.
            </p>

            {/* VS Code Extension - Clickable card */}
            <a
              href="/freedevtools/vs-code-extension/"
              className="block benefit-card rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors cursor-pointer"
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  src="https://www.youtube.com/embed/8EE9jHNAg_0?autoplay=1&mute=1&loop=1&playlist=8EE9jHNAg_0&controls=0&modestbranding=1&rel=0"
                  title="Free DevTools VS Code Extension Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center gap-3 p-4">
                <img
                  src="/freedevtools/svg_icons/vscode/vscode-original.svg"
                  alt="VS Code"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div>
                  <p className="text-base font-semibold text-foreground">VS Code Extension</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Search, download Access icons, cheatsheets, and resources directly from your editor sidebar.</p>
                </div>
              </div>
            </a>
          </div>

          {/* ────── 4. Future Possibilities ────── */}
          <div className="mb-8 animate-fade-in-up-6">
            <div className="text-xl md:text-2xl font-semibold text-foreground mb-2" role="heading" aria-level={3}>
              <Zap className="w-5 h-5 inline-block mr-2 text-primary align-text-bottom" />
              Future Possibilities
            </div>
            <p className="text-base text-muted-foreground mb-6">
              Your lifetime purchase covers everything we build next.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* More Extensions */}
              <div className="benefit-card rounded-xl border border-dashed border-primary/30 bg-primary/5 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base font-semibold text-foreground">More Extensions</span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">Coming Soon</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="/freedevtools/svg_icons/chrome/chrome-original.svg"
                    alt="Chrome"
                    className="w-7 h-7"
                  />
                  <img
                    src="/freedevtools/svg_icons/figma/figma-original.svg"
                    alt="Figma"
                    className="w-7 h-7"
                  />
                </div>
              </div>

              {/* Early Access */}
              <div className="benefit-card rounded-xl border border-dashed border-primary/30 bg-primary/5 p-5">
                <span className="text-base font-semibold text-foreground">Early Access</span>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  Be the first to try new resources, features, and integrations before anyone else.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════ BOTTOM CTA BANNER ═══════════════════ */}
        {primaryPlan && (
          <div className="mt-8 mx-4 animate-fade-in-up-7">
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-2" role="heading" aria-level={2}>
                  Ready to go Premium?
                </div>
                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-md">
                  One payment. Lifetime access. No subscriptions, No surprises.
                </p>
                <button
                  onClick={() => {
                    const purchaseUrl = primaryPlan.objectId
                      ? `https://purchase.hexmos.com/freedevtools/subscription/${primaryPlan.objectId}`
                      : PURCHASE_URL;
                    handlePurchaseClick(purchaseUrl);
                  }}
                  className="group relative inline-flex items-center justify-center gap-2 px-16 py-4 text-lg font-semibold rounded-xl bg-primary text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98] animate-pulse-glow cursor-pointer"
                >
                  {/* Glossy shine sweep - continuous */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    style={{ animation: 'shineSweep 3s ease-in-out infinite' }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Get Premium
                    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // If license exists, show dashboard
  if (licence || activeLicence) {
    return (
      <ProDashboard
        licence={licence!}
        renewals={renewals}
        activeLicence={activeLicence}
        licenceDetails={licenceDetails}
        purchasesData={purchasesData}
        onCancelSubscription={handleCancelSubscription}
        handlePurchaseClick={handlePurchaseClick}
      />
    );
  }

  // Fallback (should not reach here if logic above is correct)
  return null;
};

export default ShowPlans;

