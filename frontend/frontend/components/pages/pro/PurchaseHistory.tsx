import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { DownloadIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type {
  ActiveLicence,
  PurchasesData,
  LicenceDetailsInfo,
  LicenceRenewal,
} from '@/lib/api';

interface PurchaseHistoryProps {
  activeLicence?: ActiveLicence;
  purchasesData?: PurchasesData;
  licenceDetails?: LicenceDetailsInfo;
}

const PurchaseHistory: React.FC<PurchaseHistoryProps> = ({
  activeLicence,
  purchasesData,
  licenceDetails,
}) => {
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

  // Render active licence format
  if (activeLicence) {
    return (
      <div className="w-full max-w-4xl mx-auto space-y-6">
        {/* Active Licence */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Active Licence</h2>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <CardTitle>{activeLicence.name}</CardTitle>
                {activeLicence.activeStatus === true ||
                activeLicence.activeStatus === 'active' ? (
                  <Badge variant="outline">Active</Badge>
                ) : (
                  <Badge variant="destructive">Inactive</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 dark:text-gray-400">Status:</span>
                  <span
                    className={`font-medium px-3 py-1 rounded-full text-sm ${
                      activeLicence.activeStatus === true ||
                      activeLicence.activeStatus === 'active'
                        ? 'text-green-600 bg-green-50 dark:bg-green-900/20'
                        : 'text-red-600 bg-red-50 dark:bg-red-900/20'
                    }`}
                  >
                    {activeLicence.activeStatus === true ||
                    activeLicence.activeStatus === 'active'
                      ? 'Active'
                      : 'Inactive'}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 dark:text-gray-400">Platform:</span>
                  <span className="font-medium capitalize">{activeLicence.platform}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 dark:text-gray-400">Expiration Date:</span>
                  <span className="font-medium">
                    {activeLicence.expirationDate || 'N/A'}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 dark:text-gray-400">Expire At:</span>
                  <span className="font-medium">{activeLicence.expireAt || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 dark:text-gray-400">
                    Licence Plans Pointer:
                  </span>
                  <span className="font-mono text-sm">{activeLicence.licencePlansPointer}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 dark:text-gray-400">Licence ID:</span>
                  <span className="font-mono text-sm">{activeLicence.licenceId}</span>
                </div>
                {licenceDetails && (
                  <>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600 dark:text-gray-400">Type:</span>
                      <span className="font-medium capitalize">{licenceDetails.type}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600 dark:text-gray-400">
                        Number of Purchased:
                      </span>
                      <span className="font-medium">{licenceDetails.numberOfPurchased}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600 dark:text-gray-400">Number of Used:</span>
                      <span className="font-medium">{licenceDetails.numberOfUsed}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600 dark:text-gray-400">
                        Users Left to Attach:
                      </span>
                      <span className="font-medium">{licenceDetails.usersLeftToAttach}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600 dark:text-gray-400">Paid At:</span>
                      <span className="font-medium">
                        {licenceDetails.createdAt?.iso
                          ? (() => {
                              const date = new Date(licenceDetails.createdAt.iso);
                              const day = String(date.getDate()).padStart(2, '0');
                              const month = String(date.getMonth() + 1).padStart(2, '0');
                              const year = date.getFullYear();
                              const hours = String(date.getHours()).padStart(2, '0');
                              const minutes = String(date.getMinutes()).padStart(2, '0');
                              const seconds = String(date.getSeconds()).padStart(2, '0');
                              return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
                            })()
                          : 'N/A'}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Render purchases data format (renewal format)
  if (purchasesData) {
    return (
      <div className="w-full max-w-4xl mx-auto space-y-6">
        {/* Last Purchased Licence */}
        {purchasesData.lastPurchasedLicence && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Last Purchased Licence</h2>
            <Card>
              <CardHeader>
                <CardTitle>{purchasesData.lastPurchasedLicence.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Plan Name:</span>
                    <span className="font-medium">
                      {purchasesData.lastPurchasedLicence.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Amount:</span>
                    <span className="font-medium">
                      {purchasesData.lastPurchasedLicence.amount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                    <span className="font-medium">
                      {purchasesData.lastPurchasedLicence.noOfDays} days
                    </span>
                  </div>
                  {purchasesData.lastPurchasedLicence.expirationDate && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Expiration Date:
                      </span>
                      <span className="font-medium">
                        {purchasesData.lastPurchasedLicence.expirationDate}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Licence History */}
        {purchasesData.licenceHistory && purchasesData.licenceHistory.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Licence History</h2>
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableBody>
                    {purchasesData.licenceHistory.map((history, index) => (
                      <TableRow key={index}>
                        <TableCell>{history.renewedOn}</TableCell>
                        <TableCell>{history.name}</TableCell>
                        <TableCell>{history.action}</TableCell>
                        <TableCell>{history.amount}</TableCell>
                        <TableCell>{history.platform}</TableCell>
                        <TableCell>{history.description}</TableCell>
                        <TableCell>
                          {customBodyTemplate({ receiptUrl: history.receiptUrl })}
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
  }

  return null;
};

export default PurchaseHistory;

