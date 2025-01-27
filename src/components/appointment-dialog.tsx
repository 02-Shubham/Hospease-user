import React, { useState } from 'react'

interface FormErrors {
  doctor?: string;
  date?: string;
  time?: string;
  appointmentType?: string;
}

interface AppointmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: (formData: FormData) => void;
}
// // Mock data for appointments
// const appointments = [
//   { doctor: "Dr. Smith", dept: "Cardiology", time: "10:00 AM" },
//   { doctor: "Dr. Johnson", dept: "Pediatrics", time: "2:30 PM" },
//   { doctor: "Dr. Williams", dept: "Orthopedics", time: "4:15 PM" },
// ]

export function AppointmentDialog({ isOpen, onClose, onBookAppointment }: AppointmentDialogProps) {
  const [formErrors, setFormErrors] = useState<FormErrors>({})

  const validateForm = (formData: FormData): boolean => {
    const errors: FormErrors = {}
    
    if (!formData.get('doctor')) {
      errors.doctor = 'Please select a doctor'
    }
    if (!formData.get('date')) {
      errors.date = 'Please select a date'
    }
    if (!formData.get('time')) {
      errors.time = 'Please select a time'
    }
    if (!formData.get('appointmentType')) {
      errors.appointmentType = 'Please select an appointment type'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    
    if (validateForm(formData)) {
      onBookAppointment(formData)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Book New Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Doctor Name</label>
            <select 
              id="doctor" 
              name="doctor"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="">Select a doctor</option>
              <option value="dr-smith">Dr. Smith</option>
              <option value="dr-johnson">Dr. Johnson</option>
              <option value="dr-williams">Dr. Williams</option>
            </select>
            {formErrors.doctor && <p className="text-sm text-red-500 mt-1">{formErrors.doctor}</p>}
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input 
              type="date" 
              id="date" 
              name="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {formErrors.date && <p className="text-sm text-red-500 mt-1">{formErrors.date}</p>}
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input 
              type="time" 
              id="time" 
              name="time"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {formErrors.time && <p className="text-sm text-red-500 mt-1">{formErrors.time}</p>}
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">Appointment Type</span>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input 
                  id="routine" 
                  name="appointmentType" 
                  type="radio" 
                  value="routine"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="routine" className="ml-3 block text-sm font-medium text-gray-700">
                  Routine Checkup
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  id="emergency" 
                  name="appointmentType" 
                  type="radio" 
                  value="emergency"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="emergency" className="ml-3 block text-sm font-medium text-gray-700">
                  Emergency
                </label>
              </div>
            </div>
            {formErrors.appointmentType && <p className="text-sm text-red-500 mt-1">{formErrors.appointmentType}</p>}
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

