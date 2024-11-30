import React from 'react';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const remittanceSchema = z.object({
  senderName: z.string().min(1, 'Sender name is required'),
  senderPhone: z.string().min(1, 'Sender phone is required'),
  recipientName: z.string().min(1, 'Recipient name is required'),
  recipientPhone: z.string().min(1, 'Recipient phone is required'),
  amount: z.string().min(1, 'Amount is required'),
  currency: z.string().min(1, 'Currency is required'),
  purpose: z.string().min(1, 'Purpose is required'),
});

type RemittanceFormData = z.infer<typeof remittanceSchema>;

interface NewRemittanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: RemittanceFormData) => void;
}

function NewRemittanceModal({ isOpen, onClose, onSubmit }: NewRemittanceModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RemittanceFormData>({
    resolver: zodResolver(remittanceSchema),
  });

  const onSubmitForm = (data: RemittanceFormData) => {
    onSubmit(data);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">New Remittance</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Sender Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    {...register('senderName')}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  {errors.senderName && (
                    <p className="text-red-500 text-sm mt-1">{errors.senderName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    {...register('senderPhone')}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  {errors.senderPhone && (
                    <p className="text-red-500 text-sm mt-1">{errors.senderPhone.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Recipient Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    {...register('recipientName')}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  {errors.recipientName && (
                    <p className="text-red-500 text-sm mt-1">{errors.recipientName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    {...register('recipientPhone')}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  {errors.recipientPhone && (
                    <p className="text-red-500 text-sm mt-1">{errors.recipientPhone.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount
              </label>
              <input
                {...register('amount')}
                type="number"
                step="0.01"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency
              </label>
              <select
                {...register('currency')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              {errors.currency && (
                <p className="text-red-500 text-sm mt-1">{errors.currency.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Purpose
              </label>
              <select
                {...register('purpose')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select purpose</option>
                <option value="Family Support">Family Support</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
              {errors.purpose && (
                <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              Create Remittance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewRemittanceModal;