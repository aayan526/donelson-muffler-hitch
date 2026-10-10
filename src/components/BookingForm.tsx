import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, AlertCircle, RotateCcw, MapPin, Phone, Car } from 'lucide-react';

interface BookingFormProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

interface ConfirmedBookingData {
  reservationCode: string;
  fullName: string;
  phone: string;
  email: string;
  vehicleFormatted: string;
  service: string;
  date: string;
  timeWindow: string;
  notes: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedService,
  onServiceChange,
}) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [service, setService] = useState(selectedService || 'Muffler Repair & Custom Exhaust');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeWindow, setTimeWindow] = useState('');
  const [notes, setNotes] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBookingData | null>(null);

  // Sync external service selection
  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!vehicleYear.trim()) newErrors.vehicleYear = 'Please select vehicle year';
    if (!vehicleMake.trim()) newErrors.vehicleMake = 'Vehicle make is required';
    if (!vehicleModel.trim()) newErrors.vehicleModel = 'Vehicle model is required';
    if (!preferredDate) newErrors.preferredDate = 'Please select a preferred date';
    if (!timeWindow.trim()) newErrors.timeWindow = 'Please select a time window';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const currentYear = new Date().getFullYear();
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    const code = `DMH-${currentYear}-${randomHex}`;

    // Explicit space formatting between year, make, and model: e.g. "2021 Ford F-150"
    const formattedVehicle = `${vehicleYear.trim()} ${vehicleMake.trim()} ${vehicleModel.trim()}`;

    setConfirmedBooking({
      reservationCode: code,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      vehicleFormatted: formattedVehicle,
      service,
      date: preferredDate,
      timeWindow,
      notes: notes.trim(),
    });
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setVehicleYear('');
    setVehicleMake('');
    setVehicleModel('');
    setPreferredDate('');
    setTimeWindow('');
    setNotes('');
    setErrors({});
  };

  return (
    <section
      id="booking"
      className="py-20 sm:py-28 bg-[#0A0A0B] border-b border-[#26262B] relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#17171A] border border-[#26262B] text-xs font-bold uppercase tracking-wider text-[#F5A524] mb-3">
            <span>Online Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
            Schedule Your Shop Visit.
          </h2>
          <p className="mt-3 text-base text-[#A1A1AA]">
            Reserve your lift slot at our Eddings Lane shop. We will inspect your vehicle on the lift and confirm final work before starting.
          </p>
        </div>

        {/* Confirmation Panel or Booking Form */}
        {confirmedBooking ? (
          <div className="p-8 sm:p-10 rounded-2xl bg-[#17171A] border border-[#F5A524]/60 shadow-[0_0_40px_rgba(245,165,36,0.15)] animate-fade-in text-[#F5F5F4]">
            
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#26262B]">
              <div className="w-14 h-14 rounded-2xl bg-[#F5A524]/10 border border-[#F5A524]/40 flex items-center justify-center text-[#F5A524] shrink-0">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5A524]">
                  Appointment Confirmed
                </span>
                <h3 className="text-2xl font-extrabold text-[#F5F5F4]">
                  Reservation Code: {confirmedBooking.reservationCode}
                </h3>
              </div>
            </div>

            {/* Summary Details */}
            <div className="space-y-4 text-sm bg-[#121214] p-6 rounded-xl border border-[#26262B] mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#26262B]/60 gap-1">
                <span className="text-[#A1A1AA]">Customer Name:</span>
                <span className="font-bold text-[#F5F5F4]">{confirmedBooking.fullName}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#26262B]/60 gap-1">
                <span className="text-[#A1A1AA]">Contact Phone:</span>
                <span className="font-bold text-[#F5F5F4] font-mono">{confirmedBooking.phone}</span>
              </div>

              {confirmedBooking.email && (
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#26262B]/60 gap-1">
                  <span className="text-[#A1A1AA]">Email:</span>
                  <span className="font-bold text-[#F5F5F4]">{confirmedBooking.email}</span>
                </div>
              )}

              {/* Vehicle line formatted with proper spacing: "2021 Ford F-150" */}
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#26262B]/60 gap-1">
                <span className="text-[#A1A1AA]">Vehicle:</span>
                <span className="font-bold text-[#F5A524] text-base">
                  {confirmedBooking.vehicleFormatted}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#26262B]/60 gap-1">
                <span className="text-[#A1A1AA]">Requested Service:</span>
                <span className="font-bold text-[#F5F5F4]">{confirmedBooking.service}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#26262B]/60 gap-1">
                <span className="text-[#A1A1AA]">Date &amp; Arrival Window:</span>
                <span className="font-bold text-[#F5F5F4]">
                  {`${confirmedBooking.date} (${confirmedBooking.timeWindow})`}
                </span>
              </div>

              {confirmedBooking.notes && (
                <div className="flex flex-col py-2 gap-1">
                  <span className="text-[#A1A1AA]">Driver Notes:</span>
                  <span className="text-[#F5F5F4] italic">"{confirmedBooking.notes}"</span>
                </div>
              )}
            </div>

            {/* Shop Directions Reminder */}
            <div className="p-4 rounded-xl bg-[#17171A] border border-[#26262B] mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-[#A1A1AA]">
                <MapPin className="w-5 h-5 text-[#F5A524] shrink-0" />
                <span>252 Eddings Ln, Nashville, TN 37214</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#A1A1AA]">
                <Phone className="w-5 h-5 text-[#F5A524] shrink-0" />
                <a href="tel:6158852058" className="text-[#F5A524] font-bold hover:underline">
                  615-885-2058
                </a>
              </div>
            </div>

            {/* Reset Button */}
            <div className="flex justify-end">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F5A524] hover:bg-[#FFB93D] text-[#0A0A0B] text-sm font-bold transition-all transform hover:scale-[1.02] cursor-pointer shadow-[0_0_20px_rgba(245,165,36,0.3)]"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Book another appointment</span>
              </button>
            </div>

          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-2xl bg-[#17171A] border border-[#26262B] shadow-2xl space-y-6"
            noValidate
          >
            {/* Row 1: Full Name, Phone, Email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Full Name <span className="text-[#F5A524]">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Jason Vance"
                  className={`w-full px-4 py-3 rounded-xl bg-[#121214] border text-sm text-[#F5F5F4] placeholder-zinc-600 focus:outline-none focus:border-[#F5A524] transition-colors ${
                    errors.fullName ? 'border-red-500' : 'border-[#26262B]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Phone Number <span className="text-[#F5A524]">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="615-555-0199"
                  className={`w-full px-4 py-3 rounded-xl bg-[#121214] border text-sm text-[#F5F5F4] placeholder-zinc-600 focus:outline-none focus:border-[#F5A524] transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-[#26262B]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jason@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#121214] border border-[#26262B] text-sm text-[#F5F5F4] placeholder-zinc-600 focus:outline-none focus:border-[#F5A524] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Vehicle Year (Select), Make*, Model* */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Vehicle Year <span className="text-[#F5A524]">*</span>
                </label>
                <select
                  value={vehicleYear}
                  onChange={(e) => setVehicleYear(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-[#121214] border text-sm text-[#F5F5F4] focus:outline-none focus:border-[#F5A524] transition-colors cursor-pointer ${
                    errors.vehicleYear ? 'border-red-500' : 'border-[#26262B]'
                  }`}
                >
                  <option value="">Select Year</option>
                  {Array.from({ length: 35 }, (_, i) => 2026 - i).map((yr) => (
                    <option key={yr} value={yr}>
                      {yr}
                    </option>
                  ))}
                </select>
                {errors.vehicleYear && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.vehicleYear}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Vehicle Make <span className="text-[#F5A524]">*</span>
                </label>
                <input
                  type="text"
                  value={vehicleMake}
                  onChange={(e) => setVehicleMake(e.target.value)}
                  placeholder="e.g. Ford, Chevrolet, Toyota"
                  className={`w-full px-4 py-3 rounded-xl bg-[#121214] border text-sm text-[#F5F5F4] placeholder-zinc-600 focus:outline-none focus:border-[#F5A524] transition-colors ${
                    errors.vehicleMake ? 'border-red-500' : 'border-[#26262B]'
                  }`}
                />
                {errors.vehicleMake && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.vehicleMake}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Vehicle Model <span className="text-[#F5A524]">*</span>
                </label>
                <input
                  type="text"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  placeholder="e.g. F-150, Silverado, Camry"
                  className={`w-full px-4 py-3 rounded-xl bg-[#121214] border text-sm text-[#F5F5F4] placeholder-zinc-600 focus:outline-none focus:border-[#F5A524] transition-colors ${
                    errors.vehicleModel ? 'border-red-500' : 'border-[#26262B]'
                  }`}
                />
                {errors.vehicleModel && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.vehicleModel}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: Service (Select), Preferred Date*, Time Window (Select) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Service Needed <span className="text-[#F5A524]">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    onServiceChange(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-[#121214] border border-[#26262B] text-sm text-[#F5F5F4] focus:outline-none focus:border-[#F5A524] transition-colors cursor-pointer"
                >
                  <option value="Muffler Repair & Custom Exhaust">Muffler Repair &amp; Custom Exhaust</option>
                  <option value="Complete Brake & Rotor Service">Complete Brake &amp; Rotor Service</option>
                  <option value="Trailer Hitch & Towing">Trailer Hitch &amp; Towing</option>
                  <option value="Catalytic Converters & Emissions">Catalytic Converters &amp; Emissions</option>
                  <option value="Undercarriage & Visual Inspection">Free Undercarriage Inspection</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Preferred Date <span className="text-[#F5A524]">*</span>
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-[#121214] border text-sm text-[#F5F5F4] focus:outline-none focus:border-[#F5A524] transition-colors cursor-pointer ${
                    errors.preferredDate ? 'border-red-500' : 'border-[#26262B]'
                  }`}
                />
                {errors.preferredDate && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Time Window <span className="text-[#F5A524]">*</span>
                </label>
                <select
                  value={timeWindow}
                  onChange={(e) => setTimeWindow(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-[#121214] border text-sm text-[#F5F5F4] focus:outline-none focus:border-[#F5A524] transition-colors cursor-pointer ${
                    errors.timeWindow ? 'border-red-500' : 'border-[#26262B]'
                  }`}
                >
                  <option value="">Select Arrival Window</option>
                  <option value="Morning 7:30–9:30 AM">Morning 7:30–9:30 AM</option>
                  <option value="Mid-day 10 AM–1 PM">Mid-day 10 AM–1 PM</option>
                  <option value="Afternoon 1–4 PM">Afternoon 1–4 PM</option>
                  <option value="Saturday 8 AM–1 PM">Saturday 8 AM–1 PM</option>
                </select>
                {errors.timeWindow && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.timeWindow}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 4: Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                Vehicle Symptoms, Towing Specs, or Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="e.g. Grinding noise when braking from highway speeds, or hauling a 22ft boat to Percy Priest..."
                className="w-full px-4 py-3 rounded-xl bg-[#121214] border border-[#26262B] text-sm text-[#F5F5F4] placeholder-zinc-600 focus:outline-none focus:border-[#F5A524] transition-colors"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#A1A1AA]">
                <strong className="text-[#F5F5F4]">No upfront payment</strong> · In-person visual check before any work
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold bg-[#F5A524] hover:bg-[#FFB93D] text-[#0A0A0B] transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(245,165,36,0.3)] cursor-pointer focus:outline-none"
              >
                Confirm Appointment Request
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
