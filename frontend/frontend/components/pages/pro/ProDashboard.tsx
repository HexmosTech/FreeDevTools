import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type {
    ActiveLicence,
    LicenceDetails,
    LicenceDetailsInfo,
    LicenceRenewal,
    PurchasesData
} from '@/lib/api';
import {
    AlertCircle,
    Calendar,
    CheckCircle2,
    Clock,
    CreditCard,
    DownloadIcon,
    ExternalLink,
    ShieldCheck
} from 'lucide-react';
import React, { useState } from 'react';

interface ProDashboardProps {
    licence: LicenceDetails;
    renewals: LicenceRenewal[];
    activeLicence?: ActiveLicence | null;
    licenceDetails?: LicenceDetailsInfo | null;
    purchasesData?: PurchasesData | null;
    onCancelSubscription: () => Promise<void>;
    handlePurchaseClick: (url: string) => void;
}

const ProDashboard: React.FC<ProDashboardProps> = ({
    licence,
    renewals,
    activeLicence,
    licenceDetails,
    purchasesData,
    onCancelSubscription,
    handlePurchaseClick,
}) => {
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [isCancelling, setIsCancelling] = useState(false);

    const isLifetime = !licence.expirationDate || licence.name.toLowerCase().includes('lifetime');

    const handleCancel = async () => {
        setIsCancelling(true);
        try {
            await onCancelSubscription();
        } finally {
            setIsCancelling(false);
            setIsCancelModalOpen(false);
        }
    };

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return 'N/A';
        try {
            const date = new Date(dateStr);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch {
            return dateStr;
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Cancel Modal */}
            {isCancelModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
                    <Card className="w-full max-w-md shadow-2xl border-red-100 dark:border-red-900/30 overflow-hidden">
                        <div className="h-2 bg-red-500" />
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-600">
                                <AlertCircle className="w-5 h-5" />
                                Cancel Subscription
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-2">
                            <p className="text-muted-foreground leading-relaxed">
                                Are you sure you want to cancel your <strong>{licence.name}</strong> subscription?
                                You will lose access to premium features once your current period ends.
                            </p>
                        </CardContent>
                        <CardFooter className="flex gap-3 pt-6">
                            <Button
                                variant="outline"
                                onClick={() => setIsCancelModalOpen(false)}
                                className="flex-1"
                                disabled={isCancelling}
                            >
                                Keep Plan
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={handleCancel}
                                className="flex-1"
                                disabled={isCancelling}
                            >
                                {isCancelling ? 'Processing...' : 'Yes, Cancel'}
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            )}

            {/* Hero Status Card */}
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-1 shadow-xl shadow-primary/5">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ShieldCheck className="w-32 h-32 text-primary" />
                </div>

                <div className="relative z-10 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <Badge variant={licence.activeStatus ? "default" : "destructive"} className="rounded-full px-3">
                                    {licence.activeStatus ? "Active Plan" : "Inactive"}
                                </Badge>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                                {licence.name}
                            </h1>
                            <p className="text-muted-foreground text-lg">
                                {isLifetime
                                    ? "Enjoy unlimited access to all developer tools forever."
                                    : `Your premium access is active until ${formatDate(licence.expirationDate)}.`}
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 min-w-[200px]">
                            {licence.activeStatus === false && renewals.length === 0 ? (
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30 p-4 rounded-2xl">
                                    <p className="text-sm text-yellow-800 dark:text-yellow-400 font-medium">
                                        Payment initiated, will reflect in the next 10 mins
                                    </p>
                                </div>
                            ) : (
                                <div className="p-4 bg-card border border-border rounded-2xl shadow-sm space-y-1">
                                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Plan Type</p>
                                    <p className="text-xl font-bold text-foreground flex items-center gap-2">
                                        {isLifetime ? "Lifetime" : "Subscription"}
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Billing Info */}
                <Card className="border-border/50 shadow-sm transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
                            <CreditCard className="w-4 h-4" />
                            Billing
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <p className="text-2xl font-bold">
                            {licence.amount === '0' || !licence.amount ? 'Free' : `${licence.amount}.00`}
                            <span className="text-sm font-normal text-muted-foreground ml-1">
                                {isLifetime ? 'Once' : '/ month'}
                            </span>
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                            via <span className="capitalize font-medium text-foreground">{licence.platform || 'System'}</span>
                        </p>
                    </CardContent>
                </Card>

                {/* Expiry Info */}
                <Card className="border-border/50 shadow-sm transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
                            <Clock className="w-4 h-4" />
                            {isLifetime ? "Started On" : "Renews On"}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <p className="text-2xl font-bold">
                            {isLifetime
                                ? (licenceDetails?.createdAt?.iso ? formatDate(licenceDetails.createdAt.iso) : 'Active')
                                : formatDate(licence.expirationDate)}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {isLifetime ? 'No expiration' : 'Automatic renewal'}
                        </p>
                    </CardContent>
                </Card>

                {/* Usage Info */}
                <Card className="border-border/50 shadow-sm transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
                            <AlertCircle className="w-4 h-4" />
                            Status
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${licence.activeStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                            <p className="text-2xl font-bold">
                                {licence.activeStatus ? 'Healthy' : 'Inactive'}
                            </p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            License ID: <span className="font-mono text-xs">{licence.licenceId}</span>
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Action Section */}
            {!isLifetime && licence.activeStatus && (
                <div className="flex justify-end pt-2">
                    {licence.platform === 'apple' ? (
                        <div className="bg-muted/50 p-4 rounded-xl border border-border flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground italic">
                                Manage or cancel this subscription through your App Store settings.
                            </p>
                        </div>
                    ) : (
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setIsCancelModalOpen(true)}
                            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 border-red-200 dark:border-red-900/30"
                        >
                            Manage Subscription
                        </Button>
                    )}
                </div>
            )}

            {/* Purchase New (If current is inactive or expired) */}
            {(!licence.activeStatus || (!isLifetime && new Date(licence.expirationDate) < new Date())) && (
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold">Plan Expired?</h3>
                        <p className="text-muted-foreground">Renew your access to continue using premium tools.</p>
                    </div>
                    <Button
                        size="lg"
                        className="px-8 shadow-lg shadow-primary/20"
                        onClick={() => handlePurchaseClick('https://purchase.hexmos.com/freedevtools/subscription')}
                    >
                        Renew Subscription
                    </Button>
                </div>
            )}

            {/* History Table */}
            {renewals.length > 0 && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            Billing History
                            <Badge variant="secondary" className="rounded-full">{renewals.length}</Badge>
                        </h2>
                    </div>
                    <Card className="border-border/50 shadow-sm overflow-hidden">
                        <Table>
                            <TableHeader className="bg-muted/50">
                                <TableRow>
                                    <TableHead className="w-[150px]">Date</TableHead>
                                    <TableHead>Plan</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Platform</TableHead>
                                    <TableHead className="text-right">Receipt</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {renewals.map((renewal, index) => (
                                    <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                                        <TableCell className="font-medium">{renewal.renewedOn}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span>{renewal.name}</span>
                                                <span className="text-xs text-muted-foreground">{renewal.description}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>{renewal.amount}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="capitalize text-[10px] h-5">
                                                {renewal.platform}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {renewal.receiptUrl ? (
                                                <a href={renewal.receiptUrl} target="_blank" rel="noopener noreferrer">
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-primary hover:text-primary hover:bg-primary/10">
                                                        <DownloadIcon className="w-4 h-4" />
                                                    </Button>
                                                </a>
                                            ) : (
                                                <span className="text-xs text-muted-foreground">N/A</span>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            )}

            {/* Footer Info */}
            <div className="flex flex-col items-center justify-center pt-8 space-y-4 opacity-70 hover:opacity-100 transition-opacity">
                <p className="text-xs text-center text-muted-foreground max-w-md">
                    Thank you for supporting Free DevTools. Your contribution helps us maintain and build more free resources for the developer community.
                </p>
            </div>
        </div>
    );
};

export default ProDashboard;
