import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
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
import { Check, ChevronDown, DownloadIcon, Loader2, ShieldCheck, Infinity, Search, Puzzle, BookmarkPlus, Zap, Ban, ArrowRight } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import PurchaseHistory from './PurchaseHistory';

const PURCHASE_URL = 'https://purchase.hexmos.com/freedevtools/subscription';

// Get JWT from localStorage
function getJWT(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('hexmos-one');
}

const ShowPlans: React.FC = () => {
  const [hasJWT, setHasJWT] = useState<boolean>(false);
  // New state for getLicences API
  const [activeLicence, setActiveLicence] = useState<ActiveLicence | null>(null);
  const [purchasesData, setPurchasesData] = useState<PurchasesData | null>(null);
  const [licenceDetails, setLicenceDetails] = useState<LicenceDetailsInfo | null>(null);
  const [licence, setLicence] = useState<LicenceDetails | null>(null);
  const [renewals, setRenewals] = useState<LicenceRenewal[]>([]);
  const [availablePlans, setAvailablePlans] = useState<AvailablePlan[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingPlans, setIsLoadingPlans] = useState<boolean>(true);
  const [cancelModal, setCancelModal] = useState<boolean>(false);
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
          setActiveLicence(licencesResult.activeLicence);
          setLicenceDetails(licencesResult.licenceDetails || null);
          // Clear legacy state
          setLicence(null);
          setRenewals([]);

          // If activeStatus is false, also fetch available plans
          const isActive = licencesResult.activeLicence.activeStatus === true ||
            licencesResult.activeLicence.activeStatus === 'true' ||
            licencesResult.activeLicence.activeStatus === 'active';
          if (!isActive) {
            console.log('[ShowPlans] ActiveStatus is false, fetching available plans');
            fetchAvailablePlans(currentCurrency);
          }

          setIsLoading(false);
          return;
        } else if (licencesResult.purchasesData) {
          setPurchasesData(licencesResult.purchasesData);
          setLicenceDetails(licencesResult.licenceDetails || null);
          // Clear legacy state
          setLicence(null);
          setRenewals([]);
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
    } finally {
      setCancelModal(false);
    }
  };

  const getCancelElement = () => {
    if (!licence) return null;

    if (licence.activeStatus === true) {
      if (licence.platform === 'apple') {
        return (
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Want to Cancel Subscription? </strong>Cancel from <strong>App Purchases</strong> in your settings
          </p>
        );
      } else {
        return (
          <Button
            className="w-36 text-sm mt-4"
            variant="destructive"
            onClick={() => setCancelModal(true)}
          >
            Cancel Subscription
          </Button>
        );
      }
    } else {
      return (
        <Button
          className="text-sm mt-4"
          variant="default"
          onClick={() => {
            handlePurchaseClick(PURCHASE_URL);
          }}
        >
          Buy New Subscription
        </Button>
      );
    }
  };

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

  const customBodyTemplate = ({ receiptUrl }: { receiptUrl?: string }) => {
    return (
      receiptUrl && (
        <a href={receiptUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Download Receipt
          </Button>
        </a>
      )
    );
  };

  // If no JWT, show plans
  if (!hasJWT) {
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
            { icon: <Ban className="w-5 h-5 text-primary flex-shrink-0" />, title: 'No Ads', desc: 'Browse and use all resources without any distracting advertisements.' },
            { icon: <Puzzle className="w-5 h-5 text-primary flex-shrink-0" />, title: 'Extensions & Plugins', desc: 'Use Free DevTools right inside VS Code, Chrome, and more.' },
            { icon: <BookmarkPlus className="w-5 h-5 text-primary flex-shrink-0" />, title: 'Unlimited Bookmarks', desc: 'Save as many resources to your personal collection as you need.' },
            { icon: <Search className="w-5 h-5 text-primary flex-shrink-0" />, title: 'Unlimited Search', desc: 'Search across all categories — icons, cheatsheets, man pages, and more.' },
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="gif-placeholder benefit-card rounded-2xl border border-border h-36 md:h-48 flex items-center justify-center">
                  <span className="text-muted-foreground text-base font-medium tracking-wide">gif</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">Unlimited Bookmarks</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Save any tool or resource to your personal collection without limits.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="gif-placeholder benefit-card rounded-2xl border border-border h-36 md:h-48 flex items-center justify-center">
                  <span className="text-muted-foreground text-base font-medium tracking-wide">gif</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">Unlimited Downloads</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Export and download any output — icons, code, data — without restrictions.</p>
                </div>
              </div>
            </div>

            {/* Full-width GIF */}
            <div className="space-y-3">
              <div className="gif-placeholder benefit-card rounded-2xl border border-border h-44 md:h-56 flex items-center justify-center">
                <span className="text-muted-foreground text-base font-medium tracking-wide">gif</span>
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">Unlimited Search</p>
                <p className="text-sm text-muted-foreground mt-0.5">Search across all resources, icons, cheatsheets, and more — no daily limits.</p>
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
              Use Free DevTools right inside your favorite editor.
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
                  <p className="text-sm text-muted-foreground mt-0.5">Access icons, cheatsheets, and resources directly from your editor sidebar.</p>
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
                  One payment. Lifetime access. No subscriptions, no surprises.
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

  // If JWT exists, show current plan details
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  // Prioritize showing PurchaseHistory if we have data from getLicences
  if (activeLicence || purchasesData) {
    // Check if activeStatus is false - if so, also show available plans
    const isActiveStatusFalse = activeLicence && (
      activeLicence.activeStatus === false ||
      activeLicence.activeStatus === 'false'
    );

    return (
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <PurchaseHistory
          activeLicence={activeLicence || undefined}
          purchasesData={purchasesData || undefined}
          licenceDetails={licenceDetails || undefined}
        />

        {/* Show available plans if activeStatus is false */}
        {isActiveStatusFalse && (
          <>
            {isLoadingPlans ? (
              <div className="flex gap-4 w-full justify-center">
                <div className="w-80 h-96 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-xl animate-pulse" />
              </div>
            ) : availablePlans.length > 0 ? (
              <div>
                <div className="flex flex-col gap-4 mb-4">
                  <h2 className="text-2xl font-semibold text-center">Available Plans</h2>
                  <div className="flex justify-center">
                    <select
                      value={selectedCurrency}
                      onChange={(e) => {
                        setSelectedCurrency(e.target.value);
                        fetchAvailablePlans(e.target.value);
                      }}
                      className="w-[200px] px-3 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 justify-center w-full">
                  {availablePlans.map((plan, index) => {
                    // Parse features from description JSON string
                    let features: string[] = [];
                    if (plan.description) {
                      try {
                        features = JSON.parse(plan.description);
                      } catch (e) {
                        console.error('Failed to parse description:', e);
                      }
                    }

                    return (
                      <Card
                        key={plan.objectId || index}
                        className="flex-1 flex flex-col justify-between overflow-hidden max-w-96 border border-gray-200 dark:border-slate-800 dark:bg-slate-900 rounded-xl"
                      >
                        <div>
                          <div className="p-0 flex flex-col items-center max-w-96 rounded-xl">
                            <div className="text-sm my-3 text-center font-bold text-gray-700 dark:text-gray-300 font-mono tracking-wider">
                              {plan.name.toUpperCase().replace('FREEDEVTOOLS', '')}
                            </div>
                            {/* Divider line */}
                            <div className="w-full h-px bg-gray-100 dark:bg-gray-700 mb-4"></div>
                            <div className="text-l text-center">
                              <span className="block text-gray-500 dark:text-gray-400 text-xl">
                                {plan.purchaseType === 'one-time' ? (
                                  <>
                                    {plan.actualAmount && plan.discountedAmount && plan.actualAmount !== plan.discountedAmount && (
                                      <span className="line-through block text-gray-400 dark:text-gray-500 text-xl mb-1">
                                        <span className="text-xs">{plan.currencySymbol || (plan.currency === 'INR' ? '₹' : '$')}</span>
                                        {plan.actualAmount}
                                      </span>
                                    )}
                                    <span className="block text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                                      <span className="text-3xl">{plan.currencySymbol || (plan.currency === 'INR' ? '₹' : '$')}</span>
                                      {plan.discountedAmount || plan.actualAmount}
                                    </span>
                                  </>
                                ) : (
                                  <span className="block mt-7 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                                    <span className="text-sm">{plan.currencySymbol || (plan.currency === 'INR' ? '₹' : '$')}</span>
                                    {plan.discountedAmount || plan.actualAmount}
                                  </span>
                                )}
                              </span>
                              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-6">
                                {plan.purchaseType === 'one-time' ? (
                                  <>One-time payment</>
                                ) : (
                                  <>
                                    per {plan.durationType === 'year' ? 'Month' : plan.durationType || 'Month'} (Billed {plan.durationType || 'monthly'})
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="w-full h-px bg-gray-100 dark:bg-gray-700 my-4"></div>
                          <div className="p-0 mt-4 pl-2 pr-4">
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                              {plan.type === 'paid' && (
                                <strong className="text-sm break-words w-80 block">
                                  Includes everything from Free Trial
                                </strong>
                              )}
                              {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                                  </div>
                                  <span className="text-sm">{typeof feature === 'string' ? feature : feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <CardFooter className="mt-6">
                          <Button
                            onClick={() => {
                              const purchaseUrl = plan.objectId
                                ? `https://purchase.hexmos.com/freedevtools/subscription/${plan.objectId}`
                                : PURCHASE_URL;
                              handlePurchaseClick(purchaseUrl);
                            }}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
                          >
                            Buy Now
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>
    );
  }

  if (!licence) {
    return (
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <Card className="w-full max-w-96 mx-auto dark:bg-slate-900">
          <CardHeader>
            <CardTitle>No Active Plan</CardTitle>
            <CardDescription>You don't have an active subscription</CardDescription>
          </CardHeader>
        </Card>

        {/* Show available plans below */}
        {isLoadingPlans ? (
          <div className="flex gap-4 w-full justify-center">
            <div className="w-80 h-96 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-xl animate-pulse" />
          </div>
        ) : availablePlans.length > 0 ? (
          <div>
            <div className="flex flex-col gap-4 mb-4">
              <h2 className="text-2xl font-semibold text-center">Available Plans</h2>
              <div className="flex justify-center">
                <div className="relative">
                  <button
                    ref={currencyButtonRef}
                    onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                    className="flex items-center justify-between gap-2 px-4 py-2 w-[200px] rounded-md border border-gray-300 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-all duration-200"
                    aria-label="Select currency"
                    aria-expanded={isCurrencyDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>{currencies.find(c => c.code === selectedCurrency)?.name || 'Select currency'}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isCurrencyDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isCurrencyDropdownOpen && (
                    <div
                      ref={currencyDropdownRef}
                      className="absolute right-0 mt-2 w-[200px] rounded-md border dark:border-gray-700 border-gray-300 bg-slate-50 dark:bg-slate-900 shadow-lg z-50"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <div className="py-1">
                        {currencies.map((currency) => (
                          <button
                            key={currency.code}
                            onClick={() => {
                              setSelectedCurrency(currency.code);
                              fetchAvailablePlans(currency.code);
                              setIsCurrencyDropdownOpen(false);
                            }}
                            className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${selectedCurrency === currency.code ? 'bg-gray-100 dark:bg-gray-700' : ''
                              }`}
                            role="menuitem"
                          >
                            <span>{currency.name}</span>
                            {selectedCurrency === currency.code && (
                              <Check className="h-4 w-4 ml-auto" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center w-full">
              {availablePlans.map((plan, index) => {
                // Parse features from description JSON string
                let features: string[] = [];
                if (plan.description) {
                  try {
                    features = JSON.parse(plan.description);
                  } catch (e) {
                    console.error('Failed to parse description:', e);
                  }
                }

                return (
                  <Card
                    key={plan.objectId || index}
                    className="flex-1 flex flex-col justify-between overflow-hidden max-w-96 border border-gray-200 dark:border-slate-800 dark:bg-slate-900 rounded-xl"
                  >
                    <div>
                      <div className="p-0 flex flex-col items-center max-w-96 rounded-xl">
                        <div className="text-sm my-3 text-center font-bold text-gray-700 dark:text-gray-300 font-mono tracking-wider">
                          {plan.name.toUpperCase().replace('FREEDEVTOOLS', '')}
                        </div>
                        {/* Divider line */}
                        <div className="w-full h-px bg-gray-100 dark:bg-gray-700 mb-4"></div>
                        <div className="text-l text-center">
                          <span className="block text-gray-500 dark:text-gray-400 text-xl">
                            {plan.purchaseType === 'one-time' ? (
                              <>
                                {plan.actualAmount && plan.discountedAmount && plan.actualAmount !== plan.discountedAmount && (
                                  <span className="line-through block text-gray-400 dark:text-gray-500 text-xl mb-1">
                                    <span className="text-xs">{plan.currencySymbol || (plan.currency === 'INR' ? '₹' : '$')}</span>
                                    {plan.actualAmount}
                                  </span>
                                )}
                                <span className="block text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                                  <span className="text-3xl">{plan.currencySymbol || (plan.currency === 'INR' ? '₹' : '$')}</span>
                                  {plan.discountedAmount || plan.actualAmount}
                                </span>
                              </>
                            ) : (
                              <span className="block mt-7 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                                <span className="text-sm">{plan.currencySymbol || (plan.currency === 'INR' ? '₹' : '$')}</span>
                                {plan.discountedAmount || plan.actualAmount}
                              </span>
                            )}
                          </span>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-6">
                            {plan.purchaseType === 'one-time' ? (
                              <>One-time payment</>
                            ) : (
                              <>
                                per {plan.durationType === 'year' ? 'Month' : plan.durationType || 'Month'} (Billed {plan.durationType || 'monthly'})
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 dark:bg-gray-700 my-4"></div>
                      <div className="p-0 mt-4 pl-2 pr-4">
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                          {plan.type === 'paid' && (
                            <strong className="text-sm break-words w-80 block">
                              Includes everything from Free Trial
                            </strong>
                          )}
                          {features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                              </div>
                              <span className="text-sm">{typeof feature === 'string' ? feature : feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <CardFooter className="mt-6">
                      <Button
                        onClick={() => {
                          const purchaseUrl = plan.objectId
                            ? `https://purchase.hexmos.com/freedevtools/subscription/${plan.objectId}`
                            : PURCHASE_URL;
                          window.location.href = purchaseUrl;
                        }}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
                      >
                        Buy Now
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl space-y-6">
      {/* Cancel Subscription Modal */}
      {cancelModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 dark:bg-slate-900">
            <CardHeader>
              <CardTitle>Cancel Subscription</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Are you sure you want to cancel your {licence.name} subscription?
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" onClick={() => setCancelModal(false)} className="flex-1">
                No
              </Button>
              <Button onClick={handleCancelSubscription} className="flex-1">
                Yes
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* Current Plan */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Current Plan</h2>
        <Card className="dark:bg-slate-900">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{licence.name}</CardTitle>
              {licence.activeStatus === true ? (
                <Badge variant="outline">Active</Badge>
              ) : (
                <Badge variant="destructive">Inactive</Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {licence.activeStatus === false && renewals.length === 0 && (
              <p className="text-sm text-green-700 dark:text-green-400 mb-4">
                <strong>Payment initiated, will reflect in the next 10 mins</strong>
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recurring Details (for paid plans) */}
      {licence.type === 'paid' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recurring Details</h2>
          <Card className="dark:bg-slate-900">
            <CardContent className="pt-6">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Subscription Fee</TableCell>
                    <TableCell>{licence.amount}.00/ month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Upcoming Payment On</TableCell>
                    <TableCell>{licence.expirationDate}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Purchase Platform</TableCell>
                    <TableCell>{licence.platform || 'N/A'}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {getCancelElement()}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Plan History (for paid plans with renewals) */}
      {licence.type === 'paid' && renewals.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Plan and Billing History</h2>
          <Card className="dark:bg-slate-900">
            <CardContent className="pt-6">
              <Table>
                <TableBody>
                  {renewals.map((renewal, index) => (
                    <TableRow key={index}>
                      <TableCell>{renewal.renewedOn}</TableCell>
                      <TableCell>{renewal.name}</TableCell>
                      <TableCell>{renewal.action}</TableCell>
                      <TableCell>{renewal.amount}</TableCell>
                      <TableCell>{renewal.platform}</TableCell>
                      <TableCell>{renewal.description}</TableCell>
                      <TableCell>
                        {customBodyTemplate({ receiptUrl: renewal.receiptUrl })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ShowPlans;

