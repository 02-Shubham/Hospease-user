'use client'

import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'
import { AppointmentDialog } from './appointment-dialog'

// Mock data for appointments
const appointments = [
  { doctor: "Dr. Dhruv", dept: "Cardiology", time: "10:00 AM" },
  { doctor: "Dr. Vishal", dept: "Gynecologist", time: "2:30 PM" },
  { doctor: "Dr. Shivam", dept: "Orthopedics", time: "4:15 PM" },
  { doctor: "Dr. Sahil", dept: "Orthopedics", time: "4:15 PM" },
]

interface ToastProps {
  message: string;
  type: 'success' | 'error';
}

const Toast: React.FC<ToastProps> = ({ message, type }) => (
  <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-md text-white ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
    {message}
  </div>
)

export default function AppointmentBooking() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [toast, setToast] = useState<ToastProps | null>(null)

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  const handleBookAppointment = (formData: FormData) => {
    // Here you would typically handle the form submission,
    // e.g., sending data to an API
    console.log('Appointment booked!', Object.fromEntries(formData))
    setIsDialogOpen(false)
    setToast({ message: "Your appointment has been successfully booked.", type: 'success' })
  }

  return (
    <div className="bg-white rounded-lg max-w-7xl mx-auto px-6 mt-12 shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
      <div className="space-y-4">
        {appointments.map((apt) => (
          <div
            key={apt.time}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <Clock className="h-5 w-5 text-gray-400" />
              <div>
                <p className="font-medium">{apt.doctor}</p>
                <p className="text-sm text-gray-500">{apt.dept}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-blue-600">{apt.time}</p>
              <button className="text-sm text-gray-500 hover:text-red-600">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => setIsDialogOpen(true)}
        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Book New Appointment
      </button>

      <AppointmentDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onBookAppointment={handleBookAppointment}
      />

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  )
}

